import './BrandStory.css'

function BrandStory() {
  return (
    <section className="brand-story-section page-section">
      <div className="container">
        <div className="brand-story-grid">
          <div className="brand-story-content">
            <p className="eyebrow">Hikayemiz</p>
            <h2 className="section-title">Tibbi Uzmanlik, Premium Bakim</h2>
            <p className="brand-story-text">
              25 yili askin tibbi deneyimimle, cildiniz icin en etkili ve guvenilir
              urunleri secmeyi gorev edindim. Her urun, klinik etkililigi ve
              guvenlirligi acisindan titizlikle degerlendirilmektedir.
            </p>
            <p className="brand-story-text">
              Koleksiyonumuzdaki her urun, sadece etkili olmakla kalmayip,
              ayni zamanda cildinizin dogal dengesini koruyan, zararsiz
              formulasyonlara sahiptir.
            </p>
            <div className="brand-story-signature">
              <span className="signature-name">Dr. Banu Begen</span>
              <span className="signature-title">KBB Uzmani & Medikal Estetik</span>
            </div>
          </div>
          <div className="brand-story-values">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="value-title">Guvenilirlik</h3>
              <p className="value-text">Her urun, tibbi standartlara uygun olarak secilir</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="value-title">Deneyim</h3>
              <p className="value-text">25+ yillik tibbi bilgi ve tecrube</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className="value-title">Ozen</h3>
              <p className="value-text">Her urun ozenle secilir ve test edilir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
