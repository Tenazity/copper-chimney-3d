import { Canvas, useThree } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useLayoutEffect, useRef } from 'react'
import { ChefModel } from './ChefModel'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AnimationController() {
    const modelRef = useRef()
    const { camera } = useThree()

    useLayoutEffect(() => {
        if (!modelRef.current) return

        // Simply fade out/move away the model when scrolling past Hero
        gsap.to(modelRef.current.position, {
            x: 10, // Move off screen to the right
            scrollTrigger: {
                trigger: "#hero",
                start: "bottom center",
                end: "bottom top",
                scrub: 1,
            }
        })

    }, [])

    return (
        <group ref={modelRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                {/* Positioned to the right, slightly closer to center to ensure full visibility */}
                <ChefModel position={[1.8, -1.8, 0]} scale={2.4} rotation={[0, -0.5, 0]} />
            </Float>
        </group>
    )
}

export default function Scene() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -5, -10]} intensity={0.5} color="#d4af37" />

                <Suspense fallback={null}>
                    <AnimationController />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    )
}
