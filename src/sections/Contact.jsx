import { useState, useEffect } from 'react';
import ParallaxImage from '../components/ParallaxImage';

export default function Contact() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="section contact" id="contact" style={{ 
            overflow: 'hidden',
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '2rem 1rem' : '4rem 1rem',
        }}>
            <ParallaxImage 
                src="/contact_bg.png" 
                alt="Table Setting" 
                speed={0.4}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />
            
            <div className="container" style={{ 
                textAlign: 'center', 
                maxWidth: '800px', 
                position: 'relative', 
                zIndex: 1,
                width: '100%',
            }}>
                <h2 style={{ 
                    fontSize: isMobile ? '2.5rem' : '4rem', 
                    marginBottom: '1rem', 
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    color: 'white',
                }}>
                    Reserve Your Table
                </h2>
                <p style={{ 
                    fontSize: isMobile ? '1rem' : '1.2rem', 
                    color: '#e0e0e0', 
                    marginBottom: isMobile ? '2rem' : '3rem', 
                    textShadow: '0 2px 5px rgba(0,0,0,0.5)',
                    lineHeight: 1.6,
                }}>
                    Experience the extraordinary. Book your exclusive dining moment.
                </p>

                <form style={{ 
                    display: 'grid', 
                    gap: '1.5rem', 
                    background: 'rgba(0,0,0,0.7)', 
                    padding: isMobile ? '1.5rem' : '3rem', 
                    borderRadius: '16px', 
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                        gap: '1.5rem' 
                    }}>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                style={inputStyle} 
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                style={inputStyle} 
                                required
                            />
                        </div>
                    </div>
                    
                    <div>
                        <input 
                            type="datetime-local" 
                            style={inputStyle} 
                            required
                        />
                    </div>
                    
                    <div>
                        <select 
                            style={inputStyle}
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>Number of Guests</option>
                            {[1, 2, 3, 4, 5, 6, '7+'].map(num => (
                                <option key={num} value={num}>
                                    {num} {num === 1 ? 'person' : 'people'}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div>
                        <textarea 
                            rows="4" 
                            placeholder="Special Requests" 
                            style={{
                                ...inputStyle,
                                minHeight: '120px',
                                resize: 'vertical',
                            }}
                        ></textarea>
                    </div>
                    
                    <button 
                        className="btn-primary" 
                        style={{ 
                            justifySelf: 'center', 
                            marginTop: '1rem', 
                            background: 'var(--color-accent)', 
                            borderColor: 'var(--color-accent)', 
                            color: 'black',
                            width: isMobile ? '100%' : 'auto',
                            padding: '1rem 3rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            border: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.opacity = '0.9';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.opacity = '1';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Confirm Reservation
                    </button>
                </form>
            </div>
        </section>
    );
}

const inputStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '0.9rem 1rem',
    color: 'white',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-body)',
    borderRadius: '6px',
    outline: 'none',
    transition: 'all 0.3s ease',
    WebkitAppearance: 'none',
};
