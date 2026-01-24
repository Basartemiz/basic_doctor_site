import { Link } from 'react-router-dom'
import services from '../data/services.json'
import './ServicesPage.css'

function ServicesPage() {
  const serviceList = Object.values(services)

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <p className="eyebrow">Hizmetlerimiz</p>
          <h1>Uzmanlik Alanlarimiz</h1>
          <p className="hero-description">
            25 yili askin deneyimimizle, KBB hastaliklari, cerrahi mudahaleler ve
            medikal estetik alanlarinda hastalarimiza en iyi hizmeti sunuyoruz.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {serviceList.map((service) => (
              <Link
                to={`/hizmetler/${service.slug}`}
                key={service.id}
                className="service-card"
              >
                <div className="service-card-icon">
                  {service.id === 'kbb' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="23"/>
                      <line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                  )}
                  {service.id === 'cerrahi' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                      <line x1="6" y1="1" x2="6" y2="4"/>
                      <line x1="10" y1="1" x2="10" y2="4"/>
                      <line x1="14" y1="1" x2="14" y2="4"/>
                    </svg>
                  )}
                  {service.id === 'estetik' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
                    </svg>
                  )}
                </div>
                <h2 className="service-card-title">{service.title}</h2>
                <p className="service-card-subtitle">{service.subtitle}</p>
                <p className="service-card-description">{service.description}</p>
                <span className="service-card-link">
                  Detayli Bilgi
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Randevu Alin</h2>
              <p>
                Sikayetleriniz veya sorulariniz icin bizimle iletisime gecin.
                Size en uygun zamanda randevu ayarlayalim.
              </p>
            </div>
            <div className="cta-actions">
              <a href="tel:+905304228035" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                0530 422 80 35
              </a>
              <Link to="/iletisim" className="btn btn-outline">
                Online Randevu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
