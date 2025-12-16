import Contact from '../sections/Contact';
import { useEffect, useState } from 'react';
import ReserveScene from '../components/ReserveScene';

export default function ReservePage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="page-reserve" style={{ 
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: '#0f0f0f',
        }}>
            {/* 3D Model Background */}
            <ReserveScene />
            
            {/* Main Content */}
            <Contact />
        </div>
    );
}