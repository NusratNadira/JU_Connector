 import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaEye, FaCartPlus,FaRegHeart } from "react-icons/fa";


const categories = [
  "Books",
  "Medicine",
  "Electronics",
  "Beauty Products",
  "Grocery & Pet Items",
];

const allProducts = [
  {
    id: 1,
    name: "Physics Book",
    price: "$15",
    category: "Books",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Biology Book",
    price: "$18",
    category: "Books",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Math Guide",
    price: "$12",
    category: "Books",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "English Grammar",
    price: "$14",
    category: "Books",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "History Notes",
    price: "$10",
    category: "Books",
    image: "https://via.placeholder.com/150",
  },

  {
    id: 6,
    name: "Paracetamol",
    price: "$5",
    category: "Medicine",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Cough Syrup",
    price: "$7",
    category: "Medicine",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Bandage Roll",
    price: "$4",
    category: "Medicine",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "First Aid Kit",
    price: "$20",
    category: "Medicine",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Antiseptic Cream",
    price: "$6",
    category: "Medicine",
    image: "https://via.placeholder.com/150",
  },

  {
    id: 11,
    name: "Headphones",
    price: "$35",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Smart Watch",
    price: "$60",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "USB Drive",
    price: "$8",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Wireless Mouse",
    price: "$10",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Keyboard",
    price: "$20",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
  },

  {
    id: 16,
    name: "Lipstick Set",
    price: "$12",
    category: "Beauty Products",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "Face Cream",
    price: "$9",
    category: "Beauty Products",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Hair Oil",
    price: "$7",
    category: "Beauty Products",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Face Wash",
    price: "$6",
    category: "Beauty Products",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Nail Polish",
    price: "$5",
    category: "Beauty Products",
    image: "https://via.placeholder.com/150",
  },

  {
    id: 21,
    name: "Rice 5kg",
    price: "$12",
    category: "Grocery & Pet Items",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    name: "Milk",
    price: "$3",
    category: "Grocery & Pet Items",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    name: "Dog Food",
    price: "$25",
    category: "Grocery & Pet Items",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 24,
    name: "Sugar 1kg",
    price: "$2",
    category: "Grocery & Pet Items",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 25,
    name: "Toothpaste",
    price: "$1",
    category: "Grocery & Pet Items",
    image: "https://via.placeholder.com/150",
  },
];

const BuyProducts = () => {
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product) => {
    // Send product to cart via state
    navigate("/cart", { state: { product } });
  };


  const scrollToCategory = (cat) => {
    const element = document.getElementById(cat);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProducts = search
    ? allProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : allProducts;

  return (
    <div className="pt-24 px-6 bg-[#f9fafb] min-h-screen">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">Browse Products</h1>
        <p className="text-gray-600">Find what you're looking for easily</p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => scrollToCategory(cat)}
            className="bg-green-100 text-green-800 px-4 py-2 rounded-full hover:bg-green-200 transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search for a product..."
          className="border w-full max-w-md px-4 py-2 rounded-md shadow-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products by Category */}
      {categories.map((cat) => {
        const productsInCat = filteredProducts.filter((p) => p.category === cat);
        if (productsInCat.length === 0) return null;
        return (
          <div key={cat} id={cat} className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">{cat}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {productsInCat.map((product) => (
                <div
                  key={product.id}
                  className="relative bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-green-700 font-bold">{product.price}</p>

                  {/* Icons */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <span onClick={() => toggleWishlist(product.id)} className="cursor-pointer text-red-500">
                      {wishlist.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
                    </span>
                    <span className="cursor-pointer text-gray-500">
                      <FaEye />
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-3 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BuyProducts;
