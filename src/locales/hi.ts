// Sprout 2.0 — Hindi locale placeholder
// All strings are marked TODO — replace with approved translations before production.
// Do not machine-translate without expert review.

import type { Locale } from './en';

// Using Partial so TypeScript shows which keys still need translation
export const hi: Partial<Locale> = {
  brand: {
    name: "Sprout", // Keep brand name in English
    tagline: "TODO: Hindi translation needed",
    logoAlt: "Sprout लोगो",
    pipAlt: "Pip, Sprout का शुभंकर",
  },
  disclaimer: {
    text: "TODO: Hindi disclaimer — निवेश बाज़ार जोखिमों के अधीन हैं। निवेश करने से पहले सभी योजना-संबंधी दस्तावेज़ ध्यान से पढ़ें।",
  },
  // All other keys: TODO
};
