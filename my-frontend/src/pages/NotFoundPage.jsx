import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <SEOHead
        title="Sayfa Bulunamadi - 404"
        description="Aradiginiz sayfa bulunamadi. Ana sayfaya donerek devam edebilirsiniz."
        noindex={true}
      />

      <div className="container">
        <div className="not-found-content">
          <div className="not-found-illustration">
            <span className="error-code">404</span>
            <div className="error-icon">
              <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
          </div>
          <h1>Sayfa Bulunamadi</h1>
          <p>
            Aradiginiz sayfa mevcut degil, tasinmis veya kaldirilmis olabilir.
            Lutfen asagidaki linklerden devam edin.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Ana Sayfa
            </Link>
            <Link to="/hizmetler" className="btn btn-outline btn-lg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Hizmetler
            </Link>
            <Link to="/iletisim" className="btn btn-outline btn-lg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Iletisim
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
