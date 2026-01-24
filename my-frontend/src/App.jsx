import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import './styles/variables.css'

// Layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import DiseasePageWrapper from './pages/DiseasePageWrapper'
import GalleryPage from './pages/GalleryPage'
import AboutDoctorPage from './pages/AboutDoctorPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

// Shared Components
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="app">
      <ScrollToTopOnNavigate />
      <a href="#main-content" className="skip-link">
        Ana icerigi atla
      </a>

      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/hizmetler/:slug" element={<ServiceDetailPage />} />
          <Route path="/hizmetler/:serviceSlug/:diseaseSlug" element={<DiseasePageWrapper />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/hakkimizda" element={<AboutDoctorPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      <CookieConsent />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default App
