import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ChefModel } from './ChefModel';
import gsap from 'gsap';

export default function ReserveScene() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: isMobile ? 0.4 : 0.6,
            pointerEvents: 'none',
        }}>
            <Canvas 
                shadows 
                camera={{
                    position: [0, 0, 5],
                    fov: isMobile ? 40 : 35,
                    near: 0.1,
                    far: 1000,
                }}
                dpr={Math.min(window.devicePixelRatio, 2)}
            >
                <ambientLight intensity={0.5} />
                <spotLight 
                    position={[10, 10, 10]} 
                    angle={0.15} 
                    penumbra={1} 
                    intensity={0.8} 
                    castShadow 
                />
                <pointLight 
                    position={[-10, -5, -10]} 
                    intensity={0.3} 
                    color="#d4af37" 
                />

                <Suspense fallback={null}>
                    <ChefAnimation isMobile={isMobile} />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}

function ChefAnimation({ isMobile }) {
    const modelRef = useRef();
    
    // Add subtle floating and rotation animation
    useFrame(({ clock }) => {
        if (modelRef.current) {
            modelRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2 - 0.5;
            modelRef.current.position.y = Math.sin(clock.getTime() * 0.5) * 0.1;
        }
    });

    return (
        <group ref={modelRef}>
            <Float 
                speed={isMobile ? 1 : 1.5} 
                rotationIntensity={0.1} 
                floatIntensity={0.5}
            >
                <ChefModel 
                    position={isMobile ? [0, -0.5, 0] : [1.5, -1.5, 0]} 
                    scale={isMobile ? 1.5 : 2} 
                    rotation={[0, -0.5, 0]} 
                />
            </Float>
        </group>
    );
}
