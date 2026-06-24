"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  icon: string;
  title: string;
  description: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-y border-[#d4d4d4]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `accordion-panel-${i}`;
        const buttonId = `accordion-button-${i}`;
        return (
          <div key={item.title} className={cn(i > 0 && "border-t border-[#d4d4d4]")}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-brand/50 sm:gap-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-11 shrink-0 sm:size-12"
                />
                <span className="flex-1 text-[clamp(1.15rem,1.4vw,1.34rem)] font-semibold leading-tight text-black">
                  {item.title}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-black transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pl-16 pr-2 text-[clamp(1rem,1.2vw,1.2rem)] leading-[1.5] text-black sm:pl-[72px]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
