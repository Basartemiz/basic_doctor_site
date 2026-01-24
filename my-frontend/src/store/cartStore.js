import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (product, quantity = 1) => {
        const items = get().items
        const existingItem = items.find(item => item.id === product.id)

        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          })
        } else {
          set({
            items: [...items, { ...product, quantity }]
          })
        }
      },

      removeItem: (productId) => {
        set({
          items: get().items.filter(item => item.id !== productId)
        })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set({
          items: get().items.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      openCart: () => {
        set({ isCartOpen: true })
      },

      closeCart: () => {
        set({ isCartOpen: false })
      },

      toggleCart: () => {
        set({ isCartOpen: !get().isCartOpen })
      },

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },

      getWhatsAppMessage: () => {
        const items = get().items
        if (items.length === 0) return ''

        const itemsList = items.map(item =>
          `- ${item.name} x${item.quantity} = ${(item.price * item.quantity).toLocaleString('tr-TR')} TL`
        ).join('\n')

        const subtotal = get().getSubtotal()

        return `Merhaba, asagidaki urunleri siparis vermek istiyorum:\n\n${itemsList}\n\nToplam: ${subtotal.toLocaleString('tr-TR')} TL`
      }
    }),
    {
      name: 'dr-banu-cart',
    }
  )
)

export default useCartStore
