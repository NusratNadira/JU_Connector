 // src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f3f3f3] text-[#003c2f] py-6 px-4 md:px-16 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* JU Shop Section */}
        <div>
          <h2 className="font-bold text-lg mb-2 text-[#007f5f]">JU Marketplace</h2>
          <p className="leading-relaxed">Jahangirnagar University,<br />Savar, Dhaka</p>
          <p className="mt-2">📞 +880-01989902813</p>
          <p >📧 20213654522nadira@juniv.edu</p>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="font-bold text-lg mb-2 text-[#007f5f]">Support</h2>
          <ul className="space-y-1">
            <li><Link to="/faq" className="hover:text-[#006d5b]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[#006d5b]">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-[#006d5b]">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-[#006d5b]">Wishlist</Link></li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="font-bold text-lg mb-2 text-[#007f5f]">Account</h2>
          <ul className="space-y-1">
            <li><Link to="/account" className="hover:text-[#006d5b]">My Account</Link></li>
            <li><Link to="/login" className="hover:text-[#006d5b]">Login / Register</Link></li>
            <li><Link to="/privacy" className="hover:text-[#006d5b]">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[#006d5b]">Terms Of Use</Link></li>
          </ul>
        </div>

        {/* Quick Link & App Download */}
        <div>
          <h2 className="font-bold text-lg mb-2 text-[#007f5f]">Quick Link</h2>
          <ul className="space-y-1">
            <li><Link to="/shop" className="hover:text-[#006d5b]">Shop</Link></li>
            <li><Link to="/save-offer" className="hover:text-[#006d5b]">Save $3 - New App Users</Link></li>
            <li><Link to="/first-order-offer" className="hover:text-[#006d5b]">10% Off First Order</Link></li>
          </ul>
          <div className="mt-4">
            
            <form className="flex flex-col space-y-2">
             
              <button type="submit" className="bg-[#006d5b] text-white px-4 py-2 rounded hover:bg-[#005547]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-300 pt-4 text-xs">
       Cpoyright© Group-09 — All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
