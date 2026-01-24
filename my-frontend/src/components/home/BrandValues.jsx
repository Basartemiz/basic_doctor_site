import './BrandValues.css'

function BrandValues() {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Dogal',
      description: 'Cildinizin dogal dengesini koruyan, dogadan ilham alan formuller.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'Klinik',
      description: 'Bilimsel arastirmalarla desteklenmis, klinik olarak test edilmis urunler.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: 'Secilmis',
      description: 'Tibbi uzmanlik ile ozenle secilmis, kalitesi kanitlanmis markalar.'
    }
  ]

  return (
    <section className="brand-values-section page-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="eyebrow">Degerlerimiz</p>
          <h2 className="section-title">Neden Bizi Tercih Etmelisiniz?</h2>
        </div>
        <div className="brand-values-grid">
          {values.map((value, index) => (
            <div key={index} className="brand-value-card">
              <div className="brand-value-icon">{value.icon}</div>
              <h3 className="brand-value-title">{value.title}</h3>
              <p className="brand-value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandValues
