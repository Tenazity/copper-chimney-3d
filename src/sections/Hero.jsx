export default function Hero() {
    return (
        <section className="section hero" id="hero" style={{ justifyContent: 'center' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ flex: 1, zIndex: 1 }}>
                    <h1 style={{ fontSize: '10vh', fontWeight: 800, lineHeight: 0.9 }}>
                        TASTE <br />
                        <span style={{ color: 'var(--color-accent)' }}>THE ARTISTRY</span>
                    </h1>
                    <p style={{ fontSize: '1.5rem', marginTop: '2rem', maxWidth: '500px', color: 'var(--color-text-muted)' }}>
                        Experience culinary perfection where tradition meets modern innovation.
                    </p>
                    <div style={{ marginTop: '3rem' }}>
                        <button className="btn-primary">View Menu</button>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    {/* Space reserved for 3D Model on the right */}
                </div>
            </div>
        </section>
    )
}
