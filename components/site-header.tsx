"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "services", label: "Services", href: "#services" },
  { id: "work", label: "Work", href: "#work" },
  { id: "process", label: "Approach", href: "#process" },
  { id: "technology", label: "Technology", href: "#technology" },
  { id: "about", label: "Company", href: "#about" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [pageProgress, setPageProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-section]"),
    );
    let frame = 0;

    const updateScrollState = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setPageProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);

      const marker = Math.min(window.innerHeight * 0.34, 360);
      let current = "top";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) {
          current = section.dataset.navSection || section.id;
        }
      });
      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-canvas/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="group flex min-h-11 items-center gap-3 rounded-sm text-ink"
          aria-label="Dolphin Group — home"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative grid size-8 place-items-center overflow-hidden bg-brand text-[11px] font-extrabold tracking-[-0.04em] text-white">
            DG
            <span className="absolute right-0 top-0 size-1.5 bg-cyan" />
          </span>
          <span className="text-[15px] font-extrabold tracking-[-0.035em]">
            Dolphin Group<span className="text-brand">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-3 text-sm font-semibold transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:bg-brand after:transition-transform hover:text-ink focus-visible:text-ink ${
                  isActive
                    ? "text-ink after:scale-x-100"
                    : "text-muted after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden min-h-11 items-center gap-2 bg-ink px-5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand sm:flex"
          >
            Discuss a project
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center text-ink transition-colors hover:bg-blue-100 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden" aria-hidden="true">
        <span
          className="block h-full origin-left bg-gradient-to-r from-brand to-cyan"
          style={{ transform: `scaleX(${pageProgress})` }}
        />
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-[72px] h-[calc(100dvh-72px)] border-t bg-canvas px-4 py-8 transition duration-300 lg:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-2xl flex-col" aria-label="Mobile navigation">
          <span className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
            Navigation / 05
          </span>
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`flex min-h-16 items-center justify-between border-t text-2xl font-bold tracking-[-0.04em] ${
                  isActive ? "text-brand" : "text-ink"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="font-mono text-xs font-normal text-muted">
                  0{index + 1}
                </span>
              </a>
            );
          })}
          <a
            href="#contact"
            className="mt-auto flex min-h-14 items-center justify-between bg-brand px-5 font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            Discuss a project
            <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
