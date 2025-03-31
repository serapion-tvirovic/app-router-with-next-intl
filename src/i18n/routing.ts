import { defineRouting, RoutingConfig } from "next-intl/routing";

type DomainConfig = {
  domain: string;
  defaultLocale: string;
  locales: string[];
};

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
  pathnames: {
    "/": "/",
    "/about-us": {
      de: "/uber-uns",
      el: "/onima-osis",
    },
  },
});
