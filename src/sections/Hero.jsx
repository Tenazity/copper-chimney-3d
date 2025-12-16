import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '6rem 0',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                height: '100%',
                position: 'relative',
                zIndex: 1,
            }}>
                <div className="hero-content" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'left',
                    width: '100%',
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                    }}>
                        TASTE <br />
                        <span style={{ 
                            color: 'var(--color-accent)',
                            display: 'inline-block',
                            marginTop: '0.5rem',
                        }}>THE ARTISTRY</span>
                    </h1>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                        margin: '1.5rem 0 2.5rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                    }}>
                        Experience culinary perfection where tradition meets modern innovation in every dish we serve.
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                    }}>
                        <Link 
                            to="/menu" 
                            className="btn-primary"
                            style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1rem',
                                fontWeight: 500,
                            }}
                        >
                            View Menu
                        </Link>
                        <Link 
                            to="/reserve" 
                            style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1rem',
                                fontWeight: 500,
                                border: '1px solid var(--color-text)',
                                color: 'var(--color-text)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'var(--color-text)';
                                e.target.style.color = 'var(--color-bg)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--color-text)';
                            }}
                        >
                            Reserve a Table
                        </Link>
                    </div>
                </div>

                {/* 3D Model Container - Will be positioned by the Scene component */}
                <div className="model-container" style={{
                    position: 'absolute',
                    right: '5%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '40%',
                    maxWidth: '600px',
                    height: '80%',
                    zIndex: -1,
                }}>
                    {/* 3D Model will be rendered here */}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .model-container {
                        display: none;
                    }
                    
                    .hero-section {
                        padding-top: 8rem;
                        padding-bottom: 4rem;
                        text-align: center;
                    }
                    
                    .hero-content {
                        text-align: center;
                        align-items: center;
                    }
                    
                    .btn-primary {
                        width: 100%;
                        margin-bottom: 1rem;
                    }
                }
                
                @media (max-width: 480px) {
                    .hero-section {
                        padding-top: 6rem;
                        min-height: 80vh;
                    }
                    
                    h1 {
                        font-size: 2.5rem !important;
                    }
                    
                    p {
                        font-size: 1.1rem !important;
                    }
                    
                    .btn-primary, a[href="/reserve"] {
                        padding: 0.8rem 1.5rem !important;
                        font-size: 0.9rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
