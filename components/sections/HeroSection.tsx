import Image from "next/image";
import Button from "../ui/Button";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050312]">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[16%] h-[240px] w-[240px] rounded-full bg-[#7B5CFF]/10 blur-[120px] md:h-[320px] md:w-[320px] md:blur-[160px]" />
        <div className="absolute right-[8%] top-[18%] h-[260px] w-[260px] rounded-full bg-[#6EE7FF]/8 blur-[130px] md:h-[360px] md:w-[360px] md:blur-[180px]" />
        <div className="absolute right-[18%] top-[42%] h-[240px] w-[240px] rounded-full bg-[#7B5CFF]/10 blur-[130px] md:h-[320px] md:w-[320px] md:blur-[180px]" />
      </div>

      {/* subtle grid feel */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto max-w-[1680px] px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12 lg:px-10 lg:pb-24 lg:pt-14 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] xl:gap-10">
          {/* LEFT */}
          <div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:pl-[90px] xl:pl-[120px]">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#8A6BFF]/70 bg-[rgba(255,255,255,0.02)] px-3 py-2 pr-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm md:mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(180deg,#ffffff_0%,#EADFFF_100%)] text-[#8A6BFF] shadow-[0_8px_20px_rgba(138,107,255,0.28)]">
                <Sparkles size={18} fill="currentColor" strokeWidth={1.5} />
              </span>

              <span className="text-[15px] font-medium tracking-[-0.02em] text-[#D8C8FF] md:text-[17px] xl:text-[18px]">
                Full Stack AI Agent Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[760px] text-[42px] font-[500] leading-[0.97] tracking-[-0.055em] text-white sm:text-[38px] md:text-[2px] lg:text-[52px] xl:text-[66px]">
              Ship the{" "}
              <span className="bg-[linear-gradient(180deg,#FFFFFF_0%,#B18BFF_100%)] bg-clip-text text-transparent">
                agent.
              </span>
              <br />
              Skip the{" "}
              <span className="bg-[linear-gradient(180deg,#FFFFFF_0%,#B18BFF_100%)] bg-clip-text text-transparent">
                plumbing.
              </span>
            </h1>

            {/* Paragraphs */}
            <div className="mt-7 max-w-[760px] space-y-5 md:mt-8 md:space-y-6">
              <p className="text-[18px] leading-[1.28] tracking-[-0.025em] text-white/68 md:text-[22px] lg:text-[23px] xl:text-[24px]">
                Why are you still stitching together chat UIs, retries,
                moderation, notifications, and analytics - just to get your
                agent into users&apos; hands?
              </p>

              <p className="text-[18px] leading-[1.28] tracking-[-0.025em] text-white/68 md:text-[22px] lg:text-[23px] xl:text-[24px]">
                CometChat gives you the entire frontend + infra layer.
              </p>

              <p className="text-[18px] leading-[1.28] tracking-[-0.025em] text-white/68 md:text-[22px] lg:text-[23px] xl:text-[24px]">
                Full stack. Modular. Production-ready.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-4">
              <button className="inline-flex h-[54px] items-center justify-center rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.02)] px-7 text-[17px] font-medium tracking-[-0.02em] text-white transition duration-300 hover:border-white/20 hover:bg-white/5 md:h-[58px] md:px-8">
                Schedule a Demo
              </button>

              <button className="inline-flex h-[54px] items-center justify-center rounded-[16px] bg-[#7B5CFF] px-7 text-[17px] font-medium tracking-[-0.02em] text-white shadow-[0_12px_40px_rgba(123,92,255,0.28)] transition duration-300 hover:bg-[#8A6BFF] md:h-[58px] md:px-8">
                Try the Agent Builder
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* background glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[300px] w-[300px] rounded-full bg-[#7B5CFF]/16 blur-[90px] md:h-[420px] md:w-[420px] md:blur-[120px]" />
            </div>

            {/* image wrap */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[620px] xl:max-w-[700px] 2xl:max-w-[760px]">
              {/* center soft blend */}
              <div className="pointer-events-none absolute inset-0 z-0 rounded-[40px] bg-[radial-gradient(circle_at_50%_45%,rgba(123,92,255,0.14),rgba(123,92,255,0.08),transparent_72%)] blur-[35px]" />

              {/* exact image */}
              <Image
                src="/images/section-images/ai-agent.webp"
                alt="AI Agent Interface"
                width={1000}
                height={1000}
                priority
                quality={85}
                sizes="(max-width: 640px) 360px, (max-width: 768px) 420px, (max-width: 1024px) 500px, (max-width: 1280px) 620px, 760px"
                className="relative z-10 h-auto w-full object-contain opacity-[0.98] drop-shadow-[0_0_40px_rgba(123,92,255,0.14)] [mask-image:radial-gradient(circle_at_center,black_62%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_62%,transparent_100%)]"
              />

              {/* bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[18%] bg-gradient-to-t from-[#050312] via-[#050312]/70 to-transparent" />

              {/* side fade */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[10%] bg-gradient-to-r from-[#050312] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[10%] bg-gradient-to-l from-[#050312] to-transparent" />

              {/* top fade */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[12%] bg-gradient-to-b from-[#050312]/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
