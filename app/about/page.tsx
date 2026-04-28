import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { processPillars } from "@/lib/site-data";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <section className="container-shell py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="About"
        title="I want to build AI products that feel thoughtful from interaction to implementation."
        description="I am building toward work where technical depth, product framing, and creative execution all matter. The goal is not to make AI look impressive in isolation. The goal is to make it useful, understandable, and worth trusting."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn className="surface-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">Story</p>
          <div className="mt-5 space-y-5 text-base leading-8 text-mist">
            <p>
              I am most interested in the space between product strategy, interface design, and AI capability. That is where the
              experience either becomes clear and grounded or turns into a vague demo.
            </p>
            <p>
              My portfolio is built to show that I can do more than talk about tools. I can shape a direction, make design choices,
              and translate technical ideas into product experiences that communicate value quickly.
            </p>
            <p>
              I am especially drawn to projects where interaction design matters because the way an AI product behaves is part of
              how users judge whether it feels trustworthy.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4">
          {processPillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.1} className="surface-card p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-mist">How I Work</p>
              <h3 className="mt-4 text-2xl text-paper">{pillar.title}</h3>
              <p className="mt-4 text-base leading-7 text-mist">{pillar.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
