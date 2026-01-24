import { Link } from 'react-router-dom'
import heroPhoto from '../../assets/banu1.jpeg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-panel">
          <div className="row align-items-center g-4">
            <div className="col-lg-7 hero-content">
              <p className="eyebrow fade-up delay-1">
                DR. BANU BEGEN KOLEKSIYONU
              </p>
              <h1 className="hero-title fade-up delay-2">
                Tibbi uzmanlikla secilmis premium kozmetik urunleri
              </h1>
              <p className="hero-subtitle fade-up delay-3">
                25 yillik tibbi deneyimle ozenle secilmis, klinik etkililigi kanitlanmis
                cilt bakimi ve kozmetik urunleri.
              </p>
              <div className="hero-actions fade-up delay-4">
                <Link className="btn btn-primary btn-lg" to="/urunler">
                  Koleksiyonu Kesfet
                </Link>
                <Link className="btn btn-outline-light btn-lg" to="/hakkimizda">
                  Hikayemiz
                </Link>
              </div>
              <div className="hero-highlights fade-up delay-5">
                <span>Tibbi Uzmanlik</span>
                <span>Ozenle Secilmis</span>
                <span>Klinik Etkinlik</span>
              </div>
              <div className="hero-stats fade-up delay-6">
                <div className="stat-card">
                  <span className="stat-value">25+</span>
                  <span className="stat-label">Yil Deneyim</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">12.000+</span>
                  <span className="stat-label">Mutlu Musteri</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Orijinal Urun</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-visual">
                <img
                  src={heroPhoto}
                  alt="Dr. Banu Begen"
                  className="doctor-photo fade-up delay-3"
                />
                <div className="hero-badge fade-up delay-4">
                  <span>Uzman Secimi</span>
                  <strong>Premium Kozmetik</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
