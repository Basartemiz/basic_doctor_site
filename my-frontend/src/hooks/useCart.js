import useCartStore from '../store/cartStore'

export const useCart = () => {
  const {
    items,
    isCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
    getItemCount,
    getSubtotal,
    getWhatsAppMessage
  } = useCartStore()

  return {
    items,
    isCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
    itemCount: getItemCount(),
    subtotal: getSubtotal(),
    whatsAppMessage: getWhatsAppMessage()
  }
}

export default useCart
