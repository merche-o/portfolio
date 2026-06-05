"use client";

import dynamic from "next/dynamic";

const PhoneExperience = dynamic(
  () => import("@/components/phone/PhoneExperience"),
  { ssr: false },
);

export default function Home() {
  return <PhoneExperience />;
}
