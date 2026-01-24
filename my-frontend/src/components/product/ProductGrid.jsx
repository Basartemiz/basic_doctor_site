import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products, columns = 4 }) {
  if (!products || products.length === 0) {
    return (
      <div className="product-grid-empty">
        <p>Bu kriterlere uygun urun bulunamadi.</p>
      </div>
    )
  }

  return (
    <div className={`product-grid product-grid-${columns}`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
