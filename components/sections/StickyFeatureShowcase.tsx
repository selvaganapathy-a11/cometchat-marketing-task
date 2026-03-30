"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sections = [
  {
    id: 1,
    tag: "",
    title: "",
    points: [
      "A complete frontend and system layer for AI agents. Plug in your LLM backend or build the brain with ours.",
      "CometChat is the only full stack agent platform that combines logic, UI, moderation, notifications, and insights - without glue code.",
      "Each of these is battle-tested, used and trusted in production by real companies, across real user scenarios.",
    ],
    image: "/images/sticky/frontend.jpg",
  },

  {
    id: 2,
    tag: "Production-ready chat UI",
    title:
      "The UX layer your agent deserves. Built for LLM-native interactions, out of the box.",
    points: [
      "Forget stitching together buttons and loading states just to ship chat. Our chat layer is purpose-built for how agents think — and how humans expect them to respond.",
      "Token streaming with dynamic “thinking...” states",
      "Retry/edit buttons with full chat control logic",
      "Memory pills, prompt banners, and agent selectors",
      "Structured tool replies with inline citations",
      "Slash commands, modals, and frontend triggers",
      "Low/no-code Chat Builder, or raw control via UI Kits and SDKs",
      "Fully AI-UI protocol compatible — including tool call rendering, memory markers, and fallback patterns",
      "It’s not just a pretty shell. It’s UX that matches true guide behavior, and makes your agent feel alive.",
    ],
    image: "/images/sticky/phone.png",
  },
  {
    id: 3,
    tag: "Multichannel notifications engine",
    title: "Your agent is only helpful if people come back to talk to it.",
    points: [
      "Most agents get ghosted. Yours won’t.",
      "Native push, email, and SMS support",
      "Retry logic, delivery throttling, and batching",
      "Trigger-based delivery rules — unread > x mins, task triggered, user reactivated",
      "Threaded email replies (yes, replies go back to chat)",
      "Integrated with SendGrid, Twilio, or your custom providers",
      "User-level frequency + preference controls",
      "Notifications aren’t a growth hack. They’re UX glue. And we built them so you wouldn’t have to.",
    ],
    image: "/images/sticky/twilio.png",
  },
  {
    id: 4,
    tag: "Insights dashboard",
    title:
      "Ship the agent. Then make it better. Without needing Mixpanel, Segment, or BI setups.",
    points: [
      "From day one, you get built-in visibility into what your agent is doing — and how people are responding.",
      "Resolution rate, fallback frequency, retry counts, latency",
      "Tool usage breakdowns, prompt paths, knowledge base hits",
      "Conversation-level analytics: drop-off points, re-engagement, success outcomes",
      "Sentiment markers and feedback loops",
      "Exportable, filterable, and privacy-respectful",
      "You can’t improve what you can’t see. With us, you never ship blind.",
    ],
    image: "/images/sticky/pia-chart.png",
  },
];

export default function StickySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll("[data-sticky-card]");

    let lastIndex = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).getAttribute("data-index"),
          );

          if (entry.isIntersecting && index !== lastIndex) {
            lastIndex = index;
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-10% 0px -35% 0px",
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#050312] text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative">
            {/* TOP STICKY MAIN HEADING */}
            <div className="sticky top-0 sm:top-2 lg:top-4 z-30 bg-[#050312] pt-8 sm:pt-10 lg:pt-14 pb-6 sm:pb-8">
              <h2 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.02] font-medium tracking-[-0.04em] max-w-[620px]">
                Everything you’d end up{" "}
                <span className="bg-gradient-to-r from-[#9B89FF] to-[#6F4DFF] bg-clip-text text-transparent">
                  building anyway.
                </span>
              </h2>
            </div>

            {/* SCROLLING CONTENT */}
            <div className="relative">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  data-sticky-card
                  data-index={index}
                  className="min-h-[95vh] sm:min-h-screen border-t border-white/5 flex items-start"
                >
                  <div className="w-full pt-10 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 max-w-[640px]">
                    {/* TAG */}
                    <p className="text-[#7B5CFF] text-[12px] sm:text-[13px] font-medium mb-4 sm:mb-5">
                      {section.tag}
                    </p>

                    {/* SECTION TITLE */}
                    <h3 className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.12] tracking-[-0.03em] font-medium text-white mb-6 sm:mb-8">
                      {section.title}
                    </h3>

                    {/* BULLETS */}
                    <div className="space-y-4 sm:space-y-5">
                      {section.points.map((point, i) => (
                        <div key={i} className="flex gap-3 sm:gap-4">
                          <span className="text-[#7B5CFF] mt-[2px] text-sm sm:text-base shrink-0">
                            ✦
                          </span>
                          <p className="text-white/68 text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.75]">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* MOBILE IMAGE */}
                    <div className="mt-10 lg:hidden">
                      <div className="rounded-[22px] border border-white/10 bg-[#0A0718] p-3 sm:p-4 shadow-[0_0_36px_rgba(123,92,255,0.06)]">
                        <Image
                          src={section.image}
                          alt={section.tag || "Feature preview"}
                          width={900}
                          height={700}
                          loading="lazy"
                          quality={80}
                          sizes="(max-width: 768px) 100vw, 90vw"
                          className="w-full h-auto object-contain rounded-[16px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative hidden lg:block">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <div className="relative w-full max-w-[620px] h-[78vh] rounded-[28px] overflow-hidden border border-white/10 bg-[#090614] shadow-[0_0_42px_rgba(123,92,255,0.06)]">
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    className={`absolute inset-0 flex items-center justify-center px-6 transition-[opacity,transform] duration-500 ease-out will-change-transform ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0 scale-100 z-10"
                        : "opacity-0 translate-y-4 scale-[0.985] z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={section.image}
                      alt={section.tag || "Feature preview"}
                      width={1000}
                      height={900}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={82}
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="w-full h-auto object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
