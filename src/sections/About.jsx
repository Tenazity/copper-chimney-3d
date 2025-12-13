import ParallaxImage from '../components/ParallaxImage'

export default function About() {
    return (
        <section className="section about" id="about" style={{ overflow: 'hidden' }}>
            <ParallaxImage src="/about_bg.png" alt="Restaurant Kitchen" />
            <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '600px', background: 'rgba(15, 15, 15, 0.85)', padding: '4rem', backdropFilter: 'blur(20px)', borderRadius: '0' }}>
                    <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Our Story</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#ccc' }}>
                        Founded with a passion for exceptional flavors, we bring world-class cuisine to your plate. Our chefs painstakingly select the finest ingredients to craft dishes that are as beautiful as they are delicious.
                    </p>
                    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
                        Every meal is a performance, every bite a memory. Welcome to the future of dining.
                    </p>
                </div>
            </div>
        </section>
    )
}
