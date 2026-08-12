import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Mercato",
    category: "E-commerce marketplace",
    image: "/images/projects/mercato-marketplace.webp",
    alt: "Concept interface for a multi-vendor marketplace with a product catalog, seller profile, cart, and mobile storefront",
    description:
      "A multi-vendor storefront where discovery, seller trust, checkout, and operations work as one connected commerce flow.",
    scope: ["Product strategy", "UX & UI", "Commerce architecture"],
    className: "lg:col-span-8",
    imageClassName: "aspect-[3/2]",
  },
  {
    number: "02",
    name: "Northline",
    category: "Operations dashboard",
    image: "/images/projects/northline-operations.webp",
    alt: "Concept logistics operations dashboard with an exception queue, fleet map, shipment timeline, and workload chart",
    description:
      "A decision-first control room that surfaces exceptions, route context, and workload before decorative metrics.",
    scope: ["Workflow design", "Data interface", "Systems integration"],
    className: "lg:col-span-4 lg:pt-28",
    imageClassName: "aspect-[4/3] lg:aspect-[3/4]",
  },
  {
    number: "03",
    name: "Relay",
    category: "AI service workspace",
    image: "/images/projects/relay-ai-workspace.webp",
    alt: "Concept AI support workspace showing cited sources, an approval queue, automation steps, and human handoff",
    description:
      "An AI-assisted support workspace built around evidence, approvals, and a visible handoff to a human teammate.",
    scope: ["AI product design", "Knowledge workflow", "Human-in-the-loop"],
    className: "lg:col-span-9 lg:col-start-4",
    imageClassName: "aspect-[3/2]",
  },
] as const;

export function ProjectShowcase() {
  return (
    <div className="grid gap-x-6 gap-y-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-24">
      {projects.map((project) => (
        <article key={project.name} className={project.className} data-reveal>
          <div className="group relative overflow-hidden bg-slate-100">
            <div className={project.imageClassName}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes={
                  project.number === "02"
                    ? "(min-width: 1024px) 32vw, 100vw"
                    : "(min-width: 1024px) 72vw, 100vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
            </div>
            <span className="absolute left-3 top-3 bg-navy px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white sm:left-4 sm:top-4">
              Concept study / {project.number}
            </span>
          </div>

          <div className={`mt-5 grid gap-5 border-t pt-5 sm:grid-cols-[minmax(0,1fr)_minmax(240px,0.72fr)] sm:items-start ${project.number === "02" ? "lg:grid-cols-1" : ""}`}>
            <div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-brand">
                {project.category}
              </span>
              <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.055em] text-ink sm:text-4xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-muted">{project.description}</p>
            </div>
            <div className={`sm:border-l sm:pl-5 ${project.number === "02" ? "lg:border-l-0 lg:border-t lg:pl-0 lg:pt-5" : ""}`}>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">Capability focus</span>
              <ul className="mt-3 space-y-2 text-sm font-bold text-ink">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-center justify-between border-b pb-2">
                    {item}
                    <ArrowUpRight size={14} className="text-brand" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
