import { useCallback, useRef, type PointerEvent } from 'react';

/**
 * Tracks the pointer inside an element and publishes its position as the
 * --mx / --my custom properties, which the `.spotlight` class renders as a
 * soft highlight. Writes straight to the node, so moving the pointer never
 * triggers a React re-render.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  const onPointerMove = useCallback((event: PointerEvent<T>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    element.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    element.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  return { ref, onPointerMove };
}
