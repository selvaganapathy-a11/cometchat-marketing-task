import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PrototypeToProductSection from "@/components/sections/PrototypeToProductSection";
import StickyFeatureShowcase from "@/components/sections/StickyFeatureShowcase";
import LogicSection from "@/components/sections/LogicSection";
import InfraChoiceSection from "@/components/sections/InfraChoiceSection";
import IntegrationOptionsSection from "@/components/sections/IntegrationOptionsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "In-App Chat, Calling & AI Agent Platform",
  description:
    "Build real-time chat, voice and video experiences with AI-powered communication tools for modern apps and websites.",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CometChat Marketing Page",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "A responsive marketing landing page for in-app chat, voice and video calling, and AI-powered communication experiences.",
  url: siteConfig.url,
  brand: {
    "@type": "Brand",
    name: "CometChat",
  },
  publisher: {
    "@type": "Organization",
    name: "CometChat",
    url: "https://www.cometchat.com",
  },
  featureList: [
    "In-app messaging",
    "Voice and video calling",
    "AI communication agents",
    "Moderation and notifications",
    "Real-time communication SDKs",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main id="main-content">
        <h1 className="sr-only">
          In-app chat, voice and video calling, and AI communication platform
          for modern apps and websites
        </h1>

        <section aria-label="Hero section">
          <HeroSection />
        </section>

        <section aria-label="Prototype to product section">
          <PrototypeToProductSection />
        </section>

        <section aria-label="Feature showcase section">
          <StickyFeatureShowcase />
        </section>

        <section aria-label="Logic section">
          <LogicSection />
        </section>

        <section aria-label="Infrastructure section">
          <InfraChoiceSection />
        </section>

        <section aria-label="Integration options section">
          <IntegrationOptionsSection />
        </section>

        <section aria-label="Final call to action section">
          <FinalCTASection />
        </section>
      </main>

      <Footer />
    </>
  );
}
