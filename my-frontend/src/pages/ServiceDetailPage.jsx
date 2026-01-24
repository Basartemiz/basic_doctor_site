import { useParams, Link } from 'react-router-dom'
import services from '../data/services.json'
import { getDiseaseSlug } from '../utils/slugify'
import './ServiceDetailPage.css'

function ServiceDetailPage() {
  const { slug } = useParams()
  const service = Object.values(services).find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="service-not-found">
        <div className="container">
          <h1>Sayfa Bulunamadi</h1>
          <p>Aradiginiz hizmet sayfasi mevcut degil.</p>
          <Link to="/hizmetler" className="btn btn-primary">
            Hizmetlere Don
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/hizmetler">Hizmetler</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>
          <div className="service-hero-content">
            <p className="eyebrow">{service.subtitle}</p>
            <h1>{service.title}</h1>
            <p className="hero-description">{service.description}</p>
            <div className="hero-actions">
              <a href="tel:+905304228035" className="btn btn-primary btn-lg">
                Randevu Al
              </a>
              <a href="https://wa.me/905304228035" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-categories">
        <div className="container">
          {service.categories.map((category, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{category.name}</h2>
              <div className="category-grid">
                {category.items.map((item, itemIndex) => {
                  const diseaseSlug = getDiseaseSlug(item.title)
                  return (
                    <Link
                      key={itemIndex}
                      to={`/hizmetler/${service.slug}/${diseaseSlug}`}
                      className="treatment-card treatment-card-link"
                    >
                      <div className="treatment-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </div>
                      <div className="treatment-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                      <div className="treatment-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {(service.treatments || service.features || service.benefits) && (
        <section className="service-features">
          <div className="container">
            <div className="features-card">
              <h2>
                {service.id === 'kbb' && 'Teshis ve Tedavi Surecimiz'}
                {service.id === 'cerrahi' && 'Neden Bizi Tercih Etmelisiniz?'}
                {service.id === 'estetik' && 'Tedavi Avantajlari'}
              </h2>
              <div className="features-list">
                {(service.treatments || service.features || service.benefits)?.map((item, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="16" height="16">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Sorulariniz mi Var?</h2>
            <p>
              {service.title} hakkinda detayli bilgi almak veya randevu olusturmak icin
              bizimle iletisime gecebilirsiniz.
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn btn-primary btn-lg">
                Iletisime Gecin
              </Link>
              <Link to="/hizmetler" className="btn btn-outline btn-lg">
                Diger Hizmetler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage
