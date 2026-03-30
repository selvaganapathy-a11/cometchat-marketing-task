import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050312] pt-16 md:pt-20 lg:pt-24">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[18%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#7B5CFF]/14 blur-[110px] md:h-[280px] md:w-[280px] md:blur-[130px]" />
        <div className="absolute left-1/2 top-[30%] h-[220px] w-[700px] -translate-x-1/2 rounded-full bg-[#7B5CFF]/10 blur-[130px] md:h-[260px] md:w-[980px] md:blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] overflow-hidden">
        <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
          <div className="relative z-30 flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Main glow behind icon */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B5CFF]/20 blur-[70px] sm:h-[220px] sm:w-[220px] sm:blur-[85px] md:h-[280px] md:w-[280px] md:blur-[110px] lg:h-[340px] lg:w-[340px] lg:blur-[140px]" />

              {/* Extra soft outer glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D4DFF]/10 blur-[110px] sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px] lg:h-[460px] lg:w-[460px] lg:blur-[160px]" />

              {/* Shadow under icon */}
              <div className="pointer-events-none absolute bottom-[-18px] left-1/2 h-[55px] w-[120px] -translate-x-1/2 rounded-full bg-black/35 blur-[35px] sm:bottom-[-20px] sm:h-[60px] sm:w-[140px] md:bottom-[-24px] md:h-[70px] md:w-[170px] lg:bottom-[-28px] lg:h-[80px] lg:w-[190px]" />

              <Image
                src="/images/section-images/talk-c.png"
                alt="CometChat"
                width={260}
                height={260}
                loading="lazy"
                quality={82}
                sizes="(max-width: 640px) 120px, (max-width: 768px) 145px, (max-width: 1024px) 180px, (max-width: 1280px) 210px, 230px"
                className="relative z-10 h-[120px] w-[120px] object-contain sm:h-[145px] sm:w-[145px] md:h-[180px] md:w-[180px] lg:h-[210px] lg:w-[210px] xl:h-[230px] xl:w-[230px]"
              />
            </div>
          </div>
        </div>

        {/* CURVED AREA */}
        <div className="relative mx-auto mt-[-34px] flex min-h-[420px] items-start justify-center overflow-hidden rounded-t-[55%] bg-[#04020D] px-5 pt-24 pb-16 shadow-[0_-40px_110px_rgba(123,92,255,0.15)] md:mt-[-42px] md:min-h-[520px] md:px-8 md:pt-28 md:pb-20 lg:mt-[-48px] lg:min-h-[620px] lg:pt-32 lg:pb-24 xl:min-h-[680px] xl:pt-36">
          {/* top glow line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(123,92,255,0.38),transparent)] opacity-90" />

          {/* outer purple dome glow */}
          <div className="pointer-events-none absolute inset-x-0 top-[-80px] mx-auto h-[220px] w-[92%] rounded-full bg-[#7B5CFF]/10 blur-[90px] md:top-[-90px] md:h-[260px] md:w-[88%] md:blur-[110px]" />

          {/* center content */}
          <div className="relative z-10 mx-auto max-w-[980px] text-center">
            <h2 className="mx-auto max-w-[980px] text-[26px] font-[500] leading-[1.03] tracking-[-0.055em] text-white sm:text-[22px] md:text-[48px] lg:text-[54px] xl:text-[84px]">
              You don’t need to build it
              <br />
              all to ship it all
            </h2>

            <p className="mx-auto mt-5 max-w-[860px] text-[16px] leading-[1.38] tracking-[-0.02em] text-white/62 sm:text-[18px] md:mt-6 md:text-[22px] lg:text-[28px] xl:text-[30px]">
              Start with chat. Or go full stack. Build fast, scale securely, and
              focus on what your agent does - not what it’s missing.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10 md:gap-4">
              <button className="inline-flex h-[50px] items-center justify-center rounded-[15px] border border-white/10 bg-[rgba(255,255,255,0.02)] px-7 text-[16px] font-medium tracking-[-0.02em] text-white transition duration-300 hover:border-white/20 hover:bg-white/5 md:h-[54px] md:px-8 md:text-[17px]">
                Talk to Us
              </button>

              <button className="inline-flex h-[50px] items-center justify-center rounded-[15px] bg-[#7B5CFF] px-7 text-[16px] font-medium tracking-[-0.02em] text-white transition duration-300 hover:bg-[#8d72ff] md:h-[54px] md:px-8 md:text-[17px]">
                Try the Agent Builder
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
