import './App.css'
import heroPhoto from './assets/banu1.jpeg'
import aboutPhoto from './assets/banu2.png'
import clinicPhoto from './assets/foto1.jpeg'
import eyelidPhoto from './assets/goz_kapak.jpeg'
import eyelidResult from './assets/goz_kapagı_sonuclar.jpeg'
import clinicVideo from './assets/video1.mp4'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand brand" href="#home">
              Dr. Banu Begen
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
              aria-controls="navMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navMenu">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Ana Sayfa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Hizmetler
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Hakkımızda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery">
                    Galeri
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#path">
                    Tedavi Süreci
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    İletişim
                  </a>
                </li>
              </ul>
              <a className="btn btn-sm btn-primary ms-lg-3" href="#contact">
                Randevu Al
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-panel">
              <div className="row align-items-center g-4">
                <div className="col-lg-7 hero-content">
                  <p className="eyebrow fade-up delay-1">
                    DR. BANU BEGEN KLİNİĞİ
                  </p>
                  <h1 className="hero-title fade-up delay-2">
                    Hoş geldiniz. Sağlıkta güven, şeffaflık ve konfor.
                  </h1>
                  <p className="hero-subtitle fade-up delay-3">
                    Kişiye özel muayene, güncel tıbbi yaklaşım ve etik bir
                    iletişimle uzun vadeli sağlık hedeflerinize birlikte
                    ulaşıyoruz.
                  </p>
                  <div className="hero-actions fade-up delay-4">
                    <a className="btn btn-primary btn-lg" href="#contact">
                      Randevu Oluştur
                    </a>
                    <a className="btn btn-outline-light btn-lg" href="#services">
                      Hizmetleri İncele
                    </a>
                  </div>
                  <div className="hero-highlights fade-up delay-5">
                    <span>Kişiye özel planlama</span>
                    <span>Modern klinik ortamı</span>
                    <span>Güvenli takip sistemi</span>
                  </div>
                  <div className="hero-stats fade-up delay-6">
                    <div className="stat-card">
                      <span className="stat-value">12.000+</span>
                      <span className="stat-label">Danışan</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-value">25+</span>
                      <span className="stat-label">Yıl Tecrübe</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-value">24 saat</span>
                      <span className="stat-label">Geri Dönüş</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="hero-visual">
                    <img
                      src={heroPhoto}
                      alt="Dr. Banu Begen portre"
                      className="doctor-photo fade-up delay-3"
                    />
                    <div className="hero-badge fade-up delay-4">
                      <span>Uzmanlık</span>
                      <strong>Estetik & Klinik</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-footer">
                <span>
                  1721 Sk. No: 19 Daire 3, Donanmacı Mahallesi,
                  Karşıyaka/İzmir
                </span>
                <span>Hafta içi 08:00 - 20:00</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="page-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Hizmetler</p>
              <h2 className="section-title">
                Klinik ihtiyaçlarınıza özel çözümler
              </h2>
              <p className="section-lead">
                Kapsamlı değerlendirme ve planlı takip süreciyle, kısa ve uzun
                vadeli sağlığınızı destekliyoruz.
              </p>
            </div>
            <div className="row g-4 service-grid">
              <div className="col-md-6 col-lg-3">
                <div className="service-card fade-up delay-1">
                  <div className="icon-sigil">01</div>
                  <h3 className="service-title">Göz Kapağı Uygulamaları</h3>
                  <p className="service-text">
                    Doğal sonuçlara odaklı, güvenli ve kontrollü estetik
                    yaklaşımlar.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card fade-up delay-2">
                  <div className="icon-sigil">02</div>
                  <h3 className="service-title">Dermatolojik Bakım</h3>
                  <p className="service-text">
                    Cilt sağlığını koruyan, düzenli takip ve yenileme
                    programları.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card fade-up delay-3">
                  <div className="icon-sigil">03</div>
                  <h3 className="service-title">Sağlık Danışmanlığı</h3>
                  <p className="service-text">
                    Kişisel hedeflerinize uygun yaşam stili ve bakım rehberliği.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card fade-up delay-4">
                  <div className="icon-sigil">04</div>
                  <h3 className="service-title">Kontrol ve Takip</h3>
                  <p className="service-text">
                    Düzenli kontrollerle sürdürülebilir ve güvenli bir süreç.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="page-section soft-section">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="section-heading">
                  <p className="eyebrow">Hakkımızda</p>
                  <h2 className="section-title">
                    Profesyonel bakım, sıcak iletişim
                  </h2>
                  <p className="section-lead">
                    Dr. Banu Begen, hastalarına güvenli bir klinik deneyimi
                    sunmayı hedefler. Planlı muayene, şeffaf süreç yönetimi ve
                    etik tıbbi yaklaşım önceliğimizdir.
                  </p>
                </div>
                <div className="about-metrics">
                  <div className="metric-card">
                    <span className="metric-value">4.9/5</span>
                    <span className="metric-label">Hasta Memnuniyeti</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-value">40+</span>
                    <span className="metric-label">Kurumsal İş Birliği</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-panel">
                  <img
                    src={aboutPhoto}
                    alt="Dr. Banu Begen klinik fotoğrafı"
                    className="about-photo"
                  />
                  <div className="about-card">
                    <h3 className="panel-title">Neden bizi tercih ediyorlar?</h3>
                    <ul className="about-list">
                      <li>Detaylı muayene ve net planlama.</li>
                      <li>Güvenli, hijyenik ve konforlu klinik ortam.</li>
                      <li>Her adımda açık iletişim ve bilgilendirme.</li>
                      <li>Sonrasında düzenli takip ve kontrol desteği.</li>
                    </ul>
                    <div className="panel-footer">
                      <span className="panel-tag">Yakın randevu</span>
                      <span className="panel-time">Salı, 10:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="page-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Galeri</p>
              <h2 className="section-title">Klinikten ve uygulamalardan kareler</h2>
              <p className="section-lead">
                Klinik ortamımız ve uygulama süreçlerimizden seçilmiş görseller.
              </p>
            </div>
            <div className="gallery-grid">
              <figure className="gallery-item fade-up delay-1">
                <a
                  className="gallery-link"
                  href={clinicPhoto}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={clinicPhoto} alt="Klinik ortamı" />
                </a>
                <figcaption>Klinik ortamı</figcaption>
              </figure>
              <figure className="gallery-item fade-up delay-2">
                <a
                  className="gallery-link"
                  href={eyelidPhoto}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={eyelidPhoto} alt="Göz kapağı uygulaması" />
                </a>
                <figcaption>Göz kapağı uygulaması</figcaption>
              </figure>
              <figure className="gallery-item fade-up delay-3">
                <a
                  className="gallery-link"
                  href={eyelidResult}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={eyelidResult} alt="Göz kapağı sonuç görseli" />
                </a>
                <figcaption>Uygulama sonucu</figcaption>
              </figure>
            </div>
            <div className="video-block fade-up delay-4">
              <h3 className="video-title">Klinik Tanıtım Videosu</h3>
              <video
                className="clinic-video"
                controls
                preload="metadata"
                poster={clinicPhoto}
              >
                <source src={clinicVideo} type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </div>
          </div>
        </section>

        <section id="path" className="page-section soft-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Tedavi Süreci</p>
              <h2 className="section-title">
                İlk görüşmeden düzenli takibe kadar şeffaf süreç
              </h2>
            </div>
            <div className="care-grid">
              <div className="care-step">
                <span className="step-number">01</span>
                <h3 className="step-title">Ön Görüşme</h3>
                <p className="step-text">
                  İhtiyaçlarınızın dinlendiği, kapsamlı ön değerlendirme.
                </p>
              </div>
              <div className="care-step">
                <span className="step-number">02</span>
                <h3 className="step-title">Detaylı Muayene</h3>
                <p className="step-text">
                  Klinik ölçümler, tıbbi geçmiş ve hedeflerin belirlenmesi.
                </p>
              </div>
              <div className="care-step">
                <span className="step-number">03</span>
                <h3 className="step-title">Tedavi Planı</h3>
                <p className="step-text">
                  Kişiye özel plan ve açıklayıcı süreç bilgilendirmesi.
                </p>
              </div>
              <div className="care-step">
                <span className="step-number">04</span>
                <h3 className="step-title">Takip ve Kontrol</h3>
                <p className="step-text">
                  Düzenli kontrollerle sürdürülebilir ve güvenli ilerleme.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="page-section">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="section-heading">
                  <p className="eyebrow">İletişim</p>
                  <h2 className="section-title">Randevu için bize ulaşın</h2>
                  <p className="section-lead">
                    Size uygun zamanı belirleyelim. Ekibimiz 24 saat içinde geri
                    dönüş yapar.
                  </p>
                </div>
                <div className="contact-info">
                  <div>
                    <span className="info-label">Telefon</span>
                    <span className="info-value">0530 422 80 35</span>
                  </div>
                  <div>
                    <span className="info-label">E-posta</span>
                    <a
                      className="info-value info-link"
                      href="mailto:banu.begen76@gmail.com"
                    >
                      banu.begen76@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="info-label">Adres</span>
                    <span className="info-value">
                      1721 Sk. No: 19 Daire 3, Donanmacı Mahallesi,
                      Karşıyaka/İzmir
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  className="contact-card"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="name">
                        Ad Soyad
                      </label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Adınız"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="email">
                        E-posta
                      </label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="mail@ornek.com"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="service">
                        İlgi alanı
                      </label>
                      <select className="form-select" id="service">
                        <option>Göz Kapağı Uygulamaları</option>
                        <option>Dermatolojik Bakım</option>
                        <option>Sağlık Danışmanlığı</option>
                        <option>Kontrol ve Takip</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="message">
                        Mesaj
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Kısa notunuzu paylaşın."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Randevu Talebi Gönder
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3 className="footer-brand">Dr. Banu Begen</h3>
            <p className="footer-text">
              Profesyonel klinik yaklaşım, güvenli süreç ve sürdürülebilir bakım.
            </p>
          </div>
          <div className="footer-links">
            <a href="#services">Hizmetler</a>
            <a href="#about">Hakkımızda</a>
            <a href="#gallery">Galeri</a>
            <a href="#contact">İletişim</a>
          </div>
          <div className="footer-meta">
            <span>Pazartesi - Cumartesi</span>
            <span>08:00 - 20:00</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
