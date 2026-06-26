"use client";

import { useEffect, useRef, useState } from "react";

type RotatingWordProps = {
  words: string[];
  /** ms each word stays visible */
  interval?: number;
};

/**
 * Cycles through `words` with a fade/rise transition and a blinking caret.
 * A single hidden measurer renders the CURRENT word and the slot animates its
 * width to fit it, so the centered headline stays balanced for every word
 * (short words no longer left-align in a fixed widest-word slot) without ever
 * jumping the layout. Respects reduced motion: shows the first word statically.
 */
export function RotatingWord({ words, interval = 2400 }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const measurerRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Measure the current word and size the slot to it. Re-measure on word change,
  // after the font loads, and on resize (clamp() font sizing changes widths).
  useEffect(() => {
    const measure = () => {
      if (measurerRef.current) {
        setWidth(measurerRef.current.getBoundingClientRect().width);
      }
    };
    measure();
    document.fonts?.ready?.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  useEffect(() => {
    if (reducedMotion || words.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => clearInterval(id);
  }, [reducedMotion, words.length, interval]);

  const word = words[index];

  return (
    <span className="relative inline-flex items-center align-baseline">
      {/* Blinking caret */}
      <span
        aria-hidden="true"
        className="mr-2 inline-block w-[3px] self-stretch rounded-full bg-[#0119df] motion-safe:animate-caret-blink"
      />

      {/* Width-animated slot — re-centers the headline per word */}
      <span
        className="relative inline-block overflow-x-clip overflow-y-visible align-baseline motion-safe:transition-[width] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={width != null ? { width: `${width}px` } : undefined}
      >
        {/* Hidden measurer — always the current word, so width can't mismatch */}
        <span
          ref={measurerRef}
          aria-hidden="true"
          className="invisible pointer-events-none absolute left-0 top-0 whitespace-nowrap px-[0.12em]"
        >
          {word}
        </span>

        {/* Visible current word */}
        <span
          key={index}
          className="block whitespace-nowrap rounded-[0.15em] bg-gradient-to-r from-[#d6dbee]/80 to-[#e8ebf6]/40 px-[0.12em] text-[#1c1917] motion-safe:animate-word-rise"
        >
          {word}
        </span>
      </span>
    </span>
  );
}
