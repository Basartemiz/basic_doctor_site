import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/product/ProductGrid'
import products from '../data/products.json'
import categories from '../data/categories.json'
import './ProductsPage.css'

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const selectedCategory = searchParams.get('category') || ''
  const selectedSubcategory = searchParams.get('subcategory') || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Filter by subcategory
    if (selectedSubcategory) {
      result = result.filter(p => p.subcategory === selectedSubcategory)
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query)
      )
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name, 'tr'))
        break
      case 'newest':
        result = result.filter(p => p.isNew).concat(result.filter(p => !p.isNew))
        break
      case 'featured':
      default:
        result = result.filter(p => p.isFeatured).concat(result.filter(p => !p.isFeatured))
    }

    return result
  }, [selectedCategory, selectedSubcategory, searchQuery, sortBy])

  const handleCategoryChange = (categoryId) => {
    if (categoryId) {
      setSearchParams({ category: categoryId })
    } else {
      setSearchParams({})
    }
  }

  const handleSubcategoryChange = (subcategoryId) => {
    if (subcategoryId) {
      setSearchParams({ category: selectedCategory, subcategory: subcategoryId })
    } else if (selectedCategory) {
      setSearchParams({ category: selectedCategory })
    }
  }

  const clearFilters = () => {
    setSearchParams({})
    setSearchQuery('')
    setSortBy('featured')
  }

  const currentCategory = categories.find(c => c.id === selectedCategory)

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-header">
          <div className="products-header-content">
            <h1 className="products-title">Urunler</h1>
            <p className="products-subtitle">
              Dr. Banu Begen tarafindan ozenle secilmis premium kozmetik urunleri
            </p>
          </div>
        </div>

        <div className="products-layout">
          <aside className="products-sidebar">
            <div className="filter-section">
              <h3 className="filter-title">Ara</h3>
              <input
                type="text"
                className="filter-search"
                placeholder="Urun ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Kategoriler</h3>
              <ul className="filter-list">
                <li>
                  <button
                    className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('')}
                  >
                    Tum Urunler
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {currentCategory && currentCategory.subcategories && (
              <div className="filter-section">
                <h3 className="filter-title">Alt Kategori</h3>
                <ul className="filter-list">
                  <li>
                    <button
                      className={`filter-btn ${!selectedSubcategory ? 'active' : ''}`}
                      onClick={() => handleSubcategoryChange('')}
                    >
                      Tumu
                    </button>
                  </li>
                  {currentCategory.subcategories.map(sub => (
                    <li key={sub}>
                      <button
                        className={`filter-btn ${selectedSubcategory === sub ? 'active' : ''}`}
                        onClick={() => handleSubcategoryChange(sub)}
                      >
                        {sub.replace('-', ' ')}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(selectedCategory || searchQuery) && (
              <button className="filter-clear" onClick={clearFilters}>
                Filtreleri Temizle
              </button>
            )}
          </aside>

          <main className="products-main">
            <div className="products-toolbar">
              <span className="products-count">
                {filteredProducts.length} urun
              </span>
              <select
                className="products-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">One Cikanlar</option>
                <option value="newest">En Yeniler</option>
                <option value="price-low">Fiyat: Dusukten Yuksege</option>
                <option value="price-high">Fiyat: Yuksekten Dusuge</option>
                <option value="name">Isim: A-Z</option>
              </select>
            </div>

            <ProductGrid products={filteredProducts} columns={3} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
