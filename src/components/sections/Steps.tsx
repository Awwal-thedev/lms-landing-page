import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { StepsSlider, type Step } from "@/components/StepsSlider";

const STEPS: Step[] = [
  {
    image: "/steps/step-1.png",
    title: "Upload Your Policy",
    description:
      "Upload your policy or procedure, and Theraptly converts it into a ready-to-use training module with lessons and quizzes.",
  },
  {
    image: "/steps/step-2.png",
    title: "Assign & Train Your Team",
    description:
      "Assign courses to staff based on roles, track progress, and ensure everyone completes required training on time.",
  },
  {
    image: "/steps/step-3.png",
    title: "Track Performance & Be Audit-ready",
    description:
      "Get real-time insights on completion rates, quiz results, and CARF alignment—all in one dashboard.",
  },
];

export function Steps() {
  return (
    <Section id="how-it-works" className="bg-white py-16 lg:py-24">
      <Reveal className="flex flex-col gap-1.5">
        <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#092256]">
          How it works
        </h2>
        <p className="text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.5] text-[#54668b]">
          Just follow these easy steps
        </p>
      </Reveal>

      <div className="mt-12 lg:mt-14">
        <StepsSlider steps={STEPS} />
      </div>
    </Section>
  );
}
