 import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Dummy product data (replace with backend/API in future)
const productsData = {
  Books: [
    { id: 1, name: "C Programming", price: 150, image: "/images/book1.jpg" },
    { id: 2, name: "DSA by Narasimha", price: 250, image: "/images/book2.jpg" },
    { id: 3, name: "Java Made Easy", price: 300, image: "/images/book3.jpg" },
    { id: 4, name: "ML with Python", price: 450, image: "/images/book4.jpg" },
    { id: 5, name: "Competitive Guide", price: 180, image: "/images/book5.jpg" },
  ],
  Electronics: [
    { id: 6, name: "Laptop", price: 45000, image: "/images/laptop.jpg" },
    { id: 7, name: "Keyboard", price: 800, image: "/images/keyboard.jpg" },
    { id: 8, name: "Mouse", price: 300, image: "/images/mouse.jpg" },
    { id: 9, name: "Monitor", price: 7500, image: "/images/monitor.jpg" },
    { id: 10, name: "Speaker", price: 2200, image: "/images/speaker.jpg" },
  ],
  Medicine: [
    { id: 11, name: "Paracetamol", price: 20, image: "/images/para.jpg" },
    { id: 12, name: "Antacid", price: 50, image: "/images/antacid.jpg" },
    { id: 13, name: "Vicks", price: 30, image: "/images/vicks.jpg" },
    { id: 14, name: "Band Aid", price: 10, image: "/images/bandaid.jpg" },
    { id: 15, name: "Vitamin D", price: 80, image: "/images/vitamin.jpg" },
  ],
  "Beauty Products": [
    { id: 16, name: "Face Cream", price: 450, image: "/images/cream.jpg" },
    { id: 17, name: "Lip Balm", price: 100, image: "/images/lipbalm.jpg" },
    { id: 18, name: "Shampoo", price: 180, image: "/images/shampoo.jpg" },
    { id: 19, name: "Face Wash", price: 120, image: "/images/facewash.jpg" },
    { id: 20, name: "Kajal", price: 90, image: "/images/kajal.jpg" },
  ],
  "Grocery & Pet Items": [
    { id: 21, name: "Rice", price: 50, image: "/images/rice.jpg" },
    { id: 22, name: "Milk", price: 30, image: "/images/milk.jpg" },
    { id: 23, name: "Dog Food", price: 600, image: "/images/dogfood.jpg" },
    { id: 24, name: "Cat Litter", price: 350, image: "/images/catlitter.jpg" },
    { id: 25, name: "Eggs", price: 10, image: "/images/eggs.jpg" },
  ],
};

const BuyProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Books");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const filteredProducts = productsData[selectedCategory].filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product) => {
    localStorage.setItem("cartItem", JSON.stringify(product));
    navigate("/cart");
  };

  return (
    <div className="pt-24 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-center text-3xl font-bold text-green-700 mb-6">
        Buy Products
      </h1>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {Object.keys(productsData).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSearchTerm("");
            }}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat
                ? "bg-green-700 text-white"
                : "bg-white text-green-700 border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder={`Search in ${selectedCategory}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded shadow-sm"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 relative hover:shadow-xl transition-all"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-44 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-green-800 font-bold mb-2">${item.price}</p>

            {/* Heart and Eye */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button onClick={() => toggleFavorite(item.id)}>
                {favorites.includes(item.id) ? (
                  <FaHeart className="text-red-600" />
                ) : (
                  <FaRegHeart className="text-gray-500" />
                )}
              </button>
              <FaEye className="text-gray-500" />
            </div>

            {/* Add to Cart */}
            <button
              className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyProducts;
