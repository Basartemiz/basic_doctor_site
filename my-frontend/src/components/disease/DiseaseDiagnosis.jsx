import './DiseaseDiagnosis.css'

function DiseaseDiagnosis({ diagnosis }) {
  if (!diagnosis) return null

  return (
    <section className="disease-diagnosis">
      <div className="container">
        <div className="diagnosis-card">
          <div className="diagnosis-header">
            <div className="diagnosis-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h2>{diagnosis.title}</h2>
          </div>

          {diagnosis.content && (
            <p className="diagnosis-description">{diagnosis.content}</p>
          )}

          {diagnosis.methods?.length > 0 && (
            <div className="diagnosis-methods">
              <h3>Tani Yontemleri</h3>
              <div className="methods-grid">
                {diagnosis.methods.map((method, index) => (
                  <div key={index} className="method-item">
                    <span className="method-number">{index + 1}</span>
                    <span className="method-text">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default DiseaseDiagnosis
