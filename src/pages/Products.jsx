import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

function Products({ onAddToCart }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default Products
