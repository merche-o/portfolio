export type TechStackItem = {
  id: string;
  label: string;
  icon: string;
};

export const techStack: TechStackItem[] = [
  { id: "flutter", label: "Flutter", icon: "/icons/flutter.svg" },
  { id: "supabase", label: "Supabase", icon: "/icons/supabase.svg" },
  {
    id: "react-native",
    label: "React Native",
    icon: "/icons/react-native.svg",
  },
  { id: "firebase", label: "Firebase", icon: "/icons/firebase.svg" },
  { id: "stripe", label: "Stripe", icon: "/icons/stripe.svg" },
  { id: "swift", label: "Swift", icon: "/icons/swift.svg" },
];

export type OrbitalCardPosition = {
  techId: string;
  className: string;
  tiltX: number;
  tiltY: number;
  translateZ: number;
  parallaxX: number;
  parallaxY: number;
  floatDelay: number;
};

/** Exploded 3D positions orbiting the phone */
export const orbitalTechCards: OrbitalCardPosition[] = [
  {
    techId: "flutter",
    className: "orbital-card orbital-card-flutter",
    tiltX: 14,
    tiltY: -18,
    translateZ: 80,
    parallaxX: 18,
    parallaxY: 10,
    floatDelay: 0,
  },
  {
    techId: "supabase",
    className: "orbital-card orbital-card-supabase",
    tiltX: -10,
    tiltY: 16,
    translateZ: 40,
    parallaxX: -14,
    parallaxY: 8,
    floatDelay: 0.6,
  },
  {
    techId: "react-native",
    className: "orbital-card orbital-card-rn hidden md:block",
    tiltX: 8,
    tiltY: 12,
    translateZ: -30,
    parallaxX: 12,
    parallaxY: -8,
    floatDelay: 1.2,
  },
  {
    techId: "firebase",
    className: "orbital-card orbital-card-firebase",
    tiltX: -16,
    tiltY: -8,
    translateZ: 60,
    parallaxX: -16,
    parallaxY: -10,
    floatDelay: 0.3,
  },
  {
    techId: "stripe",
    className: "orbital-card orbital-card-stripe hidden sm:block",
    tiltX: 12,
    tiltY: -10,
    translateZ: -50,
    parallaxX: 10,
    parallaxY: 12,
    floatDelay: 1.8,
  },
  {
    techId: "swift",
    className: "orbital-card orbital-card-swift hidden lg:block",
    tiltX: -8,
    tiltY: -14,
    translateZ: 20,
    parallaxX: -12,
    parallaxY: 6,
    floatDelay: 2.4,
  },
];
