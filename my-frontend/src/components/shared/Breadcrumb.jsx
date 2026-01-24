import { Link } from 'react-router-dom'
import './Breadcrumb.css'

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="breadcrumb-item">
              {!isLast && item.url ? (
                <Link to={item.url} className="breadcrumb-link">
                  {item.name}
                </Link>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {item.name}
                </span>
              )}
              {!isLast && (
                <span className="breadcrumb-separator" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
