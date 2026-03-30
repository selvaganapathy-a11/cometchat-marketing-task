type ButtonProps = {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#7b5cff] text-white hover:bg-[#8a6cff] border border-[#8f72ff]/20 shadow-[0_12px_30px_rgba(123,92,255,0.28)]"
      : "bg-[rgba(255,255,255,0.02)] text-white border border-white/10 hover:bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

  return (
    <a
      href={href}
      className={`inline-flex min-h-[56px] items-center justify-center rounded-[18px] px-7 text-[15px] font-medium tracking-[-0.01em] transition-all duration-300 ${styles}`}
    >
      {text}
    </a>
  );
}
