"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

const navItems = [
  "Platform",
  "Solutions",
  "Developers",
  "Resources",
  "Pricing",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="top-0 z-[999] w-full border-b border-white/5 bg-[#050312]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1680px] items-center justify-between px-5 py-4 md:px-8 md:py-5 xl:px-10">
          {/* Logo */}
          <a
            href="/"
            className="relative z-20 text-[24px] font-medium tracking-[-0.04em] text-white sm:text-[26px]"
          >
            comet<span className="font-semibold">chat</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 xl:flex 2xl:gap-12">
            {navItems.map((item) => (
              <a
                key={item}
                href="/"
                className="group relative text-[15px] font-medium tracking-[-0.01em] text-white/80 transition duration-300 hover:text-white"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#7B5CFF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            <a
              href="/"
              className="hidden text-[15px] font-medium text-white/88 transition hover:text-white sm:block"
            >
              Log in
            </a>

            <div className="hidden md:block">
              <Button text="Schedule a demo" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_6px_20px_rgba(0,0,0,0.22)] transition-[background-color,border-color,transform] duration-300 hover:border-white/15 hover:bg-white/[0.07] xl:hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,92,255,0.22),transparent_70%)] opacity-80" />
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                {menuOpen ? (
                  <X size={22} strokeWidth={2.2} />
                ) : (
                  <Menu size={22} strokeWidth={2.2} />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[998] bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed right-0 top-0 z-[999] h-screen w-full max-w-[380px] border-l border-white/10 bg-[#070316]/95 shadow-[-20px_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden will-change-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Purple ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-80px] top-[-60px] h-[220px] w-[220px] rounded-full bg-[#7B5CFF]/18 blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-70px] h-[180px] w-[180px] rounded-full bg-[#7B5CFF]/12 blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%,transparent_70%,rgba(255,255,255,0.015))]" />
        </div>

        {/* Top */}
        <div className="relative flex items-center justify-between border-b border-white/8 px-5 py-5 sm:px-6">
          <a
            href="/"
            className="text-[24px] font-medium tracking-[-0.04em] text-white"
          >
            comet<span className="font-semibold">chat</span>
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:bg-white/[0.08]"
          >
            <X size={20} strokeWidth={2.2} />
          </button>
        </div>

        {/* Nav */}
        <div className="relative flex h-[calc(100%-84px)] flex-col justify-between px-5 py-6 sm:px-6 sm:py-7">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.02] px-4 py-4 text-[17px] font-medium tracking-[-0.02em] text-white/90 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >
                <span>{item}</span>
                <ChevronRight
                  size={18}
                  className="text-white/35 transition duration-300 group-hover:translate-x-1 group-hover:text-[#8D72FF]"
                />
              </a>
            ))}
          </div>

          {/* Bottom Actions */}
          <div
            className={`space-y-4 transition-[transform,opacity] duration-500 will-change-transform ${
              menuOpen
                ? "translate-y-0 opacity-100 delay-300"
                : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-[16px] font-medium text-white/90 transition hover:bg-white/[0.06] hover:text-white sm:hidden"
            >
              Log in
            </a>

            <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[#8D72FF]">
                Ready to launch
              </p>
              <p className="mt-2 max-w-[260px] text-[15px] leading-[1.5] text-white/65">
                Build faster with CometChat’s full-stack AI agent platform.
              </p>

              <div className="mt-5">
                <Button text="Schedule a demo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
