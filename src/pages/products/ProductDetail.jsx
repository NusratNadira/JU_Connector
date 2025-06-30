import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return <div className="pt-28 text-center text-gray-600">No product selected.</div>;
  }

  const handleAddToCart = () => {
    navigate("/cart", {
      state: {
        product,
        quantity,
      },
    });
  };

  return (
    <div className="pt-28 px-6 lg:px-20 py-10 bg-[#f9fafb] min-h-screen">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-green-700 text-lg mb-1">{product.condition || "New"}</p>
          <p className="text-2xl text-red-600 font-bold mb-4">{product.price}</p>
          <p className="text-gray-700 mb-6">
            {product.description ||
              "High-quality product with best performance. Delivery and returns are available."}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700">Quantity:</span>
            <div className="flex items-center gap-2 border px-3 py-1 rounded">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="text-red-500"
              >
                <FaMinus />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-green-600"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 items-center mb-8">
            <button
              onClick={handleAddToCart}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Buy Now
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className="text-red-500 border border-red-300 rounded-full p-2 hover:bg-red-100"
            >
              <FaHeart className={`${liked ? "fill-current" : "stroke-current"}`} />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="space-y-4 text-gray-600">
            <div className="border p-4 rounded">
              <h3 className="font-semibold">🚚 Free Delivery</h3>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-semibold">🔄 Return Delivery</h3>
              <p>Free 30 Days Delivery Returns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
