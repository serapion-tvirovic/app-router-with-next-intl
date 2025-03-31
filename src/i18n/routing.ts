import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de", "el"],

  // Used when no locale matches
  defaultLocale: "en",

  domains: [
    { domain: "localhost:3000", defaultLocale: "en", locales: ["en", "de"] },
    { domain: "localhostel:3000", defaultLocale: "el", locales: ["el"] },
  ],

  localePrefix: {
    mode: "as-needed",
  },

  localeDetection: false,
});
