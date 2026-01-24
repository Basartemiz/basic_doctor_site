import aboutPhoto from '../assets/banu2.png'
import heroPhoto from '../assets/banu1.jpeg'
import './AboutDoctorPage.css'

function AboutDoctorPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <p className="eyebrow">Hakkimizda</p>
              <h1 className="about-hero-title">Op. Dr. Banu Begen</h1>
              <p className="about-hero-subtitle">
                KBB Hastaliklari Uzmani & Medikal Estetik
              </p>
              <p className="about-hero-intro">
                25 yili askin tibbi deneyimle, hastalarima en iyi bakimi sunmayi
                ve cilt sagligi konusunda bilinclendirmeyi gorev edinmis bir hekim
                olarak, sizlere en etkili ve guvenilir kozmetik urunlerini sunuyorum.
              </p>
            </div>
            <div className="about-hero-image">
              <img src={heroPhoto} alt="Dr. Banu Begen" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-bio page-section">
        <div className="container">
          <div className="about-bio-grid">
            <div className="about-bio-image">
              <img src={aboutPhoto} alt="Dr. Banu Begen klinik" loading="lazy" />
            </div>
            <div className="about-bio-content">
              <h2 className="section-title">Biyografi</h2>
              <p>
                Op. Dr. Banu Begen, 1976 yilinda Nigde'de dogmustur. 1999 yilinda
                Ege Universitesi Tip Fakultesi'nden mezun olmustur. Mesleki kariyerinin
                ilk yillarinda acil tip ve medikal estetik alanlarinda deneyim kazanmistir.
              </p>
              <p>
                2003 yilinda Afyon Kocatepe Universitesi Tip Fakultesi Kulak Burun Bogaz
                Hastaliklari Anabilim Dali'nda uzmanlik egitimine baslamis, 2009 yilinda
                uzmanlik egitimini tamamlayarak Kulak Burun Bogaz Hastaliklari Uzmani
                unvanini almistir.
              </p>
              <p>
                Uzmanlik sonrasi kamu hastanelerinde uzun yillar gorev yapmis, hasta
                odakli yaklasimi ve klinik deneyimiyle one cikmistir. KBB hastaliklarinin
                cerrahi ve medikal tedavilerinin yani sira botoks, dolgu, mezoterapi ve
                ileri medikal estetik uygulamalarinda yuksek hasta memnuniyeti ile
                calismalarini surdurmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-philosophy page-section soft-section">
        <div className="container">
          <div className="philosophy-content">
            <h2 className="section-title text-center">Cilt Bakimi Felsefem</h2>
            <blockquote className="philosophy-quote">
              "Cilt bakimi, sadece guzellik degil, ayni zamanda saglik meselesidir.
              Yillar boyunca binlerce hastanin tedavisinde edindigim bilgi ve
              tecrubemle, her bireyin cilt tipine ve ihtiyaclarina uygun urunleri
              secmeyi ogrendim. Bu koleksiyon, tibbi bilgimi sizinle paylasma
              istegimin bir yansimisidir."
            </blockquote>
            <div className="philosophy-pillars">
              <div className="pillar">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3>Guvenlik Oncelikli</h3>
                <p>
                  Tum urunler, dermatolojik testlerden gecmis ve guvenlirligi
                  kanitlanmis formulasyonlara sahiptir.
                </p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h3>Klinik Etkinlik</h3>
                <p>
                  Bilimsel arastirmalarla desteklenmis, klinik olarak etkinligi
                  kanitlanmis aktif icerikler.
                </p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>Uzun Vadeli Sonuclar</h3>
                <p>
                  Anlik cozumler yerine, cildinizin uzun vadeli sagligini
                  destekleyen formuller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-credentials page-section">
        <div className="container">
          <h2 className="section-title text-center">Egitim ve Yeterlilikler</h2>
          <div className="credentials-grid">
            <div className="credential-card">
              <span className="credential-year">1999</span>
              <h3 className="credential-title">Tip Doktorlugu</h3>
              <p className="credential-institution">Ege Universitesi Tip Fakultesi</p>
            </div>
            <div className="credential-card">
              <span className="credential-year">2009</span>
              <h3 className="credential-title">KBB Uzmanligi</h3>
              <p className="credential-institution">Afyon Kocatepe Universitesi</p>
            </div>
            <div className="credential-card">
              <span className="credential-year">2010+</span>
              <h3 className="credential-title">Medikal Estetik Sertifikalari</h3>
              <p className="credential-institution">Cesitli ulusal ve uluslararasi egitimler</p>
            </div>
            <div className="credential-card">
              <span className="credential-year">25+</span>
              <h3 className="credential-title">Yil Deneyim</h3>
              <p className="credential-institution">12.000+ mutlu hasta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutDoctorPage
