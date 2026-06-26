import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/icons";

type SolutionCard = {
  title: string;
  description: string;
  image: string;
  imageW: number;
  imageH: number;
};

const TOP_CARDS: SolutionCard[] = [
  {
    title: "Staffs Completion Records",
    description:
      "Theraptly tracks every staff member’s training activity, giving you clear, individual completion records inspectors can easily review.",
    image: "/solution/completion-records.svg",
    imageW: 324,
    imageH: 246,
  },
  {
    title: "Completion Timestamps",
    description:
      "Theraptly automatically logs precise timestamps for every training completed, ensuring your records are accurate and inspection-ready.",
    image: "/solution/timestamps.svg",
    imageW: 324,
    imageH: 246,
  },
  {
    title: "Course Results",
    description:
      "Theraptly captures knowledge check outcomes for each course, showing that staff not only completed training but understood the material.",
    image: "/solution/course-results.svg",
    imageW: 324,
    imageH: 246,
  },
];

const BOTTOM_CARDS: SolutionCard[] = [
  {
    title: "Source Policy the Training Was Based On",
    description:
      "Theraptly links every training module back to its original policy, so inspectors can clearly see exactly what each course is based on, without any confusion or gaps.",
    image: "/solution/source-policy.svg",
    imageW: 528,
    imageH: 331,
  },
  {
    title: "Exportable Documentation They Can Review On-Site",
    description:
      "Theraptly compiles all training data into clean, exportable reports, making it easy to present documentation during inspections.",
    image: "/solution/export-docs.svg",
    imageW: 528,
    imageH: 331,
  },
];

function Card({ title, description, image, imageW, imageH }: SolutionCard) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-[#fafafa] p-6 transition-[transform,box-shadow,border-color] duration-300 hover:border-black/10 hover:shadow-[0px_14px_30px_-14px_rgba(20,20,60,0.16)] motion-safe:hover:-translate-y-1 sm:p-[30px]">
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="text-[clamp(1.3rem,1.8vw,1.625rem)] font-medium leading-[1.27] text-[#031335]">
          {title}
        </h3>
        <p className="max-w-[34ch] text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.45] tracking-[-0.01em] text-[#57534d]">
          {description}
        </p>
      </div>
      <div className="mt-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          width={imageW}
          height={imageH}
          loading="lazy"
          className="h-auto w-full"
        />
      </div>
    </article>
  );
}

export function Solution() {
  return (
    <Section
      id="solution"
      className="bg-white py-16 lg:py-24"
      innerClassName="flex flex-col items-center"
    >
      {/* Heading */}
      <Reveal className="flex max-w-[760px] flex-col items-center gap-3.5 text-center">
        <h2 className="text-balance font-display text-[clamp(2rem,4.4vw,3.125rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#1c1917]">
          What Inspectors actually ask for
        </h2>
        <p className="text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.5] tracking-[-0.01em] text-[#5e5e5e]">
          During inspections, surveyors typically request:
        </p>
      </Reveal>

      {/* Cards */}
      <div className="mt-12 w-full lg:mt-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOP_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="h-full">
              <Card {...card} />
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {BOTTOM_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="h-full">
              <Card {...card} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <Reveal className="mt-12 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
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
