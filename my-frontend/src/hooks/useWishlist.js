import useWishlistStore from '../store/wishlistStore'

export const useWishlist = () => {
  const {
    items,
    addItem,
    removeItem,
    toggleItem,
    isInWishlist,
    clearWishlist,
    getItemCount
  } = useWishlistStore()

  return {
    items,
    addItem,
    removeItem,
    toggleItem,
    isInWishlist,
    clearWishlist,
    itemCount: getItemCount()
  }
}

export default useWishlist
