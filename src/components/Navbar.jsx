import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaBars,
  FaTimes,
  FaCaretDown,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#f7f7f2] shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          {/* Brand */}
          <div className="text-green-900 font-bold text-2xl">
            <Link to="/">JU Marketplace</Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center font-medium text-green-900 relative">
            <li>
              <Link to="/" className="hover:text-green-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-600 transition">About</Link>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className="flex items-center gap-1 hover:text-green-600 transition"
              >
                Products <FaCaretDown />
              </button>

              {productDropdownOpen && (
                <ul className="absolute bg-white mt-2 shadow-lg rounded-md text-gray-800 w-40 z-50">
                  <li>
                    <Link
                      to="/products/BuyProducts"
                      className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                      onClick={() => setProductDropdownOpen(false)}
                    >
                      Buy Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/SellProducts"
                      className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                      onClick={() => setProductDropdownOpen(false)}
                    >
                      Sell Products
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/community" className="hover:text-green-600 transition">Community</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-5 text-green-900 text-xl">
            <FaSearch className="hover:text-green-600 cursor-pointer" />
            <FaShoppingCart className="hover:text-green-600 cursor-pointer" />
            <FaHeart className="hover:text-green-600 cursor-pointer" />
            <FaUser className="hover:text-green-600 cursor-pointer" />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-green-800 text-2xl">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 py-6 space-y-4 text-green-800 shadow-md">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <div>
              <p className="font-semibold">Products</p>
              <Link to="/products/BuyProducts" onClick={() => setMenuOpen(false)} className="block pl-4">Buy</Link>
              <Link to="/products/SellProducts" onClick={() => setMenuOpen(false)} className="block pl-4">Sell</Link>
            </div>
            <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      {/* Spacer under navbar to prevent content cutoff */}
      <div className="h-24 md:h-28"></div>
    </>
  );
};

export default Navbar;
