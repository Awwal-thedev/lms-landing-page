import { Accordion, type AccordionItem } from "@/components/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/icons";

const ITEMS: AccordionItem[] = [
  {
    icon: "/specific/policies.svg",
    title: "Policies",
    description:
      "Control user access and simplify logins for your clinical and compliance teams.",
  },
  {
    icon: "/specific/training.svg",
    title: "Training",
    description:
      "Turn your policies into role-based courses and assign them in a click, so every staff member completes the right training.",
  },
  {
    icon: "/specific/records.svg",
    title: "Completion records",
    description:
      "Every completion is logged with the exact date, time, and staff name — ready to export the moment a surveyor asks.",
  },
  {
    icon: "/specific/inspection.svg",
    title: "Inspection documentation",
    description:
      "Generate auditor-ready reports in seconds, with policies, timestamps, and results compiled in one place.",
  },
];

export function Specific() {
  return (
    <Section id="specific-features" className="bg-white py-16 lg:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — heading */}
        <Reveal className="flex flex-col gap-3">
          <h2 className="text-[clamp(1.25rem,1.6vw,1.47rem)] font-semibold uppercase leading-tight text-black">
            Staff Training &amp; Documentation
          </h2>
          <p className="max-w-[492px] text-[clamp(1.2rem,1.8vw,1.4rem)] leading-[1.55] tracking-[-0.02em] text-[#161c2d]/70">
            When inspectors ask for documentation, you already have it.
          </p>
        </Reveal>

        {/* Right — accordion */}
        <Reveal delay={120}>
          <Accordion items={ITEMS} />
        </Reveal>
      </div>

      {/* CTAs */}
      <Reveal className="mt-14 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center">
        <Button
          href="/sign-up"
          variant="dark"
          size="lg"
          shape="pill"
          fullWidth
          className="group/btn transition-transform hover:-translate-y-0.5 sm:w-auto"
          trailingIcon={
            <ArrowRight className="size-[18px] transition-transform group-hover/btn:translate-x-0.5" />
          }
        >
          Start for free
        </Button>
        <Button
          href="/demo"
          variant="soft"
          size="lg"
          shape="pill"
          fullWidth
          className="transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          Request Demo
        </Button>
      </Reveal>
    </Section>
  );
}
