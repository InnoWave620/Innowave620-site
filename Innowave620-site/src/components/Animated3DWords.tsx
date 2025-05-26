import React from "react";
import { Text3D, Center } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

// Example words related to innovation, technology, and creativity
const words = [
  "Innovation",
  "Technology",
  "Creativity",
  "Solutions",
  "Future",
  "InnoWave620"
];

export default function Animated3DWords(props: GroupProps) {
  return (
    <group {...props}>
      {words.map((word, i) => (
        <Center key={word} position={[i * 2.5 - 6, 0, 0]}>
          <Text3D
            font="/3D_Models/fluxs_pit_stop/fonts/helvetiker_regular.typeface.json"
            size={0.7}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.04}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {word}
            <meshStandardMaterial color={"#fbbf24"} metalness={0.7} roughness={0.3} />
          </Text3D>
        </Center>
      ))}
    </group>
  );
}