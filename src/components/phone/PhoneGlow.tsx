"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";
import {
  MOUSE_TILT_MAX_X,
  MOUSE_TILT_MAX_Y,
} from "@/hooks/useMouseTilt";

type PhoneGlowProps = {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
};

export function PhoneGlow({ rotateX, rotateY }: PhoneGlowProps) {
  const translateX = useTransform(
    rotateY,
    [-MOUSE_TILT_MAX_Y, MOUSE_TILT_MAX_Y],
    [14, -14],
  );
  const translateY = useTransform(
    rotateX,
    [-MOUSE_TILT_MAX_X, MOUSE_TILT_MAX_X],
    [10, -10],
  );

  return (
    <motion.div
      className="phone-glow pointer-events-none absolute"
      style={{ translateX, translateY }}
      aria-hidden
    />
  );
}
