import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

type Feature = {
  icon: string;
  iconW: number;
  iconH: number;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: "/features/lock.svg",
    iconW: 44,
    iconH: 65,
    title: "Policy-Linked Training Documentation",
    description:
      "Builds every training module directly from your clinic’s own policies with a permanent link to the source.",
  },
  {
    icon: "/features/clock.svg",
    iconW: 44,
    iconH: 44,
    title: "Timestamped Completion Records",
    description:
      "Logs every completion with exact date, time, and staff name for instant surveyor verification.",
  },
  {
    icon: "/features/shield.svg",
    iconW: 48,
    iconH: 48,
    title: "Role-Based Staff Assignments",
    description:
      "Assign trainings by role, department, or individual in one click with no spreadsheets or chasing.",
  },
  {
    icon: "/features/upload.svg",
    iconW: 44,
    iconH: 44,
    title: "Exportable Inspection Documentation",
    description:
      "Generate a full auditor-ready report in seconds with policies, timestamps, and results, downloadable instantly.",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      className="bg-white py-20 lg:py-[110px]"
      innerClassName="flex flex-col items-center"
    >
      {/* Heading */}
      <Reveal className="flex max-w-[800px] flex-col items-center gap-4 text-center">
        <h2 className="font-display text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#1c1917]">
          Built for behavioral health compliance workflows.
        </h2>
        <p className="max-w-[640px] text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.5] tracking-[-0.01em] text-[#5e5e5e]">
          Feel confident knowing your practice is fully ready for CARF and state
          inspections.
        </p>
      </Reveal>

      {/* Cards */}
      <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 80} className="h-full">
          <article
            className="flex h-full flex-col gap-11 rounded-2xl bg-surface px-6 pb-11 pt-[42px] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0px_14px_30px_-14px_rgba(20,20,60,0.18)] hover:ring-1 hover:ring-black/[0.04]"
          >
            <div className="flex h-[65px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.icon}
                alt=""
                width={f.iconW}
                height={f.iconH}
                style={{ width: f.iconW, height: f.iconH }}
                className="block"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="h-px w-full bg-[#6a6a6a]/20" />
              <div className="flex flex-col gap-4">
                <h3 className="text-[25px] font-medium leading-[1.28] tracking-[-0.2px] text-[#001047]">
                  {f.title}
                </h3>
                <p className="text-[16px] leading-[1.5] text-[#676c80]">
                  {f.description}
                </p>
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>

      {/* Bottom pill */}
      <Reveal
        delay={120}
        className="mt-12 inline-flex items-center gap-2.5 rounded-[11px] bg-white px-4 py-2.5 shadow-[0px_4px_6px_-6px_rgba(15,12,12,0.01),0px_0px_0px_1px_rgba(16,12,12,0.08),0px_0.4px_0.2px_-1.3px_rgba(0,0,0,0.07),0px_1.5px_0.9px_-2.7px_rgba(0,0,0,0.06),0px_6px_3.9px_-4px_rgba(0,0,0,0.03)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/features/badge.svg"
          alt=""
          width={19}
          height={21}
          className="block size-[19px] shrink-0"
        />
        <span className="text-[15px] font-medium tracking-[0.32px] text-ink">
          Preparing facilities for CARF and state inspections.
        </span>
      </Reveal>
    </Section>
  );
}
