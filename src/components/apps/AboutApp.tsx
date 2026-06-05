"use client";

import Image from "next/image";
import { profile } from "@/data/profile";

export function AboutApp() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center text-center">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={96}
          height={96}
          className="rounded-full border-2 border-purple-400/40"
        />
        <h3 className="mt-3 text-lg font-bold text-white">{profile.name}</h3>
        <p className="text-sm text-purple-300">{profile.title}</p>
        <p className="mt-1 text-xs text-white/50">
          {profile.location} · {profile.workStyle}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-white/80">{profile.about}</p>
    </div>
  );
}
