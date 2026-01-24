import { Link } from 'react-router-dom'
import useCartStore from '../../store/cartStore'
import './MiniCart.css'

function MiniCart() {
  const { items, toggleCart } = useCartStore()
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link to="/sepet" className="mini-cart" aria-label={`Sepet - ${itemCount} urun`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      {itemCount > 0 && (
        <span className="mini-cart-badge">{itemCount}</span>
      )}
    </Link>
  )
}

export default MiniCart
