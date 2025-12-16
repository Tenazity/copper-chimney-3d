import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ChefModel } from './ChefModel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AnimationController() {
    const modelRef = useRef();
    const { camera, size } = useThree();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => {
        if (!modelRef.current) return;

        // Adjust model position and scale based on screen size
        const updateModelPosition = () => {
            if (isMobile) {
                // For mobile, position the model differently or hide it
                gsap.to(modelRef.current.position, {
                    x: 0,
                    y: -0.5,
                    z: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                });
                gsap.to(modelRef.current.scale, {
                    x: 1.8,
                    y: 1.8,
                    z: 1.8,
                    duration: 1,
                    ease: 'power2.inOut',
                });
            } else {
                // For desktop
                gsap.to(modelRef.current.position, {
                    x: 1.8,
                    y: -1.8,
                    z: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                });
                gsap.to(modelRef.current.scale, {
                    x: 2.4,
                    y: 2.4,
                    z: 2.4,
                    duration: 1,
                    ease: 'power2.inOut',
                });
            }
        };

        updateModelPosition();

        // Handle scroll animation only on desktop
        if (!isMobile) {
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "bottom center",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            scrollTl.to(modelRef.current.position, {
                x: 10, // Move off screen to the right
                duration: 1,
                ease: 'power2.inOut',
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isMobile]);

    // Add subtle animation
    useFrame(({ clock }) => {
        if (modelRef.current) {
            modelRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1 - 0.5;
        }
    });

    return (
        <group ref={modelRef}>
            <Float 
                speed={isMobile ? 1.5 : 2} 
                rotationIntensity={isMobile ? 0.1 : 0.2} 
                floatIntensity={isMobile ? 0.1 : 0.2}
            >
                <ChefModel 
                    position={isMobile ? [0, -0.5, 0] : [1.8, -1.8, 0]} 
                    scale={isMobile ? 1.8 : 2.4} 
                    rotation={[0, -0.5, 0]} 
                />
            </Float>
        </group>
    );
}

export default function Scene() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100vh', 
            zIndex: 0, 
            pointerEvents: 'none',
            opacity: isMobile ? 0.7 : 1,
            transition: 'opacity 0.5s ease',
        }}>
            <Canvas 
                shadows 
                camera={{
                    position: [0, 0, 5],
                    fov: isMobile ? 45 : 35,
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
                    intensity={isMobile ? 0.8 : 1} 
                    castShadow 
                />
                <pointLight 
                    position={[-10, -5, -10]} 
                    intensity={isMobile ? 0.3 : 0.5} 
                    color="#d4af37" 
                />

                <Suspense fallback={null}>
                    <AnimationController />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
