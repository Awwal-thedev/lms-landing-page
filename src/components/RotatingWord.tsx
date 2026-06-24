"use client";

import { useEffect, useState } from "react";

type RotatingWordProps = {
  words: string[];
  /** ms each word stays visible */
  interval?: number;
};

/**
 * Cycles through `words` with a fade/rise transition and a blinking caret,
 * mimicking a text cursor "typing" the next word. Respects reduced motion:
 * when the user prefers reduced motion, it shows the first word statically.
 */
export function RotatingWord({ words, interval = 2400 }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || words.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => clearInterval(id);
  }, [reducedMotion, words.length, interval]);

  return (
    <span className="relative inline-flex items-center align-baseline">
      {/* Blinking caret */}
      <span
        aria-hidden="true"
        className="mr-2 inline-block w-[3px] self-stretch rounded-full bg-[#0119df] motion-safe:animate-caret-blink"
      />
      {/* Rotating word — reserve width for the widest word so the centered
          line never jumps, but keep the highlight hugging the actual word. */}
      <span className="relative inline-grid justify-items-start">
        {/* Sizer */}
        <span aria-hidden="true" className="invisible col-start-1 row-start-1">
          {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
        </span>
        <span
          key={index}
          className="col-start-1 row-start-1 whitespace-nowrap rounded-[0.15em] bg-gradient-to-r from-[#d6dbee]/80 to-[#e8ebf6]/40 px-[0.12em] text-[#1c1917] motion-safe:animate-word-rise"
        >
          {words[index]}
        </span>
      </span>
    </span>
  );
}
