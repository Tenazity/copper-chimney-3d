import MenuSection from '../sections/Menu'
import { useEffect } from 'react'

export default function MenuPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page-menu" style={{ paddingTop: '10vh' }}>
            <MenuSection />
        </div>
    )
}
