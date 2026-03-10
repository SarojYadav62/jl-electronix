import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHome, FaBox, FaInfoCircle, FaBars } from 'react-icons/fa'
import { useState } from 'react'

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">JL Electronix</Link>
        
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        <div className="hidden md:flex gap-4">
          <Link to="/" className="flex items-center gap-1"><FaHome /> Home</Link>
          <Link to="/products" className="flex items-center gap-1"><FaBox /> Products</Link>
          <Link to="/about" className="flex items-center gap-1"><FaInfoCircle /> About</Link>
          <Link to="/cart" className="flex items-center gap-1 relative">
            <FaShoppingCart /> Cart
            {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
          <Link to="/" className="flex items-center gap-1 py-2"><FaHome /> Home</Link>
          <Link to="/products" className="flex items-center gap-1 py-2"><FaBox /> Products</Link>
          <Link to="/about" className="flex items-center gap-1 py-2"><FaInfoCircle /> About</Link>
          <Link to="/cart" className="flex items-center gap-1 py-2 relative">
            <FaShoppingCart /> Cart
            {cartCount > 0 && <span className="ml-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
