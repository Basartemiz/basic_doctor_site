import { useState } from 'react'
import './ProductGallery.css'

function ProductGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="product-gallery">
        <div className="gallery-main gallery-placeholder">
          <span>Gorsel mevcut degil</span>
        </div>
      </div>
    )
  }

  const selectedImage = images[selectedIndex]

  return (
    <div className="product-gallery">
      <div
        className={`gallery-main ${isZoomed ? 'zoomed' : ''}`}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <img src={selectedImage.url} alt={selectedImage.alt || 'Urun gorseli'} />
        <button className="gallery-zoom-btn" aria-label={isZoomed ? 'Kuculut' : 'Buyut'}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            {isZoomed ? (
              <>
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </>
            ) : (
              <>
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </>
            )}
          </svg>
        </button>
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`gallery-thumbnail ${index === selectedIndex ? 'active' : ''}`}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Gorsel ${index + 1}`}
            >
              <img src={image.url} alt={image.alt || `Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGallery
