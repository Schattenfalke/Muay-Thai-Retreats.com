/**
 * CONFIGURATION FILE
 * Update pricing, dates, and retreat info here
 */

const CONFIG = {
  // Brand
  brand: {
    name: "Jungle Reset Society",
    tagline: "Premium Muay Thai Retreats — Koh Samui",
    email: "hello@jungleresetsociety.com",
    whatsapp: "+66XXXXXXXXXX", // Update with real number
  },

  // Retreats
  retreats: {
    "7-day": {
      duration: 7,
      priceUSD: 3500,
      priceEUR: 3200,
      name: {
        en: "7-Day Reset",
        de: "7-Tage Reset",
      },
      description: {
        en: "One week of focused transformation",
        de: "Eine Woche fokussierte Transformation",
      },
    },
    "10-day": {
      duration: 10,
      priceUSD: 4900,
      priceEUR: 4500,
      name: {
        en: "10-Day Immersion",
        de: "10-Tage Immersion",
      },
      description: {
        en: "Complete reset and deep transformation",
        de: "Kompletter Reset und tiefe Transformation",
      },
    },
  },

  // Room Tiers
  rooms: {
    shared: {
      priceUSD: 0,
      priceEUR: 0,
      name: {
        en: "Shared Room",
        de: "Geteiltes Zimmer",
      },
      features: {
        en: ["Shared villa room", "Ensuite bathroom", "Premium bedding"],
        de: ["Geteiltes Villenzimmer", "Eigenes Bad", "Premium-Bettwäsche"],
      },
    },
    private: {
      priceUSD: 800,
      priceEUR: 700,
      name: {
        en: "Private Room",
        de: "Privatzimmer",
      },
      features: {
        en: ["Private room", "Ensuite bathroom", "Workspace", "Balcony access"],
        de: ["Privatzimmer", "Eigenes Bad", "Arbeitsbereich", "Balkonzugang"],
      },
    },
    vip: {
      priceUSD: 1500,
      priceEUR: 1300,
      name: {
        en: "VIP Suite",
        de: "VIP-Suite",
      },
      features: {
        en: [
          "Master suite",
          "Private bathroom",
          "Ocean view",
          "Priority booking",
          "Personal concierge",
        ],
        de: [
          "Master-Suite",
          "Privates Bad",
          "Meerblick",
          "Prioritäts-Buchung",
          "Persönlicher Concierge",
        ],
      },
    },
  },

  // Payment
  payment: {
    depositPercent: 20,
    balanceDueDays: 7, // Days before arrival
    currency: {
      en: "USD",
      de: "EUR",
    },
  },

  // Batches (Update with real dates)
  batches: [
    {
      id: "feb-2026",
      startDate: "2026-02-15",
      endDate7: "2026-02-22",
      endDate10: "2026-02-25",
      capacity: 10,
      spotsLeft: 6,
      villa: "Villa Suriya",
    },
    {
      id: "mar-2026-1",
      startDate: "2026-03-01",
      endDate7: "2026-03-08",
      endDate10: "2026-03-11",
      capacity: 10,
      spotsLeft: 8,
      villa: "Villa Suriya",
    },
    {
      id: "mar-2026-2",
      startDate: "2026-03-22",
      endDate7: "2026-03-29",
      endDate10: "2026-04-01",
      capacity: 10,
      spotsLeft: 10,
      villa: "Villa Suriya",
    },
  ],

  // Features (What's included)
  features: {
    en: [
      {
        title: "Elite Training",
        description: "Daily Muay Thai sessions with world-champion coaches",
      },
      {
        title: "Luxury Villa",
        description: "Exclusive accommodation in tropical paradise",
      },
      {
        title: "Premium Nutrition",
        description: "Chef-prepared meals designed for performance",
      },
      {
        title: "Recovery & Wellness",
        description: "Massage, meditation, and restoration protocols",
      },
      {
        title: "Island Experiences",
        description: "Curated adventures and local immersion",
      },
      {
        title: "High-Performer Network",
        description: "Connect with like-minded achievers",
      },
    ],
    de: [
      {
        title: "Elite-Training",
        description: "Tägliche Muay-Thai-Sessions mit Weltmeister-Coaches",
      },
      {
        title: "Luxusvilla",
        description: "Exklusive Unterkunft im tropischen Paradies",
      },
      {
        title: "Premium-Ernährung",
        description: "Vom Chefkoch zubereitete Performance-Mahlzeiten",
      },
      {
        title: "Erholung & Wellness",
        description: "Massage, Meditation und Regenerationsprotokolle",
      },
      {
        title: "Inselerlebnisse",
        description: "Kuratierte Abenteuer und lokales Eintauchen",
      },
      {
        title: "High-Performer-Netzwerk",
        description: "Verbindung mit Gleichgesinnten",
      },
    ],
  },

  // Transformation Journey (Horizontal Scroll)
  transformation: {
    en: [
      {
        phase: "Before",
        title: "Scattered",
        description:
          "Caught in the daily jungle. Energy dispersed. Focus fragmented.",
      },
      {
        phase: "During",
        title: "Forging",
        description:
          "Training body, sharpening mind. Discipline becomes natural.",
      },
      {
        phase: "After",
        title: "Calibrated",
        description: "Clarity restored. Energy directed. Ready to lead.",
      },
    ],
    de: [
      {
        phase: "Vorher",
        title: "Zerstreut",
        description:
          "Gefangen im Alltags-Dschungel. Energie verstreut. Fokus fragmentiert.",
      },
      {
        phase: "Während",
        title: "Schmieden",
        description:
          "Körper trainieren, Geist schärfen. Disziplin wird natürlich.",
      },
      {
        phase: "Nachher",
        title: "Kalibriert",
        description:
          "Klarheit wiederhergestellt. Energie gerichtet. Bereit zu führen.",
      },
    ],
  },
};
// Mache CONFIG global verfügbar
window.CONFIG = CONFIG;
