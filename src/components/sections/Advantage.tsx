import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";

export function Advantage() {
  return (
    <section
      id="advantage"
      className="relative flex min-h-[560px] w-full items-end overflow-hidden sm:min-h-[680px] lg:min-h-[780px]"
    >
      {/* Background photo */}
      <Image
        src="/advantage/woman.jpg"
        alt="A behavioral-health facility manager focused on her laptop in the evening."
        fill
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />

      {/* Bottom-weighted dark gradient for legible text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-[#070b16]/55 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-7 px-4 pb-14 text-center sm:px-6 lg:px-12 lg:pb-20 xl:px-[110px]">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-[clamp(2rem,4vw,2.875rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
            Built for small teams
          </h2>
          <p className="max-w-[940px] text-balance text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.65] tracking-[-0.01em] text-white/85">
            Built for Small Compliance Teams. Large hospital systems have
            compliance departments. Most behavioral health facilities don’t.
            Theraptly is designed for the facility manager managing scheduling,
            billing, and incident reports, without adding another operational
            burden. Setup takes only 15 mins.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <Logo markClassName="text-[#aba4a2]" wordmarkClassName="text-[#aba4a2]" />
        </Reveal>
      </div>
    </section>
  );
}
