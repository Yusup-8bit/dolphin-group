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
    title: "Продукт",
    icon: Blocks,
    items: ["Next.js", "React", "TypeScript", "Node.js"],
    description: "Веб-приложения и интерфейсы, готовые к развитию.",
  },
  {
    number: "02",
    title: "Системы",
    icon: Braces,
    items: ["REST", "GraphQL", "Webhooks", "PostgreSQL", "Redis"],
    description: "API, данные и надёжные связи между сервисами.",
  },
  {
    number: "03",
    title: "Инфраструктура",
    icon: ServerCog,
    items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"],
    description: "Облачный контур для запуска и масштабирования.",
  },
  {
    number: "04",
    title: "Интеллект",
    icon: Database,
    items: ["Python", "LLM", "RAG", "BI", "RPA"],
    description: "AI, аналитика и автоматизация повторяемой работы.",
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
      "IT-компания: цифровые продукты, интеграции, AI, автоматизация, аналитика и облачная инфраструктура.",
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
                  Соединяем бизнес
                  <span className="block text-brand">с технологиями,</span>
                  <span className="block">которые работают.</span>
                </h1>

                <div className="mt-8 grid gap-7 border-t pt-7 sm:mt-10 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10 lg:max-w-[800px]">
                  <p className="max-w-[660px] text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                    Проектируем и запускаем веб-продукты, CRM, AI-агентов и облачную инфраструктуру — одной командой, без разрывов между системами.
                  </p>
                  <a href="#services" className="group flex size-14 shrink-0 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-white" aria-label="Перейти к услугам">
                    <ArrowDown className="transition-transform group-hover:translate-y-1" aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#contact" className="group flex min-h-14 items-center justify-between gap-8 bg-brand px-5 font-bold text-white transition-colors hover:bg-brand-deep sm:min-w-[236px]">
                    Обсудить проект
                    <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                  <a href="#solution" className="flex min-h-14 items-center justify-between gap-8 border border-ink px-5 font-bold text-ink transition-colors hover:bg-blue-50 sm:min-w-[214px]">
                    Подобрать решение
                    <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="hero-enter-delayed mt-10 grid grid-cols-3 border-y sm:mt-16 lg:max-w-[800px]">
                {["Продукт", "Системы", "Автоматизация"].map((item, index) => (
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
              <div className="lg:col-span-3" data-reveal><SectionLabel number="01" label="Услуги" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(80)}>
                <h2 className="max-w-[900px] text-[clamp(2.5rem,5.2vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-ink">
                  Не список услуг — <span className="text-brand">девять рабочих систем.</span>
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                  Наведите курсор, сфокусируйте или откройте направление: каждый интерфейс показывает механизм работы, а не вымышленный клиентский кейс.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-14" data-reveal><ServiceExplorer /></div>
          </div>
        </section>

        <section id="solution" data-nav-section="services" className="scroll-mt-24 border-y bg-blue-50 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="02" label="Подбор решения" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}>
                <h2 className="text-[clamp(2.5rem,5vw,5.2rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">Какое решение <span className="text-brand">вам нужно?</span></h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Выберите бизнес-задачу — покажем подходящий связный набор услуг без вымышленных цен и сроков.</p>
              </div>
            </div>
            <div className="mt-12 lg:mt-16" data-reveal><SolutionFinder /></div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28 lg:py-36" data-nav-section="about">
          <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5" data-reveal>
                <SectionLabel number="03" label="Почему Dolphin Group" dark />
                <h2 className="mt-10 max-w-[650px] text-[clamp(2.5rem,5vw,5.2rem)] font-extrabold leading-[0.98] tracking-[-0.065em]">
                  Не просто код.<span className="block text-cyan">Рабочая связь</span>между частями бизнеса.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7" data-reveal style={revealDelay(100)}>
                <div className="border-l border-slate-700 pl-5 sm:pl-8">
                  {[
                    ["01", "Один контур ответственности", "Продукт, интеграции, данные, AI и облако не расходятся между разными исполнителями."],
                    ["02", "Архитектура до масштаба", "Продумываем связи и ограничения заранее, чтобы быстрый старт не создавал тупик для развития."],
                    ["03", "Разговор на языке задачи", "Объясняем решения через процессы, риски и эффект для команды — без лишнего технического шума."],
                    ["04", "Прозрачные итерации", "Показываем рабочий результат по ходу проекта и корректируем курс до того, как изменения станут дорогими."],
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
              {["Идея", "Продукт", "Система", "Масштаб"].map((item, index) => (
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
              <div className="lg:col-span-3" data-reveal><SectionLabel number="04" label="Автоматизация" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}><h2 className="text-[clamp(2.5rem,5vw,5.1rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">Показываем, <span className="text-brand">что меняется.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Без неподтверждённых процентов: только понятная разница в маршруте данных и роли команды.</p></div>
            </div>
            <div className="mt-12 lg:mt-16" data-reveal><AutomationComparison /></div>
          </div>
        </section>

        <section id="process" data-nav-section="process" className="scroll-mt-24 border-y bg-white py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="05" label="Процесс" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}><h2 className="text-[clamp(2.5rem,5vw,5.1rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">Сначала смысл. <span className="text-brand">Потом система.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Выберите этап: каждый заканчивается конкретным артефактом, который можно проверить и использовать дальше.</p></div>
            </div>
            <div className="mt-12 lg:mt-16" data-reveal><ProcessExplorer /></div>
          </div>
        </section>

        <section id="technology" data-nav-section="technology" className="scroll-mt-24 bg-canvas py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3" data-reveal><SectionLabel number="06" label="Технологии" /></div>
              <div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(80)}><h2 className="text-[clamp(2.5rem,5vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-ink">Стек следует задаче, <span className="block text-brand">а не наоборот.</span></h2><p className="mt-7 max-w-2xl text-lg leading-8 text-muted">Подбираем технологии так, чтобы система была понятной в поддержке, надёжной в работе и готовой к следующему этапу бизнеса.</p></div>
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
            <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-3" data-reveal><SectionLabel number="07" label="Demo lab" dark /></div><div className="lg:col-span-8 lg:col-start-5" data-reveal style={revealDelay(70)}><h2 className="text-[clamp(2.5rem,5vw,5.1rem)] font-extrabold leading-[0.98] tracking-[-0.065em]">Интерфейс — <span className="text-cyan">часть объяснения.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Переключайте demo-композиции: они показывают возможную механику, не выдавая её за клиентские проекты.</p></div></div>
            <div className="mt-12 lg:mt-16" data-reveal><DemoLab /></div>
          </div>
        </section>

        <section id="about" data-nav-section="about" className="scroll-mt-24 bg-blue-50 py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3" data-reveal><SectionLabel number="08" label="О компании" /></div><div className="lg:col-span-9" data-reveal style={revealDelay(90)}><p className="max-w-[1120px] text-[clamp(2.15rem,5.2vw,5.7rem)] font-extrabold leading-[1.02] tracking-[-0.065em] text-ink">Dolphin Group помогает бизнесу создавать цифровые продукты,<span className="text-brand"> автоматизировать процессы</span> и объединять IT-системы.</p></div></div>
            <div className="mt-16 grid gap-8 border-t pt-10 md:grid-cols-3 lg:ml-[25%] lg:mt-24">
              {[
                ["01", "Смотрим шире интерфейса", "Учитываем данные, роли, внешние сервисы и эксплуатацию — всё, что влияет на реальную работу продукта."],
                ["02", "Сокращаем лишнюю сложность", "Выбираем понятные решения и объясняем компромиссы, чтобы команда могла осознанно управлять системой."],
                ["03", "Строим основу для развития", "Проектируем первый релиз так, чтобы последующие функции и интеграции не требовали начинать заново."],
              ].map(([number, title, description], index) => <article key={number} data-reveal style={revealDelay(index * 70)}><span className="font-mono text-xs font-bold text-brand">{number}</span><h3 className="mt-5 text-xl font-extrabold tracking-[-0.04em] text-ink">{title}</h3><p className="mt-4 leading-7 text-muted">{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12"><div className="px-4 py-16 sm:px-6 sm:py-20 lg:col-span-9 lg:px-10 lg:py-28" data-reveal><span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100">Следующий шаг / 01</span><h2 className="mt-7 max-w-[1050px] text-[clamp(2.65rem,6.8vw,7.2rem)] font-extrabold leading-[0.92] tracking-[-0.075em]">Есть задача, где системы не сходятся?</h2></div><a href="#contact" className="group flex min-h-40 items-end justify-between border-t border-blue-400 bg-brand-deep p-6 text-xl font-bold transition-colors hover:bg-navy lg:col-span-3 lg:min-h-full lg:border-l lg:border-t-0 lg:p-8">Обсудим, как её собрать<ArrowUpRight className="size-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></a></div>
        </section>

        <section id="contact" data-nav-section="contact" className="scroll-mt-20 bg-navy py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><div className="grid gap-10 lg:grid-cols-12 lg:items-start"><div className="text-white lg:col-span-4" data-reveal><SectionLabel number="09" label="Контакт" dark /><h2 className="mt-9 text-[clamp(2.55rem,4.6vw,4.9rem)] font-extrabold leading-[0.98] tracking-[-0.065em]">Начнём с вашей задачи.</h2><p className="mt-6 max-w-md text-lg leading-8 text-slate-400">Опишите контекст, желаемый результат и текущие ограничения. Это поможет начать предметный разговор.</p><div className="mt-10 border-t border-slate-700 pt-6"><div className="flex items-center gap-3 text-sm font-semibold text-slate-300"><Route className="size-5 text-cyan" aria-hidden="true" />Discovery → архитектура → запуск</div><div className="mt-4 flex items-center gap-3 text-sm font-semibold text-slate-300"><Orbit className="size-5 text-cyan" aria-hidden="true" />Один связный технологический контур</div></div></div><div className="lg:col-span-7 lg:col-start-6" data-reveal style={revealDelay(90)}><ContactForm /></div></div></div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-navy text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><a href="#top" className="inline-flex min-h-11 items-center gap-3" aria-label="Dolphin Group — наверх"><span className="grid size-9 place-items-center bg-brand text-xs font-extrabold">DG</span><span className="text-lg font-extrabold tracking-[-0.04em]">Dolphin Group<span className="text-cyan">.</span></span></a><p className="mt-5 max-w-md leading-7 text-slate-400">Цифровые продукты, интеграции, AI, аналитика, автоматизация и облачная инфраструктура.</p></div>
            <nav className="lg:col-span-2" aria-label="Навигация в подвале"><FooterTitle>Разделы</FooterTitle><div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-300"><a href="#services" className="hover:text-white">Услуги</a><a href="#process" className="hover:text-white">Подход</a><a href="#technology" className="hover:text-white">Технологии</a><a href="#about" className="hover:text-white">О компании</a></div></nav>
            <div className="lg:col-span-2"><FooterTitle>Связь</FooterTitle><a href="#contact" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white hover:text-cyan">Обсудить проект<ArrowUpRight size={16} aria-hidden="true" /></a><p className="mt-2 text-xs leading-5 text-slate-500">Контактный канал подключается.</p></div>
            <div className="lg:col-span-3"><FooterTitle>Документы</FooterTitle><div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-300"><Link href="/privacy" className="hover:text-white">Политика конфиденциальности</Link><Link href="/terms" className="hover:text-white">Пользовательское соглашение</Link></div></div>
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
