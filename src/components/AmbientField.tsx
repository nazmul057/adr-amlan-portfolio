import React, { useEffect, useRef } from 'react';

/**
 * Ambient background field.
 *
 * A drifting node graph that folds into a double helix along one diagonal
 * band. Light pulses random-walk the graph; a pulse arriving at either end of
 * the helix becomes a read head that runs along the backbone and flashes the
 * base-pair rungs in sequence before rejoining the mesh.
 *
 * Drawn on a single canvas inside the fixed `.ambient` layer, so it renders
 * identically on every route. The pointer only adds depth (parallax) and local
 * emphasis — deliberately nothing glows under the cursor.
 */

/* ---------- tuning ------------------------------------------ */

const LATTICE = 128; // mesh spacing on desktop; 2x the .ambient__grid step
const LATTICE_NARROW = 84; // ...and on a phone, so the grid still has columns
const JITTER_RATIO = 0.09; // small, so the lattice still reads as a grid
const LINK_RATIO = 1.5; // cap for an orthogonal neighbour link
const DIAG_RATIO = 1.95; // cap for the occasional diagonal brace
const DIAG_CHANCE = 0.16; // how often a cell braces itself diagonally
const MAX_DEGREE = 4;

const SAMPLES = 112; // points along the helix axis
const TURNS = 5;
const AMPLITUDE = 65; // half-width of the ribbon; must stay under the corridor
const RUNG_EVERY = 4; // one base pair every N samples
const CORRIDOR_RATIO = 0.85; // mesh nodes this much of a step from the axis are dropped
const PHASE_SPEED = 0.15; // rad/s -> one full turn ~42s
const JOINS_PER_END = 4;

const PULSE_MIN = 70; // px/s
const PULSE_MAX = 110;
const TRAIL = 26;
const HELIX_SPEED = 0.07; // axis fractions per second
const HEAD_REACH = 7; // samples either side of the read head that light up
const GLOW_DECAY = 1.6; // per second
const ENTER_CHANCE = 0.18; // per door; there are 8 of them

const STRAND_WIDTH = 1.7; // backbone line weight at the back of the turn
const STRAND_DEPTH_WIDTH = 1.3; // ...plus this much at the front
const RUNG_WIDTH = 1.5;

const CURSOR_REACH = 230;
const EDGE_LIFT = 2.4; // how much the pointer brightens nearby edges
const NODE_LIFT = 2.6; // ...nodes
const HELIX_LIFT = 2; // ...strands and rungs
const PARALLAX_X = -14;
const PARALLAX_Y = -10;
const HELIX_DEPTH = 1.6;

const EDGE_ALPHA = 0.14;
const BUCKETS = 6;
const MAX_DPR = 2;

/* ---------- types ------------------------------------------- */

interface FieldNode {
  x: number;
  y: number;
  r: number;
  a: number;
  edges: number[];
}

interface FieldEdge {
  a: number;
  b: number;
}

interface Axis {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  /** unit normal, used to offset the strands sideways */
  nx: number;
  ny: number;
}

interface Join {
  node: number;
  t: number;
  strand: 0 | 1;
}

interface Portal {
  node: number;
  /** 0 = start of the axis, 1 = far end */
  end: 0 | 1;
}

interface Field {
  nodes: FieldNode[];
  edges: FieldEdge[];
  axis: Axis;
  /** mesh nodes where a pulse can enter the helix */
  portals: Portal[];
  /** where a read head rejoins the mesh, one node per end */
  exits: [number, number];
  joins: Join[];
  rungs: number;
}

interface Pulse {
  /** edge index, or -1 while running along the helix */
  edge: number;
  from: number;
  t: number;
  speed: number;
  /** position along the helix axis, 0..1 */
  s: number;
  dir: 1 | -1;
  strand: 0 | 1;
  helix: boolean;
}

/* ---------- helpers ----------------------------------------- */

/** Small deterministic PRNG, so the layout is stable across reloads. */
function mulberry32(seed: number) {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(hex: string, fallback: [number, number, number]): [number, number, number] {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return fallback;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Palette stays single-sourced in the @theme block of index.css. */
function readPalette() {
  const root = typeof window === 'undefined' ? null : getComputedStyle(document.documentElement);
  const rgb = (token: string, fallback: [number, number, number]) => {
    const c = hexToRgb(root?.getPropertyValue(token) ?? '', fallback);
    return `${c[0]}, ${c[1]}, ${c[2]}`;
  };
  return {
    /** structural purple for the mesh */
    mesh: rgb('--color-primary-soft', [168, 85, 247]),
    /** magenta traffic running the mesh */
    pulse: rgb('--color-accent', [232, 121, 249]),
    /** cool green for the strands and rungs */
    helix: rgb('--color-helix', [45, 212, 191]),
    /** brighter mint for the read head */
    helixPulse: rgb('--color-helix-soft', [153, 246, 228])
  };
}

function buildField(width: number, height: number, step: number): Field {
  const rnd = mulberry32(0x5eed1a);

  const jitter = step * JITTER_RATIO;
  const corridor = step * CORRIDOR_RATIO;
  const linkDist = step * LINK_RATIO;
  const diagDist = step * DIAG_RATIO;

  const x0 = -0.08 * width;
  const y0 = 0.78 * height;
  const x1 = 1.08 * width;
  const y1 = 0.14 * height;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const axis: Axis = { x0, y0, x1, y1, nx: -dy / len, ny: dx / len };

  // Perpendicular distance from the helix axis.
  const offAxis = (px: number, py: number) => Math.abs((px - x0) * axis.nx + (py - y0) * axis.ny);

  const nodes: FieldNode[] = [];
  /** lattice cell "gx,gy" -> node index, so edges can follow the grid */
  const cells = new Map<string, number>();
  const cols = Math.ceil(width / step) + 2;
  const rows = Math.ceil(height / step) + 2;

  for (let gy = -1; gy < rows; gy++) {
    for (let gx = -1; gx < cols; gx++) {
      const jx = (rnd() * 2 - 1) * jitter;
      const jy = (rnd() * 2 - 1) * jitter;
      const px = gx * step + jx;
      const py = gy * step + jy;

      if (px < -40 || px > width + 40 || py < -40 || py > height + 40) continue;
      if (offAxis(px, py) < corridor) continue;

      cells.set(`${gx},${gy}`, nodes.length);
      nodes.push({
        x: px,
        y: py,
        r: 1.2 + rnd() * 0.9,
        a: 0.17 + rnd() * 0.1,
        edges: []
      });
    }
  }

  // Edges follow the lattice — right and down to the next cell, plus the
  // occasional diagonal brace. That keeps the graph legibly grid-like; the
  // randomness lives in the jitter, the dropped cells and the braces rather
  // than in the connections themselves.
  const edges: FieldEdge[] = [];

  const link = (a: number, b: number, limit: number) => {
    if (a === b) return;
    if (nodes[a].edges.length >= MAX_DEGREE || nodes[b].edges.length >= MAX_DEGREE) return;
    if (Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y) > limit) return;
    const index = edges.length;
    edges.push({ a, b });
    nodes[a].edges.push(index);
    nodes[b].edges.push(index);
  };

  for (let gy = -1; gy < rows; gy++) {
    for (let gx = -1; gx < cols; gx++) {
      const self = cells.get(`${gx},${gy}`);
      if (self === undefined) continue;

      const right = cells.get(`${gx + 1},${gy}`);
      if (right !== undefined) link(self, right, linkDist);

      const down = cells.get(`${gx},${gy + 1}`);
      if (down !== undefined) link(self, down, linkDist);

      if (rnd() < DIAG_CHANCE) {
        const diag = cells.get(`${gx + 1},${gy + 1}`);
        if (diag !== undefined) link(self, diag, diagDist);
      }
    }
  }

  // The nodes closest to each end of the corridor become its entry points,
  // and a few neighbours get drawn into the strands so the graph visibly
  // continues through the helix instead of merely overlapping it.
  const nearest = (t: number, count: number) => {
    const ax = x0 + dx * t;
    const ay = y0 + dy * t;
    return nodes
      .map((n, i) => ({ i, d: Math.hypot(n.x - ax, n.y - ay) }))
      .sort((p, q) => p.d - q.d)
      .slice(0, count)
      .map((e) => e.i);
  };

  const head = nearest(0.08, JOINS_PER_END);
  const tail = nearest(0.92, JOINS_PER_END);

  const joins: Join[] = [];
  head.forEach((node, k) => joins.push({ node, t: 0.06 + k * 0.012, strand: (k % 2) as 0 | 1 }));
  tail.forEach((node, k) => joins.push({ node, t: 0.94 - k * 0.012, strand: (k % 2) as 0 | 1 }));

  const portals: Portal[] = [
    ...head.map((node) => ({ node, end: 0 as const })),
    ...tail.map((node) => ({ node, end: 1 as const }))
  ];

  return {
    nodes,
    edges,
    axis,
    portals,
    exits: [head[0] ?? 0, tail[0] ?? 0],
    joins,
    rungs: Math.floor(SAMPLES / RUNG_EVERY)
  };
}

function strandPoint(axis: Axis, t: number, phase: number, strand: 0 | 1) {
  const angle = t * TURNS * Math.PI * 2 + phase + (strand ? Math.PI : 0);
  const sin = Math.sin(angle);
  const off = sin * AMPLITUDE;
  return {
    x: axis.x0 + (axis.x1 - axis.x0) * t + axis.nx * off,
    y: axis.y0 + (axis.y1 - axis.y0) * t + axis.ny * off,
    /** +1 toward the viewer, -1 away */
    depth: Math.cos(angle),
    spread: Math.abs(sin)
  };
}

const AmbientField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const palette = readPalette();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = window.matchMedia('(hover: none)');

    let field = buildField(1, 1, LATTICE);
    let glow = new Float32Array(0);
    let weight = new Float32Array(0);
    let pulses: Pulse[] = [];
    let phase = 0;
    let frame = 0;
    let last = 0;
    let resizeTimer = 0;
    let width = 0;
    let height = 0;

    const buckets: number[][] = Array.from({ length: BUCKETS }, () => []);
    const pointer = { x: 0, y: 0, sx: 0, sy: 0, has: false };

    const still = () => motion.matches;
    const light = () => coarse.matches || canvas.clientWidth < 640;

    const spawn = () => {
      const count = still() ? 0 : light() ? 1 : 3;
      pulses = [];
      if (!field.edges.length) return;

      for (let i = 0; i < count; i++) {
        const edge = Math.floor(Math.random() * field.edges.length);
        pulses.push({
          edge,
          from: field.edges[edge].a,
          t: Math.random(),
          speed: PULSE_MIN + Math.random() * (PULSE_MAX - PULSE_MIN),
          s: 0,
          dir: 1,
          strand: 0,
          helix: false
        });
      }
    };

    const measure = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (width === 0 || height === 0) return false;

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      field = buildField(width, height, light() ? LATTICE_NARROW : LATTICE);
      glow = new Float32Array(field.rungs);
      weight = new Float32Array(field.nodes.length);
      spawn();
      return true;
    };

    /* ---------- simulation ---------- */

    const advance = (dt: number) => {
      phase += dt * PHASE_SPEED;

      for (let i = 0; i < glow.length; i++) {
        glow[i] = Math.max(0, glow[i] - dt * GLOW_DECAY);
      }

      for (const p of pulses) {
        if (p.helix) {
          p.s += p.dir * HELIX_SPEED * dt;

          const headIndex = p.s * (SAMPLES - 1);
          for (let i = 0; i < glow.length; i++) {
            if (Math.abs(i * RUNG_EVERY - headIndex) < HEAD_REACH) glow[i] = 1;
          }

          if (p.s <= 0 || p.s >= 1) {
            // Rejoin the mesh at whichever end it reached.
            const node = field.exits[p.s <= 0 ? 0 : 1];
            const edges = field.nodes[node]?.edges ?? [];
            p.helix = false;
            p.s = Math.min(1, Math.max(0, p.s));
            if (!edges.length) continue;
            p.edge = edges[Math.floor(Math.random() * edges.length)];
            p.from = node;
            p.t = 0;
          }
          continue;
        }

        const edge = field.edges[p.edge];
        if (!edge) continue;

        const to = edge.a === p.from ? edge.b : edge.a;
        const span = Math.hypot(
          field.nodes[to].x - field.nodes[p.from].x,
          field.nodes[to].y - field.nodes[p.from].y
        );
        p.t += (p.speed * dt) / (span || 1);
        if (p.t < 1) continue;

        // Arrived: take the helix if this node is a door, otherwise walk on.
        p.t = 0;
        // One read head at a time, so the sweep stays an event.
        const door = pulses.some((other) => other.helix)
          ? undefined
          : field.portals.find((portal) => portal.node === to);
        if (door && Math.random() < ENTER_CHANCE) {
          p.helix = true;
          p.s = door.end === 0 ? 0 : 1;
          p.dir = door.end === 0 ? 1 : -1;
          p.strand = Math.random() < 0.5 ? 0 : 1;
          continue;
        }

        const options = field.nodes[to].edges.filter((e) => e !== p.edge);
        const next = options.length
          ? options[Math.floor(Math.random() * options.length)]
          : p.edge;
        p.edge = next;
        p.from = to;
      }
    };

    /* ---------- drawing ---------- */

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const interactive = !still() && !light() && pointer.has;
      const px = interactive ? pointer.sx : width / 2;
      const py = interactive ? pointer.sy : height / 2;

      const meshX = interactive ? (px / width - 0.5) * PARALLAX_X : 0;
      const meshY = interactive ? (py / height - 0.5) * PARALLAX_Y : 0;
      const helixX = meshX * HELIX_DEPTH;
      const helixY = meshY * HELIX_DEPTH;

      /** Pointer emphasis for a point drawn in a layer shifted by (ox, oy). */
      const emphasisAt = (x: number, y: number, ox: number, oy: number) => {
        if (!interactive) return 0;
        const d = Math.hypot(x + ox - px, y + oy - py);
        return d > CURSOR_REACH ? 0 : 1 - d / CURSOR_REACH;
      };

      for (let i = 0; i < field.nodes.length; i++) {
        weight[i] = emphasisAt(field.nodes[i].x, field.nodes[i].y, meshX, meshY);
      }

      /* --- mesh layer --- */
      ctx.save();
      ctx.translate(meshX, meshY);

      for (const list of buckets) list.length = 0;
      for (let i = 0; i < field.edges.length; i++) {
        const e = field.edges[i];
        const boost = Math.max(weight[e.a], weight[e.b]);
        const bucket = Math.min(BUCKETS - 1, Math.round(boost * (BUCKETS - 1)));
        buckets[bucket].push(i);
      }

      ctx.lineWidth = 1;
      for (let b = 0; b < BUCKETS; b++) {
        const list = buckets[b];
        if (!list.length) continue;
        ctx.strokeStyle = `rgba(${palette.mesh}, ${(
          EDGE_ALPHA * (1 + (EDGE_LIFT * b) / (BUCKETS - 1))
        ).toFixed(3)})`;
        ctx.beginPath();
        for (const index of list) {
          const e = field.edges[index];
          ctx.moveTo(field.nodes[e.a].x, field.nodes[e.a].y);
          ctx.lineTo(field.nodes[e.b].x, field.nodes[e.b].y);
        }
        ctx.stroke();
      }

      for (let i = 0; i < field.nodes.length; i++) {
        const n = field.nodes[i];
        const w = weight[i];
        ctx.fillStyle = `rgba(${palette.mesh}, ${(n.a * (1 + NODE_LIFT * w)).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (1 + 0.9 * w), 0, Math.PI * 2);
        ctx.fill();
      }

      for (const p of pulses) {
        if (p.helix) continue;
        const e = field.edges[p.edge];
        if (!e) continue;
        const to = e.a === p.from ? e.b : e.a;
        const from = field.nodes[p.from];
        const head = field.nodes[to];
        const hx = from.x + (head.x - from.x) * p.t;
        const hy = from.y + (head.y - from.y) * p.t;
        const span = Math.hypot(head.x - from.x, head.y - from.y) || 1;
        const back = Math.min(TRAIL, span * p.t) / span;

        const grad = ctx.createLinearGradient(
          hx - (head.x - from.x) * back,
          hy - (head.y - from.y) * back,
          hx,
          hy
        );
        grad.addColorStop(0, `rgba(${palette.pulse}, 0)`);
        grad.addColorStop(1, `rgba(${palette.pulse}, 0.65)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(hx - (head.x - from.x) * back, hy - (head.y - from.y) * back);
        ctx.lineTo(hx, hy);
        ctx.stroke();

        ctx.fillStyle = `rgba(${palette.pulse}, 0.85)`;
        ctx.beginPath();
        ctx.arc(hx, hy, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      /* --- helix layer, one step nearer the viewer --- */
      ctx.save();
      ctx.translate(helixX, helixY);

      const axis = field.axis;

      // Rungs: brighter where the strands are widest apart, and lit by a
      // passing read head.
      for (let i = 0; i < field.rungs; i++) {
        const t = (i * RUNG_EVERY) / (SAMPLES - 1);
        const a0 = strandPoint(axis, t, phase, 0);
        const a1 = strandPoint(axis, t, phase, 1);
        const lift = emphasisAt((a0.x + a1.x) / 2, (a0.y + a1.y) / 2, helixX, helixY);
        const base = 0.095 * (0.35 + 0.65 * a0.spread) * (1 + HELIX_LIFT * lift);
        const alpha = Math.min(0.55, base + glow[i] * 0.5);
        ctx.strokeStyle = `rgba(${palette.helix}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = RUNG_WIDTH;
        ctx.beginPath();
        ctx.moveTo(a0.x, a0.y);
        ctx.lineTo(a1.x, a1.y);
        ctx.stroke();
      }

      for (const strand of [0, 1] as const) {
        for (let i = 0; i < SAMPLES - 1; i++) {
          const t = i / (SAMPLES - 1);
          const a = strandPoint(axis, t, phase, strand);
          const b = strandPoint(axis, (i + 1) / (SAMPLES - 1), phase, strand);
          const near = (a.depth + 1) / 2;
          const lift = emphasisAt(a.x, a.y, helixX, helixY);
          ctx.strokeStyle = `rgba(${palette.helix}, ${(
            (0.09 + near * 0.17) * (1 + HELIX_LIFT * lift)
          ).toFixed(3)})`;
          ctx.lineWidth = STRAND_WIDTH + near * STRAND_DEPTH_WIDTH;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          ctx.fillStyle = `rgba(${palette.helix}, ${(
            (0.1 + near * 0.14) * (1 + HELIX_LIFT * lift)
          ).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(a.x, a.y, 1.5 + near * 1.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Joins drawn here, with the mesh nodes shifted into this layer's frame.
      const shiftX = meshX - helixX;
      const shiftY = meshY - helixY;
      ctx.lineWidth = 1;
      for (const join of field.joins) {
        const node = field.nodes[join.node];
        if (!node) continue;
        const anchor = strandPoint(axis, join.t, phase, join.strand);
        const nx = node.x + shiftX;
        const ny = node.y + shiftY;
        const seam = ctx.createLinearGradient(nx, ny, anchor.x, anchor.y);
        seam.addColorStop(0, `rgba(${palette.mesh}, 0.11)`);
        seam.addColorStop(1, `rgba(${palette.helix}, 0.11)`);
        ctx.strokeStyle = seam;
        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.lineTo(anchor.x, anchor.y);
        ctx.stroke();
      }

      for (const p of pulses) {
        if (!p.helix) continue;
        const head = strandPoint(axis, p.s, phase, p.strand);
        const tailT = Math.min(1, Math.max(0, p.s - p.dir * 0.02));
        const tail = strandPoint(axis, tailT, phase, p.strand);

        const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
        grad.addColorStop(0, `rgba(${palette.helixPulse}, 0)`);
        grad.addColorStop(1, `rgba(${palette.helixPulse}, 0.7)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.lineTo(head.x, head.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${palette.helixPulse}, 0.9)`;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    /* ---------- loop ---------- */

    let interactivePointer = false;
    let retries = 0;

    const tick = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;

      if (interactivePointer) {
        pointer.sx += (pointer.x - pointer.sx) * 0.08;
        pointer.sy += (pointer.y - pointer.sy) * 0.08;
      }

      advance(dt);
      draw();
      frame = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (!pointer.has) {
        pointer.sx = event.clientX;
        pointer.sy = event.clientY;
        pointer.has = true;
      }
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
    };

    const start = () => {
      stop();

      if (!measure()) {
        // Layout has not settled yet; look again next frame, but do not spin
        // forever if the layer is genuinely hidden.
        if (retries++ < 60) frame = window.requestAnimationFrame(() => start());
        return;
      }
      retries = 0;

      if (still()) {
        draw(); // one static frame
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    const syncPointer = () => {
      const wanted = !still() && !light();
      if (wanted === interactivePointer) return;
      interactivePointer = wanted;
      if (wanted) {
        window.addEventListener('pointermove', onPointerMove, { passive: true });
      } else {
        window.removeEventListener('pointermove', onPointerMove);
        pointer.has = false;
      }
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        syncPointer();
        start();
      }, 150);
    };

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else if (!still()) {
        last = 0;
        frame = window.requestAnimationFrame(tick);
      }
    };

    const onPreference = () => {
      syncPointer();
      start();
    };

    syncPointer();
    start();

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    motion.addEventListener('change', onPreference);
    coarse.addEventListener('change', onPreference);

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
      motion.removeEventListener('change', onPreference);
      coarse.removeEventListener('change', onPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient__field" />;
};

export default AmbientField;
