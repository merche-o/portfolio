"use client";

import { usePhoneOS } from "@/context/PhoneOSContext";
import { AppWindow } from "./AppWindow";
import { HomeScreen } from "./HomeScreen";
import { StatusBar } from "./StatusBar";

export function PhoneOS() {
  const { activeApp } = usePhoneOS();

  return (
    <div className="relative h-full w-full overflow-hidden bg-bg-deep">
      <StatusBar />
      {!activeApp && <HomeScreen />}
      <AppWindow />
    </div>
  );
}
