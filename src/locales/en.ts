// Sprout 2.0 — English locale strings
// All user-facing copy lives here for future i18n support (Hindi: hi.ts)

export const en = {
  // ── Brand
  brand: {
    name: "Sprout",
    tagline: "Your first step into investing starts small.",
    logoAlt: "Sprout logo",
    pipAlt: "Pip, the Sprout mascot",
  },

  // ── Risk disclaimer (required on every investment-related screen)
  disclaimer: {
    text: "Investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.",
  },

  // ── Navigation
  nav: {
    product: "Product",
    howItWorks: "How it works",
    learn: "Learn",
    signIn: "Sign in",
    startCta: "Start with ₹100",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  // ── Homepage
  home: {
    hero: {
      heading: "Your first step into investing starts small.",
      sub: "Learn the basics, understand your choices, and start your investing journey from ₹100, where available.",
      primaryCta: "Start my journey",
      secondaryCta: "See how it works",
    },
    trust: {
      heading: "Why Sprout?",
      items: [
        {
          icon: "Seedling",
          title: "Start small.",
          desc: "Begin from ₹100, where the investment product supports it. No pressure, no minimums beyond that.",
        },
        {
          icon: "BookOpen",
          title: "Understand before you invest.",
          desc: "Read explanations of each step before you commit. We will not rush you through important decisions.",
        },
        {
          icon: "Map",
          title: "Know what happens next.",
          desc: "Every screen tells you exactly where you are, what is required, and what comes after.",
        },
      ],
    },
    howItWorks: {
      heading: "How Sprout works",
      sub: "Three steps from curious to getting started.",
      steps: [
        {
          num: "01",
          title: "Learn your options.",
          desc: "Explore plain-language explanations of investment products. Understand risk, costs, and liquidity before choosing anything.",
        },
        {
          num: "02",
          title: "Complete identity verification.",
          desc: "KYC (Know Your Customer) is required by regulation. We will explain exactly which documents you need before you begin.",
        },
        {
          num: "03",
          title: "Choose your first investment.",
          desc: "Only when you are ready. Review your options, understand what you are choosing, and invest on your own terms.",
        },
      ],
    },
    learnFirst: {
      heading: "You don't need to know everything to begin learning.",
      sub: "Sprout helps you build a foundation before you make any financial decision. Start wherever you are.",
      note: "The illustrative figures below are educational examples only. They do not represent actual products, returns, or guarantees.",
    },
    pipGuide: {
      heading: "New to investing? Start with the basics.",
      sub: "Pip will guide you through the important terms and explain each step clearly.",
      cards: [
        {
          title: "What is investing?",
          preview: "Investing means putting money into an investment product with the aim of meeting a financial goal over time.",
          body: "When you invest, you are allocating money with the hope that it will grow in value. However, investment values can also fall, and you may receive less than you put in. Different products — such as mutual funds, stocks, or fixed deposits — work in different ways and carry different levels of risk. Sprout helps you understand the differences before you choose.",
        },
        {
          title: "What does risk mean?",
          preview: "Risk refers to the possibility that your investment may not grow as expected — or may lose value.",
          body: "All investments carry some degree of risk. A product that offers the possibility of higher returns typically also carries a higher possibility of loss. Lower-risk products generally offer more stability, but may grow more slowly. Understanding your own comfort with uncertainty — and the time you can leave money invested — is an important part of making an informed choice.",
        },
        {
          title: "What should I understand before choosing?",
          preview: "Before selecting any investment product, consider your goal, how long you can invest, and what level of risk you are comfortable with.",
          body: "Ask yourself: What am I trying to achieve? When will I need this money? How would I feel if its value dropped temporarily? You do not need a financial advisor to start learning, but reading the scheme documents, understanding fees, and considering your own circumstances matters. Sprout is an educational tool — the decisions you make are yours.",
        },
      ],
    },
    kycPreview: {
      heading: "A little preparation makes getting started easier.",
      sub: "Understanding what is needed before you begin reduces unexpected interruptions during verification.",
      checklist: [
        { label: "PAN card", note: "Required for identity verification under applicable regulations." },
        { label: "Aadhaar or other supported ID", note: "Exact requirements depend on the verification flow. Check what applies to your situation." },
        { label: "Registered mobile number access", note: "You will likely receive an OTP or confirmation on this number." },
        { label: "A few uninterrupted minutes", note: "Verification can take a few minutes. A stable internet connection helps." },
      ],
      cta: "Check what I need",
      note: "Exact document requirements depend on the applicable KYC process and should be verified before submission.",
    },
    faq: {
      heading: "Common questions",
      items: [
        {
          q: "Can I start with ₹100?",
          a: "Starting from ₹100 is supported for certain investment products where the minimum investment allows it. The exact minimum varies by product. We will show you the minimum for each option before you decide.",
        },
        {
          q: "Why is identity verification required?",
          a: "KYC (Know Your Customer) verification is required by financial regulations in India. It helps establish your identity before you can access regulated investment products. This is a legal requirement, not specific to Sprout.",
        },
        {
          q: "What documents should I prepare?",
          a: "Typically, you will need a PAN card and an Aadhaar card or another accepted identity document. The exact requirements depend on the verification flow in use. We explain this clearly before you begin so there are no surprises.",
        },
        {
          q: "How long might verification take?",
          a: "Verification time varies. Some flows complete quickly; others may require manual review and take longer. We will show you the status at every stage and explain what to do if a step is taking time.",
        },
        {
          q: "Can I lose money when investing?",
          a: "Yes. Investment values can rise or fall. You may receive less than the amount you put in. Investments are subject to market risks. Please read all scheme-related documents carefully before investing.",
        },
        {
          q: "What if verification does not work?",
          a: "If verification encounters an issue, we will explain what happened and provide a clear path forward — including options to retry, correct your information, or contact support. You will never be left on a screen without guidance.",
        },
      ],
    },
    finalCta: {
      heading: "Ready to take your first step?",
      sub: "Start by learning what investing involves. Move forward when you understand the process.",
      primaryCta: "Start my journey",
      secondaryCta: "Explore the basics",
    },
  },

  // ── Onboarding
  onboarding: {
    stepLabels: ["Welcome", "Your goals", "Learn", "Prepare", "Verify"],

    welcome: {
      heading: "Let's make your first step simple.",
      body: "Learn how investing works, prepare what you need, and move at your own pace. No jargon, no pressure.",
      primaryCta: "Get started",
      secondaryCta: "Learn the basics",
    },

    goals: {
      heading: "What would you like to start with?",
      sub: "Your answer helps us show you relevant learning content. It is not investment advice.",
      options: [
        { id: "habit", label: "Build an investing habit" },
        { id: "mutual-funds", label: "Learn about mutual funds" },
        { id: "explore-options", label: "Understand different investment options" },
        { id: "exploring", label: "I'm still exploring" },
      ],
      privacy: "Your selection personalises the educational content we show you. It is not treated as financial advice.",
      primaryCta: "Continue",
      skipCta: "Skip for now",
    },

    learn: {
      heading: "Understand first. Choose when you're ready.",
      sub: "Read through these key ideas before you make any decision.",
      cards: [
        {
          icon: "Target",
          title: "Investing and financial goals",
          body: "Investing means putting money into an investment product with the aim of meeting a financial goal. The goal might be building savings, planning for a large purchase, or preparing for the future.",
        },
        {
          icon: "TrendingDown",
          title: "Values can rise and fall",
          body: "Investment values are not fixed. They can increase or decrease based on market conditions. You may receive less than the amount you put in. This is called investment risk, and it applies to all investment types to varying degrees.",
        },
        {
          icon: "LayoutGrid",
          title: "Products differ in important ways",
          body: "Different investment products have different risk levels, costs, liquidity (how easily you can access your money), and time horizons. Understanding these differences matters before choosing.",
        },
      ],
      primaryCta: "Continue",
      secondaryCta: "Explore the basics",
      disclaimer: "Reading these cards does not qualify you to invest or constitute personalised financial advice.",
    },

    prepare: {
      heading: "Before we verify your identity",
      sub: "Have the required details ready so you can complete verification without unexpected interruptions.",
      checklist: [
        {
          label: "PAN card",
          note: "Required for identity verification. Have the physical card or a clear digital copy accessible.",
          required: true,
        },
        {
          label: "Aadhaar or supported identity document",
          note: "Accepted documents depend on the applicable KYC flow. Check which applies to your situation before proceeding.",
          required: true,
        },
        {
          label: "Registered mobile number",
          note: "You may receive a one-time password (OTP) on this number. Ensure you have access to it during verification.",
          required: true,
        },
        {
          label: "Stable internet connection",
          note: "A stable connection reduces the risk of interruptions during document upload or verification steps.",
          required: false,
        },
      ],
      statusNote: "You can review this checklist before continuing. Exact requirements should be verified before submitting.",
      primaryCta: "I'm ready",
      secondaryCta: "I need more information",
      checkboxLabel: "I have reviewed the document checklist and understand what may be required.",
      helpPanel: {
        heading: "Document guidance",
        body: "Verification requirements vary depending on the KYC provider and your specific circumstances. Generally, a valid PAN card and an Aadhaar card (or another accepted government-issued identity document) are needed. You may also need access to your registered mobile number for OTP verification. If you are unsure about the requirements, contact support before beginning the verification process.",
        close: "Close",
      },
    },

    verification: {
      heading: "Let's verify your identity.",
      sub: "This step helps establish your identity before you can access eligible investment products.",
      demoNote: "This is a demonstration flow. No real identity data is collected or verified.",
      steps: ["Review details", "Verify identity", "Check status"],
      primaryCta: "Start demo verification",
      states: {
        idle: {
          heading: "Ready to begin demo verification",
          body: "This demonstration does not collect real PAN numbers, Aadhaar numbers, or identity documents. Click below to simulate the verification process.",
        },
        processing: {
          heading: "Verification in progress",
          body: "Please keep this screen open while we process your demo submission. This simulates the verification step in a real flow.",
        },
        success: {
          heading: "Demo verification complete.",
          body: "Your demo verification has finished. In a live application, this would mean your identity was verified with the KYC provider. This demo does not represent real regulatory verification.",
          cta: "Continue to first investment",
        },
        additionalInfo: {
          heading: "Additional information needed",
          body: "The demo flow requires a correction. In a real flow, you would be asked to review or resubmit specific information. Please try again.",
          cta: "Retry demo",
        },
        failed: {
          heading: "Demo verification could not complete.",
          body: "The demo encountered a simulated issue. In a real flow, you would receive guidance on next steps. You can retry or contact support.",
          retryCta: "Retry demo",
          supportCta: "Contact support",
        },
      },
    },
  },

  // ── First investment
  invest: {
    heading: "Your next step is a considered choice.",
    sub: "Explore available options, understand the risks, and choose only when you are ready.",
    educationalNote: "The products shown below are illustrative examples for this prototype. They do not represent real financial products, live NAVs, or current availability. Production data and regulated workflows would be integrated separately.",
    primaryCta: "Explore investment options",
    secondaryCta: "Keep learning",
    disclaimer: "Investment values can rise or fall. Please read all scheme-related documents carefully. This prototype does not facilitate real investments.",
    sampleProducts: [
      {
        id: "sample-equity",
        name: "Sample Large Cap Fund",
        category: "Equity",
        riskLevel: "High",
        minInvestment: "₹100",
        note: "Illustrative only. Not a real fund.",
        description: "An illustrative equity mutual fund that invests in large, established companies. Equity funds carry higher market risk and may be suitable for investors with a longer time horizon who understand that values can fall significantly.",
      },
      {
        id: "sample-debt",
        name: "Sample Short-Term Debt Fund",
        category: "Debt",
        riskLevel: "Moderate",
        minInvestment: "₹500",
        note: "Illustrative only. Not a real fund.",
        description: "An illustrative debt mutual fund investing in fixed-income instruments. Generally carries lower volatility than equity, but is not risk-free. Interest rate changes and credit events can affect value.",
      },
      {
        id: "sample-hybrid",
        name: "Sample Balanced Advantage Fund",
        category: "Hybrid",
        riskLevel: "Moderate-High",
        minInvestment: "₹100",
        note: "Illustrative only. Not a real fund.",
        description: "An illustrative hybrid fund that adjusts its equity and debt allocation based on market conditions. Carries both equity and debt risks. Suitable for educational demonstration of a multi-asset approach.",
      },
    ],
  },

  // ── Footer
  footer: {
    disclaimer: "Investments are subject to market risks. Please read all scheme-related documents carefully before investing.",
    legal: "This prototype is for educational and demonstration purposes only. It does not constitute financial advice, a regulated investment service, or a real product offering. Legal entity name, SEBI registration, and regulatory details would be added before production launch after appropriate compliance review.",
    links: {
      product: "Product",
      howItWorks: "How it works",
      learn: "Learn",
      help: "Help",
      contact: "Contact",
      privacy: "Privacy policy",
      terms: "Terms of service",
    },
    language: {
      en: "English",
      hi: "हिन्दी (coming soon)",
    },
  },
};

export type Locale = typeof en;
