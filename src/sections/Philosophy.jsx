import ParallaxImage from '../components/ParallaxImage'

export default function Philosophy() {
    return (
        <section className="section philosophy" style={{ overflow: 'hidden', position: 'relative' }}>
            <ParallaxImage src="/philosophy_bg.png" alt="Fresh Ingredients" speed={0.3} />
            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ maxWidth: '600px', background: 'rgba(0,0,0,0.7)', padding: '3rem', backdropFilter: 'blur(10px)', borderLeft: '4px solid var(--color-accent)' }}>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Rooted in Nature</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#e0e0e0' }}>
                        We believe that the best flavors come from the earth itself. Our "Farm to Table" philosophy guides every decision we make, ensuring that only the freshest, organic ingredients grace your plate.
                    </p>
                    <p style={{ fontSize: '1.2rem', color: '#e0e0e0' }}>
                        Seasonal, sustainable, and simply spectacular.
                    </p>
                </div>
            </div>
        </section>
    )
}
