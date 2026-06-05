export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Scout",
    role: "Co-Founder | Technical Lead",
    period: "Jan 2025 – Present",
    location: "Seoul, South Korea",
    bullets: [
      "Co-founded and technically led Scout, a sports team management platform for coaches, parents, and players.",
      "Led a team of 4 across Flutter, Supabase, Firebase, PostHog analytics, Stripe, Toss Payments, Google Maps, Naver Maps, CI/CD, and production releases.",
      "Owned backend and client architecture, including data modeling, business logic, integrations, and deployment.",
      "Owned roadmap execution, QA, deployment, and technical advising to the CEO.",
      "Shipped iOS and Android apps covering scheduling, chat, attendance, payments, invoicing, media galleries, injury tracking, and team management.",
      "Product reached 500+ teams and 1,000+ active users worldwide.",
      "Built Codemagic CI/CD and helped reach 300+ users in the first month after launch.",
      "Delivered the MVP as sole engineer on Flutter + Supabase, helping secure funding for the full build.",
    ],
  },
  {
    company: "Ballbolt",
    role: "Software Technical Lead",
    period: "Oct 2023 – Dec 2024",
    location: "Seoul, South Korea",
    bullets: [
      "Sole developer on a football-learning app where coaches assigned video-based exercises for children to do at home.",
      "Built the full product in Flutter with a Supabase backend.",
      "Implemented analytics, RevenueCat memberships, and video/playlist content flows.",
      "Delivered the product end to end in under a year, from architecture to production release.",
    ],
  },
  {
    company: "App Lotto (Applotto)",
    role: "Freelance Full-stack Developer",
    period: "Dec 2023 – Oct 2024",
    location: "Seoul, South Korea",
    bullets: [
      "Built a gamified lottery app in Flutter with a Supabase backend.",
      "Implemented the game layer with the Flame engine.",
      "Delivered the POC in under 6 months.",
      "Built search and matching features with a focus on performance and polish.",
    ],
  },
  {
    company: "NomadHer",
    role: "React Native Developer",
    period: "Jan 2023 – Jul 2023",
    location: "Seoul, South Korea",
    bullets: [
      "Built features for a React Native app for solo-traveling women.",
      "Worked in a team of 2 developers on product delivery and iteration.",
      "Integrated Stripe, Firebase, Google Analytics, Google Maps, and Naver Maps.",
      "Shipped production features for a successful consumer app with strong market recognition.",
    ],
  },
  {
    company: "CAVEA",
    role: "React Native Developer",
    period: "Jun 2022 – Dec 2022",
    location: "Seoul, South Korea",
    bullets: [
      "Improved layouts, user flows, and visual polish for a city event discovery app.",
      "Contributed to the React Native frontend for browsing concerts, exhibitions, festivals, and other local events.",
      "Implemented Google Maps and Naver Maps integrations for location-based discovery.",
    ],
  },
  {
    company: "pairplay",
    role: "iOS Developer",
    period: "Jan 2022 – May 2022",
    location: "Seoul, South Korea",
    bullets: [
      "Modernized the iOS codebase with MVVM, SwiftUI, and Combine.",
      "Improved code structure, maintainability, and development velocity.",
      "Implemented Google Maps and Naver Maps integrations for community and sports meetup features.",
    ],
  },
  {
    company: "Adena Software",
    role: "iOS Developer",
    period: "Oct 2021 – Jan 2022",
    location: "Seoul, South Korea",
    bullets: [
      "Sole iOS developer on a SwiftUI app delivering crypto news and market content.",
      "Built feed, notifications, and search functionality.",
      "Integrated external APIs to fetch and display crypto news in the app.",
      "Shipped production iOS work in an existing app environment.",
    ],
  },
  {
    company: "INNOSONIAN",
    role: "iOS Developer",
    period: "Oct 2018 – Sep 2021",
    location: "Seoul, South Korea",
    bullets: [
      "Led iOS development for a CPR training app using Swift, SwiftUI, and CoreBluetooth.",
      "Integrated BLE with a sensor-equipped training manikin to provide real-time CPR feedback.",
      "Built features for a healthcare training product used by hospitals, universities, and partners including the American Red Cross.",
      "Delivered a React web platform for remote training with video and live feedback during COVID-19.",
    ],
  },
  {
    company: "Ubudu Asia",
    role: "Technical Project Manager",
    period: "Jun 2016 – Oct 2018",
    location: "Hong Kong",
    bullets: [
      "Led technical delivery for indoor localization solutions using iBeacon and UWB.",
      "Supported enterprise clients across Asia with PoCs, installs, on-site support, training, and documentation.",
      "Worked at the intersection of hardware, software, and client deployment.",
      "Helped translate technical constraints into practical customer-facing solutions.",
    ],
  },
];
