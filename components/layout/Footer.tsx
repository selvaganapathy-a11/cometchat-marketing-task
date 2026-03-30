"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowUp } from "lucide-react";

const footerData = [
  {
    title: "Platform",
    links: [
      "Chat & Messaging",
      "Voice & Video Calls",
      "Features",
      "Chat Messaging",
      "Voice & Video Calls",
      "Notifications",
      "Analytics & Insights",
      "Multi-Tenant Chat",
      "Integration Methods",
      "UI Kits",
      "SDKs & APIs",
    ],
  },
  {
    title: "Solutions",
    links: [
      "By Use cases",
      "On-demand",
      "Online Marketplaces",
      "SaaS Businesses",
      "Healthcare & Telehealth",
      "Community & Social",
      "Dating",
      "Comparison",
      "CometChat vs Sendbird",
      "Compare Top Chat SDKs",
      "Sendbird Alternatives",
      "Stream Chat Alternatives",
    ],
  },
  {
    title: "Developers",
    links: [
      "Docs",
      "Sample Apps",
      "APIs",
      "Product Updates",
      "Feature Requests",
      "System Status",
      "Support",
      "Community",
      "Help Center",
      "Office Hours",
      "Report an issue",
    ],
  },
  {
    title: "Resources",
    links: [
      "Templates",
      "Tutorials",
      "Blog",
      "Chat UI Kits",
      "React Chat UI Kit",
      "Flutter Chat UI Kit",
      "Android Chat UI Kit",
      "React Native Chat UI Kit",
      "iOS Chat UI Kit",
    ],
  },
  {
    title: "Company",
    links: [
      "Careers",
      "Partners",
      "Pricing",
      "Implementation Services",
      "Chat with us",
      "Terms and Legal",
      "Terms of Service",
      "Privacy Policy",
      "Sub-processors List",
      "Data Processing Addendum",
      "Vulnerability Disclosure Program",
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: "/images/footer/facebook.webp" },
  { name: "LinkedIn", icon: "/images/footer/linkedin.webp" },
  { name: "Instagram", icon: "/images/footer/instagram.webp" },
  { name: "Twitter", icon: "/images/footer/twitter.webp" },
  { name: "GitHub", icon: "/images/footer/hithub.webp" }, // using your exact file name
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05] bg-[#050312]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[18%] h-[240px] w-[240px] rounded-full bg-[#7B5CFF]/6 blur-[120px]" />
        <div className="absolute right-[10%] top-[20%] h-[260px] w-[260px] rounded-full bg-[#7B5CFF]/5 blur-[140px]" />
        <div className="absolute left-1/2 bottom-[8%] h-[220px] w-[620px] -translate-x-1/2 rounded-full bg-[#7B5CFF]/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 pb-8 pt-12 sm:px-6 md:px-8 lg:px-10 lg:pt-16 xl:px-12">
        {/* top logo */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-[26px] font-medium tracking-[-0.03em] text-white md:text-[30px]">
            cometchat
          </h2>
        </div>

        {/* desktop footer */}
        <div className="hidden grid-cols-5 gap-10 lg:grid">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="mb-5 text-[16px] font-medium tracking-[-0.02em] text-[#7B5CFF]">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[14px] leading-[1.35] tracking-[-0.01em] text-white/72 transition duration-300 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* mobile accordion */}
        <div className="space-y-1 lg:hidden">
          {footerData.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-white/[0.05] pb-1 last:border-b-0"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-[18px] font-medium tracking-[-0.02em] text-[#7B5CFF]">
                    {section.title}
                  </span>

                  {isOpen ? (
                    <Minus
                      className="h-5 w-5 text-[#7B5CFF]"
                      strokeWidth={1.8}
                    />
                  ) : (
                    <Plus
                      className="h-5 w-5 text-[#7B5CFF]"
                      strokeWidth={1.8}
                    />
                  )}
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-3 pb-4">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="text-[14px] leading-[1.35] text-white/72 transition duration-300 hover:text-white"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* watermark */}
        {/* watermark */}
        <div className="relative mt-14 md:mt-16">
          <div className="pointer-events-none select-none flex justify-center lg:justify-start">
            {/* Glow background (important) */}
            <div className="absolute inset-0 flex justify-center lg:justify-start">
              <div className="h-[200px] w-[600px]  blur-[120px]" />
            </div>

            {/* Watermark Image */}
            <div className="relative w-full max-w-[1100px] md:max-w-[1200px] lg:max-w-[1350px]">
              <Image
                src="/images/footer/cometchat-logo.webp"
                alt="CometChat watermark"
                width={1400}
                height={260}
                loading="lazy"
                quality={82}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1350px"
                className="h-auto w-full object-contain opacity-[2.22] md:opacity-[0.85]"
              />
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 border-t border-white/[0.05] pt-6 md:mt-12 md:pt-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* left */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] text-white/70">
              <span>2025 © CometChat</span>
              <a href="/" className="transition hover:text-white">
                Terms of Use
              </a>
              <a href="/" className="transition hover:text-white">
                Privacy Policy
              </a>
            </div>

            {/* right */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="inline-flex items-center gap-2 text-[14px] text-white/70 transition hover:text-white"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={16}
                    height={16}
                    loading="lazy"
                    sizes="16px"
                    quality={80}
                    className="h-4 w-4 object-contain opacity-90"
                  />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B0718]/85 text-white shadow-[0_10px_30px_rgba(0,0,0,0.28),0_0_30px_rgba(123,92,255,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#120B24] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35),0_0_40px_rgba(123,92,255,0.16)] ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp size={18} strokeWidth={2.2} />
      </button>
    </footer>
  );
}
