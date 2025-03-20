import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
  <div className="container-padding">
    <div className="flex justify-between items-center h-16">
      <Link to="/" className="flex-shrink-0">
        <img src={assets.HH_logo} alt="Hunger Hive" className="h-10 w-auto" />
      </Link>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/mobile-app" className="nav-link">Mobile App</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img src={assets.search_icon} alt="Search" className="h-5 w-5" />
        </button>
        <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
          <img src={assets.basket_icon} alt="Cart" className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 flex-center bg-orange-500 text-white text-xs rounded-full">
            0
          </span>
        </Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar