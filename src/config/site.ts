export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "PAPERHEAD Wiki",
  shortName: "PAPERHEAD",
  logoText: "P",
  tagline: "Weapons, Enemies, Guides & Secrets",
  description: "Your ultimate PAPERHEAD guide! Explore weapons, enemies, secrets, walkthroughs and tips for the dark cardboard horror boomer shooter on Steam.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://paperhead.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://paperhead.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2680280/",
  heroVideoId: "XbQBUMcaktk", // PAPERHEAD Official Demo Trailer
  social: {
    youtube: "https://www.youtube.com/watch?v=XbQBUMcaktk",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
