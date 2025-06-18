"use client";
import { Text3D, Center } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import * as React from 'react'

// Define props type using THREE.Group properties
type Animated3DWordsProps = React.PropsWithChildren<{
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
}>

const words = [
  "Innovation",
  "Technology",
  "Creativity",
  "Solutions",
  "Future",
  "InnoWave620"
]

export default function Animated3DWords(props: Animated3DWordsProps) {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={groupRef} {...props}>
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
            <meshStandardMaterial
              color={"#fbbf24"}
              metalness={0.7}
              roughness={0.3}
            />
          </Text3D>
        </Center>
      ))}
    </group>
  )
}
