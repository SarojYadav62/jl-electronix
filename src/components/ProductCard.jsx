function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow p-3 sm:p-4">
      <img src={product.image} alt={product.name} className="w-full h-32 sm:h-40 object-cover rounded mb-2 sm:mb-3" />
      <h3 className="font-semibold text-sm sm:text-base">{product.name}</h3>
      <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center mt-2 sm:mt-3">
        <span className="text-lg sm:text-xl font-bold text-blue-600">Rs {product.price.toLocaleString()}</span>
        {}
        <span className={product.inStock ? "text-green-600 text-xs sm:text-sm" : "text-red-600 text-xs sm:text-sm"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
        className="w-full bg-blue-600 text-white py-1.5 sm:py-2 rounded mt-2 sm:mt-3 disabled:bg-gray-300 text-sm sm:text-base"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
