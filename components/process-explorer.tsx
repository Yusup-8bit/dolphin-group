"use client";

import { ArrowRight, Check, Code2, Headphones, Layers3, Rocket, Search, ShieldCheck } from "lucide-react";
import { KeyboardEvent, useState } from "react";

const steps = [
  { title: "Анализ", description: "Разбираем бизнес-контекст, пользователей, ограничения и критерии готовности.", output: "Карта задачи и границы проекта", icon: Search },
  { title: "Проектирование", description: "Собираем сценарии, архитектуру, модель данных и интеграционный контур.", output: "Прототип и технический план", icon: Layers3 },
  { title: "Разработка", description: "Двигаемся короткими итерациями и регулярно показываем рабочую версию.", output: "Проверяемые инкременты", icon: Code2 },
  { title: "Тестирование", description: "Проверяем основные и исключительные сценарии, данные, безопасность и стабильность.", output: "Готовый к запуску контур", icon: ShieldCheck },
  { title: "Запуск", description: "Готовим окружение, документацию, миграции и управляемый выход в production.", output: "Работающий продукт", icon: Rocket },
  { title: "Поддержка", description: "Наблюдаем за системой, разбираем сигналы и планируем развитие по приоритетам.", output: "План развития и эксплуатации", icon: Headphones },
] as const;

export default function ProcessExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const step = steps[activeIndex];
  const ActiveIcon = step.icon;

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = activeIndex;
    if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = steps.length - 1;
    else if (event.key === "ArrowRight") nextIndex = (activeIndex + 1) % steps.length;
    else nextIndex = (activeIndex - 1 + steps.length) % steps.length;
    setActiveIndex(nextIndex);
    requestAnimationFrame(() => document.getElementById(`process-tab-${nextIndex}`)?.focus());
  }

  return (
    <div className="overflow-hidden border bg-white">
      <div className="relative grid grid-cols-2 border-b sm:grid-cols-3 lg:grid-cols-6" role="tablist" aria-label="Этапы работы" onKeyDown={handleKeyDown}>
        <div className="absolute bottom-0 left-0 h-1 bg-brand transition-transform duration-500 ease-out" style={{ width: `${100 / steps.length}%`, transform: `translateX(${activeIndex * 100}%)` }} />
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <button key={item.title} id={`process-tab-${index}`} type="button" role="tab" tabIndex={activeIndex === index ? 0 : -1} aria-selected={activeIndex === index} aria-controls="process-panel" className={`relative min-h-24 border-r p-3 text-left transition-colors last:border-r-0 sm:min-h-28 ${activeIndex === index ? "bg-blue-50 text-ink" : "text-muted hover:bg-slate-50"}`} onClick={() => setActiveIndex(index)}>
              <span className="flex items-center justify-between"><Icon size={17} aria-hidden="true" className={activeIndex === index ? "text-brand" : "text-slate-400"} /><span className="font-mono text-[9px]">0{index + 1}</span></span>
              <strong className="mt-4 block text-sm tracking-[-0.03em]">{item.title}</strong>
            </button>
          );
        })}
      </div>

      <div id="process-panel" role="tabpanel" aria-labelledby={`process-tab-${activeIndex}`} className="grid gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:items-center lg:p-10" aria-live="polite">
        <div className="lg:col-span-2"><span className="grid size-20 place-items-center bg-navy text-cyan"><ActiveIcon size={30} strokeWidth={1.6} aria-hidden="true" /></span></div>
        <div className="lg:col-span-6"><span className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-brand">Этап 0{activeIndex + 1} / 0{steps.length}</span><h3 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-ink sm:text-4xl">{step.title}</h3><p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{step.description}</p></div>
        <div className="border-t pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"><span className="font-mono text-[9px] uppercase tracking-[.15em] text-muted">Результат этапа</span><p className="mt-3 flex items-start gap-3 font-bold leading-6 text-ink"><Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />{step.output}</p>{activeIndex < steps.length - 1 ? <button type="button" className="group mt-6 flex min-h-11 items-center gap-3 text-sm font-bold text-brand" onClick={() => setActiveIndex((index) => index + 1)}>Следующий этап <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} aria-hidden="true" /></button> : null}</div>
      </div>
    </div>
  );
}
