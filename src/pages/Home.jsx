import Hero from '../sections/Hero'
import Scene from '../components/Scene'
import Philosophy from '../sections/Philosophy'
import Featured from '../sections/Featured'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        // Ensure scroll starts at top
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page-home">
            <Scene />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <Philosophy />
                <Featured />
            </div>
        </div>
    )
}
