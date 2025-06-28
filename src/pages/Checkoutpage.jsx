// src/pages/CheckoutPage.jsx

import React from "react";
import { useLocation, Link } from "react-router-dom";

const Checkoutpage = () => {
const { state } = useLocation();
const cartItems = state?.cartItems || [];
const total = state?.total || 0;

return (
<div className="pt-24 px-6 bg-[#f9fafb] min-h-screen">
<div className="max-w-6xl mx-auto bg-white p-8 shadow-lg rounded-md grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Billing Form */}
<div>
<h2 className="text-2xl font-bold text-green-800 mb-6">Billing Details</h2>
<form className="space-y-4">
<input type="text" placeholder="First Name*" required className="w-full border px-4 py-2 rounded" />
<input type="text" placeholder="Company Name" className="w-full border px-4 py-2 rounded" />
<input type="text" placeholder="Street Address*" required className="w-full border px-4 py-2 rounded" />
<input type="text" placeholder="Apartment, floor, etc. (optional)" className="w-full border px-4 py-2 rounded" />
<input type="text" placeholder="Town/City*" required className="w-full border px-4 py-2 rounded" />
<input type="text" placeholder="Phone Number*" required className="w-full border px-4 py-2 rounded" />
<input type="email" placeholder="Email Address*" required className="w-full border px-4 py-2 rounded" />
<label className="flex items-center gap-2">
<input type="checkbox" className="accent-green-600" />
<span className="text-sm">Save this information for faster check-out next time</span>
</label>
</form>
</div>

    {/* Order Summary */}
    <div className="bg-gray-50 p-6 rounded-md shadow-sm">
      <h3 className="text-xl font-bold text-green-800 mb-6">Your Order</h3>
      <div className="space-y-3 text-gray-700 mb-6">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</span>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No items in cart</div>
        )}

        <hr />
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-green-700 text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Payment Method</label>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" className="accent-green-600" />
            <span>Bank</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" className="accent-green-600" />
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>

      {/* Coupon Code */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Coupon Code</label>
        <div className="flex">
          <input type="text" className="flex-grow border px-4 py-2 rounded-l" placeholder="Enter code" />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700 transition">Apply</button>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition text-lg">
        Place Order
      </button>
    </div>
  </div>
  <div className="text-center mt-8">
    <Link to="/products/BuyProducts" className="text-green-700 underline hover:text-green-900 transition">
      Return to Shop
    </Link>
  </div>
</div>
);
};

export default Checkoutpage;