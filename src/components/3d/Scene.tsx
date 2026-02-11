'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';

import Globe from './Globe';
import Routes from './Routes';

export default function Scene() {
    return (
        <div className="fixed inset-0 bg-black">
            <Canvas
                shadows
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[3, 0, 7]} />
                    <OrbitControls
                        enableDamping
                        dampingFactor={0.05}
                        minDistance={3}
                        maxDistance={12}
                    />

                    <color attach="background" args={['#000000']} />

                    {/* Lighting */}
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />

                    {/* Main Visuals */}
                    <group>
                        <Globe />
                        <Routes />
                    </group>

                    {/* Post Processing */}
                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.2}
                            mipmapBlur
                            intensity={1.5}
                            radius={0.3}
                        />
                        <Vignette eskil={false} offset={0.1} darkness={1.3} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}
