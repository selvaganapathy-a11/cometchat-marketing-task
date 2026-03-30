import Image from "next/image";
import { Sparkles } from "lucide-react";

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Sparkles size={14} className="mt-1 text-[#7b5cff]" />
      <p className="text-white/70 text-[15px] md:text-[17px] leading-[1.4]">
        {text}
      </p>
    </div>
  );
}

function InfraCard({
  title,
  points,
  image,
  icon,
}: {
  title: string;
  points: string[];
  image: string;
  icon: string;
}) {
  return (
    <div className="relative rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.02)] p-6 md:p-8 lg:p-10 overflow-hidden">
      {/* ICON */}
      <div className="mb-6 relative h-14 w-14 sm:h-16 sm:w-16">
        <Image
          src={icon}
          alt={`${title} icon`}
          fill
          sizes="64px"
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-[22px] md:text-[26px] font-medium text-white leading-tight">
        {title}
      </h3>

      {/* BULLETS */}
      <div className="mt-6 space-y-4">
        {points.map((p) => (
          <Bullet key={p} text={p} />
        ))}
      </div>

      {/* LINK */}
      <p className="mt-6 text-[#8f72ff] text-[15px] cursor-pointer">
        Learn more
      </p>

      {/* IMAGE */}
      <div className="mt-10 flex justify-center">
        <Image
          src={image}
          alt="infra visual"
          width={500}
          height={300}
          loading="lazy"
          quality={82}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          className="w-full max-w-[480px] object-contain opacity-90"
        />
      </div>

      {/* subtle glow */}
      <div className="pointer-events-none absolute bottom-[-40px] left-1/2 h-[160px] w-[160px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[80px]" />
    </div>
  );
}

export default function InfraChoiceSection() {
  return (
    <section className="bg-[#050312] py-20 md:py-28 xl:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* HEADER */}
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="text-[36px] md:text-[64px] lg:text-[80px] font-medium text-white leading-[1.05] tracking-[-0.04em]">
            Plug In your logic.
            <br />
            Or build it here.
          </h2>

          <p className="mt-5 text-white/60 text-[18px] md:text-[24px]">
            Two paths. Same full-stack experience.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <InfraCard
            title="BYOB - Bring Your Own (Agent) Brain"
            icon="/images/icons/byob-icon.webp"
            image="/images/section-images/infra-1.webp"
            points={[
              "Use your existing LLM orchestration",
              "Plug into CometChat’s UI, mod, notifications, and insights",
              "Modular, protocol-compatible, and fast to implement",
            ]}
          />

          <InfraCard
            title="Build Inside CometChat"
            icon="/images/icons/build-icon.webp"
            image="/images/section-images/infra-2.webp"
            points={[
              "Visual Agent Builder",
              "Design prompt logic, memory, retries, tool use",
              "Simulate and ship - all from a single canvas",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
