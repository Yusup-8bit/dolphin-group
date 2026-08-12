"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { sendServiceToContact } from "@/lib/service-intent";
import { serviceById, type ServiceId } from "@/lib/services";

const tasks: { id: string; label: string; services: ServiceId[]; note: string }[] = [
  { id: "launch", label: "Launch a new product", services: ["mvp", "api", "cloud"], note: "Shape the first release, its integration layer, and the environment it needs to launch." },
  { id: "automate", label: "Automate a process", services: ["rpa", "growth", "ai"], note: "Find repetitive work and turn it into a controlled, observable workflow." },
  { id: "connect", label: "Connect business systems", services: ["api", "analytics", "cloud"], note: "Design data exchange, failure handling, and operational visibility." },
  { id: "dashboard", label: "Build a CRM or dashboard", services: ["crm", "analytics", "api"], note: "Create an interface around your team's decisions, roles, and data." },
  { id: "agent", label: "Introduce AI", services: ["ai", "api", "analytics"], note: "Define the assistant's role, trusted sources, and action boundaries." },
  { id: "migrate", label: "Move a system to the cloud", services: ["cloud", "api", "analytics"], note: "Prepare the migration, environments, and a sustainable operating model." },
  { id: "shop", label: "Create an e-commerce platform", services: ["commerce", "api", "crm"], note: "Connect catalog, checkout, payments, delivery, and order operations." },
];

export default function SolutionFinder() {
  const [activeTask, setActiveTask] = useState(tasks[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-6">
        <div className="grid gap-2 sm:grid-cols-2" role="list" aria-label="Business goals">
          {tasks.map((task, index) => {
            const selected = activeTask.id === task.id;
            return (
              <button
                key={task.id}
                type="button"
                className={`spotlight-card relative flex min-h-24 items-start justify-between overflow-hidden border p-4 text-left transition duration-300 ${selected ? "border-brand bg-brand text-white" : "bg-white text-ink hover:border-blue-300 hover:bg-blue-50"}`}
                aria-pressed={selected}
                onClick={() => setActiveTask(task)}
              >
                <span className="max-w-[210px] font-bold leading-6">{task.label}</span>
                <span className={`font-mono text-[9px] ${selected ? "text-blue-100" : "text-slate-400"}`}>0{index + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden bg-navy p-6 text-white sm:p-8 lg:col-span-6 lg:min-h-[430px]" aria-live="polite">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.13)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative">
          <span className="font-mono text-[9px] uppercase tracking-[.16em] text-cyan">Recommended system / {activeTask.id}</span>
          <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.05em] sm:text-3xl">{activeTask.label}</h3>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">{activeTask.note}</p>
          <div className="mt-7 space-y-2">
            {activeTask.services.map((serviceId, index) => (
              <div key={serviceId} className="flex items-center gap-4 border border-slate-700 bg-[#101e3d]/90 p-3">
                <span className={`grid size-7 place-items-center ${index === 0 ? "bg-cyan text-navy" : "border border-slate-600 text-slate-300"}`}>{index === 0 ? <Check size={15} aria-hidden="true" /> : `0${index + 1}`}</span>
                <span className="font-bold">{serviceById[serviceId].shortTitle}</span>
                <span className="ml-auto hidden font-mono text-[8px] uppercase text-slate-500 sm:block">{serviceById[serviceId].marker}</span>
              </div>
            ))}
          </div>
          <button type="button" className="group mt-7 flex min-h-13 w-full items-center justify-between bg-brand px-4 font-bold transition-colors hover:bg-brand-deep sm:w-auto sm:min-w-[250px]" onClick={() => sendServiceToContact(activeTask.services[0])}>
            Discuss this challenge <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
