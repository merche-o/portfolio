"use client";

import Image from "next/image";
import {
  motion,
  type MotionValue,
  useTransform,
} from "framer-motion";
import { orbitalTechCards, techStack } from "@/data/techStack";
import {
  MOUSE_TILT_MAX_X,
  MOUSE_TILT_MAX_Y,
} from "@/hooks/useMouseTilt";

type TechStackDecorProps = {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
};

function TechCard({
  techId,
  className,
  tiltX,
  tiltY,
  translateZ,
  parallaxX,
  parallaxY,
  floatDelay,
  rotateX,
  rotateY,
}: {
  techId: string;
  className: string;
  tiltX: number;
  tiltY: number;
  translateZ: number;
  parallaxX: number;
  parallaxY: number;
  floatDelay: number;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}) {
  const x = useTransform(
    rotateY,
    [-MOUSE_TILT_MAX_Y, MOUSE_TILT_MAX_Y],
    [-parallaxX, parallaxX],
  );
  const y = useTransform(
    rotateX,
    [-MOUSE_TILT_MAX_X, MOUSE_TILT_MAX_X],
    [parallaxY, -parallaxY],
  );
  const tech = techStack.find((t) => t.id === techId);

  if (!tech) return null;

  return (
    <motion.div className={className} style={{ x, y, z: translateZ }}>
      <motion.div
        className="tech-stack-card tech-stack-card-3d"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformPerspective: "900px",
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4.5 + floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
      >
        <Image src={tech.icon} alt={tech.label} width={40} height={40} />
        <span className="tech-stack-card-label">{tech.label}</span>
      </motion.div>
    </motion.div>
  );
}

export function TechStackDecor({ rotateX, rotateY }: TechStackDecorProps) {
  return (
    <div className="tech-stack-decor pointer-events-none" aria-hidden>
      {orbitalTechCards.map((card) => (
        <TechCard
          key={card.techId}
          {...card}
          rotateX={rotateX}
          rotateY={rotateY}
        />
      ))}
    </div>
  );
}
