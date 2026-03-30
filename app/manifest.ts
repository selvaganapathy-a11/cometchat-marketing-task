import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CometChat Marketing Page",
    short_name: "CometChat",
    description:
      "A responsive marketing landing page for chat, voice, video, and AI-powered communication experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#050312",
    theme_color: "#6F4DFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
