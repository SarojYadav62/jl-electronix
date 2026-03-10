import { Link } from 'react-router-dom'
import { FaTrash, FaArrowLeft } from 'react-icons/fa'

function Cart({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded shadow p-8 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link to="/" className="text-blue-600">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded shadow p-4 flex gap-4 mb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-blue-600 font-bold">Rs {item.price.toLocaleString()}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-red-500">
                    <FaTrash />
                  </button>
                </div>
              ))}
              <Link to="/" className="flex items-center gap-2 text-blue-600">
                <FaArrowLeft /> Continue Shopping
              </Link>
            </div>
            
            <div className="bg-white rounded shadow p-4 h-fit">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Total</span>
                <span className="font-bold text-blue-600">Rs {total.toLocaleString()}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded mt-4">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
