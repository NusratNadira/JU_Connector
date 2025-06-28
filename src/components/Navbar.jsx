import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#f7f7f2] shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-green-800 font-bold text-2xl">
          <Link to="/">JU Marketplace</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-green-900">
          <li>
            <Link to="/" className="hover:text-green-600 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600 transition">About</Link>
          </li>

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setProductDropdown(true)}
            onMouseLeave={() => setProductDropdown(false)}
          >
            <div className="flex items-center cursor-pointer hover:text-green-600 transition">
              Products <FaChevronDown className="ml-1 text-sm" />
            </div>
            {productDropdown && (
              <ul className="absolute bg-white shadow-md top-8 left-0 w-40 z-50 rounded">
                <li>
                  <Link
                    to="/products/BuyProducts"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Buy Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/SellProducts"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Sell Products
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/community" className="hover:text-green-600 transition">
              Community
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5 text-green-800 text-xl">
          <FaSearch className="hover:text-green-600 cursor-pointer" />
          <FaShoppingCart
            className="hover:text-green-600 cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <FaHeart className="hover:text-green-600 cursor-pointer" />
          <FaUser className="hover:text-green-600 cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
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
        <div className="md:hidden bg-white px-4 py-6 space-y-4 text-green-800">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <div>
            <p className="font-semibold">Products</p>
            <Link
              to="/products/BuyProducts"
              onClick={() => setMenuOpen(false)}
              className="block pl-4"
            >
              Buy
            </Link>
            <Link
              to="/products/SellProducts"
              onClick={() => setMenuOpen(false)}
              className="block pl-4"
            >
              Sell
            </Link>
          </div>
          <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
