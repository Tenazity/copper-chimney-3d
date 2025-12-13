import ContactSection from '../sections/Contact'
import { useEffect } from 'react'

export default function ReservePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page-reserve" style={{ paddingTop: '10vh' }}>
            <ContactSection />
        </div>
    )
}
