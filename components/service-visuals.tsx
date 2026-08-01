import type { ServiceId } from "@/lib/services";

export function ServiceVisual({ service, compact = false }: { service: ServiceId; compact?: boolean }) {
  const content = {
    mvp: <MvpVisual />,
    crm: <CrmVisual />,
    api: <ApiVisual />,
    cloud: <CloudVisual />,
    commerce: <CommerceVisual />,
    ai: <AiVisual />,
    growth: <GrowthVisual />,
    analytics: <AnalyticsVisual />,
    rpa: <RpaVisual />,
  }[service];

  return (
    <div
      className={`relative isolate overflow-hidden border border-slate-700 bg-[#0d1934] text-white ${compact ? "min-h-56" : "min-h-[320px] sm:min-h-[390px]"}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.13)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative h-full min-h-[inherit] p-4 sm:p-6">{content}</div>
    </div>
  );
}

function WindowBar({ label }: { label: string }) {
  return (
    <div className="flex h-8 items-center justify-between border-b border-slate-700 px-3 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-500">
      <span className="flex gap-1"><i className="size-1.5 rounded-full bg-cyan" /><i className="size-1.5 rounded-full bg-blue-500" /><i className="size-1.5 rounded-full bg-slate-600" /></span>
      {label}
    </div>
  );
}

function MvpVisual() {
  return (
    <div className="absolute inset-5 rotate-[-1.5deg] border border-slate-600 bg-white text-navy shadow-2xl sm:inset-8">
      <WindowBar label="Product / Sprint 04" />
      <div className="grid h-[calc(100%-2rem)] grid-cols-[64px_1fr] sm:grid-cols-[92px_1fr]">
        <div className="border-r bg-slate-50 p-3"><div className="h-2 w-8 bg-brand" /><div className="mt-6 space-y-3">{[70,45,60,38].map((width) => <div key={width} className="h-1 bg-slate-300" style={{ width: `${width}%` }} />)}</div></div>
        <div className="p-4 sm:p-6"><span className="font-mono text-[8px] uppercase tracking-[.14em] text-brand">Workspace</span><div className="mt-3 h-5 w-2/3 bg-navy" /><div className="mt-5 grid grid-cols-3 gap-2">{["Backlog","Build","Ready"].map((item, index) => <div key={item} className="border bg-slate-50 p-2"><span className="text-[8px] font-bold">{item}</span><div className="mt-3 space-y-2">{Array.from({length: index + 2}).map((_, i) => <div key={i} className={`h-7 border ${i === 0 && index === 2 ? "border-blue-300 bg-blue-50" : "bg-white"}`} />)}</div></div>)}</div></div>
      </div>
    </div>
  );
}

function CrmVisual() {
  return (
    <div className="absolute inset-5 border border-slate-600 bg-[#f7f9fc] text-navy sm:inset-8">
      <WindowBar label="CRM / Pipeline" />
      <div className="p-4 sm:p-5"><div className="grid grid-cols-3 gap-2">{[["Новые","24"],["В работе","11"],["Следующий шаг","07"]].map(([label,value],i)=><div key={label} className="border bg-white p-2 sm:p-3"><span className="text-[7px] uppercase text-slate-400">{label}</span><strong className={`mt-1 block text-lg ${i===2?"text-brand":""}`}>{value}</strong></div>)}</div><div className="mt-3 grid grid-cols-[1fr_88px] gap-3"><div className="border bg-white p-3"><div className="flex h-24 items-end gap-2">{[36,58,45,74,61,88,72].map((height,i)=><i key={i} className={`flex-1 ${i===5?"bg-brand":"bg-blue-100"}`} style={{height:`${height}%`}} />)}</div><div className="mt-3 h-px bg-slate-200" /></div><div className="border bg-white p-2"><span className="text-[7px] uppercase text-slate-400">Activity</span>{["Lead","Call","Brief","Scope"].map((x,i)=><div key={x} className="mt-2 flex items-center gap-2 text-[8px]"><i className={`size-2 ${i<3?"bg-cyan":"bg-slate-200"}`} />{x}</div>)}</div></div></div>
    </div>
  );
}

function ApiVisual() {
  const nodes = [["Web","left-[8%] top-[16%]"],["CRM","right-[8%] top-[16%]"],["PAY","left-[8%] bottom-[15%]"],["ERP","right-[8%] bottom-[15%]"]];
  return (
    <div className="absolute inset-5 sm:inset-8"><svg viewBox="0 0 400 280" className="absolute inset-0 size-full"><path d="M60 54 C150 54 132 140 200 140 C268 140 250 54 340 54 M60 226 C150 226 132 140 200 140 C268 140 250 226 340 226" fill="none" stroke="#33476d" /><path d="M60 54 C150 54 132 140 200 140 C268 140 250 54 340 54 M60 226 C150 226 132 140 200 140 C268 140 250 226 340 226" fill="none" stroke="#22d3ee" strokeWidth="2" className="flow-line" /></svg>{nodes.map(([label,pos])=><div key={label} className={`absolute ${pos} grid size-14 place-items-center border border-slate-600 bg-[#111f3f] font-mono text-[9px] font-bold sm:size-16`}>{label}</div>)}<div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center bg-brand text-center sm:size-28"><div><span className="font-mono text-[7px] uppercase tracking-[.15em] text-blue-100">Gateway</span><strong className="mt-1 block text-lg">API</strong><span className="font-mono text-[7px] text-cyan">200 / OK</span></div></div></div>
  );
}

function CloudVisual() {
  return (
    <div className="absolute inset-x-5 bottom-5 top-8 sm:inset-x-8 sm:bottom-8"><div className="absolute left-1/2 top-0 -translate-x-1/2 text-center"><span className="font-mono text-[8px] uppercase tracking-[.16em] text-cyan">Cloud region / active</span></div><div className="absolute inset-x-[9%] bottom-4 top-10 border border-blue-400/30 bg-blue-500/5"><div className="absolute -left-px -top-px h-8 w-px bg-cyan" /><div className="absolute -left-px -top-px h-px w-8 bg-cyan" /><div className="grid h-full grid-cols-3 gap-3 p-4 sm:p-6">{["APP","DATA","QUEUE"].map((item,index)=><div key={item} className="flex flex-col justify-center gap-2"><div className={`border p-2 text-center font-mono text-[8px] ${index===0?"border-brand bg-brand text-white":"border-slate-600 bg-[#111f3f]"}`}>{item}</div>{Array.from({length:index+2}).map((_,i)=><div key={i} className="h-5 border border-slate-700 bg-[#0b1531] px-2 py-1"><div className="h-1 w-full bg-slate-700"><div className="h-full bg-cyan" style={{width:`${42+i*18}%`}} /></div></div>)}</div>)}</div></div></div>
  );
}

function CommerceVisual() {
  return (
    <div className="absolute inset-5 border border-slate-600 bg-white text-navy sm:inset-8"><WindowBar label="Store / Checkout" /><div className="grid h-[calc(100%-2rem)] grid-cols-[1fr_104px] sm:grid-cols-[1fr_140px]"><div className="p-3 sm:p-5"><div className="flex justify-between"><div className="h-3 w-20 bg-navy" /><div className="size-5 border" /></div><div className="mt-4 grid grid-cols-2 gap-2">{[1,2,3,4].map((i)=><div key={i} className="border bg-slate-50 p-2"><div className={`h-12 ${i===1?"bg-blue-100":"bg-slate-200"}`} /><div className="mt-2 h-1.5 w-2/3 bg-navy" /><div className="mt-2 h-1 w-1/3 bg-brand" /></div>)}</div></div><div className="border-l bg-slate-50 p-3"><span className="font-mono text-[7px] uppercase text-slate-400">Order / 04</span>{["Товар","Доставка","Оплата"].map((x,i)=><div key={x} className="mt-4 flex items-center gap-2 text-[8px] font-bold"><i className={`grid size-4 place-items-center ${i<2?"bg-cyan":"border"}`}>{i<2?"✓":""}</i>{x}</div>)}<div className="absolute bottom-5 right-3 h-7 w-[82px] bg-brand sm:right-5 sm:w-[100px]" /></div></div></div>
  );
}

function AiVisual() {
  return (
    <div className="absolute inset-5 border border-slate-600 bg-[#f7f9fc] text-navy sm:inset-8"><WindowBar label="AI Agent / Knowledge" /><div className="space-y-3 p-4 sm:p-6"><div className="ml-auto max-w-[75%] border bg-white p-3 text-[9px] leading-4">Собери контекст обращения и предложи следующий шаг.</div><div className="max-w-[88%] border-l-2 border-brand bg-blue-50 p-3"><span className="font-mono text-[7px] uppercase tracking-[.14em] text-brand">Agent / response</span><p className="mt-2 text-[9px] leading-4">Нашёл данные в CRM и базе знаний. Подготовил резюме и маршрут согласования.</p><div className="mt-3 flex gap-2"><span className="border bg-white px-2 py-1 text-[7px]">CRM / 04</span><span className="border bg-white px-2 py-1 text-[7px]">Knowledge / 12</span></div></div><div className="flex items-center gap-2 border-t pt-3"><i className="signal-pulse size-2 rounded-full bg-cyan" /><span className="font-mono text-[7px] uppercase tracking-[.14em] text-slate-400">Tool call completed</span></div></div></div>
  );
}

function GrowthVisual() {
  return (
    <div className="absolute inset-5 sm:inset-8"><div className="flex h-full flex-col justify-between py-4"><div className="grid grid-cols-4 gap-2">{["FORM","SCORE","CRM","ACTION"].map((item,index)=><div key={item} className={`relative border p-2 text-center font-mono text-[7px] ${index===2?"border-brand bg-brand":"border-slate-600 bg-[#111f3f]"}`}>{item}{index<3?<i className="absolute -right-[9px] top-1/2 h-px w-4 bg-cyan" />:null}</div>)}</div><div className="relative mx-auto flex w-[82%] items-center justify-center"><div className="absolute h-px w-full bg-slate-700" /><div className="z-10 grid size-28 place-items-center rounded-full border border-blue-400/40 bg-[#101e3d] text-center"><div><strong className="text-xl">Lead</strong><span className="mt-1 block font-mono text-[7px] text-cyan">ROUTE / READY</span></div></div></div><div className="grid grid-cols-3 gap-2">{[["Email","queued"],["Manager","notified"],["Report","synced"]].map(([a,b],i)=><div key={a} className="border border-slate-700 bg-[#0b1531] p-2"><span className="text-[8px] font-bold">{a}</span><span className={`mt-1 block font-mono text-[7px] ${i===1?"text-cyan":"text-slate-500"}`}>{b}</span></div>)}</div></div></div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="absolute inset-5 border border-slate-600 bg-white text-navy sm:inset-8"><WindowBar label="Analytics / Weekly" /><div className="p-4 sm:p-5"><div className="grid grid-cols-3 gap-2">{[["Pipeline","1 284"],["Tasks","46"],["Signals","18"]].map(([a,b],i)=><div key={a} className="border p-2"><span className="text-[7px] uppercase text-slate-400">{a}</span><strong className={`mt-1 block text-base ${i===0?"text-brand":""}`}>{b}</strong></div>)}</div><div className="relative mt-4 h-28 border bg-slate-50 p-3"><svg viewBox="0 0 360 100" className="size-full" preserveAspectRatio="none"><path d="M0 82 C42 72 48 76 82 60 S134 72 168 42 S220 52 250 25 S312 34 360 8" fill="none" stroke="#2563eb" strokeWidth="3" /><path d="M0 82 C42 72 48 76 82 60 S134 72 168 42 S220 52 250 25 S312 34 360 8 V100 H0Z" fill="#dbeafe" opacity=".7" /></svg><i className="absolute right-[28%] top-[23%] size-2 rounded-full bg-cyan ring-4 ring-cyan/20" /></div></div></div>
  );
}

function RpaVisual() {
  return (
    <div className="absolute inset-5 sm:inset-8"><div className="absolute inset-y-7 left-5 w-px bg-slate-700 sm:left-8" />{[["01","Считать заявку","done"],["02","Обновить CRM","done"],["03","Сформировать документ","active"],["04","Отправить уведомление","next"]].map(([number,title,state],index)=><div key={number} className="relative mb-3 ml-12 grid grid-cols-[32px_1fr_auto] items-center gap-3 border border-slate-700 bg-[#101e3d] p-3 sm:ml-16"><i className={`absolute -left-[38px] grid size-5 place-items-center rounded-full font-mono text-[7px] sm:-left-[48px] ${state==="done"?"bg-cyan text-navy":state==="active"?"bg-brand":"border border-slate-600 bg-navy"}`}>{state==="done"?"✓":number}</i><span className="font-mono text-[8px] text-slate-500">{number}</span><strong className="text-[10px] sm:text-xs">{title}</strong><span className={`font-mono text-[7px] ${state==="active"?"text-cyan":"text-slate-500"}`}>{state}</span>{index===2?<i className="absolute inset-x-0 bottom-0 h-px bg-cyan" />:null}</div>)}</div>
  );
}
