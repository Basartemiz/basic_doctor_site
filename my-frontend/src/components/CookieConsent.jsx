import { useState, useEffect } from 'react'
import './CookieConsent.css'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
      <div className="cookie-content">
        <div className="cookie-text">
          <h4 id="cookie-title" className="cookie-title">Cerez Kullanimi</h4>
          <p id="cookie-desc" className="cookie-description">
            Bu web sitesi, deneyiminizi iyilestirmek ve site kullanimini analiz etmek icin cerezler kullanmaktadir.
            Siteyi kullanmaya devam ederek cerez politikamizi kabul etmis olursunuz.
            <a href="#gizlilik" className="cookie-link"> Gizlilik Politikasi</a>
          </p>
        </div>
        <div className="cookie-buttons">
          <button
            onClick={rejectCookies}
            className="cookie-btn cookie-btn-secondary"
            type="button"
          >
            Reddet
          </button>
          <button
            onClick={acceptCookies}
            className="cookie-btn cookie-btn-primary"
            type="button"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  )
}
