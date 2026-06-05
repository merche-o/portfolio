"use client";

import { BatteryFull, Signal, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };
    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-medium text-white/90">
      <div className="flex items-center gap-1">
        <Signal className="h-3 w-3" />
        <span className="text-[10px]">OM</span>
        <Wifi className="h-3 w-3" />
      </div>
      <span>{time}</span>
      <BatteryFull className="h-3.5 w-3.5" />
    </div>
  );
}
