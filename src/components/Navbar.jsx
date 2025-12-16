import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav 
            className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '1.5rem var(--spacing-container)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                transition: 'all 0.3s ease',
                backgroundColor: isMenuOpen ? 'var(--color-bg)' : 'transparent',
                backdropFilter: isMenuOpen ? 'none' : 'blur(10px)',
                WebkitBackdropFilter: isMenuOpen ? 'none' : 'blur(10px)',
            }}
        >
            <Link 
                to="/" 
                className="logo"
                style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 800, 
                    letterSpacing: '2px', 
                    color: 'white',
                    zIndex: 101
                }}
            >
                CULINARY
            </Link>

            {/* Mobile Menu Button */}
            <button 
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 101,
                    display: 'none',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '30px',
                    height: '24px',
                    padding: '0',
                }}
            >
                <span style={{
                    display: 'block',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease',
                    transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                }}></span>
                <span style={{
                    display: 'block',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'white',
                    opacity: isMenuOpen ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                }}></span>
                <span style={{
                    display: 'block',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease',
                    transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                }}></span>
            </button>

            <ul className="nav-links" style={{
                display: 'flex',
                gap: '3rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                transition: 'transform 0.3s ease-in-out',
            }}>
                <li><NavLink to="/" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                <li><NavLink to="/menu" isActive={isActive('/menu')} onClick={() => setIsMenuOpen(false)}>Menu</NavLink></li>
                <li><NavLink to="/testimonials" isActive={isActive('/testimonials')} onClick={() => setIsMenuOpen(false)}>Testimonials</NavLink></li>
            </ul>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .menu-toggle {
                        display: flex !important;
                    }
                    
                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: 0;
                        width: 80%;
                        max-width: 300px;
                        height: 100vh;
                        background: var(--color-bg);
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: ${isMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
                        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
                        padding: 2rem;
                    }
                    
                    .nav-links li {
                        margin: 1.5rem 0;
                    }
                    
                    .scrolled {
                        padding: 1rem var(--spacing-container) !important;
                        background: rgba(15, 15, 15, 0.9) !important;
                        backdrop-filter: blur(10px) !important;
                    }
                }
                
                @media (min-width: 1025px) {
                    .nav-links {
                        display: flex !important;
                    }
                }
            `}</style>
        </nav>
    );
}

function NavLink({ to, children, isActive, onClick }) {
    return (
        <Link 
            to={to} 
            onClick={onClick}
            style={{
                color: isActive ? 'var(--color-accent)' : 'white',
                fontWeight: isActive ? 600 : 400,
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
                position: 'relative',
                padding: '0.5rem 0',
            }}
        >
            {children}
            <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: isActive ? '100%' : '0%',
                height: '1px',
                backgroundColor: 'var(--color-accent)',
                transition: 'width 0.3s ease',
            }}></span>
        </Link>
    );
}
