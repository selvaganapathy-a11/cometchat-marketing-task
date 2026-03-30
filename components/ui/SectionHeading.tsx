type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
