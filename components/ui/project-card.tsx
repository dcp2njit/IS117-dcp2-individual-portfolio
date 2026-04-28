import { FadeIn } from "@/components/ui/fade-in";
import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

const statusStyles: Record<Project["status"], string> = {
  Completed: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  "In Progress": "border-amber-300/30 bg-amber-300/10 text-amber-100",
  Concept: "border-sky-300/30 bg-sky-300/10 text-sky-100"
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay} className="surface-card overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] ${statusStyles[project.status]}`}>
              {project.status}
            </span>
            <span className="text-sm text-mist">{project.proofLabel}</span>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-mist">{project.tagline}</p>
            <h3 className="font-serif text-3xl text-paper">{project.title}</h3>
            <p className="text-base leading-7 text-mist">{project.summary}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-paper"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 p-6 sm:p-8">
          <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-gradient-to-br from-rose/15 via-white/5 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-mist">Visual Proof</p>
            <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-hero-grid bg-[size:22px_22px] p-6">
              <div className="aspect-[4/3] rounded-[1rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-mist">Process Notes</p>
            <ul className="space-y-3 text-sm leading-6 text-mist">
              {project.processNotes.map((note) => (
                <li key={note} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
