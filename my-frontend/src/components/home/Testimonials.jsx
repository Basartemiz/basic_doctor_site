import { useState } from 'react'
import './Testimonials.css'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Ayse K.',
      location: 'Istanbul',
      text: 'Dr. Begen\'in onerdigi C vitamini serumu cildimde inanilmaz fark yaratti. Lekelerin azaldigini ve cildimin daha parlak gorundugun fark ettim.',
      rating: 5
    },
    {
      name: 'Mehmet Y.',
      location: 'Izmir',
      text: 'Yillardir cilt bakimi ile ilgili dogru urunleri bulamiyordum. Dr. Begen\'in secimi olan urunler gercekten fark yaratiyor.',
      rating: 5
    },
    {
      name: 'Zeynep T.',
      location: 'Ankara',
      text: 'Hassas cildim icin dogru urunleri bulmak her zaman zor olmustur. Bu koleksiyondaki urunler cildimi tahris etmiyor ve cok etkili.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials-section page-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="eyebrow">Musterilerimiz</p>
          <h2 className="section-title">Mutlu Musterilerimizden</h2>
        </div>
        <div className="testimonials-carousel">
          <button className="carousel-btn carousel-prev" onClick={prevTestimonial} aria-label="Onceki">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-author">
              <span className="author-name">{testimonials[currentIndex].name}</span>
              <span className="author-location">{testimonials[currentIndex].location}</span>
            </div>
          </div>
          <button className="carousel-btn carousel-next" onClick={nextTestimonial} aria-label="Sonraki">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Yorum ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
