import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductGallery from '../components/product/ProductGallery'
import IngredientsList from '../components/product/IngredientsList'
import ProductGrid from '../components/product/ProductGrid'
import useCartStore from '../store/cartStore'
import useWishlistStore from '../store/wishlistStore'
import { formatPrice, calculateDiscount } from '../utils/formatters'
import products from '../data/products.json'
import './ProductDetailPage.css'

function ProductDetailPage() {
  const { slug } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const { addItem } = useCartStore()
  const { toggleItem, isInWishlist } = useWishlistStore()

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Urun Bulunamadi</h1>
          <p>Aradiginiz urun mevcut degil.</p>
          <Link to="/urunler" className="btn btn-primary">
            Urunlere Don
          </Link>
        </div>
      </div>
    )
  }

  const discount = calculateDiscount(product.price, product.compareAtPrice)
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  const handleWhatsAppOrder = () => {
    const message = `Merhaba, ${product.name} urununu satin almak istiyorum. Miktar: ${quantity}`
    window.open(`https://wa.me/905304228035?text=${encodeURIComponent(message)}`, '_blank')
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const tabs = [
    { id: 'description', label: 'Aciklama' },
    { id: 'ingredients', label: 'Icerikler' },
    { id: 'howToUse', label: 'Nasil Kullanilir' },
    { id: 'doctorNote', label: 'Dr. Begen\'in Notu' }
  ]

  return (
    <div className="product-detail-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Ana Sayfa</Link>
          <span>/</span>
          <Link to="/urunler">Urunler</Link>
          <span>/</span>
          <Link to={`/urunler?category=${product.category}`}>{product.category.replace('-', ' ')}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          <div className="product-detail-gallery">
            <ProductGallery images={product.images} />
          </div>

          <div className="product-detail-info">
            <div className="product-badges">
              {product.isNew && <span className="badge badge-new">Yeni</span>}
              {discount > 0 && <span className="badge badge-sale">%{discount} Indirim</span>}
            </div>

            <span className="product-category">{product.category.replace('-', ' ')}</span>
            <h1 className="product-name">{product.name}</h1>
            <p className="product-short-desc">{product.shortDescription}</p>

            <div className="product-price">
              <span className="price-current">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="price-compare">{formatPrice(product.compareAtPrice)}</span>
              )}
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                Sepete Ekle
              </button>
              <button
                className={`btn-wishlist ${inWishlist ? 'active' : ''}`}
                onClick={() => toggleItem(product)}
                aria-label={inWishlist ? 'Favorilerden cikar' : 'Favorilere ekle'}
              >
                <svg viewBox="0 0 24 24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>

            <button className="btn btn-whatsapp" onClick={handleWhatsAppOrder}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile Siparis Ver
            </button>

            <div className="product-benefits">
              {product.clinicalBenefits?.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <span className="benefit-title">{benefit.title}</span>
                    <span className="benefit-desc">{benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tabs-content">
            {activeTab === 'description' && (
              <div className="tab-panel">
                <p>{product.fullDescription}</p>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className="tab-panel">
                <IngredientsList ingredients={product.ingredients} />
              </div>
            )}
            {activeTab === 'howToUse' && (
              <div className="tab-panel">
                <p>{product.howToUse}</p>
              </div>
            )}
            {activeTab === 'doctorNote' && (
              <div className="tab-panel doctor-note">
                <div className="doctor-note-header">
                  <span className="note-label">Dr. Begen'in Notu</span>
                </div>
                <blockquote>"{product.doctorNote}"</blockquote>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2 className="related-title">Benzer Urunler</h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </section>
        )}
      </div>
    </div>
  )
}

export default ProductDetailPage
