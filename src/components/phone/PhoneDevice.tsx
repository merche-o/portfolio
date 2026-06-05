"use client";

import {
  motion,
  useSpring,
  type MotionValue,
  useTransform,
} from "framer-motion";
import { forwardRef, useEffect, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePhoneOS } from "@/context/PhoneOSContext";
import { TechStackDecor } from "./TechStackDecor";

const PhoneScene = dynamic(
  () => import("./PhoneScene").then((mod) => mod.PhoneScene),
  { ssr: false },
);

type PhoneDeviceProps = {
  children: ReactNode;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
};

export const PhoneDevice = forwardRef<HTMLDivElement, PhoneDeviceProps>(
  function PhoneDevice({ children, rotateX, rotateY }, ref) {
    const { activeApp, closeApp } = usePhoneOS();
    const scale = useSpring(1, { stiffness: 180, damping: 22 });
    const flatRotateX = useSpring(0, { stiffness: 180, damping: 22 });
    const flatRotateY = useSpring(0, { stiffness: 180, damping: 22 });
    const zIndex = useTransform(scale, [1, 1.06], [10, 50]);

    useEffect(() => {
      scale.set(activeApp ? 1.06 : 1);
      if (activeApp) {
        flatRotateX.set(0);
        flatRotateY.set(0);
      }
    }, [activeApp, scale, flatRotateX, flatRotateY]);

    useEffect(() => {
      if (activeApp) return;

      const syncX = () => flatRotateX.set(rotateX.get());
      const syncY = () => flatRotateY.set(rotateY.get());
      const unsubX = rotateX.on("change", syncX);
      const unsubY = rotateY.on("change", syncY);
      syncX();
      syncY();

      return () => {
        unsubX();
        unsubY();
      };
    }, [activeApp, rotateX, rotateY, flatRotateX, flatRotateY]);

    return (
      <motion.div
        className={`phone-parallax-group ${activeApp ? "phone-parallax-group--app-open" : ""}`}
        style={{
          rotateX: flatRotateX,
          rotateY: flatRotateY,
          scale,
          zIndex,
          transformPerspective: 1200,
          transformStyle: activeApp ? "flat" : "preserve-3d",
        }}
      >
        <TechStackDecor rotateX={flatRotateX} rotateY={flatRotateY} />

        <div className="phone-ambient" aria-hidden>
          <PhoneScene />
        </div>

        <div
          ref={ref}
          className={`phone-device ${activeApp ? "phone-device--app-open" : ""}`}
        >
          <div
            className={`phone-screen ${activeApp ? "phone-screen--app-open" : ""}`}
          >
            {children}
            {activeApp ? (
              <button
                type="button"
                aria-label="Close app"
                onClick={closeApp}
                className="phone-home-bar phone-home-bar--interactive"
              />
            ) : (
              <div className="phone-home-bar" aria-hidden />
            )}
          </div>
        </div>
      </motion.div>
    );
  },
);
