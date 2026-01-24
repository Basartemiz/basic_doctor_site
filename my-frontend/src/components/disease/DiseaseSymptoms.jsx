import './DiseaseSymptoms.css'

function DiseaseSymptoms({ symptoms }) {
  if (!symptoms || !symptoms.items?.length) return null

  return (
    <section className="disease-symptoms">
      <div className="container">
        <h2>{symptoms.title}</h2>
        <div className="symptoms-grid">
          {symptoms.items.map((symptom, index) => (
            <div key={index} className="symptom-item">
              <div className="symptom-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <span>{symptom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiseaseSymptoms
