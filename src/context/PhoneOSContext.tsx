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

type PhoneOSContextValue = {
  activeApp: AppId | null;
  isMenuOpen: boolean;
  openApp: (id: AppId) => void;
  closeApp: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const PhoneOSContext = createContext<PhoneOSContextValue | null>(null);

export function PhoneOSProvider({ children }: { children: ReactNode }) {
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (activeApp) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [activeApp]);

  const openApp = useCallback((id: AppId) => {
    setActiveApp(id);
    setIsMenuOpen(true);
  }, []);

  const closeApp = useCallback(() => {
    setActiveApp(null);
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((open) => !open);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      activeApp,
      isMenuOpen,
      openApp,
      closeApp,
      toggleMenu,
      closeMenu,
    }),
    [activeApp, isMenuOpen, openApp, closeApp, toggleMenu, closeMenu],
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
