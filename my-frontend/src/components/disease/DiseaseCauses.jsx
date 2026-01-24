import './DiseaseCauses.css'

function DiseaseCauses({ causes }) {
  if (!causes || !causes.items?.length) return null

  return (
    <section className="disease-causes">
      <div className="container">
        <div className="causes-content">
          <div className="causes-header">
            <div className="causes-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <h2>{causes.title}</h2>
          </div>
          <ul className="causes-list">
            {causes.items.map((cause, index) => (
              <li key={index}>
                <span className="cause-bullet">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
                {cause}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DiseaseCauses
