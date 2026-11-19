import React from 'react';
import type { ProjectArtKey } from '../types';

/* ============================================================
   Vector artwork for the project cards.
   Schematic / blueprint language, drawn to the site palette.

   NOTE: a CSS `transform` animation overrides an SVG `transform`
   attribute on the same element, so any animated group is nested
   inside a plain group that carries the positioning.
   ============================================================ */

const P = '#a855f7'; // primary soft
const A = '#e879f9'; // accent
const D = '#7f13ec'; // primary
const FAINT = 'rgba(255,255,255,0.18)';
const MONO = 'JetBrains Mono, ui-monospace, monospace';

type ArtProps = { id: string };

const len = (n: number) => ({ ['--len' as string]: n } as React.CSSProperties);

/** Shared blueprint grid + soft glow backdrop */
const Grid: React.FC<ArtProps> = ({ id }) => (
  <>
    <defs>
      <pattern id={`${id}-grid`} width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M16 0H0V16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      </pattern>
      <radialGradient id={`${id}-glow`} cx="50%" cy="38%" r="62%">
        <stop offset="0%" stopColor={D} stopOpacity="0.42" />
        <stop offset="100%" stopColor={D} stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={P} />
        <stop offset="100%" stopColor={A} />
      </linearGradient>
    </defs>
    <rect width="320" height="200" fill={`url(#${id}-grid)`} />
    <rect width="320" height="200" fill={`url(#${id}-glow)`} />
  </>
);

const Svg: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 320 200" role="presentation" focusable="false">
    {children}
  </svg>
);

const ECG_PATH =
  'M18 74 H54 l8 0 l6 -26 l7 50 l7 -40 l6 16 H128 l8 0 l6 -26 l7 50 l7 -40 l6 16 H242 l8 0 l6 -26 l7 50 l7 -40 l6 16 H302';

/* ---------------- 1. ECG backend ---------------- */
const EcgArt: React.FC<ArtProps> = ({ id }) => (
  <Svg>
    <Grid id={id} />
    <path d="M18 74 H302" stroke={FAINT} strokeWidth="1" strokeDasharray="3 5" />
    <path
      d={ECG_PATH}
      fill="none"
      stroke={`url(#${id}-stroke)`}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="art-draw"
      style={len(620)}
    />
    <path
      d={ECG_PATH}
      fill="none"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="art-trace"
      opacity="0.85"
    />
    {[98, 160, 222].map((x, i) => (
      <path
        key={x}
        d={`M${x} 96 V116`}
        stroke={P}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
        className="art-pulse"
        style={{ animationDelay: `${i * 0.18}s` }}
      />
    ))}
    <g transform="translate(118,124)">
      {[0, 14, 28].map((dy, i) => (
        <g key={dy} opacity={1 - i * 0.18}>
          <ellipse cx="42" cy={dy + 8} rx="42" ry="9" fill="none" stroke={P} strokeWidth="1.75" />
          <path d={`M0 ${dy + 8} V${dy + 16}`} stroke={P} strokeWidth="1.75" strokeLinecap="round" />
          <path d={`M84 ${dy + 8} V${dy + 16}`} stroke={P} strokeWidth="1.75" strokeLinecap="round" />
        </g>
      ))}
    </g>
  </Svg>
);

/* ---------------- 2. NCV ---------------- */
const NcvArt: React.FC<ArtProps> = ({ id }) => (
  <Svg>
    <Grid id={id} />
    {/* stimulating electrode */}
    <g>
      <rect x="20" y="76" width="28" height="46" rx="5" fill="none" stroke={P} strokeWidth="2" />
      <path d="M34 76 V60" stroke={P} strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="56" r="4" fill={A} className="art-pulse" />
      <path d="M28 99 h12 M34 93 v12" stroke={A} strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* nerve fibre */}
    <path d="M48 99 H270" stroke={FAINT} strokeWidth="6" strokeLinecap="round" />
    {[60, 95, 130, 165, 200, 235].map((x) => (
      <rect
        key={x}
        x={x}
        y="91"
        width="27"
        height="16"
        rx="8"
        fill="none"
        stroke={P}
        strokeWidth="1.75"
        opacity="0.85"
      />
    ))}
    <path
      d="M48 99 H270"
      stroke={A}
      strokeWidth="5"
      strokeLinecap="round"
      className="art-trace"
      opacity="0.95"
    />

    {/* recording electrode */}
    <g>
      <rect x="272" y="76" width="28" height="46" rx="5" fill="none" stroke={P} strokeWidth="2" />
      <path d="M286 76 V60" stroke={P} strokeWidth="2" strokeLinecap="round" />
      <circle cx="286" cy="56" r="4" fill={A} />
    </g>

    {/* latency bracket */}
    <path d="M48 146 H270" stroke={FAINT} strokeWidth="1" />
    <path d="M48 140 V152 M270 140 V152" stroke={FAINT} strokeWidth="1" />
    <text x="159" y="172" textAnchor="middle" fill={P} fontSize="12" fontFamily={MONO} opacity="0.8">
      {'Δt → velocity'}
    </text>
  </Svg>
);

/* ---------------- 3. Health records ---------------- */
const RecordsArt: React.FC<ArtProps> = ({ id }) => (
  <Svg>
    <Grid id={id} />

    {/* stacked record cards */}
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(${26 + i * 9}, ${104 - i * 26})`} opacity={0.5 + i * 0.25}>
        <rect
          width="132"
          height="42"
          rx="7"
          fill="rgba(127,19,236,0.12)"
          stroke={P}
          strokeWidth="1.75"
        />
        <circle cx="23" cy="21" r="9" fill="none" stroke={A} strokeWidth="1.5" />
        <path d="M44 15 H114 M44 27 H96" stroke={P} strokeWidth="1.75" strokeLinecap="round" />
      </g>
    ))}

    {/* link from records to shield */}
    <path
      d="M176 100 H206"
      stroke={P}
      strokeWidth="1.5"
      strokeDasharray="3 4"
      opacity="0.55"
    />

    {/* shield — positioning group is separate from the animated group */}
    <g transform="translate(212,52)">
      <g className="art-float">
        <path
          d="M34 0 L68 14 V44 C68 66 52 82 34 90 C16 82 0 66 0 44 V14 Z"
          fill="rgba(25,16,34,0.9)"
          stroke={`url(#${id}-stroke)`}
          strokeWidth="2.25"
          className="art-draw"
          style={len(300)}
        />
        <path
          d="M19 45 L30 57 L50 33"
          fill="none"
          stroke={A}
          strokeWidth="3.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="art-draw"
          style={len(62)}
        />
      </g>
    </g>

    {/* role labels, clear of everything above */}
    {['Doctor', 'Patient', 'Admin'].map((role, i) => (
      <g key={role} transform={`translate(${26 + i * 62}, 168)`}>
        <circle cx="4" cy="-4" r="3" fill={A} opacity="0.75" />
        <text x="13" y="0" fill={P} fontSize="11" fontFamily={MONO} opacity="0.75">
          {role}
        </text>
      </g>
    ))}
  </Svg>
);

/* ---------------- 4. Hydrogen optimization ---------------- */
const HydrogenArt: React.FC<ArtProps> = ({ id }) => (
  <Svg>
    <Grid id={id} />

    {/* electrolysis cell */}
    <g transform="translate(22,44)">
      <rect width="92" height="104" rx="9" fill="none" stroke={P} strokeWidth="2" />
      <path d="M28 14 V90 M64 14 V90" stroke={P} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      {[
        [28, 78, 0],
        [28, 56, 0.5],
        [64, 70, 0.9],
        [64, 44, 1.3],
        [28, 34, 1.7]
      ].map(([cx, cy, delay], i) => (
        <circle
          key={i}
          cx={cx as number}
          cy={cy as number}
          r="4"
          fill={A}
          opacity="0.6"
          className="art-pulse"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </g>
    <text x="68" y="166" textAnchor="middle" fill={P} fontSize="11" fontFamily={MONO} opacity="0.75">
      electrolysis
    </text>

    {/* H2 molecule */}
    <g transform="translate(132,30)">
      <g className="art-float">
        <path d="M16 18 H52" stroke={P} strokeWidth="2" />
        <circle cx="16" cy="18" r="15" fill="rgba(127,19,236,0.2)" stroke={A} strokeWidth="2" />
        <circle cx="52" cy="18" r="15" fill="rgba(127,19,236,0.2)" stroke={A} strokeWidth="2" />
        <text x="16" y="23" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">
          H
        </text>
        <text x="52" y="23" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">
          H
        </text>
      </g>
    </g>

    {/* efficiency curve with marked optimum */}
    <g transform="translate(136,88)">
      <path d="M10 62 H170 M10 62 V6" stroke={FAINT} strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M16 14 C48 58, 72 60, 94 46 C116 32, 142 20, 166 12"
        fill="none"
        stroke={`url(#${id}-stroke)`}
        strokeWidth="2.5"
        strokeLinecap="round"
        className="art-draw"
        style={len(220)}
      />
      <circle cx="88" cy="50" r="5.5" fill={A} className="art-pulse" />
      <path d="M88 50 V62" stroke={A} strokeWidth="1.25" strokeDasharray="2 3" />
      <text x="88" y="78" textAnchor="middle" fill={P} fontSize="11" fontFamily={MONO} opacity="0.75">
        optimum rate
      </text>
    </g>
  </Svg>
);

/* ---------------- 5. Multi-link suspension ---------------- */
const SuspensionArt: React.FC<ArtProps> = ({ id }) => (
  <Svg>
    <Grid id={id} />

    <path d="M26 44 H150" stroke={P} strokeWidth="3" strokeLinecap="round" />
    {[36, 70, 104, 138].map((x) => (
      <circle key={x} cx={x} cy="44" r="3" fill={D} stroke={P} strokeWidth="1.5" />
    ))}

    <path d="M18 170 H302" stroke={FAINT} strokeWidth="2" strokeDasharray="8 7" />

    <g
      stroke={`url(#${id}-stroke)`}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      className="art-draw"
      style={len(460)}
    >
      <path d="M36 44 L206 74" />
      <path d="M70 44 L206 74" />
      <path d="M104 44 L202 130" />
      <path d="M138 44 L202 130" />
      <path d="M206 74 L202 130" />
    </g>

    <path d="M206 74 L202 130" stroke={A} strokeWidth="4" strokeLinecap="round" opacity="0.5" />

    {/* coil spring */}
    <g stroke={P} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.9">
      <path d="M118 46 L118 60" />
      <path d="M110 64 L126 70 L110 76 L126 82 L110 88 L126 94 L110 100 L126 106" />
      <path d="M118 108 L118 122" />
    </g>

    {/* wheel */}
    <g transform="translate(246,124)">
      <circle r="42" fill="none" stroke={P} strokeWidth="2.5" />
      <circle r="15" fill="none" stroke={A} strokeWidth="2" />
      <g className="art-spin">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <path
            key={deg}
            d="M0 -15 L0 -40"
            stroke={P}
            strokeWidth="1.75"
            strokeLinecap="round"
            opacity="0.6"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
    </g>

    {[
      [206, 74],
      [202, 130]
    ].map(([cx, cy]) => (
      <circle key={cx} cx={cx} cy={cy} r="4.5" fill={D} stroke={A} strokeWidth="2" />
    ))}
  </Svg>
);

/* ---------------- 6. USB data acquisition ---------------- */
const DaqArt: React.FC<ArtProps> = ({ id }) => (
  <Svg>
    <Grid id={id} />

    <g transform="translate(20,72)">
      <rect y="12" width="34" height="36" rx="4" fill="none" stroke={P} strokeWidth="2" />
      <rect x="34" y="20" width="14" height="20" rx="2" fill={P} opacity="0.7" />
      <path d="M8 22 h12 M8 30 h12 M8 38 h12" stroke={A} strokeWidth="2" strokeLinecap="round" />
    </g>

    <path
      d="M68 102 C102 102, 98 58, 132 58"
      fill="none"
      stroke={P}
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.75"
    />
    <path
      d="M68 102 C102 102, 98 58, 132 58"
      fill="none"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
      className="art-trace"
    />

    <g transform="translate(132,34)">
      <rect width="168" height="132" rx="9" fill="rgba(25,16,34,0.72)" stroke={P} strokeWidth="2" />
      <path d="M0 24 H168" stroke={P} strokeWidth="1.5" opacity="0.7" />
      {[13, 25, 37].map((cx) => (
        <circle key={cx} cx={cx} cy="12" r="3.5" fill={P} opacity="0.65" />
      ))}

      <path
        d="M16 96 C36 54, 52 120, 72 74 C92 32, 114 104, 138 64"
        fill="none"
        stroke={FAINT}
        strokeWidth="2"
      />
      <path
        d="M16 96 H32 V68 H48 V108 H64 V76 H80 V50 H96 V94 H112 V66 H138"
        fill="none"
        stroke={`url(#${id}-stroke)`}
        strokeWidth="2.25"
        strokeLinejoin="round"
        className="art-draw"
        style={len(380)}
      />
      {[
        [32, 68],
        [48, 108],
        [64, 76],
        [80, 50],
        [96, 94],
        [112, 66]
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill={A}
          className="art-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </g>
  </Svg>
);

/* ---------------- 7. Peripheral vision ---------------- */
const VisionArt: React.FC<ArtProps> = ({ id }) => (
  <Svg>
    <Grid id={id} />

    {/* lost periphery, faint */}
    <path
      d="M64 100 L240 14 A206 206 0 0 1 248 44 Z"
      fill="rgba(255,255,255,0.05)"
      stroke={FAINT}
      strokeWidth="1"
      strokeDasharray="4 4"
    />
    <path
      d="M64 100 L248 156 A206 206 0 0 1 240 186 Z"
      fill="rgba(255,255,255,0.05)"
      stroke={FAINT}
      strokeWidth="1"
      strokeDasharray="4 4"
    />

    {/* intact central field */}
    <path
      d="M64 100 L248 44 A194 194 0 0 1 248 156 Z"
      fill="rgba(168,85,247,0.16)"
      stroke={P}
      strokeWidth="1.5"
    />

    {/* range-finder sweeps into the periphery */}
    {[-46, -34, 34, 46].map((deg, i) => (
      <path
        key={deg}
        d="M64 100 L256 100"
        stroke={A}
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.5"
        transform={`rotate(${deg} 64 100)`}
        className="art-pulse"
        style={{ animationDelay: `${i * 0.22}s` }}
      />
    ))}

    {/* detected obstacles in the blind zones */}
    {[
      [250, 40],
      [258, 152],
      [236, 22]
    ].map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="6" fill={A} opacity="0.9" />
        <circle
          cx={cx}
          cy={cy}
          r="12"
          fill="none"
          stroke={A}
          strokeWidth="1.5"
          opacity="0.45"
          className="art-pulse"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      </g>
    ))}

    {/* wearer */}
    <g transform="translate(46,100)">
      <circle r="19" fill="#1a1024" stroke={P} strokeWidth="2" />
      <path d="M-19 0 A19 19 0 0 1 19 0" fill="none" stroke={A} strokeWidth="2" opacity="0.85" />
      <circle cx="7" cy="-3" r="3.5" fill={A} />
    </g>
  </Svg>
);

/* ---------------- 8. Blender car ---------------- */
/* Side elevation of a coupe, drawn as a mesh: silhouette, edge loops and
   vertex handles over a viewport floor. Geometry is laid out around a
   ground line at y=160 with 22px wheels, so the ride height stays honest. */
const CarArt: React.FC<ArtProps> = ({ id }) => {
  const hull: Array<[number, number]> = [
    [38, 126],
    [44, 112],
    [82, 97],
    [112, 95],
    [144, 68],
    [196, 68],
    [236, 94],
    [266, 98],
    [276, 110],
    [278, 146]
  ];
  const glass: Array<[number, number]> = [
    [118, 93],
    [148, 74],
    [192, 74],
    [230, 93]
  ];

  return (
    <Svg>
      <Grid id={id} />

      <defs>
        <radialGradient id={`${id}-shadow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* viewport floor */}
      <g stroke="rgba(168,85,247,0.2)" strokeWidth="1" fill="none">
        {[-140, -50, 40, 130, 220, 310, 400, 480].map((x) => (
          <path key={x} d={`M${x} 200 L${160 + (x - 160) * 0.2} 152`} />
        ))}
        {[152, 158, 167, 180, 198].map((y) => (
          <path key={y} d={`M0 ${y} H320`} />
        ))}
      </g>

      <ellipse cx="158" cy="161" rx="124" ry="9" fill={`url(#${id}-shadow)`} />

      <g className="art-float">
        {/* body shell */}
        <path
          d="M38 126 L44 112 Q58 100 82 97 L112 95 L144 68 L196 68 L236 94 L266 98 L276 110 L278 146 L262 146 A27 27 0 1 0 210 146 L118 146 A27 27 0 1 0 66 146 L38 146 Z"
          fill="rgba(127,19,236,0.14)"
          stroke={`url(#${id}-stroke)`}
          strokeWidth="2.25"
          strokeLinejoin="round"
          className="art-draw"
          style={len(860)}
        />

        {/* greenhouse */}
        <path
          d="M118 93 L148 74 L192 74 L230 93 Z"
          fill="rgba(232,121,249,0.15)"
          stroke={A}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M170 74 V93" stroke={A} strokeWidth="1.1" opacity="0.6" />

        {/* edge loops across the body surface */}
        <path
          d="M44 116 C110 108 216 108 275 116"
          fill="none"
          stroke={P}
          strokeWidth="1.3"
          opacity="0.6"
        />
        <path d="M118 93 L230 93" fill="none" stroke={P} strokeWidth="1.2" opacity="0.45" />
        <path
          d="M130 139 C160 134 196 134 200 139"
          fill="none"
          stroke={P}
          strokeWidth="1.1"
          opacity="0.35"
        />

        {/* headlight */}
        <path
          d="M44 109 L62 105 L64 113 L46 116 Z"
          fill={A}
          opacity="0.85"
          className="art-pulse"
        />

        {/* mesh vertices */}
        {[...hull, ...glass].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.4" fill="#1a1024" stroke={A} strokeWidth="1.4" />
        ))}

        {/* wheels */}
        {[92, 236].map((cx) => (
          <g key={cx} transform={`translate(${cx},138)`}>
            <circle r="22" fill="#150d1e" stroke={P} strokeWidth="2.25" />
            <circle r="21" fill="none" stroke={A} strokeWidth="0.8" opacity="0.35" />
            <g className="art-spin">
              <circle r="9" fill="none" stroke={A} strokeWidth="1.5" />
              {[0, 72, 144, 216, 288].map((deg) => (
                <path
                  key={deg}
                  d="M0 -9 L0 -19"
                  stroke={P}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  transform={`rotate(${deg})`}
                />
              ))}
            </g>
          </g>
        ))}
      </g>
    </Svg>
  );
};


/* ---------------- registry ---------------- */

const ART: Record<ProjectArtKey, React.FC<ArtProps>> = {
  ecg: EcgArt,
  ncv: NcvArt,
  records: RecordsArt,
  hydrogen: HydrogenArt,
  suspension: SuspensionArt,
  daq: DaqArt,
  vision: VisionArt,
  car: CarArt
};

const ProjectArt: React.FC<{ art: ProjectArtKey; label: string }> = ({ art, label }) => {
  const Component = ART[art];
  return (
    <div className="art-frame" role="img" aria-label={label}>
      <Component id={`art-${art}`} />
    </div>
  );
};

export default ProjectArt;
