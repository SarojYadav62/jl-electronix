import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'

function Home({ onAddToCart, cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12 sm:py-20 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">JL Electronix Pvt Ltd</h1>
        <p className="text-lg sm:text-xl text-blue-100">Your Trusted Electronics Partner in Biratnagar</p>
      </div>

      <div className="py-10 sm:py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h2>
          <p className="text-gray-600 text-base sm:text-lg text-center leading-relaxed">
            JL Electronix Pvt Ltd is a leading local electronics store based in Biratnagar, Province No. 1, Nepal. 
            Established with a vision to provide quality electronic products at affordable prices, we have been 
            serving our customers with dedication and trust. From home appliances to entertainment systems, 
            we offer a wide range of products to meet your daily needs.
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        {cart.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b">
                <span>{item.name} x {item.quantity}</span>
                <span className="font-bold">Rs {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between mt-4 text-xl font-bold">
              <span>Total:</span>
              <span className="text-blue-600">Rs {total.toLocaleString()}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <h3 className="text-xl font-bold text-gray-800">Visit Our Store</h3>
            </div>
            <div className="text-gray-600 space-y-2">
              <p><span className="font-semibold">Address:</span> Thakurwari Road</p>
              <p><span className="font-semibold">Landmark:</span> In front of Ram Janki Mandir</p>
              <p><span className="font-semibold">City:</span> Biratnagar</p>
              <p><span className="font-semibold">Province:</span> Province No. 1, Nepal</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaPhone className="text-blue-600 text-2xl" />
              <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
            </div>
            <div className="text-gray-600 space-y-2">
              <p><span className="font-semibold">Phone:</span> +977-9815305190</p>
              <p><span className="font-semibold">Email:</span> info@jlelectronix.com</p>
              <p className="flex items-center gap-2 mt-4">
                <FaClock className="text-blue-600" />
                <span className="font-semibold">Open:</span> Sun - Fri (9 AM - 7 PM)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-blue-600 rounded-xl shadow-lg p-6 sm:p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose JL Electronix?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div>
              <p className="text-3xl font-bold mb-2">Quality</p>
              <p className="text-blue-100">Genuine products from trusted brands</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Price</p>
              <p className="text-blue-100">Best prices in Biratnagar</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Service</p>
              <p className="text-blue-100">Friendly after-sales support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
