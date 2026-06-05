"use client";

import { apps } from "@/data/apps";
import { AppIcon } from "./AppIcon";
import { CalendarWidget } from "./CalendarWidget";
import { PhotoWidget } from "./PhotoWidget";

const APP_PLACEMENTS = [
  "ios-grid-app-1",
  "ios-grid-app-2",
  "ios-grid-app-3",
  "ios-grid-app-4",
  "ios-grid-app-5",
  "ios-grid-app-6",
  "ios-grid-app-7",
] as const;

export function HomeScreen() {
  return (
    <div className="relative flex h-full flex-col">
      <div className="phone-wallpaper absolute inset-0" />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="ios-home-grid">
          <CalendarWidget />
          <PhotoWidget />
          {apps.map((app, i) => (
            <div key={app.id} className={`ios-grid-cell ${APP_PLACEMENTS[i]}`}>
              <AppIcon app={app} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
