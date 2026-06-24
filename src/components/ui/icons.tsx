import type { SVGProps } from "react";

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9.5 1.5L15 6.5M15 6.5L9.5 11.5M15 6.5H1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Caret(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 8 4"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M0 0L4 4L8 0" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}
