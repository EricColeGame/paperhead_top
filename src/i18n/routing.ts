import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ru", "ja", "de"] as const;

export const defaultLocale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
