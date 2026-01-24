import './DiseaseWhyUs.css'

function DiseaseWhyUs({ whyChooseUs }) {
  if (!whyChooseUs || !whyChooseUs.points?.length) return null

  return (
    <section className="disease-why-us">
      <div className="container">
        <div className="why-us-card">
          <div className="why-us-badge">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <h2>{whyChooseUs.title}</h2>
          <div className="why-us-points">
            {whyChooseUs.points.map((point, index) => (
              <div key={index} className="why-us-point">
                <span className="point-check">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiseaseWhyUs
