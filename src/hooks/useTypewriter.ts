import { useEffect, useState } from 'react';

interface Options {
  /** lines to type through, in order, looping back to the first */
  words: string[];
  /** milliseconds between characters */
  typeSpeed?: number;
  /** milliseconds to hold a completed line before starting the next */
  holdDelay?: number;
}

/**
 * Types each line out one character at a time, holds it, then moves on.
 * Replaces react-simple-typewriter, which was the only thing that
 * dependency was used for.
 */
export function useTypewriter({ words, typeSpeed = 28, holdDelay = 3800 }: Options) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const current = words[wordIndex] ?? '';
  const isComplete = charCount >= current.length;

  useEffect(() => {
    if (words.length === 0) return;

    if (!isComplete) {
      const timer = window.setTimeout(() => setCharCount((n) => n + 1), typeSpeed);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setCharCount(0);
      setWordIndex((i) => (i + 1) % words.length);
    }, holdDelay);
    return () => window.clearTimeout(timer);
  }, [charCount, isComplete, words, typeSpeed, holdDelay]);

  return { text: current.slice(0, charCount), isComplete };
}
