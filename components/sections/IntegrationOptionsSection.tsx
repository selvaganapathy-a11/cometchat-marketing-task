"use client";

import Image from "next/image";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import clsx from "clsx";

type CardItem = {
  id: number;
  title: string;
  icon: string;
  short: string;
  bullets: string[];
};

const cards: CardItem[] = [
  {
    id: 0,
    title: "Chat Builder",
    icon: "/images/icons/chat-icon-1.webp",
    short: "The fastest way to go live.",
    bullets: [
      "Visual interface for styling and configuring chat",
      "Drop into any web or mobile app with a single snippet",
      "Integrates with auth, analytics, and third-party tools",
      "Great for prototypes, pilots, or teams with limited frontend resources",
    ],
  },
  {
    id: 1,
    title: "UI Kits",
    icon: "/images/icons/ui-icon.webp",
    short: "Production-ready components with full flexibility.",
    bullets: [
      "Available for all popular frameworks",
      "Theming, layout, and logic hooks exposed",
      "Save time on structure, focus on experience",
      "Ideal for teams who want speed and polish",
    ],
  },
  {
    id: 2,
    title: "SDKs & APIs",
    icon: "/images/icons/api-icon.webp",
    short: "The toolbox for when you want total control.",
    bullets: [
      "Flexible APIs for custom chat experiences",
      "Advanced control over behavior and flows",
      "Integrates cleanly with your own systems",
      "Best for teams building deeply custom products",
    ],
  },
];

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Sparkles
        size={14}
        className="mt-[3px] shrink-0 text-[#7B5CFF] drop-shadow-[0_0_8px_rgba(123,92,255,0.4)]"
      />
      <p className="text-white/74 text-[14px] leading-[1.35] md:text-[15px] xl:text-[16px]">
        {text}
      </p>
    </div>
  );
}

export default function IntegrationOptionsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#050312] py-20 md:py-28 xl:py-32">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[12%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#7B5CFF]/10 blur-[140px] md:h-[360px] md:w-[360px] md:blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-5 md:px-8 xl:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-[1080px] text-center">
          <p className="text-[15px] font-medium tracking-[-0.02em] text-[#7B5CFF] md:text-[18px]">
            Chat integration options
          </p>

          <h2 className="mt-4 text-[34px] font-[500] leading-[1.04] tracking-[-0.05em] text-white md:text-[44px] lg:text-[56px] xl:text-[72px]">
            Your launch, your way. Done right.
          </h2>

          <p className="mx-auto mt-5 max-w-[960px] text-[16px] leading-[1.32] tracking-[-0.02em] text-white/62 md:text-[24px] lg:text-[28px]">
            Start with what gets you to production fastest — or matches your
            needs the best.
            <br className="hidden md:block" />
            Swap it out or level it up later.
          </p>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="mt-16 hidden lg:block">
          <div className="grid grid-cols-3 border border-white/10">
            {cards.map((card, index) => {
              const isActive = active === index;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  className={clsx(
                    "group relative min-h-[440px] overflow-hidden border-r border-white/10 px-10 pt-8 pb-10 transition-all duration-500 ease-out",
                    index === cards.length - 1 && "border-r-0",
                    isActive
                      ? "bg-[rgba(255,255,255,0.015)]"
                      : "bg-transparent",
                  )}
                >
                  {/* top / bottom line */}
                  <div className="absolute left-0 top-0 h-px w-full bg-white/10" />
                  <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />

                  {/* corner dots */}
                  <div className="absolute -left-[8px] top-[-8px] h-4 w-4 rounded-full border border-white/12 bg-[#090617]" />
                  <div className="absolute -right-[8px] top-[-8px] h-4 w-4 rounded-full border border-white/12 bg-[#090617]" />
                  <div className="absolute -left-[8px] bottom-[-8px] h-4 w-4 rounded-full border border-white/12 bg-[#090617]" />
                  <div className="absolute -right-[8px] bottom-[-8px] h-4 w-4 rounded-full border border-white/12 bg-[#090617]" />

                  {/* active glow */}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(123,92,255,0.22),transparent_60%)] opacity-100 transition-opacity duration-400" />
                  )}

                  <div className="relative z-10 h-full">
                    {/* ICON */}
                    <div
                      className={clsx(
                        "absolute left-0 top-0 flex h-[78px] w-[78px] items-center justify-center rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] transition-all duration-500 ease-out",
                        isActive
                          ? "translate-y-[-30px] scale-75 opacity-0"
                          : "translate-y-0 scale-100 opacity-100",
                      )}
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={24}
                        height={24}
                        loading="lazy"
                        sizes="24px"
                        quality={80}
                        className="h-[24px] w-[24px] object-contain opacity-95"
                      />
                    </div>

                    {/* CONTENT WRAPPER */}
                    <div
                      className={clsx(
                        "absolute left-0 right-0 bottom-10 transition-all duration-500 ease-out",
                        isActive ? "top-[72px]" : "top-[230px]",
                      )}
                    >
                      {/* TITLE */}
                      <h3 className="text-[28px] font-[500] leading-[1.08] tracking-[-0.03em] text-white">
                        {card.title}
                      </h3>

                      {/* DEFAULT STATE */}
                      <div
                        className={clsx(
                          "mt-5 transition-all duration-400 ease-out",
                          isActive
                            ? "translate-y-[-16px] opacity-0 pointer-events-none"
                            : "translate-y-0 opacity-100",
                        )}
                      >
                        <p className="max-w-[340px] text-[18px] leading-[1.35] tracking-[-0.02em] text-white/68">
                          {card.short}
                        </p>

                        <button className="mt-7 w-fit text-[18px] font-medium tracking-[-0.02em] text-[#7B5CFF] transition hover:text-[#9c86ff]">
                          Try Builder
                        </button>
                      </div>

                      {/* HOVER STATE */}
                      <div
                        className={clsx(
                          "absolute left-0 right-0 top-[56px] transition-all duration-500 ease-out",
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-[80px] opacity-0 pointer-events-none",
                        )}
                      >
                        <div className="space-y-5">
                          {card.bullets.map((item) => (
                            <Bullet key={item} text={item} />
                          ))}
                        </div>

                        <button className="mt-7 w-fit text-[18px] font-medium tracking-[-0.02em] text-[#7B5CFF] transition hover:text-[#9c86ff]">
                          Try Builder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="mt-12 space-y-4 lg:hidden">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={clsx(
                "relative overflow-hidden rounded-[18px] border border-white/10 px-4 py-5 sm:px-5 sm:py-6",
                index === 0
                  ? "bg-[radial-gradient(circle_at_50%_0%,rgba(123,92,255,0.24),transparent_55%)]"
                  : "bg-[rgba(255,255,255,0.015)]",
              )}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(123,92,255,0.18),transparent_60%)]" />

              <div className="relative z-10">
                <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={34}
                    height={34}
                    loading="lazy"
                    sizes="34px"
                    quality={80}
                    className="h-[34px] w-[34px] object-contain opacity-95"
                  />
                </div>

                <h3 className="text-[22px] font-[500] leading-[1.08] tracking-[-0.03em] text-white">
                  {card.title}
                </h3>

                <div className="mt-4">
                  <p className="text-[16px] leading-[1.38] text-white/68">
                    {card.short}
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {card.bullets.map((item) => (
                    <Bullet key={item} text={item} />
                  ))}
                </div>

                <button className="mt-6 text-[16px] font-medium text-[#7B5CFF]">
                  Try Builder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
