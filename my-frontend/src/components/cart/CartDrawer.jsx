import { Link } from 'react-router-dom'
import useCartStore from '../../store/cartStore'
import CartItem from './CartItem'
import { formatPrice } from '../../utils/formatters'
import './CartDrawer.css'

function CartDrawer() {
  const { items, isCartOpen, closeCart, getSubtotal, getWhatsAppMessage } = useCartStore()
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(getWhatsAppMessage())
    window.open(`https://wa.me/905304228035?text=${message}`, '_blank')
  }

  if (!isCartOpen) return null

  return (
    <>
      <div className="cart-drawer-overlay" onClick={closeCart} />
      <div className="cart-drawer">
        <div className="cart-drawer-header">
          <h2>Sepetiniz</h2>
          <button className="cart-drawer-close" onClick={closeCart} aria-label="Kapat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="cart-drawer-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <p>Sepetiniz bos</p>
              <Link to="/urunler" className="btn btn-primary" onClick={closeCart}>
                Alisverise Basla
              </Link>
            </div>
          ) : (
            <div className="cart-items">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-subtotal">
              <span>Ara Toplam</span>
              <span className="cart-subtotal-value">{formatPrice(subtotal)}</span>
            </div>
            <p className="cart-shipping-note">Kargo ucreti odeme sirasinda hesaplanir</p>
            <button className="btn btn-primary btn-block" onClick={handleWhatsAppOrder}>
              WhatsApp ile Siparis Ver
            </button>
            <Link to="/sepet" className="btn btn-outline btn-block" onClick={closeCart}>
              Sepeti Goruntule
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
