import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => { // Receiving cartCount as prop
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 w-full z-50 p-3 bg-gradient-to-r from-indigo-500 via-blue-600 to-teal-500 text-white">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <h2 className="text-2xl font-bold">My Shop</h2>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-lg hover:text-gray-200">Home</Link></li>
          <li><Link to="/games" className="text-lg hover:text-gray-200">Games</Link></li>
          <li><Link to="/about" className="text-lg hover:text-gray-200">About</Link></li>
          <li><Link to="/contact" className="text-lg hover:text-gray-200">Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center ml-auto" onClick={toggleMenu}>
          <span className="text-2xl cursor-pointer">☰</span>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center cursor-pointer ml-4">
          <Link to="/cart" className="text-lg hover:text-gray-200">
            <span className="text-2xl text-white mr-2">🛒</span>
            <span className="text-sm bg-red-500 text-white rounded-full px-2 py-1">{cartCount}</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-14 left-0 w-full text-left bg-gradient-to-r from-indigo-500 via-blue-600 to-teal-500 text-white p-4 space-y-4">
          <li><Link to="/" className="text-lg hover:text-gray-200 block" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/games" className="text-lg hover:text-gray-200 block" onClick={closeMenu}>Games</Link></li>
          <li><Link to="/about" className="text-lg hover:text-gray-200 block" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" className="text-lg hover:text-gray-200 block" onClick={closeMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
