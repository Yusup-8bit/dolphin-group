export function SystemMap() {
  return (
    <div
      className="relative isolate min-h-[470px] overflow-hidden bg-navy p-5 text-white sm:min-h-[540px] sm:p-7 lg:h-full lg:min-h-full"
      role="img"
      aria-label="Unified digital infrastructure: product and CRM connect through the Dolphin Group layer to data, AI, and cloud services"
    >
      <div
        aria-hidden="true"
        className="grid-drift absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:36px_36px]"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />

      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
        <span>System map / live</span>
        <span className="flex items-center gap-2 text-cyan">
          <span className="signal-pulse size-1.5 rounded-full bg-cyan" />
          System ready
        </span>
      </div>

      <svg
        viewBox="0 0 520 430"
        className="absolute inset-x-3 top-14 h-[360px] w-[calc(100%-24px)] sm:top-20 sm:h-[390px] lg:top-1/2 lg:h-[440px] lg:-translate-y-1/2"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="route" x1="0" x2="1">
            <stop offset="0" stopColor="#2563EB" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#22D3EE" />
            <stop offset="1" stopColor="#2563EB" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d="M70 92 H178 C207 92 205 156 235 156 H280" fill="none" stroke="#33476d" />
        <path d="M70 304 H166 C201 304 202 244 235 244 H280" fill="none" stroke="#33476d" />
        <path d="M280 156 H338 C370 156 368 92 405 92 H458" fill="none" stroke="#33476d" />
        <path d="M280 244 H338 C370 244 368 304 405 304 H458" fill="none" stroke="#33476d" />
        <path
          d="M70 92 H178 C207 92 205 156 235 156 H280 H338 C370 156 368 92 405 92 H458 M70 304 H166 C201 304 202 244 235 244 H280 H338 C370 244 368 304 405 304 H458"
          fill="none"
          stroke="url(#route)"
          strokeWidth="2"
          className="flow-line"
        />
        {[70, 280, 458].map((cx, index) => (
          <circle
            key={`${cx}-${index}`}
            cx={cx}
            cy={index === 1 ? 200 : 92}
            r="4"
            fill="#22D3EE"
            className="signal-pulse"
            style={{ animationDelay: `${index * 0.45}s` }}
          />
        ))}
      </svg>

      <div className="absolute left-[7%] top-[24%] z-10 w-[34%] max-w-[148px] border border-slate-700 bg-[#101e3d] p-3 sm:p-4 lg:top-[27%]">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">Input / 01</span>
        <strong className="mt-2 block text-sm font-bold sm:text-base">Product</strong>
        <span className="mt-1 block text-xs leading-5 text-slate-400">Web · MVP · Commerce</span>
      </div>

      <div className="absolute bottom-[18%] left-[7%] z-10 w-[34%] max-w-[148px] border border-slate-700 bg-[#101e3d] p-3 sm:p-4 lg:bottom-[27%]">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">Input / 02</span>
        <strong className="mt-2 block text-sm font-bold sm:text-base">Operations</strong>
        <span className="mt-1 block text-xs leading-5 text-slate-400">CRM · RPA · Sales</span>
      </div>

      <div className="absolute left-1/2 top-1/2 z-20 grid size-[132px] -translate-x-1/2 -translate-y-1/2 place-items-center border border-brand bg-brand p-4 text-center shadow-[0_24px_70px_rgba(37,99,235,.28)] sm:size-[160px]">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-blue-100">Build layer</span>
          <strong className="mt-3 block text-xl font-extrabold leading-none tracking-[-0.06em] sm:text-2xl">
            Dolphin
            <br />
            Group
          </strong>
        </div>
      </div>

      <div className="absolute right-[7%] top-[24%] z-10 w-[34%] max-w-[148px] border border-slate-700 bg-[#101e3d] p-3 sm:p-4 lg:top-[27%]">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">Output / 01</span>
        <strong className="mt-2 block text-sm font-bold sm:text-base">Data + AI</strong>
        <span className="mt-1 block text-xs leading-5 text-slate-400">Analytics · Agents</span>
      </div>

      <div className="absolute bottom-[18%] right-[7%] z-10 w-[34%] max-w-[148px] border border-slate-700 bg-[#101e3d] p-3 sm:p-4 lg:bottom-[27%]">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">Output / 02</span>
        <strong className="mt-2 block text-sm font-bold sm:text-base">Cloud</strong>
        <span className="mt-1 block text-xs leading-5 text-slate-400">AWS · GCP · Azure</span>
      </div>

      <div className="absolute inset-x-5 bottom-5 z-10 flex justify-between border-t border-slate-700 pt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500 sm:inset-x-7 sm:bottom-7">
        <span>DG / Infrastructure</span>
        <span>latency / aligned</span>
      </div>
    </div>
  );
}
