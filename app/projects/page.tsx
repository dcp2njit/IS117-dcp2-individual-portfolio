import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <section className="container-shell py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Proof-driven work across concept, iteration, and completed builds."
        description="This page is structured to make the process visible: project summaries, explicit status labels, and artifacts that explain what is real, what is evolving, and what is still exploratory."
      />
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
}
