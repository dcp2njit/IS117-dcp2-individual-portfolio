import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  const completedCount = projects.filter((project) => project.status === "Completed").length;
  const inProgressCount = projects.filter((project) => project.status === "In Progress").length;

  return (
    <section className="container-shell section-block">
      <SectionHeading
        eyebrow="Projects"
        title="Proof-driven work across concept, iteration, and completed builds."
        description="This page is structured to make the process visible: project summaries, explicit status labels, and artifacts that explain what is real, what is evolving, and what is still exploratory."
      />
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="surface-card p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">Project Count</p>
          <p className="stat-number mt-4">{projects.length}</p>
        </div>
        <div className="surface-card p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">Completed</p>
          <p className="stat-number mt-4">{completedCount}</p>
        </div>
        <div className="surface-card p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">In Progress</p>
          <p className="stat-number mt-4">{inProgressCount}</p>
        </div>
      </div>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
}
