import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-light" aria-label="Ana navigasyon">
        <div className="container">
          <Link className="navbar-brand brand" to="/">
            Op. Dr. Banu Begen
          </Link>
          <div className="header-actions-mobile">
            <ThemeToggle />
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navMenu"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>
                  Ana Sayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hizmetler" onClick={closeMenu}>
                  Hizmetler
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/galeri" onClick={closeMenu}>
                  Galeri
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hakkimizda" onClick={closeMenu}>
                  Hakkimizda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/iletisim" onClick={closeMenu}>
                  Iletisim
                </NavLink>
              </li>
            </ul>
            <div className="header-actions">
              <Link to="/iletisim" className="btn btn-primary btn-sm">
                Randevu Al
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
