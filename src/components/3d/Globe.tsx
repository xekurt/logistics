'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Globe() {
    const pointsRef = useRef<THREE.Points>(null!);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group>
            {/* Outer Point Matrix */}
            <points ref={pointsRef}>
                <sphereGeometry args={[2, 64, 64]} />
                <pointsMaterial
                    size={0.02}
                    color="#1e3a8a"
                    transparent
                    opacity={0.8}
                    sizeAttenuation={true}
                />
            </points>

            {/* Inner Subtle Glow */}
            <mesh>
                <sphereGeometry args={[1.98, 64, 64]} />
                <meshStandardMaterial
                    color="#000022"
                    transparent
                    opacity={0.3}
                    roughness={1}
                    metalness={0}
                />
            </mesh>
        </group>
    );
}
