import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { processPillars } from "@/lib/site-data";

const positioningSignals = [
  {
    label: "Role Direction",
    title: "AI product builder",
    text: "I am most interested in the space where product framing, interaction design, and AI capability meet."
  },
  {
    label: "What I Bring",
    title: "Strategy plus execution",
    text: "I like shaping the concept, clarifying the user decision points, and then turning that direction into a responsive front-end experience."
  },
  {
    label: "What I Am Looking For",
    title: "Internship work with real product stakes",
    text: "I want to contribute to AI product, front-end, or interactive experience teams that care about clarity, trust, and thoughtful execution."
  }
];

const recruiterTakeaways = [
  "I care about making AI experiences understandable instead of just technically impressive.",
  "I think in terms of product decisions, not just isolated visuals or tool usage.",
  "I use interaction, motion, and structure to support credibility rather than decoration."
];

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <section className="container-shell section-block">
      <SectionHeading
        eyebrow="About"
        title="I want to build AI products that feel thoughtful from interaction to implementation."
        description="I am building toward work where technical depth, product framing, and creative execution all matter. The goal is not to make AI look impressive in isolation. The goal is to make it useful, understandable, and worth trusting."
      />

      <div className="mb-10 grid gap-4 lg:grid-cols-3">
        {positioningSignals.map((signal, index) => (
          <FadeIn key={signal.label} delay={index * 0.08} className="surface-card p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-mist">{signal.label}</p>
            <h2 className="card-title mt-4">{signal.title}</h2>
            <p className="body-copy mt-4">{signal.text}</p>
          </FadeIn>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.618fr_1fr]">
        <FadeIn className="surface-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">Story</p>
          <div className="mt-5 space-y-5">
            <p className="body-copy">
              I am most interested in the space between product strategy, interface design, and AI capability. That is where the
              experience either becomes clear and grounded or turns into a vague demo.
            </p>
            <p className="body-copy">
              My portfolio is built to show that I can do more than talk about tools. I can shape a direction, make design choices,
              and translate technical ideas into product experiences that communicate value quickly.
            </p>
            <p className="body-copy">
              I am especially drawn to projects where interaction design matters because the way an AI product behaves is part of
              how users judge whether it feels trustworthy.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="surface-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">What Recruiters Should Take Away</p>
          <div className="mt-5 space-y-4">
            {recruiterTakeaways.map((takeaway) => (
              <div key={takeaway} className="detail-copy rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
                {takeaway}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="mt-10">
        <SectionHeading
          eyebrow="How I Work"
          title="The process matters because trust is shaped by the details of the experience."
          description="These are the working habits that matter most in the kinds of AI product experiences I want to build."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {processPillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.1} className="surface-card p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-mist">How I Work</p>
              <h3 className="card-title mt-4">{pillar.title}</h3>
              <p className="body-copy mt-4">{pillar.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
