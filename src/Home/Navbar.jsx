import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Cart from "../Cart/Cart";
const Navbar = () => {
  const [cartCount, ] = useState(0); // Cart count state
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-3 bg-gradient-to-r from-indigo-500 via-blue-600 to-teal-500 text-white">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <h2 className="text-2xl font-bold">My Shop</h2>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-lg hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-lg hover:text-gray-200">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center ml-auto" onClick={toggleMenu}>
          <span className="text-2xl cursor-pointer">☰</span>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center cursor-pointer ml-4" >
        <Link to="/cart" className="text-lg hover:text-gray-200">
             
          <span className="text-2xl text-white mr-2">🛒</span>
          <span className="text-sm bg-red-500 text-white rounded-full px-2 py-1">{cartCount}</span>
            </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-500 via-blue-600 to-teal-500 text-white p-4 space-y-4">
          <li>
            <Link to="/" className="text-lg hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-lg hover:text-gray-200">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
