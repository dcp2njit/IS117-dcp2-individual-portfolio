import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillAccordion } from "@/components/ui/skill-accordion";
import { skillGroups } from "@/lib/site-data";

const recruiterSignals = [
  "I organize skills around contribution, not just tools.",
  "I can frame AI product decisions as well as build the interface layer around them.",
  "The strongest signal here is how research, storytelling, and front-end execution connect."
];

export const metadata = {
  title: "Skills"
};

export default function SkillsPage() {
  return (
    <section className="container-shell section-block">
      <SectionHeading
        eyebrow="Skills"
        title="Grouped by workflow so the skill list reflects how the work actually gets done."
        description="Instead of treating skills as a flat inventory, this page organizes them around the way I research, design, and build AI-powered experiences."
      />

      <div className="mb-10 grid gap-4 lg:grid-cols-3">
        {recruiterSignals.map((signal, index) => (
          <FadeIn key={signal} delay={index * 0.08} className="surface-card p-5 sm:p-6">
            <p className="detail-copy">{signal}</p>
          </FadeIn>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.618fr]">
        <FadeIn className="surface-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">Working Style</p>
          <div className="mt-5 space-y-4">
            <p className="body-copy">I approach skills as part of a workflow: define the problem, shape the interaction, test the behavior, then communicate the proof.</p>
            <p className="body-copy">This structure also makes it clearer to recruiters what I can contribute on a product team beyond implementation alone.</p>
          </div>
        </FadeIn>

        <SkillAccordion groups={skillGroups} />
      </div>
    </section>
  );
}
