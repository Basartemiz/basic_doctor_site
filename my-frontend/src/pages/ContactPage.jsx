import { useState } from 'react'
import './ContactPage.css'

function ContactPage() {
  const [formType, setFormType] = useState('general')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('from_name')
    const email = formData.get('from_email')
    const phone = formData.get('phone')
    const subject = formData.get('subject')
    const message = formData.get('message')
    const inquiryType = formData.get('inquiry_type')

    const mailtoBody = `Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone}
Tur: ${inquiryType === 'product' ? 'Urun Sorusu' : 'Genel Iletisim'}
Konu: ${subject}

Mesaj:
${message}`

    const mailtoLink = `mailto:banu.begen76@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">Iletisim</h1>
          <p className="contact-subtitle">
            Sorulariniz icin bizimle iletisime gecin. Size en kisa surede donuş yapacagiz.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h2>Iletisim Bilgileri</h2>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Telefon</span>
                  <a href="tel:+905304228035" className="contact-value">0530 422 80 35</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">E-posta</span>
                  <a href="mailto:banu.begen76@gmail.com" className="contact-value">banu.begen76@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Adres</span>
                  <span className="contact-value">1721 Sk. No: 19 Daire 3, Donanasmaci Mahallesi, Karsiyaka/Izmir</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Calisma Saatleri</span>
                  <span className="contact-value">Pazartesi - Cumartesi: 08:00 - 20:00</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/905304228035"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-contact-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile Iletisime Gecin
            </a>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.5!2d27.0953!3d38.4561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI3JzIyLjAiTiAyN8KwMDUnNDMuMSJF!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klinik Konumu"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-type-selector">
                <button
                  type="button"
                  className={`type-btn ${formType === 'general' ? 'active' : ''}`}
                  onClick={() => setFormType('general')}
                >
                  Genel Iletisim
                </button>
                <button
                  type="button"
                  className={`type-btn ${formType === 'product' ? 'active' : ''}`}
                  onClick={() => setFormType('product')}
                >
                  Urun Sorusu
                </button>
              </div>

              <input type="hidden" name="inquiry_type" value={formType} />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="from_name">Ad Soyad</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder="Adiniz"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="from_email">E-posta</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    placeholder="mail@ornek.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="05XX XXX XX XX"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={formType === 'product' ? 'Urun adi veya sorunuz' : 'Mesajinizin konusu'}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={formType === 'product' ? 'Urun hakkinda sormak istediginiz detaylari yazin...' : 'Mesajinizi yazin...'}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Mesaj Gonder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
