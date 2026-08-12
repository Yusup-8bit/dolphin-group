"use client";

import { ArrowRight, Bot, FileSpreadsheet, RefreshCcw, Route, Send, UserRound } from "lucide-react";
import { KeyboardEvent, useState } from "react";

const states = {
  before: {
    label: "Before automation",
    eyebrow: "Manual flow",
    items: [
      { title: "Manual intake", detail: "A manager reads and routes every inquiry.", icon: UserRound },
      { title: "Data re-entry", detail: "Information is copied across forms, spreadsheets, and CRM.", icon: RefreshCcw },
      { title: "Report preparation", detail: "Metrics are assembled manually from several sources.", icon: FileSpreadsheet },
      { title: "Repeated follow-up", detail: "The next action depends on a teammate’s memory and workload.", icon: Send },
    ],
  },
  after: {
    label: "After automation",
    eyebrow: "Connected flow",
    items: [
      { title: "Automatic routing", detail: "Each inquiry enters the right workflow and reaches the right owner.", icon: Route },
      { title: "CRM synchronization", detail: "Records and states update through defined rules.", icon: RefreshCcw },
      { title: "Live reporting", detail: "Data is assembled into a shared, current view.", icon: FileSpreadsheet },
      { title: "Alerts and AI assistance", detail: "The system surfaces context and triggers the next step.", icon: Bot },
    ],
  },
} as const;

type StateKey = keyof typeof states;

export default function AutomationComparison() {
  const [active, setActive] = useState<StateKey>("before");
  const current = states[active];

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const next = active === "before" ? "after" : "before";
    setActive(next);
    requestAnimationFrame(() => document.getElementById(`automation-tab-${next}`)?.focus());
  }

  return (
    <div className="grid overflow-hidden border bg-white lg:grid-cols-[320px_1fr]">
      <div className="border-b p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-brand">Automation / compare</span>
        <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.05em] text-ink sm:text-3xl">One process.<br />Two states.</h3>
        <p className="mt-4 leading-7 text-muted">Switch the view to see how connections and team responsibilities change.</p>
        <div className="mt-7 grid grid-cols-2 border" role="tablist" aria-label="Process state" onKeyDown={handleKeyDown}>
          {(Object.keys(states) as StateKey[]).map((key) => (
            <button key={key} id={`automation-tab-${key}`} type="button" role="tab" tabIndex={active === key ? 0 : -1} aria-selected={active === key} aria-controls="automation-panel" className={`min-h-12 px-3 text-sm font-bold transition-colors ${active === key ? "bg-brand text-white" : "bg-white text-muted hover:bg-blue-50"}`} onClick={() => setActive(key)}>{key === "before" ? "Before" : "After"}</button>
          ))}
        </div>
      </div>

      <div id="automation-panel" role="tabpanel" aria-labelledby={`automation-tab-${active}`} className={`relative overflow-hidden p-5 transition-colors duration-500 sm:p-8 ${active === "after" ? "bg-navy text-white" : "bg-slate-50 text-ink"}`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.16)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative">
          <div className="flex items-center justify-between"><span className={`font-mono text-[9px] uppercase tracking-[.16em] ${active === "after" ? "text-cyan" : "text-brand"}`}>{current.eyebrow}</span><span className="font-mono text-[9px] text-slate-400">01 → 04</span></div>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {current.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={`relative min-h-52 border p-4 transition-all duration-500 ${active === "after" ? "border-slate-600 bg-[#101e3d]" : "bg-white"}`}>
                  <div className="flex items-center justify-between"><span className={`grid size-9 place-items-center ${active === "after" ? "bg-brand text-white" : "border bg-slate-50 text-muted"}`}><Icon size={17} aria-hidden="true" /></span><span className="font-mono text-[9px] text-slate-400">0{index + 1}</span></div>
                  <h4 className="mt-8 font-extrabold leading-5 tracking-[-0.03em]">{item.title}</h4>
                  <p className={`mt-3 text-xs leading-5 ${active === "after" ? "text-slate-400" : "text-muted"}`}>{item.detail}</p>
                  {index < current.items.length - 1 ? <ArrowRight className={`absolute -right-[18px] top-1/2 z-10 hidden size-5 -translate-y-1/2 md:block ${active === "after" ? "text-cyan" : "text-slate-300"}`} aria-hidden="true" /> : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
