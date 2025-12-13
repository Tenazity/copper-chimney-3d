import ParallaxImage from '../components/ParallaxImage'
import { Link } from 'react-router-dom'

export default function Featured() {
    return (
        <section className="section featured" style={{ overflow: 'hidden', position: 'relative' }}>
            <ParallaxImage src="/featured_bg.png" alt="Featured Dish" speed={0.4} />
            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
                <div style={{ maxWidth: '500px', textAlign: 'right' }}>
                    <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-accent)' }}>Chef's Selection</span>
                    <h2 style={{ fontSize: '4rem', margin: '0.5rem 0 1.5rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>Seared Ocean Melody</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#f0f0f0', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
                        A symphony of flavors featuring line-caught seabass, saffron foam, and a delicate herb crust.
                    </p>
                    <Link to="/reserve" className="btn-primary" style={{ background: 'var(--color-accent)', borderColor: 'var(--color-accent)', color: 'black' }}>
                        Reserve Your Taste
                    </Link>
                </div>
            </div>
        </section>
    )
}
