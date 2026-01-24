import './DiseaseDefinition.css'

function DiseaseDefinition({ definition }) {
  if (!definition) return null

  return (
    <section className="disease-definition">
      <div className="container">
        <div className="definition-card">
          <div className="definition-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <h2>{definition.title}</h2>
          <p>{definition.content}</p>
        </div>
      </div>
    </section>
  )
}

export default DiseaseDefinition
