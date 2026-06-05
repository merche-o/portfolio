"use client";

import Image from "next/image";
import { profile } from "@/data/profile";

export function PhotoWidget() {
  return (
    <div
      className="ios-widget-square ios-grid-photo ios-photo-widget"
      aria-label={`Profile photo of ${profile.name}`}
      role="img"
    >
      <Image
        src={profile.avatar}
        alt={profile.name}
        fill
        sizes="(max-width: 480px) 40vw, 200px"
        className="ios-photo-widget-image"
      />
    </div>
  );
}
