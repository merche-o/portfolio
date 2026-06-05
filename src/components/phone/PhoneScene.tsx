"use client";

import { Canvas } from "@react-three/fiber";
import { PhoneModel } from "./PhoneModel";

export function PhoneScene() {
  return (
    <Canvas
      className="h-full w-full"
      style={{ pointerEvents: "none" }}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[-3, 2, 4]} intensity={1.4} color="#8b5cf6" />
      <pointLight position={[3, -1, 3]} intensity={1} color="#22c55e" />
      <directionalLight position={[0, 4, 5]} intensity={0.5} color="#f5f5f7" />
      <PhoneModel />
    </Canvas>
  );
}
