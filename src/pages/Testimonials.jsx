import ParallaxImage from '../components/ParallaxImage'
import { useEffect } from 'react'

export default function Testimonials() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const reviews = [
        { name: "James C.", text: "An absolute masterpiece of culinary art. The flavors are as stunning as the presentation.", role: "Food Critic" },
        { name: "Sarah L.", text: "The best dining experience of my life. The atmosphere is unmatched.", role: "Regular Guest" },
        { name: "Micheal R.", text: "Every dish tells a story. Truly a journey for the senses.", role: "Chef" }
    ]

    return (
        <section className="section testimonials" style={{ overflow: 'hidden' }}>
            <ParallaxImage src="/testimonials_bg.png" alt="Lounge Area" speed={0.2} />
            <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '10vh' }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '4rem', textAlign: 'center', color: 'var(--color-accent)' }}>Guest Stories</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {reviews.map((review, index) => (
                        <div key={index} style={{
                            background: 'rgba(255,255,255,0.08)',
                            padding: '3rem',
                            borderRadius: '2px', // Sharp edges for modern look
                            borderLeft: '4px solid var(--color-accent)',
                            backdropFilter: 'blur(5px)'
                        }}>
                            <p style={{ fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>"{review.text}"</p>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{review.name}</h4>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
