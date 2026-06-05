"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { apps } from "@/data/apps";
import { usePhoneOS } from "@/context/PhoneOSContext";
import { getAccentClasses } from "./appStyles";

export function BurgerMenu() {
  const { activeApp, isMenuOpen, openApp, toggleMenu } = usePhoneOS();

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Open navigation menu"
        className="relative z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white shadow-lg backdrop-blur-md transition-colors hover:border-purple-400/40 hover:bg-black/70"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            data-app-dismiss-exempt
            className="menu-drawer fixed right-0 top-0 z-[100] flex h-full w-full max-w-sm flex-col border-l border-purple-500/30 bg-black/90 shadow-[-8px_0_32px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
              <div className="border-b border-white/10 px-5 pb-5 pt-20">
                <p className="text-xs text-white/50">Navigation</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {activeApp ? "Switch app" : "Tap an app to explore"}
                </p>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                {apps.map((app) => {
                  const { icon: Icon } = app;
                  const accent = getAccentClasses(app.accent);
                  const isActive = activeApp === app.id;

                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => openApp(app.id)}
                      className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                        isActive
                          ? "border-l-2 border-green-400 bg-white/10"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl border ${accent.icon}`}
                      >
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-medium text-white">
                        {app.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
