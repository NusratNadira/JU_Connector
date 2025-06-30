import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState("");

  if (!product) {
    return (
      <div className="pt-28 text-center text-gray-600 text-lg">
        Your cart is empty. Go{" "}
        <span
          onClick={() => navigate("/")}
          className="text-green-600 underline cursor-pointer"
        >
          back to shop
        </span>
        .
      </div>
    );
  }

  const price = parseFloat(product.price.replace("৳", ""));
  const subtotal = price * quantity;

  const handleCheckout = () => {
    navigate("/checkoutpage", {
      state: {
        cartItems: [{ ...product, quantity }],
        total: subtotal,
      },
    });
  };

  return (
    <div className="pt-28 px-6 pb-16 bg-[#f9fafb] min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-10 text-center">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="pb-3">Product</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-green-900 font-medium border-b py-4">
                <td className="py-4">{product.name}</td>
                <td>৳{price}</td>
                <td>
                  <input
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-green-300 rounded px-3 py-1 w-16 text-center"
                  />
                </td>
                <td>৳{subtotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          {/* Bottom Buttons and Coupon */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              onClick={() => navigate("/products/BuyProducts")}
              className="bg-green-100 text-green-700 px-6 py-2 rounded hover:bg-green-200 transition"
            >
              Return to Shop
            </button>

            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Update Cart
            </button>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border px-4 py-2 rounded"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Cart Total</h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>৳{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-green-800 text-lg">
              <span>Total:</span>
              <span>৳{subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
