import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '2rem var(--spacing-container)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            mixBlendMode: 'difference' // Ensures visibility on light/dark backgrounds
        }}>
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', color: 'white' }}>
                CULINARY
            </Link>

            <ul style={{ display: 'flex', gap: '3rem' }}>
                <li><NavLink to="/" isActive={isActive('/')}>Home</NavLink></li>
                <li><NavLink to="/menu" isActive={isActive('/menu')}>Menu</NavLink></li>
                <li><NavLink to="/testimonials" isActive={isActive('/testimonials')}>Testimonials</NavLink></li>
                <li><NavLink to="/reserve" isActive={isActive('/reserve')}>Reserve</NavLink></li>
            </ul>
        </nav>
    )
}

function NavLink({ to, children, isActive }) {
    return (
        <Link to={to} style={{
            color: isActive ? 'var(--color-accent)' : 'white',
            fontWeight: isActive ? 600 : 400,
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            transition: 'color 0.3s ease'
        }}>
            {children}
        </Link>
    )
}
