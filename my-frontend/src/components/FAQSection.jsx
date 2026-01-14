import { useState } from 'react'
import './FAQSection.css'

const faqData = [
  {
    question: 'Randevu nasil alabilirim?',
    answer: 'Web sitemiz uzerinden iletisim formunu doldurarak, WhatsApp uzerinden mesaj gondererek veya 0530 422 80 35 numarali telefonumuzdan bize ulasarak randevu alabilirsiniz. Ekibimiz en kisa surede size geri donus yapacaktir.'
  },
  {
    question: 'Ilk muayene nasil gerceklesir?',
    answer: 'Ilk muayenede detayli bir degerlendirme yapilir, tibbi gecmisiniz dinlenir ve sikayetleriniz incelenir. Ardindan size ozel bir tedavi plani olusturulur ve tum surec hakkinda bilgilendirilirsiniz.'
  },
  {
    question: 'Hangi gunler ve saatlerde aciksiniz?',
    answer: 'Klinigimiz Pazartesi - Cumartesi gunleri 08:00 - 20:00 saatleri arasinda hizmet vermektedir. Pazar gunleri kapaliyiz.'
  },
  {
    question: 'Botoks ve dolgu uygulamalari guvenli mi?',
    answer: 'Klinigimizde Saglik Bakanligi onayli, guvenilirligi kanitlanmis urunler kullanilmaktadir. Her uygulama oncesinde detayli bilgilendirme yapilir ve islem sonrasi takip sureci planlanir.'
  },
  {
    question: 'Goz kapagi estetigi icin ne zaman basvurmaliyim?',
    answer: 'Goz kapaklarinizda sarkmadan kaynakli gorme problemi yasiyorsaniz veya estetik acidan rahatsizlik duyuyorsaniz muayene icin basvurabilirsiniz. Muayene sirasinda sizin icin en uygun tedavi secenegi belirlenir.'
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="page-section soft-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SSS</p>
          <h2 className="section-title">Sikca Sorulan Sorular</h2>
          <p className="section-lead">
            Merak ettiginiz sorularin cevaplarini burada bulabilirsiniz.
          </p>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={activeIndex !== index}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
