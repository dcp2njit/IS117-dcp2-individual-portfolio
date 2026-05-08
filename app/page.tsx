import Image from "next/image";
import Link from "next/link";

import { HomeHeroVisual } from "@/components/home/home-hero-visual";
import { FadeIn } from "@/components/ui/fade-in";
import { contactMethods, projects, skillGroups } from "@/lib/site-data";

const featuredProjects = projects.filter((project) => project.featured);
const leadProject = featuredProjects[0];
const supportProject = featuredProjects[1];
const featuredSkills = skillGroups.flatMap((group) => group.items).slice(0, 8);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-24 text-paper md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,139,159,0.34),transparent_28%),radial-gradient(circle_at_72%_18%,rgba(246,241,245,0.08),transparent_20%),linear-gradient(135deg,rgba(61,68,81,0.82)_0%,rgba(26,31,43,0.96)_60%,rgba(178,139,159,0.18)_100%)]" />
        <div className="relative grid min-h-[88vh] md:grid-cols-[1.08fr_0.92fr] lg:grid-cols-[1.618fr_1fr]">
          <div className="flex items-center border-b border-rose/20 px-6 py-16 sm:px-10 md:border-b-0 md:border-r md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-24">
            <FadeIn className="max-w-[var(--measure-wide)] space-y-8">
              <p className="text-xs uppercase tracking-[0.45em] text-rose/80">Hello, I&apos;m</p>
              <div className="space-y-5">
                <h1 className="page-title max-w-[10ch] uppercase">
                  Denise Payumo
                </h1>
                <p className="text-sm uppercase tracking-[0.35em] text-rose/85 sm:text-base">
                  AI Product and Front-End Builder
                </p>
              </div>
              <p className="body-copy max-w-xl text-paper/82">
                I design and build AI-powered product experiences that are interactive, transparent, and grounded in real user value.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/projects" className="inline-flex items-center justify-between gap-4 border border-rose/50 bg-rose/12 px-5 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-paper transition hover:bg-rose hover:text-ink">
                  View My Work
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/about" className="inline-flex items-center justify-between gap-4 border border-rose/20 px-5 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-paper/75 transition hover:border-rose/50 hover:bg-rose/10 hover:text-paper">
                  My Process
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="h-full">
            <HomeHeroVisual focusText="Building interactive AI products that show technical depth without losing clarity." />
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 -mt-px grid gap-px bg-rose/20 md:grid-cols-2 xl:grid-cols-[0.95fr_0.9fr_0.95fr]">
        <FadeIn className="bg-paper px-8 py-10 text-ink sm:px-10 lg:min-h-[26rem] lg:px-12 lg:py-12">
          <p className="text-xs uppercase tracking-[0.35em] text-slate/70">About Me</p>
          <div className="mt-6 space-y-6">
            <h2 className="section-title max-w-sm text-ink">
              Designing AI experiences with empathy and purpose.
            </h2>
            <p className="body-copy max-w-md text-slate">
              I focus on turning complex AI capabilities into experiences that feel understandable, honest, and useful for real people.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <Link href="/about" className="inline-flex w-fit items-center justify-between gap-4 border border-rose/35 bg-rose/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-ink transition hover:bg-rose hover:text-ink">
              Learn More
              <span aria-hidden="true">↗</span>
            </Link>
            <div className="relative mx-auto h-56 w-44">
              <div className="absolute bottom-0 left-1/2 h-40 w-28 -translate-x-1/2 rounded-t-[4rem] bg-rose/28" />
              <div className="absolute bottom-5 left-1/2 h-32 w-20 -translate-x-1/2 rounded-[2rem] border border-rose/25 bg-[linear-gradient(180deg,#c69faf_0%,#8a6f7d_100%)] shadow-[0_20px_35px_rgba(86,58,71,0.18)]" />
              <div className="absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 bg-rose/40" />
              <div className="absolute left-[48%] top-4 h-10 w-10 rounded-full border border-rose/35 bg-rose/18" />
              <div className="absolute left-[58%] top-10 h-12 w-12 rounded-full border border-rose/35 bg-rose/20" />
              <div className="absolute left-[34%] top-12 h-9 w-9 rounded-full border border-rose/35 bg-rose/15" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="bg-[linear-gradient(180deg,#3D4451_0%,#1A1F2B_100%)] px-8 py-10 text-paper sm:px-10 lg:min-h-[26rem] lg:px-12 lg:py-12">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-rose/78">Selected Work</p>
              <h2 className="section-title mt-5 max-w-md">
                {leadProject.title}
              </h2>
            </div>
            <span className="rounded-full border border-rose/30 bg-rose/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-paper/85">
              {leadProject.status}
            </span>
          </div>

          <p className="body-copy mt-5 max-w-lg text-paper/78">{leadProject.summary}</p>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-rose/25 bg-paper p-5 text-ink shadow-[0_24px_80px_rgba(17,22,32,0.35)]">
            <div className="rounded-[1.4rem] bg-[#fff9fc] p-4 shadow-[0_12px_24px_rgba(61,68,81,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="detail-copy uppercase tracking-[0.28em] text-slate/90">{leadProject.tagline}</p>
                <span className="rounded-full border border-rose/20 bg-rose/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-ink/85">
                  {leadProject.artifactType}
                </span>
              </div>
              <div className="mt-5 overflow-hidden rounded-[1.1rem] border border-rose/15 bg-white">
                <Image
                  src={leadProject.imageSrc}
                  alt={leadProject.imageAlt}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <Link href="/projects" className="mt-8 inline-flex items-center justify-between gap-4 border border-rose/40 bg-rose/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.28em] transition hover:bg-rose hover:text-ink">
            View Project
            <span aria-hidden="true">↗</span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.16} className="grid bg-paper text-ink md:col-span-2 xl:col-span-1 lg:h-full lg:min-h-[26rem] lg:grid-rows-[auto_1fr]">
          <div className="px-8 py-10 sm:px-10 lg:px-12 lg:py-12">
            <p className="text-xs uppercase tracking-[0.35em] text-slate/70">Skills &amp; Tools</p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2">
              {featuredSkills.map((skill) => (
                <div key={skill} className="min-w-0 rounded-[1.25rem] border border-rose/18 bg-white/80 px-4 py-4 text-center text-sm font-medium leading-6 text-ink shadow-[0_10px_25px_rgba(61,68,81,0.08)] break-words">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[16rem] flex-col justify-between overflow-hidden border-t border-rose/20 bg-[linear-gradient(180deg,#f8edf3_0%,#e9d8e2_100%)] px-8 py-8 sm:min-h-[15rem] sm:px-10 lg:h-full lg:min-h-0 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.75),transparent_24%),linear-gradient(140deg,rgba(178,139,159,0.22),transparent_40%)]" />
            <div className="relative z-10 max-w-xs pr-4">
              <p className="text-base leading-7 text-slate/90">{supportProject ? supportProject.proofLabel : "Responsive layouts, motion tests, and interface studies."}</p>
            </div>
            <div className="relative z-10 mt-8 overflow-hidden rounded-[1.25rem] border border-rose/20 bg-white/75 shadow-[0_18px_40px_rgba(61,68,81,0.12)]">
              {supportProject ? (
                <Image
                  src={supportProject.imageSrc}
                  alt={supportProject.imageAlt}
                  width={1200}
                  height={900}
                  className="aspect-[16/9] h-auto w-full object-cover"
                />
              ) : null}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="grid gap-px bg-rose/20 md:grid-cols-2 xl:grid-cols-[1.05fr_0.95fr_0.8fr]">
        <FadeIn className="relative overflow-hidden bg-[linear-gradient(180deg,#B28B9F_0%,#7c6980_100%)] px-8 py-12 text-paper sm:px-10 lg:min-h-[16rem] lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(246,241,245,0.24),transparent_24%),linear-gradient(180deg,rgba(61,68,81,0.08),rgba(26,31,43,0.2))]" />
          <div className="relative max-w-lg space-y-5">
            <p className="text-5xl leading-none text-white/90">“</p>
            <p className="section-title text-paper sm:text-[2.6rem]">
              Good AI product design is not just what the interface shows, but how clearly the system earns trust.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="bg-[linear-gradient(180deg,#3D4451_0%,#1A1F2B_100%)] px-8 py-12 text-paper sm:px-10 lg:min-h-[16rem] lg:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-rose/78">Professional Focus</p>
          <h2 className="section-title mt-5 max-w-md">
            Open to internship opportunities in AI product, front-end, and interaction design.
          </h2>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-between gap-4 border border-rose/40 bg-rose/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.28em] transition hover:bg-rose hover:text-ink">
            Contact Me
            <span aria-hidden="true">↗</span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.16} className="bg-[#222939] px-8 py-12 text-paper/76 md:col-span-2 xl:col-span-1 sm:px-10 lg:min-h-[16rem] lg:px-12">
          <div className="space-y-5">
            {contactMethods.map((method) => (
              <Link key={method.label} href={method.href} className="flex items-start gap-3 border-b border-rose/15 pb-4 last:border-b-0 last:pb-0 hover:text-paper">
                <span className="mt-1 text-xs uppercase tracking-[0.25em] text-rose/60">{method.label}</span>
                <span className="detail-copy text-paper/76">{method.value}</span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
