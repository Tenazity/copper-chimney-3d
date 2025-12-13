import ParallaxImage from '../components/ParallaxImage'

export default function Menu() {
    const items = [
        { title: "Truffle Risotto", price: "$35", desc: "Arborio rice, black truffle, parmesan crisp." },
        { title: "Wagyu Steak", price: "$85", desc: "A5 Japanese Wagyu, roasted garlic, microgreens." },
        { title: "Pan-Seared Scallops", price: "$42", desc: "Cauliflower purée, lemon butter sauce." },
        { title: "Chocolate Sphere", price: "$28", desc: "Dark chocolate, gold leaf, warm caramel pour." }
    ]

    return (
        <section className="section menu" id="menu" style={{ overflow: 'hidden' }}>
            <ParallaxImage src="/menu_bg.png" alt="Signature Dishes" speed={0.3} />
            <div className="container" style={{ position: 'relative', zIndex: 1, background: 'rgba(0,0,0,0.6)', padding: '4rem', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '3rem', textAlign: 'center' }}>Signature Selection</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {items.map((item, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            transition: 'var(--transition-smooth)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                                <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.price}</span>
                            </div>
                            <p style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
