import useCartStore from '../../store/cartStore'
import { formatPrice } from '../../utils/formatters'
import './CartItem.css'

function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCartStore()

  const handleQuantityChange = (delta) => {
    const newQuantity = item.quantity + delta
    if (newQuantity <= 0) {
      removeItem(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.images[0]?.url} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">{formatPrice(item.price)}</p>
        <div className="cart-item-actions">
          <div className="quantity-control">
            <button
              onClick={() => handleQuantityChange(-1)}
              aria-label="Azalt"
              className="quantity-btn"
            >
              -
            </button>
            <span className="quantity-value">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              aria-label="Artir"
              className="quantity-btn"
            >
              +
            </button>
          </div>
          <button
            className="cart-item-remove"
            onClick={() => removeItem(item.id)}
            aria-label="Kaldir"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="cart-item-total">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  )
}

export default CartItem
