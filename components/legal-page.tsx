import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-screen bg-canvas px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-ink hover:text-brand">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to home
        </Link>

        <div className="mt-12 border-t pt-10 sm:mt-16 sm:pt-14">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</span>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-ink">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{intro}</p>
        </div>

        <div className="mt-14 border-t sm:mt-20">
          {sections.map((section, index) => (
            <section key={section.title} className="grid gap-5 border-b py-8 sm:grid-cols-[64px_1fr] sm:gap-8 sm:py-10">
              <span className="font-mono text-xs font-bold text-brand">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-ink">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="max-w-3xl leading-7 text-muted">{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-8 text-sm leading-6 text-muted">
          Document version: August 1, 2026. Company details and contact information must be verified by the site owner before commercial launch.
        </p>
      </div>
    </main>
  );
}
