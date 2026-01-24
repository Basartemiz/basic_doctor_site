import { useState } from 'react'
import clinicPhoto from '../assets/foto1.jpeg'
import eyelidPhoto from '../assets/goz_kapak.jpeg'
import eyelidResult from '../assets/goz_kapagı_sonuclar.jpeg'
import clinicVideo from '../assets/video1.mp4'
import './GalleryPage.css'

function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      image: clinicPhoto,
      title: 'Klinik Ortami',
      category: 'Klinik'
    },
    {
      id: 2,
      image: eyelidPhoto,
      title: 'Goz Kapagi Uygulamasi',
      category: 'Tedavi'
    },
    {
      id: 3,
      image: eyelidResult,
      title: 'Uygulama Sonucu',
      category: 'Sonuclar'
    }
  ]

  const openLightbox = (image) => {
    setLightboxImage(image)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <p className="eyebrow">Galeri</p>
          <h1>Klinikten Kareler</h1>
          <p className="hero-description">
            Klinik ortamimiz, tedavi sureclerimiz ve hasta sonuclarindan
            secilmis gorseller.
          </p>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(item)}
              >
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>
                <figcaption>
                  <span className="gallery-category">{item.category}</span>
                  <span className="gallery-title">{item.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-video-section">
        <div className="container">
          <div className="video-wrapper">
            <h2>Klinik Tanitim Videosu</h2>
            <p>Kliniğimizi ve tedavi sureclerimizi yakindan taniyin.</p>
            <div className="video-container">
              <video
                controls
                preload="metadata"
                poster={clinicPhoto}
              >
                <source src={clinicVideo} type="video/mp4" />
                Tarayiciniz video etiketini desteklemiyor.
              </video>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" aria-label="Kapat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage?.image} alt={lightboxImage?.title} />
            <div className="lightbox-caption">
              <span className="lightbox-category">{lightboxImage?.category}</span>
              <span className="lightbox-title">{lightboxImage?.title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
