import { Check, ChevronRight, X } from "lucide-react";

const logos = [
  "Kahoot!",
  "shaadi.com",
  "endeavor",
  "NOBROKER",
  "Konecta",
  "Haleon",
];

const comparisonRows = [
  {
    left: "Broken UI patterns",
    right: "Plug-and-play chat UI",
  },
  {
    left: "Duct-taped retries & feedback",
    right: "Robust, built-in feedback loops",
  },
  {
    left: "Manual guardrails",
    right: "Prebuilt safety net",
  },
  {
    left: "No alerts when things go wrong",
    right: "System alerts + observability",
  },
];

function LogoItem({ text }: { text: string }) {
  const isNoBroker = text === "NOBROKER";

  return (
    <div className="flex min-w-[200px] items-center justify-center px-8 md:min-w-[240px] md:px-10 lg:min-w-[260px] lg:px-12">
      {isNoBroker ? (
        <div className="flex items-center justify-center gap-3 text-white/78">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/28 text-[20px] font-light text-white/80 md:h-11 md:w-11 md:text-[22px]">
            %
          </span>
          <span className="text-[26px] font-medium tracking-[-0.03em] md:text-[34px] lg:text-[38px]">
            NOBROKER
          </span>
        </div>
      ) : (
        <span className="text-center text-[26px] font-medium tracking-[-0.03em] text-white/72 md:text-[34px] lg:text-[38px]">
          {text}
        </span>
      )}
    </div>
  );
}

function CompareCard({ left, right }: { left: string; right: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-5">
      {/* Left */}
      <div className="glass-card flex min-h-[72px] items-center gap-3 rounded-2xl px-4 py-4 text-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.18)] md:min-h-[84px] md:px-6">
        <X size={16} className="shrink-0 text-[#ff5a45]" strokeWidth={2.2} />
        <p className="text-[14px] leading-[1.2] tracking-[-0.02em] md:text-[18px]">
          {left}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center gap-[-2px] text-[#7f61ff]">
        <ChevronRight size={18} strokeWidth={1.8} />
        <ChevronRight size={18} strokeWidth={1.8} className="-ml-2" />
        <ChevronRight size={18} strokeWidth={1.8} className="-ml-2" />
      </div>

      {/* Right */}
      <div className="rounded-2xl border border-[#7b5cff]/50 bg-[rgba(123,92,255,0.06)] px-4 py-4 text-white shadow-[0_0_40px_rgba(123,92,255,0.12)] md:min-h-[84px] md:px-6">
        <div className="flex items-center gap-3">
          <Check
            size={16}
            className="shrink-0 text-[#8f72ff]"
            strokeWidth={2.2}
          />
          <p className="text-[14px] leading-[1.2] tracking-[-0.02em] text-white/86 md:text-[18px]">
            {right}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PrototypeToProductSection() {
  return (
    <section className="relative overflow-hidden bg-[#050312] py-16 md:py-24 xl:py-28">
      {/* background glow */}
      <div className="absolute right-[18%] top-[48%] h-[280px] w-[280px] rounded-full bg-violet-500/12 blur-[90px] md:h-[420px] md:w-[420px] md:blur-[110px]" />

      <div className="mx-auto max-w-[1680px] px-5 md:px-8 xl:px-10">
        {/* Logo rail */}
        <div className="relative overflow-hidden rounded-[26px] bg-[rgba(255,255,255,0.015)] py-6 md:py-8">
          {/* Border lines */}
          <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-white/10 md:left-12 md:right-12" />
          <div className="pointer-events-none absolute left-8 right-8 bottom-0 h-px bg-white/10 md:left-12 md:right-12" />
          <div className="pointer-events-none absolute bottom-0 left-8 top-0 w-px bg-white/10 md:left-12" />
          <div className="pointer-events-none absolute bottom-0 right-8 top-0 w-px bg-white/10 md:right-12" />

          {/* Corner + middle nodes */}
          <div className="pointer-events-none absolute left-8 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-[#050312] md:left-12" />
          <div className="pointer-events-none absolute left-8 bottom-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/14 bg-[#050312] md:left-12" />
          <div className="pointer-events-none absolute right-8 top-0 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-[#050312] md:right-12" />
          <div className="pointer-events-none absolute right-8 bottom-0 h-3 w-3 translate-x-1/2 translate-y-1/2 rounded-full border border-white/14 bg-[#050312] md:right-12" />

          <div className="pointer-events-none absolute left-8 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-[#050312] md:left-12" />
          <div className="pointer-events-none absolute right-8 top-1/2 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-[#050312] md:right-12" />

          {/* Side fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050312] to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050312] to-transparent md:w-32" />

          {/* Logo rail */}
          <div className="flex animate-scroll-logos items-center whitespace-nowrap will-change-transform">
            {[...logos, ...logos].map((logo, index) => (
              <LogoItem key={`${logo}-${index}`} text={logo} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-20 grid items-start gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:mt-28">
          {/* Left */}
          <div className="max-w-[700px] lg:pl-[90px]">
            <h2 className="max-w-[720px] text-[28px] font-[500] leading-[1.00] tracking-[-0.04em] text-white md:text-[26px] lg:text-[46px] xl:text-[54px]">
              Everything your agent needs to go from prototype to product -
              fixed.
            </h2>

            <p className="mt-8 max-w-[640px] text-[20px] leading-[1.28] tracking-[-0.02em] text-white/68 md:text-[26px] lg:text-[30px]">
              Modular when you want control. All-in-one when you just need to
              launch.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[110px] md:h-[360px] md:w-[360px]" />

            <div className="relative space-y-4 md:space-y-6">
              {comparisonRows.map((row) => (
                <CompareCard key={row.left} left={row.left} right={row.right} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
