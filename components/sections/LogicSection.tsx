import Image from "next/image";

export default function LogicSection() {
  return (
    <section className="relative overflow-hidden bg-[#050312] pt-20 pb-24 md:pt-28 md:pb-32 xl:pt-32 xl:pb-36">
      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[18%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[85px] md:h-[320px] md:w-[320px] md:blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 md:px-8 xl:px-10">
        {/* TOP VISUAL */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[1100px]">
            <Image
              src="/images/section-images/image-layer.webp"
              alt="CometChat logic architecture"
              width={1400}
              height={700}
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
