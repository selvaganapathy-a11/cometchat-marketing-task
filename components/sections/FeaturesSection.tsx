import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    title: "Messaging APIs",
    description:
      "Enable real-time messaging experiences with reliable delivery and rich interactions.",
  },
  {
    title: "Voice & Video",
    description:
      "Add high-quality calling experiences directly into your platform.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Support growing user bases with secure and scalable communication tools.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Everything you need to power conversations"
          subtitle="A modern communication stack for businesses building meaningful user engagement."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
