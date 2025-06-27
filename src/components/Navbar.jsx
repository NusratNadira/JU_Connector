 // src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaHeart, FaBars, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f7f7f3] text-[#003c2f] shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between px-4 py-5 md:px-10">

        {/* Left - Logo */}
        <div className="text-2xl md:text-3xl font-bold text-[#007f5f]">JU Marketplace</div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Center - Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-lg">
          <Link to="/" className="hover:text-[#007f5f] transition duration-200">Home</Link>
          <Link to="/about" className="hover:text-[#007f5f] transition duration-200">About</Link>
          <div className="group relative">
            <button className="hover:text-[#007f5f] flex items-center gap-1 transition duration-200">
              Products <FaChevronDown size={12} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded text-sm z-10">
              <Link to="/buy" className="block px-4 py-2 hover:bg-[#e6f7f2] transition duration-200">Buying Products</Link>
              <Link to="/sell" className="block px-4 py-2 hover:bg-[#e6f7f2] transition duration-200">Selling Products</Link>
            </div>
          </div>
          <Link to="/community" className="hover:text-[#007f5f] transition duration-200">Community</Link>
          <Link to="/contact" className="hover:text-[#007f5f] transition duration-200">Contact</Link>
        </div>

        {/* Right - Icons */}
        <div className="hidden md:flex items-center space-x-5 text-xl">
          <FaSearch className="cursor-pointer hover:text-[#007f5f] transition duration-200" />
          <FaShoppingCart className="cursor-pointer hover:text-[#007f5f] transition duration-200" />
          <FaHeart className="cursor-pointer hover:text-[#007f5f] transition duration-200" />
          <FaUser className="cursor-pointer hover:text-[#007f5f] transition duration-200" />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t border-gray-200 text-sm space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link to="/buy" onClick={() => setIsOpen(false)} className="block">Buying Products</Link>
          <Link to="/sell" onClick={() => setIsOpen(false)} className="block">Selling Products</Link>
          <Link to="/community" onClick={() => setIsOpen(false)} className="block">Community</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
          <div className="flex space-x-4 pt-2">
            <FaSearch className="hover:text-[#007f5f]" />
            <FaShoppingCart className="hover:text-[#007f5f]" />
            <FaHeart className="hover:text-[#007f5f]" />
            <FaUser className="hover:text-[#007f5f]" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
