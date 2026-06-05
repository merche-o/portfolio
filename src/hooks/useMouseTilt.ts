"use client";

import { useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export const MOUSE_TILT_MAX_Y = 8;
export const MOUSE_TILT_MAX_X = 6;

const BASE_ROTATE_Y = 0;
const BASE_ROTATE_X = 0;

export function useMouseTilt() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const rotateX = useSpring(BASE_ROTATE_X, { stiffness: 120, damping: 22 });
  const rotateY = useSpring(BASE_ROTATE_Y, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionEnabled(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement> | MouseEvent) => {
      if (!motionEnabled) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      rotateY.set(x * MOUSE_TILT_MAX_Y);
      rotateX.set(-y * MOUSE_TILT_MAX_X);
    },
    [motionEnabled, rotateX, rotateY],
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(BASE_ROTATE_X);
    rotateY.set(BASE_ROTATE_Y);
  }, [rotateX, rotateY]);

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}
