"use client";

import type { AppDefinition } from "@/data/apps";
import { usePhoneOS } from "@/context/PhoneOSContext";
import { getAccentClasses } from "./appStyles";

type AppIconProps = {
  app: AppDefinition;
};

export function AppIcon({ app }: AppIconProps) {
  const { openApp } = usePhoneOS();
  const { icon: Icon } = app;
  const accent = getAccentClasses(app.accent);

  return (
    <button
      type="button"
      onClick={() => openApp(app.id)}
      className="ios-app-button group"
    >
      <div
        className={`ios-icon-grid flex items-center justify-center border transition-all duration-200 ${accent.icon} ${accent.glow} ${accent.hover}`}
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <span
        className={`ios-icon-label transition-colors duration-200 ${accent.label}`}
      >
        {app.label}
      </span>
    </button>
  );
}
