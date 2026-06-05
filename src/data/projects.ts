export type Project = {
  title: string;
  description: string;
  link?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Scout",
    description:
      "Sports team management platform for coaches, parents, and players. Built with Flutter and Supabase, covering scheduling, chat, attendance, payments, and team management. Reached 500+ teams and 1,000+ active users worldwide.",
    link: "https://www.teamscout.app/",
    image: "/images/scout_white_logo.png",
  },
  {
    title: "Ball Bolt",
    description:
      "Football-learning app where coaches assign video-based exercises for children to do at home. Built end to end in Flutter with Supabase, analytics, and RevenueCat memberships.",
    link: "https://www.ballbolt.kr/",
    image: "/images/ballbolt.png",
  },
  {
    title: "Applotto",
    description:
      "Gamified lottery app built in Flutter with a Supabase backend and Flame game engine. Delivered the POC in under 6 months with search and matching features.",
    link: "https://www.applotto.co/",
    image: "/images/applotto.png",
  },
  {
    title: "NomadHer",
    description:
      "Community-driven app for female solo travelers. Built features with React Native, integrating Stripe, Firebase, Google Analytics, and maps.",
    link: "https://www.nomadher.com/",
    image: "/images/nomadher.png",
  },
  {
    title: "Innosonian",
    description:
      "CPR training solutions with BLE-connected manikins for real-time feedback. Led iOS development and delivered a React web platform for remote training.",
    link: "https://innosonian.global/",
    image: "/images/innosonian.png",
  },
];
