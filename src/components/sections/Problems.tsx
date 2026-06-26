import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const MESSY_SOURCES = [
  "Excel spreadsheets",
  "Email threads with certificates",
  "Shared drive folders",
  "Incomplete records",
  "Missing timestamps",
];

export function Problems() {
  return (
    <Section
      id="problems"
      className="bg-white py-10 sm:py-14 lg:py-[70px]"
    >
      <div className="rounded-2xl bg-surface p-7 sm:p-10 lg:p-[65px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left — copy + messy sources */}
          <div className="flex w-full min-w-0 flex-col gap-7 lg:max-w-[605px]">
            <Reveal className="flex flex-col gap-2.5">
              <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.625rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#001047]">
                Training usually happens, but documentation is often
                unorganized.
              </h2>
              <p className="text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.5] text-[#0f3e32]">
                When inspectors ask for proof, most clinics start digging
                through:
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="flex flex-col items-start gap-4">
                {MESSY_SOURCES.map((source) => (
                  <li
                    key={source}
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#fffefc] px-5 py-3 shadow-[0px_1px_2px_rgba(16,12,12,0.05),0px_0px_0px_1px_rgba(16,12,12,0.04)] transition-[transform,box-shadow] duration-200 hover:shadow-[0px_8px_18px_-8px_rgba(16,12,12,0.16),0px_0px_0px_1px_rgba(16,12,12,0.06)] motion-safe:hover:-translate-y-0.5"
                  >
                    <span className="size-2 shrink-0 rounded-full bg-[#b8b6d5]" />
                    <span className="text-[clamp(1rem,1.4vw,1.25rem)] leading-none text-[#0f3e32]">
                      {source}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — photo */}
          <Reveal
            delay={80}
            className="aspect-[531/490] w-full overflow-hidden rounded-xl bg-[#fffdfb] lg:max-w-[531px] lg:justify-self-end"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/problems/care-team.jpg"
              alt="Two clinicians reviewing records together on a tablet at a desk."
              width={531}
              height={490}
              loading="lazy"
              className="size-full object-cover object-[50%_30%]"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
