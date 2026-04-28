import Link from "next/link";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactMethods } from "@/lib/site-data";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <section className="container-shell py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Reach out for internships, collaboration, or product conversation."
        description="Sprint 1 keeps contact simple and accessible: direct channels, clear labels, and fast ways to connect without friction."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="surface-card p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">Availability</p>
          <h2 className="mt-4 font-serif text-4xl text-paper">Open to internship opportunities in AI product, front-end, and interactive experience work.</h2>
          <p className="mt-5 text-base leading-7 text-mist">
            If you are hiring for a role that values technical curiosity, product thinking, and design-aware implementation, I would like to talk.
          </p>
        </FadeIn>

        <div className="grid gap-4">
          {contactMethods.map((method, index) => (
            <FadeIn key={method.label} delay={index * 0.08}>
              <Link
                href={method.href}
                className="surface-card flex items-center justify-between gap-4 p-6 transition hover:border-rose/30 hover:bg-white/10"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-mist">{method.label}</p>
                  <p className="mt-3 text-xl text-paper">{method.value}</p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-mist">Open</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}