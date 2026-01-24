import { Link } from 'react-router-dom'
import './DiseaseRelated.css'

function DiseaseRelated({ relatedDiseases, serviceSlug, allDiseases }) {
  if (!relatedDiseases || !relatedDiseases.length) return null

  // Filter to only show diseases that exist in allDiseases
  const relatedItems = relatedDiseases
    .map(slug => allDiseases?.find(d => d.slug === slug))
    .filter(Boolean)
    .slice(0, 3)

  if (!relatedItems.length) return null

  return (
    <section className="disease-related">
      <div className="container">
        <h2>Ilgili Konular</h2>
        <div className="related-grid">
          {relatedItems.map((disease, index) => (
            <Link
              key={index}
              to={`/hizmetler/${disease.serviceSlug}/${disease.slug}`}
              className="related-card"
            >
              <div className="related-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="related-content">
                <h3>{disease.title}</h3>
                <p>{disease.subtitle}</p>
              </div>
              <span className="related-arrow">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiseaseRelated
