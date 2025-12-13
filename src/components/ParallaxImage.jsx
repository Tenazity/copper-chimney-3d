import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ParallaxImage({ src, alt, speed = 0.5 }) {
    const triggerRef = useRef()
    const imgRef = useRef()

    useEffect(() => {
        const trigger = triggerRef.current
        const img = imgRef.current

        gsap.fromTo(img,
            { y: "-10%" },
            {
                y: "10%",
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0,
                }
            }
        )
    }, [speed])

    return (
        <div ref={triggerRef} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1
        }}>
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '120%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.5)' // Overlay for readability
            }}></div>
        </div>
    )
}
