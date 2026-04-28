import Link from "next/link";

import { FadeIn } from "@/components/ui/fade-in";
import { contactMethods, projects, skillGroups } from "@/lib/site-data";

const featuredProjects = projects.filter((project) => project.featured);
const leadProject = featuredProjects[0];
const supportProject = featuredProjects[1];
const featuredSkills = skillGroups.flatMap((group) => group.items).slice(0, 8);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-24 text-paper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,139,159,0.34),transparent_28%),radial-gradient(circle_at_72%_18%,rgba(246,241,245,0.08),transparent_20%),linear-gradient(135deg,rgba(61,68,81,0.82)_0%,rgba(26,31,43,0.96)_60%,rgba(178,139,159,0.18)_100%)]" />
        <div className="relative grid min-h-[88vh] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex items-center border-b border-rose/20 px-6 py-16 sm:px-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-24 xl:px-24">
            <FadeIn className="max-w-2xl space-y-8">
              <p className="text-xs uppercase tracking-[0.45em] text-rose/80">Hello, I&apos;m</p>
              <div className="space-y-5">
                <h1 className="font-serif text-6xl uppercase leading-[0.92] text-paper sm:text-7xl lg:text-[6.5rem]">
                  Denise Payumo
                </h1>
                <p className="text-sm uppercase tracking-[0.35em] text-rose/85 sm:text-base">
                  AI Forward Engineer
                </p>
              </div>
              <p className="max-w-xl text-base leading-8 text-paper/82 sm:text-lg">
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

          <FadeIn delay={0.12} className="relative min-h-[26rem] overflow-hidden bg-[linear-gradient(145deg,rgba(61,68,81,0.2),rgba(178,139,159,0.14))]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(246,241,245,0.14),transparent_18%),linear-gradient(135deg,rgba(246,241,245,0.03)_0%,rgba(246,241,245,0)_40%,rgba(178,139,159,0.14)_50%,rgba(246,241,245,0)_60%)]" />
            <div className="absolute left-[38%] top-[-10%] h-[135%] w-24 rotate-[32deg] bg-rose/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_70%_40%,rgba(246,241,245,0.08),transparent_18%),linear-gradient(180deg,rgba(246,241,245,0)_0%,rgba(26,31,43,0.18)_100%)]" />
            <div className="absolute bottom-0 right-[10%] top-[16%] w-[62%] rounded-t-[14rem] border border-rose/25 bg-[linear-gradient(180deg,#3D4451_0%,#1A1F2B_100%)] shadow-[0_40px_120px_rgba(19,22,31,0.45)]">
              <div className="absolute inset-x-[16%] top-[14%] h-[46%] rounded-[50%] bg-[radial-gradient(circle_at_50%_20%,rgba(246,241,245,0.18),transparent_28%),linear-gradient(180deg,rgba(178,139,159,0.08),rgba(246,241,245,0))]" />
              <div className="absolute inset-x-[22%] bottom-0 top-[38%] rounded-t-[7rem] bg-[linear-gradient(180deg,#444d5c_0%,#1A1F2B_100%)]" />
            </div>
            <div className="absolute bottom-8 left-6 right-6 rounded-[1.6rem] border border-rose/20 bg-[rgba(178,139,159,0.14)] p-5 backdrop-blur sm:bottom-10 sm:left-10 sm:right-auto sm:max-w-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-paper/68">Current Focus</p>
              <p className="mt-3 text-xl text-paper">Building interactive AI products that show technical depth without losing clarity.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 -mt-px grid gap-px bg-rose/20 lg:grid-cols-[0.95fr_0.9fr_0.95fr]">
        <FadeIn className="bg-paper px-8 py-10 text-ink sm:px-10 lg:min-h-[26rem] lg:px-12 lg:py-12">
          <p className="text-xs uppercase tracking-[0.35em] text-slate/70">About Me</p>
          <div className="mt-6 space-y-6">
            <h2 className="max-w-sm font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Designing AI experiences with empathy and purpose.
            </h2>
            <p className="max-w-md text-base leading-8 text-slate/82">
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
              <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
                {leadProject.title}
              </h2>
            </div>
            <span className="rounded-full border border-rose/30 bg-rose/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-paper/85">
              {leadProject.status}
            </span>
          </div>

          <p className="mt-5 max-w-lg text-base leading-8 text-paper/78">{leadProject.summary}</p>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-rose/25 bg-paper p-5 text-ink shadow-[0_24px_80px_rgba(17,22,32,0.35)]">
            <div className="rounded-[1.4rem] bg-[#fff9fc] p-4 shadow-[0_12px_24px_rgba(61,68,81,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate/68">{leadProject.tagline}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1rem] bg-[#fdf5f9] p-4">
                  <div className="h-2 w-16 rounded-full bg-rose/40" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-full rounded-full bg-rose/18" />
                    <div className="h-3 w-4/5 rounded-full bg-rose/18" />
                    <div className="h-3 w-3/5 rounded-full bg-rose/18" />
                  </div>
                  <div className="mt-6 h-10 w-28 rounded-full bg-rose" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[1rem] bg-slate p-3">
                    <div className="h-full rounded-[0.8rem] border border-rose/15 bg-[linear-gradient(180deg,#566071_0%,#2c3340_100%)]" />
                  </div>
                  <div className="rounded-[1rem] bg-slate p-3">
                    <div className="h-full rounded-[0.8rem] border border-rose/15 bg-[linear-gradient(180deg,#667286_0%,#313947_100%)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/projects" className="mt-8 inline-flex items-center justify-between gap-4 border border-rose/40 bg-rose/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.28em] transition hover:bg-rose hover:text-ink">
            View Project
            <span aria-hidden="true">↗</span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.16} className="grid bg-paper text-ink lg:h-full lg:min-h-[26rem] lg:grid-rows-[auto_1fr]">
          <div className="px-8 py-10 sm:px-10 lg:px-12 lg:py-12">
            <p className="text-xs uppercase tracking-[0.35em] text-slate/70">Skills &amp; Tools</p>
            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-1 xl:grid-cols-2">
              {featuredSkills.map((skill) => (
                <div key={skill} className="min-w-0 rounded-[1.25rem] border border-rose/18 bg-white/80 px-4 py-4 text-center text-sm font-medium leading-6 text-ink shadow-[0_10px_25px_rgba(61,68,81,0.08)] break-words">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[16rem] flex-col justify-between overflow-hidden border-t border-rose/20 bg-[linear-gradient(180deg,#f8edf3_0%,#e9d8e2_100%)] px-8 py-8 sm:min-h-[15rem] sm:px-10 lg:h-full lg:min-h-0 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.75),transparent_24%),linear-gradient(140deg,rgba(178,139,159,0.22),transparent_40%)]" />
            <div className="relative z-10 max-w-xs pr-4 text-sm leading-7 text-slate/84">
              <p>{supportProject ? supportProject.proofLabel : "Responsive layouts, motion tests, and interface studies."}</p>
            </div>
            <div className="pointer-events-none relative z-10 mt-8 h-24 sm:h-28">
              <div className="absolute bottom-0 left-0 h-16 w-16 rounded-full border border-rose/20 bg-ink shadow-[0_25px_30px_rgba(61,68,81,0.18)] sm:h-20 sm:w-20" />
              <div className="absolute bottom-0 right-0 h-20 w-32 rounded-[1rem] border border-rose/18 bg-slate shadow-[0_25px_30px_rgba(61,68,81,0.14)] sm:h-24 sm:w-40" />
              <div className="absolute bottom-[3.8rem] right-[2.4rem] h-1 w-16 rotate-[18deg] rounded-full bg-rose/75 sm:bottom-[4.6rem] sm:right-[4rem] sm:w-20" />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="grid gap-px bg-rose/20 lg:grid-cols-[1.05fr_0.95fr_0.8fr]">
        <FadeIn className="relative overflow-hidden bg-[linear-gradient(180deg,#B28B9F_0%,#7c6980_100%)] px-8 py-12 text-paper sm:px-10 lg:min-h-[16rem] lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(246,241,245,0.24),transparent_24%),linear-gradient(180deg,rgba(61,68,81,0.08),rgba(26,31,43,0.2))]" />
          <div className="relative max-w-lg space-y-5">
            <p className="text-5xl leading-none text-white/90">“</p>
            <p className="font-serif text-3xl leading-tight text-paper sm:text-4xl">
              Good AI product design is not just what the interface shows, but how clearly the system earns trust.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="bg-[linear-gradient(180deg,#3D4451_0%,#1A1F2B_100%)] px-8 py-12 text-paper sm:px-10 lg:min-h-[16rem] lg:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-rose/78">Let&apos;s Work Together</p>
          <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
            Have a project in mind? I&apos;d love to hear about it.
          </h2>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-between gap-4 border border-rose/40 bg-rose/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.28em] transition hover:bg-rose hover:text-ink">
            Contact Me
            <span aria-hidden="true">↗</span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.16} className="bg-[#222939] px-8 py-12 text-paper/76 sm:px-10 lg:min-h-[16rem] lg:px-12">
          <div className="space-y-5">
            {contactMethods.map((method) => (
              <Link key={method.label} href={method.href} className="flex items-start gap-3 border-b border-rose/15 pb-4 last:border-b-0 last:pb-0 hover:text-paper">
                <span className="mt-1 text-xs uppercase tracking-[0.25em] text-rose/60">{method.label}</span>
                <span className="text-sm leading-7">{method.value}</span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
