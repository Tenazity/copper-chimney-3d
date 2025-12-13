import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MenuPage from './pages/Menu'
import Testimonials from './pages/Testimonials'
import ReservePage from './pages/Reserve'
import Lenis from 'lenis'
import { useEffect } from 'react'
import 'lenis/dist/lenis.css'

function App() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/reserve" element={<ReservePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
