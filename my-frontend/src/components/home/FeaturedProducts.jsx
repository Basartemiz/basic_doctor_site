import { Link } from 'react-router-dom'
import ProductGrid from '../product/ProductGrid'
import products from '../../data/products.json'
import './FeaturedProducts.css'

function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 6)

  return (
    <section className="featured-section page-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="eyebrow">One Cikan Urunler</p>
          <h2 className="section-title">Dr. Begen'in Oneriler</h2>
          <p className="section-lead">
            Tibbi uzmanlikla secilmis, en cok tercih edilen urunlerimiz.
          </p>
        </div>
        <ProductGrid products={featuredProducts} columns={3} />
        <div className="featured-cta">
          <Link to="/urunler" className="btn btn-outline-primary btn-lg">
            Tum Urunleri Gor
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
