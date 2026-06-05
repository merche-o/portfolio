"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";
import {
  MOUSE_TILT_MAX_X,
  MOUSE_TILT_MAX_Y,
} from "@/hooks/useMouseTilt";

type AbstractShapesProps = {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
};

export function AbstractShapes({ rotateX, rotateY }: AbstractShapesProps) {
  const ringX = useTransform(
    rotateY,
    [-MOUSE_TILT_MAX_Y, MOUSE_TILT_MAX_Y],
    [-18, 18],
  );
  const ringY = useTransform(
    rotateX,
    [-MOUSE_TILT_MAX_X, MOUSE_TILT_MAX_X],
    [12, -12],
  );
  const cubeX = useTransform(
    rotateY,
    [-MOUSE_TILT_MAX_Y, MOUSE_TILT_MAX_Y],
    [12, -12],
  );
  const cubeY = useTransform(
    rotateX,
    [-MOUSE_TILT_MAX_X, MOUSE_TILT_MAX_X],
    [-10, 10],
  );

  return (
    <div className="abstract-shapes pointer-events-none" aria-hidden>
      <motion.div
        className="abstract-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="abstract-cube"
        style={{ x: cubeX, y: cubeY, rotateX: 20, rotateY: -15 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="abstract-blob"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
