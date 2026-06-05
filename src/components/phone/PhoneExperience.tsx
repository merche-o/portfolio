"use client";

import { motion, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useEffect, useRef, type RefObject } from "react";
import { PhoneOSProvider, usePhoneOS } from "@/context/PhoneOSContext";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { profile } from "@/data/profile";
import { AbstractShapes } from "./AbstractShapes";
import { BurgerMenu } from "./BurgerMenu";
import { MobileHeroFooter, OrbitalCopy } from "./OrbitalCopy";
import { PhoneDevice } from "./PhoneDevice";
import { PhoneGlow } from "./PhoneGlow";
import { PhoneOS } from "./PhoneOS";

function HeroCenter({
  rotateX,
  rotateY,
  phoneRef,
}: {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  phoneRef: RefObject<HTMLDivElement | null>;
}) {
  const { activeApp } = usePhoneOS();
  const centerScale = useSpring(1, { stiffness: 160, damping: 22 });

  useEffect(() => {
    centerScale.set(activeApp ? 1.03 : 1);
  }, [activeApp, centerScale]);

  return (
    <motion.div
      className={`hero-center ${activeApp ? "hero-center-focused" : ""}`}
      style={{ scale: centerScale }}
    >
      <PhoneGlow rotateX={rotateX} rotateY={rotateY} />
      <AbstractShapes rotateX={rotateX} rotateY={rotateY} />
      <PhoneDevice ref={phoneRef} rotateX={rotateX} rotateY={rotateY}>
        <PhoneOS />
      </PhoneDevice>
    </motion.div>
  );
}

function LandingPage() {
  const { activeApp, isMenuOpen, closeApp, closeMenu } = usePhoneOS();
  const phoneRef = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } =
    useMouseTilt();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (isMenuOpen) {
        closeMenu();
        return;
      }
      if (activeApp) closeApp();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeApp, isMenuOpen, closeApp, closeMenu]);

  return (
    <div
      className={`landing-page page-gradient ${activeApp ? "landing-page--app-open" : ""}`}
      onMouseMove={(e) => {
        if (!activeApp) handleMouseMove(e);
      }}
      onMouseLeave={handleMouseLeave}
    >
      <header className="landing-nav" data-app-dismiss-exempt>
        <span className="landing-nav-brand">{profile.name}</span>
        <BurgerMenu />
      </header>

      <main
        className={`hero-stage ${activeApp ? "hero-stage--app-open" : ""}`}
      >
        {activeApp && (
          <button
            type="button"
            aria-label="Close app"
            className="app-focus-backdrop"
            onClick={closeApp}
          />
        )}

        <OrbitalCopy />

        <HeroCenter
          rotateX={rotateX}
          rotateY={rotateY}
          phoneRef={phoneRef}
        />

        <MobileHeroFooter />
      </main>
    </div>
  );
}

export default function PhoneExperience() {
  return (
    <PhoneOSProvider>
      <LandingPage />
    </PhoneOSProvider>
  );
}
