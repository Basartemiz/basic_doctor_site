import { Link } from 'react-router-dom'
import useCartStore from '../../store/cartStore'
import useWishlistStore from '../../store/wishlistStore'
import { formatPrice, calculateDiscount } from '../../utils/formatters'
import './ProductCard.css'

function ProductCard({ product }) {
  const { addItem, openCart } = useCartStore()
  const { toggleItem, isInWishlist } = useWishlistStore()
  const discount = calculateDiscount(product.price, product.compareAtPrice)
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  const handleToggleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleItem(product)
  }

  return (
    <article className="product-card">
      <Link to={`/urunler/${product.slug}`} className="product-card-link">
        <div className="product-card-image">
          <img src={product.images[0]?.url} alt={product.name} loading="lazy" />
          {product.isNew && <span className="product-badge product-badge-new">Yeni</span>}
          {discount > 0 && <span className="product-badge product-badge-sale">%{discount}</span>}
          <button
            className={`product-wishlist-btn ${inWishlist ? 'active' : ''}`}
            onClick={handleToggleWishlist}
            aria-label={inWishlist ? 'Favorilerden cikar' : 'Favorilere ekle'}
          >
            <svg viewBox="0 0 24 24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <div className="product-card-content">
          <span className="product-card-category">{product.category.replace('-', ' ')}</span>
          <h3 className="product-card-title">{product.name}</h3>
          <p className="product-card-description">{product.shortDescription}</p>
          <div className="product-card-footer">
            <div className="product-card-price">
              <span className="price-current">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="price-compare">{formatPrice(product.compareAtPrice)}</span>
              )}
            </div>
            <button className="product-add-btn" onClick={handleAddToCart} aria-label="Sepete ekle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
