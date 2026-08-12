import type { CSSProperties } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Braces,
  Database,
  Orbit,
  Route,
  ServerCog,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { InteractiveEcosystem } from "@/components/interactive-ecosystem";
import { ProjectShowcase } from "@/components/project-showcase";
import { RevealController } from "@/components/reveal-controller";
import { SiteHeader } from "@/components/site-header";

const ServiceExplorer = dynamic(() => import("@/components/service-explorer"));
const SolutionFinder = dynamic(() => import("@/components/solution-finder"));
const AutomationComparison = dynamic(() => import("@/components/automation-comparison"));
const ProcessExplorer = dynamic(() => import("@/components/process-explorer"));
const DemoLab = dynamic(() => import("@/components/demo-lab"));

const techGroups = [
  {
    number: "01",
    title: "Product",
    icon: Blocks,
    items: ["Next.js", "React", "TypeScript", "Node.js"],
    description: "Web applications and interfaces designed to evolve.",
  },
  {
    number: "02",
    title: "Systems",
    icon: Braces,
    items: ["REST", "GraphQL", "Webhooks", "PostgreSQL", "Redis"],
    description: "APIs, data, and reliable connections between services.",
  },
  {
    number: "03",
    title: "Infrastructure",
    icon: ServerCog,
    items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"],
    description: "Cloud environments for launch, operation, and scale.",
  },
  {
    number: "04",
    title: "Intelligence",
    icon: Database,
    items: ["Python", "LLM", "RAG", "BI", "RPA"],
    description: "AI, analytics, and automation for repetitive work.",
  },
];

const revealDelay = (delay: number) =>
  ({ "--reveal-delay": `${delay}ms` }) as CSSProperties;

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dolphin Group",
    description:
      "Technology partner for digital products, integrations, AI, automation, analytics, and cloud infrastructure.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  };

  return (
    <>
      <SiteHeader />
      <RevealController />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main id="top">
        <section className="relative overflow-hidden border-b bg-canvas pt-[72px]" data-nav-section="top">
          <div className="mx-auto grid max-w-[1440px] lg:min-h-[calc(100svh-72px)] lg:grid-cols-12">
            <div className="relative flex flex-col justify-between px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:col-span-7 lg:border-r lg:px-10 lg:pb-10 lg:pt-16">
              <div className="hero-enter">
                <div className="mb-7 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted sm:mb-10">
                  <span className="size-2 bg-brand" />
                  Digital products / AI / Cloud
                  <span className="hidden h-px flex-1 bg-line sm:block" />
                  <span className="hidden text-brand sm:inline">TAS / UTC+5</span>
                </div>

                <h1 className="max-w-[920px] text-[clamp(2.45rem,12vw,3.2rem)] font-extrabold leading-[0.91] tracking-[-0.075em] text-ink sm:text-[clamp(3.3rem,7vw,7.25rem)]">
                  We connect business
                  <span className="block text-brand">with technology</span>
                  <span className="block">that works.</span>
                </h1>

                <div className="mt-8 grid gap-7 border-t pt-7 sm:mt-10 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10 lg:max-w-[800px]">
                  <p className="max-w-[660px] text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                    We design and launch web products, CRM systems, AI agents, and cloud infrastructure — with one team across the entire system.
                  </p>
                  <a href="#services" className="group flex size-14 shrink-0 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-white" aria-label="Explore services">
                    <ArrowDown className="transition-transform group-hover:translate-y-1" aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#contact" className="group flex min-h-14 items-center justify-between gap-8 bg-brand px-5 font-bold text-white transition-colors hover:bg-brand-deep sm:min-w-[236px]">
                    Discuss a project
                    <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                  <a href="#solution" className="flex min-h-14 items-center justify-between gap-8 border border-ink px-5 font-bold text-ink transition-colors hover:bg-blue-50 sm:min-w-[214px]">
                    Find your solution
                    <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="hero-enter-delayed mt-10 grid grid-cols-3 border-y sm:mt-16 lg:max-w-[800px]">
                {["Product", "Systems", "Automation"].map((item, index) => (
                  <div key={item} className={`py-3 text-center ${index > 0 ? "border-l" : ""}`}>
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:text-[10px]">0{index + 1} / {item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-enter-delayed relative px-4 pb-4 sm:px-6 sm:pb-6 lg:col-span-5 lg:flex lg:h-[calc(100svh-72px)] lg:self-start lg:items-stretch lg:p-0">
              <div className="absolute left-6 top-0 h-4 w-px bg-line lg:hidden" />
              <div className="w-full lg:min-h-full"><InteractiveEcosystem /></div>
            </div>
          </div>
        </section>

        <section id="services" data-nav-section="services" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 border-b pb-12 lg:grid-cols-12 lg:pb-16">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="01" label="Services" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(80)}>
                <h2 className="max-w-[900px] text-[clamp(2.5rem,5.2vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-ink">
                  Not a service list — <span className="text-brand">nine working systems.</span>
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                  Hover, focus, or open a discipline. Each interface explains how the system works without pretending to be client evidence.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-14" data-reveal><ServiceExplorer /></div>
          </div>
        </section>

        <section id="solution" data-nav-section="services" className="scroll-mt-24 border-y bg-blue-50 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="02" label="Solution finder" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}>
                <h2 className="text-[clamp(2.5rem,5vw,5.2rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">What should the system <span className="text-brand">change for you?</span></h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Choose the business challenge. We will show a connected service path without invented pricing or timelines.</p>
              </div>
            </div>
            <div className="mt-12 lg:mt-16" data-reveal><SolutionFinder /></div>
          </div>
        </section>

        <section id="work" data-nav-section="work" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 border-b pb-12 lg:grid-cols-12 lg:pb-16">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="03" label="Selected work" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(80)}>
                <h2 className="max-w-[920px] text-[clamp(2.5rem,5.2vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-ink">
                  Product thinking, <span className="text-brand">made visible.</span>
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                  Three original concept studies show how we approach commerce, operational software, and AI-assisted workflows. They demonstrate capability, not fabricated client outcomes.
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <ProjectShowcase />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28 lg:py-36" data-nav-section="work">
          <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5" data-reveal>
                <SectionLabel number="04" label="Why Dolphin Group" dark />
                <h2 className="mt-10 max-w-[650px] text-[clamp(2.5rem,5vw,5.2rem)] font-extrabold leading-[0.98] tracking-[-0.065em]">
                  Beyond the code.<span className="block text-cyan">Working connections</span>across your business.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7" data-reveal style={revealDelay(100)}>
                <div className="border-l border-slate-700 pl-5 sm:pl-8">
                  {[
                    ["01", "One line of responsibility", "Product, integrations, data, AI, and cloud stay aligned within one delivery team."],
                    ["02", "Architecture before scale", "We map connections and constraints early, so a fast start does not become a dead end."],
                    ["03", "The language of the problem", "We explain decisions through workflows, risk, and team impact — without unnecessary technical noise."],
                    ["04", "Visible iterations", "We demonstrate working outcomes throughout delivery and adjust before changes become expensive."],
                  ].map(([number, title, description]) => (
                    <article key={number} className="relative border-t border-slate-700 py-7 first:border-t-0 sm:grid sm:grid-cols-[44px_1fr] sm:gap-6 sm:py-8">
                      <span className="absolute -left-[25px] top-8 size-2 bg-cyan sm:-left-[37px]" aria-hidden="true" />
                      <span className="font-mono text-xs text-cyan">{number}</span>
                      <div className="mt-3 sm:mt-0"><h3 className="text-xl font-bold tracking-[-0.035em] sm:text-2xl">{title}</h3><p className="mt-3 max-w-xl leading-7 text-slate-400">{description}</p></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-16 grid border border-slate-700 bg-[#101e3d]/70 md:grid-cols-4 lg:mt-24" data-reveal>
              {["Idea", "Product", "System", "Scale"].map((item, index) => (
                <div key={item} className={`relative flex min-h-28 items-end justify-between p-5 ${index > 0 ? "border-t border-slate-700 md:border-l md:border-t-0" : ""}`}>
                  <span className="font-bold">{item}</span><span className="font-mono text-[10px] text-slate-500">0{index + 1}</span>
                  {index < 3 ? <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 bg-[#101e3d] p-1 text-cyan md:block" aria-hidden="true" /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-canvas py-20 sm:py-28 lg:py-32" data-nav-section="process">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="05" label="Automation" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}><h2 className="text-[clamp(2.5rem,5vw,5.1rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">See exactly <span className="text-brand">what changes.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">No unsupported percentages — only a clear comparison of the data path and the team’s role.</p></div>
            </div>
            <div className="mt-12 lg:mt-16" data-reveal><AutomationComparison /></div>
          </div>
        </section>

        <section id="process" data-nav-section="process" className="scroll-mt-24 border-y bg-white py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="06" label="Process" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}><h2 className="text-[clamp(2.5rem,5vw,5.1rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">Meaning first. <span className="text-brand">System second.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Explore each stage. Every one ends with a concrete artifact your team can review and use.</p></div>
            </div>
            <div className="mt-12 lg:mt-16" data-reveal><ProcessExplorer /></div>
          </div>
        </section>

        <section id="technology" data-nav-section="technology" className="scroll-mt-24 bg-canvas py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="07" label="Technology" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(80)}><h2 className="text-[clamp(2.5rem,5vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">The stack follows the problem, <span className="block text-brand">not the other way around.</span></h2><p className="mt-7 max-w-2xl text-lg leading-8 text-muted">We choose technology that stays understandable to maintain, reliable in operation, and ready for the next business stage.</p></div>
            </div>
            <div className="mt-14 border-t lg:mt-20">
              {techGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <article key={group.number} className="grid gap-5 border-b py-7 md:grid-cols-12 md:items-center md:gap-6 md:py-9" data-reveal style={revealDelay((index % 2) * 60)}>
                    <div className="flex items-center gap-4 md:col-span-3"><span className="grid size-11 place-items-center border bg-white text-brand"><Icon size={20} aria-hidden="true" /></span><div><span className="font-mono text-[10px] font-bold text-brand">{group.number}</span><h3 className="text-xl font-extrabold tracking-[-0.04em] text-ink">{group.title}</h3></div></div>
                    <p className="max-w-md leading-7 text-muted md:col-span-4">{group.description}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs font-bold text-ink md:col-span-5 md:justify-end">{group.items.map((item) => <span key={item} className="border-b border-blue-200 py-1">{item}</span>)}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 text-white sm:py-28 lg:py-32" data-nav-section="technology">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-3" data-reveal><SectionLabel number="08" label="Demo lab" dark /></div><div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}><h2 className="text-[clamp(2.5rem,5vw,5.1rem)] font-extrabold leading-[0.98] tracking-[-0.065em]">The interface is <span className="text-cyan">part of the explanation.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Switch between demo compositions to explore possible mechanics without presenting them as client projects.</p></div></div>
            <div className="mt-12 lg:mt-16" data-reveal><DemoLab /></div>
          </div>
        </section>

        <section className="border-y bg-white py-20 sm:py-28 lg:py-32" data-nav-section="about">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="09" label="Client experience" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}>
                <h2 className="max-w-[900px] text-[clamp(2.5rem,5vw,5.1rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">
                  What teams should feel <span className="text-brand">throughout the build.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                  Approved client quotations were not provided, so we keep this section factual: these are the collaboration standards we are prepared to be measured against.
                </p>
              </div>
            </div>

            <div className="mt-14 border-y lg:ml-[25%] lg:mt-20">
              {[
                ["01", "For founders", "Clear assumptions before commitment.", "Scope, trade-offs, and next decisions stay visible from discovery through launch."],
                ["02", "For product teams", "Working software stays in the conversation.", "Regular demonstrations make feedback concrete while changes are still affordable."],
                ["03", "For operations teams", "The whole workflow matters.", "Interfaces, integrations, data states, and exception handling are designed as one system."],
              ].map(([number, audience, title, description], index) => (
                <article key={number} className="grid gap-4 border-b py-7 last:border-b-0 sm:grid-cols-[72px_180px_1fr] sm:gap-6 sm:py-9" data-reveal style={revealDelay(index * 70)}>
                  <span className="font-mono text-xs font-bold text-brand">{number}</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted">{audience}</span>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-[-0.04em] text-ink sm:text-2xl">{title}</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-muted">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" data-nav-section="about" className="scroll-mt-24 bg-blue-50 py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3" data-reveal><SectionLabel number="10" label="Company" /></div><div className="lg:col-span-9" data-reveal style={revealDelay(90)}><p className="max-w-[1120px] text-[clamp(2.15rem,5.2vw,5.7rem)] font-extrabold leading-[1.02] tracking-[-0.065em] text-ink">Dolphin Group helps businesses create digital products,<span className="text-brand"> automate operations,</span> and connect IT systems.</p></div></div>
            <div className="mt-16 grid gap-8 border-t pt-10 md:grid-cols-3 lg:ml-[25%] lg:mt-24">
              {[
                ["01", "Look beyond the interface", "Consider data, roles, external services, and operations — everything that shapes how the product works in practice."],
                ["02", "Remove avoidable complexity", "Choose understandable solutions and explain trade-offs so the team can manage the system with confidence."],
                ["03", "Build for the next stage", "Shape the first release so future features and integrations do not require starting over."],
              ].map(([number, title, description], index) => <article key={number} data-reveal style={revealDelay(index * 70)}><span className="font-mono text-xs font-bold text-brand">{number}</span><h3 className="mt-5 text-xl font-extrabold tracking-[-0.04em] text-ink">{title}</h3><p className="mt-4 leading-7 text-muted">{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12"><div className="px-4 py-16 sm:px-6 sm:py-20 lg:col-span-9 lg:px-10 lg:py-28" data-reveal><span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100">Next step / 01</span><h2 className="mt-7 max-w-[1050px] text-[clamp(2.65rem,6.8vw,7.2rem)] font-extrabold leading-[0.92] tracking-[-0.075em]">Have a challenge where the systems do not connect?</h2></div><a href="#contact" className="group flex min-h-40 items-end justify-between border-t border-blue-400 bg-brand-deep p-6 text-xl font-bold transition-colors hover:bg-navy lg:col-span-3 lg:min-h-full lg:border-l lg:border-t-0 lg:p-8">Let’s map the right system<ArrowUpRight className="size-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></a></div>
        </section>

        <section id="contact" data-nav-section="contact" className="scroll-mt-20 bg-navy py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><div className="grid gap-10 lg:grid-cols-12 lg:items-start"><div className="text-white lg:col-span-4" data-reveal><SectionLabel number="11" label="Contact" dark /><h2 className="mt-9 text-[clamp(2.55rem,4.6vw,4.9rem)] font-extrabold leading-[0.98] tracking-[-0.065em]">Start with the challenge.</h2><p className="mt-6 max-w-md text-lg leading-8 text-slate-400">Describe the context, desired outcome, and current constraints. That gives us a useful place to begin.</p><div className="mt-10 border-t border-slate-700 pt-6"><div className="flex items-center gap-3 text-sm font-semibold text-slate-300"><Route className="size-5 text-cyan" aria-hidden="true" />Discovery → architecture → launch</div><div className="mt-4 flex items-center gap-3 text-sm font-semibold text-slate-300"><Orbit className="size-5 text-cyan" aria-hidden="true" />One connected technology system</div></div></div><div className="lg:col-span-7 lg:col-start-6" data-reveal style={revealDelay(90)}><ContactForm /></div></div></div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-navy text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><a href="#top" className="inline-flex min-h-11 items-center gap-3" aria-label="Dolphin Group — back to top"><span className="grid size-9 place-items-center bg-brand text-xs font-extrabold">DG</span><span className="text-lg font-extrabold tracking-[-0.04em]">Dolphin Group<span className="text-cyan">.</span></span></a><p className="mt-5 max-w-md leading-7 text-slate-400">Digital products, integrations, AI, analytics, automation, and cloud infrastructure.</p></div>
            <nav className="lg:col-span-2" aria-label="Footer navigation"><FooterTitle>Explore</FooterTitle><div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-300"><a href="#services" className="hover:text-white">Services</a><a href="#work" className="hover:text-white">Work</a><a href="#process" className="hover:text-white">Approach</a><a href="#technology" className="hover:text-white">Technology</a><a href="#about" className="hover:text-white">Company</a></div></nav>
            <div className="lg:col-span-2"><FooterTitle>Contact</FooterTitle><a href="#contact" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white hover:text-cyan">Discuss a project<ArrowUpRight size={16} aria-hidden="true" /></a><p className="mt-2 text-xs leading-5 text-slate-500">Contact channel setup in progress.</p></div>
            <div className="lg:col-span-3"><FooterTitle>Documents</FooterTitle><div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-300"><Link href="/privacy" className="hover:text-white">Privacy policy</Link><Link href="/terms" className="hover:text-white">Terms of use</Link></div></div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 font-mono text-[10px] uppercase tracking-[0.13em] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Dolphin Group</span><span>Digital systems / built to connect</span></div>
        </div>
      </footer>
    </>
  );
}

function SectionLabel({ number, label, dark = false }: { number: string; label: string; dark?: boolean }) {
  return <div className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${dark ? "text-slate-400" : "text-muted"}`}><span className={`grid size-7 place-items-center ${dark ? "bg-cyan text-navy" : "bg-brand text-white"}`}>{number}</span>{label}</div>;
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">{children}</h2>;
}
