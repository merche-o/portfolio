"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { apps } from "@/data/apps";
import { usePhoneOS } from "@/context/PhoneOSContext";
import { AppRenderer } from "./AppRenderer";

export function AppWindow() {
  const { activeApp, closeApp } = usePhoneOS();

  const activeAppDef = apps.find((app) => app.id === activeApp);

  return (
    <AnimatePresence>
      {activeApp && activeAppDef && (
        <motion.div
          key={activeApp}
          initial={{ y: "100%", opacity: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0.8 }}
          transition={{ type: "spring", damping: 30, stiffness: 320 }}
          className="app-window absolute inset-0 z-30 flex flex-col bg-black/70 backdrop-blur-xl"
        >
          <div className="app-window-accent h-0.5 w-full shrink-0" />
          <header className="app-window-header relative z-50 flex shrink-0 items-center border-b border-white/10 px-2 py-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeApp();
              }}
              className="app-back-button relative z-[51] flex min-h-[44px] min-w-[5rem] shrink-0 items-center gap-0.5 rounded-lg px-2.5 py-2 text-[0.9375em] text-green-400 transition-colors hover:bg-white/5 hover:text-green-300"
            >
              <ChevronLeft size={20} aria-hidden />
              <span>Back</span>
            </button>
            <h2 className="pointer-events-none absolute inset-x-0 text-center text-[1em] font-semibold text-white">
              {activeAppDef.label}
            </h2>
            <div className="invisible w-[5rem] shrink-0" aria-hidden />
          </header>
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 text-[1em] leading-relaxed">
            <AppRenderer appId={activeApp} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
