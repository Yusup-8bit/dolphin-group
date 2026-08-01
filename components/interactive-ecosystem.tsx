"use client";

import Image from "next/image";
import { BarChart3, Bot, Braces, Cloud, LayoutDashboard, PanelsTopLeft } from "lucide-react";
import { useState } from "react";

const nodes = [
  { id: "web", label: "Web App", description: "Продуктовый интерфейс для клиентов и команды.", icon: PanelsTopLeft, position: "left-[6%] top-[17%]" },
  { id: "crm", label: "CRM", description: "Операционный контур, статусы и действия команды.", icon: LayoutDashboard, position: "right-[6%] top-[17%]" },
  { id: "api", label: "API", description: "Единый слой обмена данными между всеми системами.", icon: Braces, position: "left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2" },
  { id: "cloud", label: "Cloud", description: "Среда запуска, хранения и масштабирования продукта.", icon: Cloud, position: "bottom-[18%] left-[7%]" },
  { id: "ai", label: "AI", description: "Помощник, который работает с контекстом и системами.", icon: Bot, position: "bottom-[18%] right-[7%]" },
  { id: "analytics", label: "Analytics", description: "Понятные сигналы и отчёты для принятия решений.", icon: BarChart3, position: "bottom-[3%] left-1/2 -translate-x-1/2" },
] as const;

export function InteractiveEcosystem() {
  const [active, setActive] = useState<(typeof nodes)[number]["id"]>("api");
  const activeNode = nodes.find((node) => node.id === active) ?? nodes[2];

  return (
    <div className="relative isolate min-h-[610px] overflow-hidden bg-navy text-white lg:h-full lg:min-h-full">
      <Image
        src="/images/dolphin-group/ecosystem-field.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover opacity-35 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,21,49,.16),rgba(11,21,49,.82))]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="absolute inset-x-5 top-5 z-20 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400 sm:inset-x-7 sm:top-7">
        <span>Ecosystem / interactive</span>
        <span className="flex items-center gap-2 text-cyan"><i className="signal-pulse size-1.5 rounded-full bg-cyan" />Контур активен</span>
      </div>

      <svg viewBox="0 0 520 620" className="absolute inset-0 size-full" aria-hidden="true" preserveAspectRatio="none">
        <g fill="none" stroke="#3a4d72" strokeWidth="1.2">
          <path d="M82 142 C164 142 157 274 260 274" />
          <path d="M438 142 C356 142 363 274 260 274" />
          <path d="M86 472 C166 472 160 298 260 274" />
          <path d="M434 472 C354 472 360 298 260 274" />
          <path d="M260 560 V350 C260 320 260 304 260 274" />
        </g>
        <g fill="none" stroke="#22d3ee" strokeWidth="2" className="ecosystem-route">
          <path d="M82 142 C164 142 157 274 260 274" />
          <path d="M438 142 C356 142 363 274 260 274" />
          <path d="M86 472 C166 472 160 298 260 274" />
          <path d="M434 472 C354 472 360 298 260 274" />
          <path d="M260 560 V350 C260 320 260 304 260 274" />
        </g>
      </svg>

      <div className="absolute inset-0 z-10" role="group" aria-label="Интерактивная схема цифровой экосистемы Dolphin Group">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = node.id === active;
          return (
            <button
              key={node.id}
              type="button"
              className={`absolute ${node.position} group min-h-16 min-w-[104px] border p-3 text-left transition duration-300 sm:min-w-[124px] sm:p-4 ${isActive ? "border-cyan bg-brand shadow-[0_18px_60px_rgba(37,99,235,.35)]" : "border-slate-600 bg-[#101e3d]/95 hover:border-blue-400 hover:bg-[#14264d]"}`}
              aria-pressed={isActive}
              aria-describedby="ecosystem-description"
              onPointerEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              onClick={() => setActive(node.id)}
            >
              <span className="flex items-center justify-between gap-3">
                <Icon size={16} strokeWidth={1.7} aria-hidden="true" className={isActive ? "text-white" : "text-cyan"} />
                <span className={`size-1.5 rounded-full ${isActive ? "bg-white" : "bg-slate-600"}`} />
              </span>
              <strong className="mt-3 block text-sm tracking-[-0.03em] sm:text-base">{node.label}</strong>
            </button>
          );
        })}
      </div>

      <div id="ecosystem-description" className="absolute inset-x-5 bottom-[31%] z-20 mx-auto max-w-[270px] border-l-2 border-cyan bg-navy/90 p-3 text-center text-xs leading-5 text-slate-300 backdrop-blur-sm sm:bottom-[30%]">
        <span className="font-mono text-[8px] uppercase tracking-[.14em] text-cyan">{activeNode.label} / active</span>
        <p className="mt-1">{activeNode.description}</p>
      </div>

      <p className="sr-only">Web App, CRM, Cloud, AI и Analytics соединены через единый API-контур Dolphin Group.</p>
    </div>
  );
}
