import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Ozel Firsatlardan Haberdar Olun</h2>
            <p className="newsletter-text">
              Bultenimize abone olun ve ilk siparisimizde %10 indirim kazanin.
              Yeni urunler, ozel teklifler ve cilt bakimi ipuclari icin kayit olun.
            </p>
          </div>
          {isSubmitted ? (
            <div className="newsletter-success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <p>Tesekkurler! Bultenimize basariyla abone oldunuz.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Abone Ol
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
