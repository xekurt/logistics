'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ROUTE_COUNT = 15;

function Route({ curve, color }: { curve: THREE.CatmullRomCurve3, color: string }) {
    const particleRef = useRef<THREE.Mesh>(null!);
    const linePoints = useMemo(() => curve.getPoints(50), [curve]);

    useFrame((state) => {
        const t = (state.clock.elapsedTime * 0.2) % 1;
        const pos = curve.getPointAt(t);
        if (particleRef.current) {
            particleRef.current.position.copy(pos);
        }
    });

    return (
        <group>
            <line>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePoints.length}
                        array={new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z]))}
                        itemSize={3}
                        args={[new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z])), 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color={color} transparent opacity={0.2} />
            </line>
            <mesh ref={particleRef}>
                <sphereGeometry args={[0.015, 8, 8]} />
                <meshBasicMaterial color={color} />
            </mesh>
        </group>
    );
}

export default function Routes() {
    const routes = useMemo(() => {
        const generated = [];
        const radius = 2;

        for (let i = 0; i < ROUTE_COUNT; i++) {
            const start = new THREE.Vector3().setFromSphericalCoords(
                radius,
                Math.random() * Math.PI,
                Math.random() * Math.PI * 2
            );
            const end = new THREE.Vector3().setFromSphericalCoords(
                radius,
                Math.random() * Math.PI,
                Math.random() * Math.PI * 2
            );

            // Create an arc by adding a mid-point that is further away from center
            const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(radius * 1.5);
            const curve = new THREE.CatmullRomCurve3([start, mid, end]);

            generated.push({
                id: i,
                curve,
                color: Math.random() > 0.5 ? '#3b82f6' : '#60a5fa' // Blue variants
            });
        }
        return generated;
    }, []);

    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1; // Match globe rotation
        }
    });

    return (
        <group ref={groupRef}>
            {routes.map((route) => (
                <Route key={route.id} curve={route.curve} color={route.color} />
            ))}
        </group>
    );
}
