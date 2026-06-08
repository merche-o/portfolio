"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { AppId } from "@/data/apps";
import { useDesktopNav } from "@/hooks/useDesktopNav";

type PhoneOSContextValue = {
  activeApp: AppId | null;
  isMenuOpen: boolean;
  isDesktopNav: boolean;
  openApp: (id: AppId) => void;
  closeApp: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const PhoneOSContext = createContext<PhoneOSContextValue | null>(null);

export function PhoneOSProvider({ children }: { children: ReactNode }) {
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktopNav = useDesktopNav();

  useEffect(() => {
    if (!activeApp) {
      setMenuOpen(false);
      return;
    }

    setMenuOpen(isDesktopNav);
  }, [activeApp, isDesktopNav]);

  const isMenuOpen = menuOpen && (!activeApp || isDesktopNav);

  const openApp = useCallback((id: AppId) => {
    setActiveApp(id);
  }, []);

  const closeApp = useCallback(() => {
    setActiveApp(null);
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    if (activeApp && !isDesktopNav) {
      setMenuOpen(false);
      return;
    }

    setMenuOpen((open) => !open);
  }, [activeApp, isDesktopNav]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      activeApp,
      isMenuOpen,
      isDesktopNav,
      openApp,
      closeApp,
      toggleMenu,
      closeMenu,
    }),
    [
      activeApp,
      isMenuOpen,
      isDesktopNav,
      openApp,
      closeApp,
      toggleMenu,
      closeMenu,
    ],
  );

  return (
    <PhoneOSContext.Provider value={value}>{children}</PhoneOSContext.Provider>
  );
}

export function usePhoneOS() {
  const context = useContext(PhoneOSContext);
  if (!context) {
    throw new Error("usePhoneOS must be used within PhoneOSProvider");
  }
  return context;
}
