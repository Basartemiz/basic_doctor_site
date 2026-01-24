import './DiseaseTreatment.css'

function DiseaseTreatment({ treatment }) {
  if (!treatment) return null

  return (
    <section className="disease-treatment">
      <div className="container">
        <div className="treatment-header">
          <div className="treatment-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <h2>{treatment.title}</h2>
        </div>

        {treatment.content && (
          <p className="treatment-intro">{treatment.content}</p>
        )}

        {treatment.options?.length > 0 && (
          <div className="treatment-options">
            {treatment.options.map((option, index) => (
              <div key={index} className="treatment-option-card">
                <div className="option-header">
                  <span className="option-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </span>
                  <h3>{option.name}</h3>
                </div>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default DiseaseTreatment
