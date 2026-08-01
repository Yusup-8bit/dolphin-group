"use client";

import { Bot, Braces, ChartNoAxesCombined, LayoutDashboard } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { ServiceVisual } from "@/components/service-visuals";

const demos = [
  { id: "crm", label: "CRM-дашборд", description: "Воронка, сигналы и рабочие статусы в одном операционном представлении.", icon: LayoutDashboard, visual: "crm" as const },
  { id: "ai", label: "AI-агент", description: "Диалог с источниками, контекстом и прозрачным вызовом инструментов.", icon: Bot, visual: "ai" as const },
  { id: "api", label: "API-контур", description: "Связи сервисов, центральный gateway и наблюдаемые состояния обмена.", icon: Braces, visual: "api" as const },
  { id: "analytics", label: "Аналитический отчёт", description: "Показатели, динамика и сигналы, собранные вокруг управленческого вопроса.", icon: ChartNoAxesCombined, visual: "analytics" as const },
] as const;

export default function DemoLab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = demos[activeIndex];

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const nextIndex = event.key === "ArrowRight" ? (activeIndex + 1) % demos.length : (activeIndex - 1 + demos.length) % demos.length;
    setActiveIndex(nextIndex);
    requestAnimationFrame(() => document.getElementById(`demo-tab-${nextIndex}`)?.focus());
  }

  return (
    <div className="overflow-hidden border border-slate-700 bg-navy p-4 text-white sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-8">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[.16em] text-cyan">Demo interfaces / not client work</span>
          <div className="mt-5 space-y-2" role="tablist" aria-label="Демонстрационные интерфейсы" onKeyDown={handleKeyDown}>
            {demos.map((demo, index) => {
              const Icon = demo.icon;
              return <button key={demo.id} id={`demo-tab-${index}`} type="button" role="tab" tabIndex={activeIndex === index ? 0 : -1} aria-selected={activeIndex === index} aria-controls="demo-panel" className={`flex min-h-14 w-full items-center gap-3 border p-3 text-left text-sm font-bold transition-colors ${activeIndex === index ? "border-brand bg-brand" : "border-slate-700 bg-[#101e3d] text-slate-300 hover:border-blue-400"}`} onClick={() => setActiveIndex(index)}><Icon size={17} aria-hidden="true" />{demo.label}<span className="ml-auto font-mono text-[8px]">0{index + 1}</span></button>;
            })}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">Все интерфейсы — объясняющие demo-композиции, а не изображения клиентских проектов.</p>
        </div>
        <div id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${activeIndex}`} aria-live="polite">
          <ServiceVisual service={active.visual} />
          <div className="mt-4 flex flex-col gap-2 border-l-2 border-cyan pl-4 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="font-extrabold tracking-[-0.03em]">{active.label}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{active.description}</p></div><span className="shrink-0 font-mono text-[8px] uppercase tracking-[.14em] text-cyan">Interactive demo</span></div>
        </div>
      </div>
    </div>
  );
}
