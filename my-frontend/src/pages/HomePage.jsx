import { Link } from 'react-router-dom'
import heroPhoto from '../assets/banu1.jpeg'
import aboutPhoto from '../assets/banu2.jpeg'
import services from '../data/services.json'
import './HomePage.css'

function HomePage() {
  const serviceList = Object.values(services)

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-panel">
            <div className="row align-items-center g-4">
              <div className="col-lg-7 hero-content">
                <p className="eyebrow fade-up delay-1">
                  OP. DR. BANU BEGEN KLINIGI
                </p>
                <h1 className="hero-title fade-up delay-2">
                  Saglikta guven, seffaflik ve konfor.
                </h1>
                <p className="hero-subtitle fade-up delay-3">
                  Kisiye ozel muayene, guncel tibbi yaklasim ve etik bir
                  iletisimle uzun vadeli saglik hedeflerinize birlikte
                  ulasiyoruz.
                </p>
                <div className="hero-actions fade-up delay-4">
                  <Link className="btn btn-primary btn-lg" to="/iletisim">
                    Randevu Olustur
                  </Link>
                  <Link className="btn btn-outline-light btn-lg" to="/hizmetler">
                    Hizmetleri Incele
                  </Link>
                </div>
                <div className="hero-highlights fade-up delay-5">
                  <span>Kisiye ozel planlama</span>
                  <span>Modern klinik ortami</span>
                  <span>Guvenli takip sistemi</span>
                </div>
                <div className="hero-stats fade-up delay-6">
                  <div className="stat-card">
                    <span className="stat-value">12.000+</span>
                    <span className="stat-label">Danisan</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">25+</span>
                    <span className="stat-label">Yil Tecrube</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">24 saat</span>
                    <span className="stat-label">Geri Donus</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="hero-visual">
                  <img
                    src={heroPhoto}
                    alt="Op. Dr. Banu Begen portre"
                    className="doctor-photo fade-up delay-3"
                  />
                  <div className="hero-badge fade-up delay-4">
                    <span>Uzmanlik</span>
                    <strong>Estetik & Klinik</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-footer">
              <span>
                1721 Sk. No: 19 Daire 3, Donanimaci Mahallesi,
                Karsiyaka/Izmir
              </span>
              <span>Hafta ici 08:00 - 20:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section page-section">
        <div className="container">
          <div className="section-heading text-center">
            <p className="eyebrow">Hizmetlerimiz</p>
            <h2 className="section-title">Uzmanlik Alanlarimiz</h2>
            <p className="section-lead">
              KBB hastaliklari, cerrahi mudahaleler ve medikal estetik alanlarinda
              kapsamli hizmetler sunuyoruz.
            </p>
          </div>
          <div className="home-services-grid">
            {serviceList.map((service) => (
              <Link
                to={`/hizmetler/${service.slug}`}
                key={service.id}
                className="home-service-card"
              >
                <div className="service-icon">
                  {service.id === 'kbb' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="23"/>
                      <line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                  )}
                  {service.id === 'cerrahi' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                      <line x1="6" y1="1" x2="6" y2="4"/>
                      <line x1="10" y1="1" x2="10" y2="4"/>
                      <line x1="14" y1="1" x2="14" y2="4"/>
                    </svg>
                  )}
                  {service.id === 'estetik' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
                    </svg>
                  )}
                </div>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <span className="service-link">
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

      {/* About Section */}
      <section className="about-section page-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={aboutPhoto} alt="Op. Dr. Banu Begen" loading="lazy" />
            </div>
            <div className="about-content">
              <p className="eyebrow">Hakkimizda</p>
              <h2 className="section-title">Op. Dr. Banu Begen</h2>
              <p className="about-bio">
                Ege Universitesi Tip Fakultesi mezunu Op. Dr. Banu Begen, KBB Hastaliklari
                ve Medikal Estetik alanlarinda 25 yili askin deneyime sahiptir. Hasta
                odakli yaklasimi ve guncel tibbi bilgisiyle, her hastasina ozel
                tedavi planlari sunmaktadir.
              </p>
              <div className="about-metrics">
                <div className="metric-card">
                  <span className="metric-value">4.9/5</span>
                  <span className="metric-label">Hasta Memnuniyeti</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">40+</span>
                  <span className="metric-label">Kurumsal Is Birligi</span>
                </div>
              </div>
              <Link to="/hakkimizda" className="btn btn-primary">
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section page-section soft-section">
        <div className="container">
          <div className="section-heading text-center">
            <p className="eyebrow">Tedavi Sureci</p>
            <h2 className="section-title">Ilk gorusmeden duzenli takibe kadar seffaf surec</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span className="step-number">01</span>
              <h3>On Gorusme</h3>
              <p>Ihtiyaclarinizin dinlendigi, kapsamli on degerlendirme.</p>
            </div>
            <div className="process-step">
              <span className="step-number">02</span>
              <h3>Detayli Muayene</h3>
              <p>Klinik olcumler, tibbi gecmis ve hedeflerin belirlenmesi.</p>
            </div>
            <div className="process-step">
              <span className="step-number">03</span>
              <h3>Tedavi Plani</h3>
              <p>Kisiye ozel plan ve aciklayici surec bilgilendirmesi.</p>
            </div>
            <div className="process-step">
              <span className="step-number">04</span>
              <h3>Takip ve Kontrol</h3>
              <p>Duzenli kontrollerle surdurulebilir ve guvenli ilerleme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Randevu Icin Bize Ulasin</h2>
              <p>
                Sikayetleriniz veya sorulariniz icin bizimle iletisime gecin.
                Ekibimiz 24 saat icinde geri donus yapar.
              </p>
            </div>
            <div className="cta-actions">
              <a href="tel:+905304228035" className="btn btn-light btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                0530 422 80 35
              </a>
              <a
                href="https://wa.me/905304228035"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
