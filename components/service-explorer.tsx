"use client";

import { ArrowRight, Bot, Braces, ChartNoAxesCombined, Cloud, Gauge, RefreshCcw, ShoppingBag, Sparkles, Workflow } from "lucide-react";
import { useState } from "react";
import { sendServiceToContact } from "@/lib/service-intent";
import { services, type ServiceId } from "@/lib/services";
import { ServiceVisual } from "@/components/service-visuals";

const icons = {
  mvp: Sparkles,
  crm: Gauge,
  api: Braces,
  cloud: Cloud,
  commerce: ShoppingBag,
  ai: Bot,
  growth: Workflow,
  analytics: ChartNoAxesCombined,
  rpa: RefreshCcw,
};

export default function ServiceExplorer() {
  const [activeId, setActiveId] = useState<ServiceId>("mvp");
  const activeService = services.find((service) => service.id === activeId) ?? services[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        {services.map((service) => {
          const Icon = icons[service.id];
          const isActive = activeId === service.id;
          return (
            <article key={service.id} className="border-b first:border-t">
              <button
                type="button"
                className={`spotlight-card group relative flex min-h-[86px] w-full items-center gap-4 overflow-hidden px-3 py-4 text-left transition-colors sm:px-4 ${isActive ? "bg-blue-50" : "bg-white hover:bg-slate-50"}`}
                aria-expanded={isActive}
                aria-controls={`service-${service.id}`}
                onPointerEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
              >
                <span className={`grid size-10 shrink-0 place-items-center border transition-colors ${isActive ? "border-brand bg-brand text-white" : "bg-white text-brand"}`}><Icon size={18} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><span className="font-mono text-[9px] font-bold uppercase tracking-[.14em] text-brand">{service.number} / {service.marker}</span><strong className="mt-1 block text-base font-extrabold tracking-[-0.035em] text-ink sm:text-lg">{service.title}</strong></span>
                <ArrowRight size={18} aria-hidden="true" className={`shrink-0 transition-transform ${isActive ? "translate-x-1 text-brand" : "text-slate-400"}`} />
              </button>

              <div id={`service-${service.id}`} className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${isActive ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-5 bg-navy p-4 text-white sm:p-6">
                  <ServiceVisual service={service.id} compact />
                  <ServiceDetail service={service} onSelect={() => sendServiceToContact(service.id)} />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hidden lg:col-span-7 lg:block">
        <div className="sticky top-24 overflow-hidden bg-navy p-6 text-white xl:p-8">
          <ServiceVisual service={activeService.id} />
          <div className="mt-7" aria-live="polite">
            <ServiceDetail service={activeService} onSelect={() => sendServiceToContact(activeService.id)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceDetail({ service, onSelect }: { service: (typeof services)[number]; onSelect: () => void }) {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><span className="font-mono text-[9px] uppercase tracking-[.15em] text-cyan">Challenge</span><p className="mt-2 text-sm leading-6 text-slate-300">{service.problem}</p></div>
        <div><span className="font-mono text-[9px] uppercase tracking-[.15em] text-cyan">Deliverable</span><p className="mt-2 text-sm leading-6 text-slate-300">{service.result}</p></div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">{service.includes.map((item) => <span key={item} className="border border-slate-600 bg-[#101e3d] px-3 py-2 text-xs text-slate-200">{item}</span>)}</div>
      <button type="button" onClick={onSelect} className="group mt-6 flex min-h-12 w-full items-center justify-between bg-brand px-4 font-bold text-white transition-colors hover:bg-brand-deep sm:w-auto sm:min-w-[230px]">
        Discuss this service <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>
    </div>
  );
}
