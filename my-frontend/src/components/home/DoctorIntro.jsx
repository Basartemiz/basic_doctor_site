import { Link } from 'react-router-dom'
import aboutPhoto from '../../assets/banu2.jpeg'
import './DoctorIntro.css'

function DoctorIntro() {
  return (
    <section className="doctor-intro-section page-section">
      <div className="container">
        <div className="doctor-intro-grid">
          <div className="doctor-intro-image">
            <img src={aboutPhoto} alt="Dr. Banu Begen" loading="lazy" />
          </div>
          <div className="doctor-intro-content">
            <p className="eyebrow">Uzman Gorusu</p>
            <h2 className="section-title">Dr. Banu Begen</h2>
            <blockquote className="doctor-quote">
              "Cilt bakimi, sadece guzellik degil, ayni zamanda saglik meselesidir.
              Her hastama oldugu gibi, size de en dogru ve etkili urunleri
              sunmak benim oncelgimdir."
            </blockquote>
            <p className="doctor-bio">
              Ege Universitesi Tip Fakultesi mezunu Op. Dr. Banu Begen,
              KBB Hastaliklari ve Medikal Estetik alanlarinda 25 yili askin
              deneyime sahiptir. Binlerce hastanin tedavisinde edinigi
              bilgi ve tecrubesiyle, en etkili cilt bakimi urunlerini secmektedir.
            </p>
            <Link to="/hakkimizda" className="btn btn-primary">
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorIntro
