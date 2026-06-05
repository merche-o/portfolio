"use client";

import { RoundedBox } from "@react-three/drei";

export function PhoneModel() {
  return (
    <RoundedBox args={[1.55, 3.05, 0.12]} radius={0.08} smoothness={4}>
      <meshStandardMaterial
        color="#111118"
        metalness={0.85}
        roughness={0.25}
        emissive="#2d1b4e"
        emissiveIntensity={0.3}
      />
    </RoundedBox>
  );
}
