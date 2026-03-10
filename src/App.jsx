import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    const found = cart.find(i => i.id === product.id)
    if (found) {
      setCart(cart.map(i => i.id === product.id ? {...i, quantity: i.quantity + 1} : i))
    } else {
      setCart([...cart, {...product, quantity: 1}])
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(i => i.id !== id))
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} cart={cart} />} />
            <Route path="/products" element={<Products onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} onRemove={removeFromCart} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
