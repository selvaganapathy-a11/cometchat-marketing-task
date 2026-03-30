import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://cometchat-marketing-task.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "CometChat Marketing Page | In-App Chat, Calls & AI Agent Platform",
    template: "%s | CometChat Marketing Page",
  },
  description:
    "A production-style marketing landing page inspired by CometChat, showcasing in-app chat, voice and video calling, and AI agent platform capabilities for modern apps and websites.",
  keywords: [
    "CometChat",
    "in-app chat SDK",
    "chat API",
    "voice and video calling",
    "AI agent platform",
    "real-time communication",
    "React marketing page",
    "technical SEO",
    "Next.js landing page",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CometChat Marketing Page | In-App Chat, Calls & AI Agent Platform",
    description:
      "Explore a modern marketing landing page for chat, calling, and AI-powered user communication experiences.",
    url: siteUrl,
    siteName: "CometChat Marketing Page",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "CometChat Marketing Landing Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CometChat Marketing Page | In-App Chat, Calls & AI Agent Platform",
    description:
      "A responsive marketing landing page built with Next.js, focused on SEO, performance, and scalable frontend architecture.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CometChat Marketing Page",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "A marketing landing page for a communication platform featuring chat, voice, video, and AI agent capabilities.",
  url: siteUrl,
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
    "AI agent platform",
    "UI Kits and SDKs",
    "Moderation and notifications",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Skip Link for Accessibility + SEO Quality */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
