import { useState } from 'react'
import './App.css'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import FAQSection from './components/FAQSection'
import ScrollToTop from './components/ScrollToTop'
import ThemeToggle from './components/ThemeToggle'
import heroPhoto from './assets/banu1.jpeg'
import aboutPhoto from './assets/banu2.png'
import clinicPhoto from './assets/foto1.jpeg'
import eyelidPhoto from './assets/goz_kapak.jpeg'
import eyelidResult from './assets/goz_kapagı_sonuclar.jpeg'
import clinicVideo from './assets/video1.mp4'

function App() {
  const [expandedService, setExpandedService] = useState(null)

  const serviceData = {
    kbb: {
      title: 'KBB Hastalıkları Tanı ve Tedavisi',
      items: [
        'Kulak enfeksiyonları ve orta kulak iltihabı tedavisi',
        'İşitme kaybı değerlendirmesi ve tedavisi',
        'Kulak çınlaması (tinnitus) tedavisi',
        'Baş dönmesi ve denge bozuklukları tedavisi',
        'Sinüzit ve burun tıkanıklığı tedavisi',
        'Alerjik rinit tanı ve tedavisi',
        'Burun kanaması tedavisi',
        'Ses kısıklığı ve ses teli hastalıkları',
        'Boğaz enfeksiyonları ve bademcik tedavisi',
        'Geniz eti problemleri değerlendirmesi',
        'Horlama ve uyku apnesi tanısı',
        'Yutma güçlüğü değerlendirmesi',
        'Koku ve tat alma bozuklukları tedavisi',
        'Baş-boyun bölgesi kitle değerlendirmesi',
        'Çocukluk dönemi KBB hastalıkları tedavisi'
      ]
    },
    cerrahi: {
      title: 'Cerrahi Operasyonlar',
      items: [
        'Bademcik ameliyatı (Tonsillektomi)',
        'Geniz eti ameliyatı (Adenoidektomi)',
        'Endoskopik sinüs cerrahisi',
        'Burun eti ameliyatı (Konka cerrahisi)',
        'Septoplasti (Burun kemiği eğriliği düzeltme)',
        'Kulağa ventilasyon tüpü takılması',
        'Kronik otit cerrahisi (Timpanoplasti)',
        'Kemikçik cerrahisi (Stapedektomi)',
        'Ses teli cerrahisi (Laringoskopi)',
        'Tiroid ve paratiroid cerrahisi',
        'Tükürük bezi cerrahisi',
        'Boyun kitlesi ameliyatları',
        'Horlama ve uyku apnesi cerrahisi',
        'Gözyaşı kanalı ameliyatı (Dakriosistorinostomi)',
        'Kepçe kulak ameliyatı (Otoplasti)'
      ]
    },
    estetik: {
      title: 'Medikal Estetik Uygulamalar',
      items: [
        'Botoks uygulaması (alın, kaş arası, kaz ayağı)',
        'Dolgu uygulamaları (dudak, yanak, çene)',
        'Yüz gençleştirme uygulamaları',
        'Mezoterapi (yüz ve saç)',
        'PRP tedavisi (cilt yenileme)',
        'Göz altı ışık dolgusu',
        'Burun dolgusu (non-cerrahi rinoplasti)',
        'Çene ve jawline belirginleştirme',
        'Nefertiti boyun germe',
        'Gıdı eritme uygulamaları',
        'Dudak dolgusu ve şekillendirme',
        'Yanak dolgusu ve hacim artırma',
        'İğneli radyofrekans (cilt sıkılaştırma)',
        'Kimyasal peeling uygulamaları',
        'Masseter botoks (yüz inceltme)'
      ]
    },
    kontrol: {
      title: 'Kontrol ve Takip',
      items: [
        'Ameliyat sonrası düzenli kontroller',
        'Tedavi sürecinin takibi ve değerlendirmesi',
        'İşitme testleri ve odyometri takibi',
        'Endoskopik muayene kontrolleri',
        'Alerji testleri ve takibi',
        'Kronik hastalık yönetimi',
        'İlaç tedavisi düzenlemesi',
        'Rehabilitasyon programı takibi',
        'Estetik uygulama kontrolleri',
        'Hasta memnuniyeti değerlendirmesi',
        'Uzun vadeli sağlık planlaması',
        'Koruyucu sağlık önerileri'
      ]
    }
  }

  const toggleService = (serviceKey) => {
    setExpandedService(expandedService === serviceKey ? null : serviceKey)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('from_name')
    const email = formData.get('from_email')
    const phone = formData.get('phone')
    const subject = formData.get('subject')
    const message = formData.get('message')

    const mailtoBody = `Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone}
Danışma Konusu: ${subject}

Mesaj:
${message}`

    const mailtoLink = `mailto:banu.begen76@gmail.com?subject=Randevu Talebi - ${subject}&body=${encodeURIComponent(mailtoBody)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Ana icerigi atla
      </a>
      <header className="site-header">
        <nav className="navbar navbar-expand-lg navbar-light" aria-label="Ana navigasyon">
          <div className="container">
            <a className="navbar-brand brand" href="#home">
              Op. Dr. Banu Begen
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
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-panel">
              <div className="row align-items-center g-4">
                <div className="col-lg-7 hero-content">
                  <p className="eyebrow fade-up delay-1">
                    OP. DR. BANU BEGEN KLİNİĞİ
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
                      alt="Op. Dr. Banu Begen portre"
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
                <div
                  className={`service-box fade-up delay-1 clickable ${expandedService === 'kbb' ? 'expanded' : ''}`}
                  onClick={() => toggleService('kbb')}
                >
                  <h3 className="service-box-title">
                    {serviceData.kbb.title}
                    <span className="service-toggle-icon">{expandedService === 'kbb' ? '−' : '+'}</span>
                  </h3>
                  <div className={`service-dropdown ${expandedService === 'kbb' ? 'open' : ''}`}>
                    <ul className="service-list">
                      {serviceData.kbb.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className={`service-box fade-up delay-2 clickable ${expandedService === 'cerrahi' ? 'expanded' : ''}`}
                  onClick={() => toggleService('cerrahi')}
                >
                  <h3 className="service-box-title">
                    {serviceData.cerrahi.title}
                    <span className="service-toggle-icon">{expandedService === 'cerrahi' ? '−' : '+'}</span>
                  </h3>
                  <div className={`service-dropdown ${expandedService === 'cerrahi' ? 'open' : ''}`}>
                    <ul className="service-list">
                      {serviceData.cerrahi.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className={`service-box fade-up delay-3 clickable ${expandedService === 'estetik' ? 'expanded' : ''}`}
                  onClick={() => toggleService('estetik')}
                >
                  <h3 className="service-box-title">
                    {serviceData.estetik.title}
                    <span className="service-toggle-icon">{expandedService === 'estetik' ? '−' : '+'}</span>
                  </h3>
                  <div className={`service-dropdown ${expandedService === 'estetik' ? 'open' : ''}`}>
                    <ul className="service-list">
                      {serviceData.estetik.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className={`service-box fade-up delay-4 clickable ${expandedService === 'kontrol' ? 'expanded' : ''}`}
                  onClick={() => toggleService('kontrol')}
                >
                  <h3 className="service-box-title">
                    {serviceData.kontrol.title}
                    <span className="service-toggle-icon">{expandedService === 'kontrol' ? '−' : '+'}</span>
                  </h3>
                  <div className={`service-dropdown ${expandedService === 'kontrol' ? 'open' : ''}`}>
                    <ul className="service-list">
                      {serviceData.kontrol.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="page-section about-section">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="section-heading about-heading">
                  <p className="eyebrow about-eyebrow">Hakkımızda</p>
                  <h2 className="section-title about-title">
                    Op. Dr. Banu Begen
                  </h2>
                  <div className="about-bio">
                    <p>
                      Op. Dr. Banu Begen, 1976 yılında Niğde'de doğmuştur. 1999 yılında Ege Üniversitesi Tıp Fakültesi'nden mezun olmuştur. Mesleki kariyerinin ilk yıllarında acil tıp ve medikal estetik alanlarında deneyim kazanmıştır.
                    </p>
                    <p>
                      2003 yılında Afyon Kocatepe Üniversitesi Tıp Fakültesi Kulak Burun Boğaz Hastalıkları Anabilim Dalı'nda uzmanlık eğitimine başlamış, 2009 yılında uzmanlık eğitimini tamamlayarak Kulak Burun Boğaz Hastalıkları Uzmanı unvanını almıştır. Uzmanlık sonrası kamu hastanelerinde uzun yıllar görev yapmış, hasta odaklı yaklaşımı ve klinik deneyimiyle öne çıkmıştır.
                    </p>
                    <p>
                      KBB hastalıklarının cerrahi ve medikal tedavilerinin yanı sıra botoks, dolgu, mezoterapi ve ileri medikal estetik uygulamalarında yüksek hasta memnuniyeti ile çalışmalarını sürdürmektedir.
                    </p>
                  </div>
                </div>
                <div className="about-metrics">
                  <div className="metric-card about-metric">
                    <span className="metric-value">4.9/5</span>
                    <span className="metric-label">Hasta Memnuniyeti</span>
                  </div>
                  <div className="metric-card about-metric">
                    <span className="metric-value">40+</span>
                    <span className="metric-label">Kurumsal İş Birliği</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-panel">
                  <img
                    src={aboutPhoto}
                    alt="Op. Dr. Banu Begen klinik fotoğrafı"
                    className="about-photo"
                    loading="lazy"
                  />
                  <div className="about-card">
                    <h3 className="panel-title">Neden bizi tercih ediyorlar?</h3>
                    <ul className="about-list">
                      <li>Detaylı muayene ve net planlama.</li>
                      <li>Güvenli, hijyenik ve konforlu klinik ortam.</li>
                      <li>Her adımda açık iletişim ve bilgilendirme.</li>
                      <li>Sonrasında düzenli takip ve kontrol desteği.</li>
                    </ul>
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
                  <img src={clinicPhoto} alt="Klinik ortamı" loading="lazy" />
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
                  <img src={eyelidPhoto} alt="Göz kapağı uygulaması" loading="lazy" />
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
                  <img src={eyelidResult} alt="Göz kapağı sonuç görseli" loading="lazy" />
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

        <FAQSection />

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
                    <a className="info-value info-link" href="tel:+905304228035">
                      0530 422 80 35
                    </a>
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
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.5!2d27.0953!3d38.4561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI3JzIyLjAiTiAyN8KwMDUnNDMuMSJF!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '12px', marginTop: '1.5rem' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Op. Dr. Banu Begen Klinik Konumu"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  className="contact-card"
                  onSubmit={handleSubmit}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="from_name">
                        Ad Soyad
                      </label>
                      <input
                        className="form-control"
                        id="from_name"
                        name="from_name"
                        type="text"
                        placeholder="Adınız"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="from_email">
                        E-posta
                      </label>
                      <input
                        className="form-control"
                        id="from_email"
                        name="from_email"
                        type="email"
                        placeholder="mail@ornek.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="phone">
                        Telefon
                      </label>
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="05XX XXX XX XX"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="subject">
                        Danışma Konusu
                      </label>
                      <input
                        className="form-control"
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Danışmak istediğiniz konu"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="message">
                        Mesaj
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Kısa notunuzu paylaşın."
                        required
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
            <h3 className="footer-brand">Op. Dr. Banu Begen</h3>
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
          <div className="footer-social">
            <a
              href="https://www.instagram.com/drbanubegen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram'da takip edin"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <div className="footer-meta">
            <span>Pazartesi - Cumartesi</span>
            <span>08:00 - 20:00</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <div className="footer-legal">
            <a href="#gizlilik">Gizlilik Politikasi</a>
            <a href="#kvkk">KVKK Aydinlatma Metni</a>
            <a href="#kullanim">Kullanim Sartlari</a>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2025 Op. Dr. Banu Begen. Tum haklari saklidir.</p>
          </div>
          <p className="footer-disclaimer">
            Bu sitedeki bilgiler genel bilgilendirme amaciyla sunulmaktadir ve tibbi tavsiye yerine gecmez.
            Herhangi bir saglik sorunu icin mutlaka bir saglik kurulusuna basvurunuz.
          </p>
        </div>
      </footer>

      <CookieConsent />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default App
