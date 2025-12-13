import ParallaxImage from '../components/ParallaxImage'

export default function Contact() {
    return (
        <section className="section contact" id="contact" style={{ overflow: 'hidden' }}>
            <ParallaxImage src="/contact_bg.png" alt="Table Setting" speed={0.4} />
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Reserve Your Table</h2>
                <p style={{ fontSize: '1.2rem', color: '#e0e0e0', marginBottom: '3rem', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
                    Experience the extraordinary. Book your exclusive dining moment.
                </p>

                <form style={{ display: 'grid', gap: '1.5rem', background: 'rgba(0,0,0,0.7)', padding: '3rem', borderRadius: '16px', backdropFilter: 'blur(5px)' }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <input type="text" placeholder="Name" style={inputStyle} />
                        <input type="email" placeholder="Email" style={inputStyle} />
                    </div>
                    <input type="text" placeholder="Date & Time" style={inputStyle} />
                    <textarea rows="4" placeholder="Special Requests" style={inputStyle}></textarea>
                    <button className="btn-primary" style={{ justifySelf: 'center', marginTop: '1rem', background: 'var(--color-accent)', borderColor: 'var(--color-accent)', color: 'black' }}>Confirm Reservation</button>
                </form>
            </div>
        </section>
    )
}

const inputStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'var(--font-body)',
    borderRadius: '4px',
    outline: 'none'
}
