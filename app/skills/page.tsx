import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillAccordion } from "@/components/ui/skill-accordion";
import { skillGroups } from "@/lib/site-data";

export const metadata = {
  title: "Skills"
};

export default function SkillsPage() {
  return (
    <section className="container-shell py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Grouped by workflow so the skill list reflects how the work actually gets done."
        description="Instead of treating skills as a flat inventory, this page organizes them around the way I research, design, and build AI-powered experiences."
      />

      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <FadeIn className="surface-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">Working Style</p>
          <div className="mt-5 space-y-4 text-base leading-7 text-mist">
            <p>I approach skills as part of a workflow: define the problem, shape the interaction, test the behavior, then communicate the proof.</p>
            <p>This structure also makes it clearer to recruiters what I can contribute on a product team beyond implementation alone.</p>
          </div>
        </FadeIn>

        <SkillAccordion groups={skillGroups} />
      </div>
    </section>
  );
}
