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
    name: "Fundamental Of Physics",
    price: "৳180",
    category: "Books",
    condition: "Second Hand",
    image: "/src/assets/physics.png",
  },
  {
    id: 2,
    name: "Introduction to Computer",
    price: "৳200",
    category: "Books",
    condition: "Second Hand",
    image: "/src/assets/computer.png",
  },
  {
    id: 3,
    name: "Numerical Analysis",
    price: "৳250",
    category: "Books",
    condition: "Second Hand",
    image: "/src/assets/numerical.png",
  },
  {
    id: 4,
    name: "Data Communication",
    price: "৳1400",
    category: "Books",
    condition: "Second Hand",
    image: "/src/assets/dc.png",
  },
  {
    id: 5,
    name: "History Notes",
    price: "৳230",
    category: "Books",
    condition: "Second Hand",
    image: "/src/assets/physics.png",
  },

  {
    id: 6,
    name: "Paracetamol",
    price: "৳55",
    category: "Medicine",
    condition: "New",
    image: "/src/assets/napa.png",
  },
  {
    id: 7,
    name: "Cough Syrup",
    price: "৳80",
    category: "Medicine",
    condition: "New",
    image: "/src/assets/syrup.png",
  },
  {
    id: 8,
    name: "Bandage Roll",
    price: "৳200",
    category: "Medicine",
    condition: "New",
    image: "/src/assets/bandage.png",
  },
  {
    id: 9,
    name: "First Aid Kit",
    price: "৳300",
    category: "Medicine",
    condition: "New",
    image: "/src/assets/firstaid.png",
  },
  {
    id: 10,
    name: "Antiseptic Cream",
    price: "৳120",
    category: "Medicine",
    condition: "New",
    image: "/src/assets/anticeptic.png",
  },

  {
    id: 11,
    name: "Headphones",
    price: "৳600",
    category: "Electronics",
    condition: "Second Hand",
    image: "/src/assets/headphn.png",
  },
  {
    id: 12,
    name: "Smart Watch",
    price: "৳700",
    category: "Electronics",
    condition: "Second Hand",
    image: "/src/assets/watch.png",
  },
  {
    id: 13,
    name: "USB Drive",
    price: "৳400",
    category: "Electronics",
    condition: "Second Hand",
    image: "/src/assets/pendrive.png",
  },
  {
    id: 14,
    name: "Wireless Mouse",
    price: "৳400",
    category: "Electronics",
    condition: "Second Hand",
    image: "/src/assets/mouse.png",
  },
  {
    id: 15,
    name: "Keyboard",
    price: "৳800",
    category: "Electronics",
    condition: "New",
    image: "/src/assets/keyboard.png",
  },

  {
    id: 16,
    name: "Lipstick Set",
    price: "৳1200",
    category: "Beauty Products",
    condition: "New",
    image: "/src/assets/lipstick.png",
  },
  {
    id: 17,
    name: "Face Cream",
    price: "৳900",
    category: "Beauty Products",
    condition: "Second Hand",
    image: "/src/assets/cream.png",
  },
  {
    id: 18,
    name: "Hair Oil",
    price: "৳350",
    category: "Beauty Products",
    condition: "New",
    image: "/src/assets/hairoil.png",
  },
  {
    id: 19,
    name: "Face Wash",
    price: "৳600",
    category: "Beauty Products",
    condition: "New",
    image: "/src/assets/fcw.png",
  },
  {
    id: 20,
    name: "Nail Polish",
    price: "৳100",
    category: "Beauty Products",
    condition: "Second Hand",
    image: "/src/assets/nailpolis.png",
  },

  {
    id: 21,
    name: "Rice 5kg",
    price: "৳500",
    category: "Grocery & Pet Items",
    condition: "New",
    image: "/src/assets/rice.png",
  },
  {
    id: 22,
    name: "Milk",
    price: "৳100",
    category: "Grocery & Pet Items",
    condition: "New",
    image: "/src/assets/milk.png",
  },
  {
    id: 23,
    name: "Dog Food",
    price: "৳250",
    category: "Grocery & Pet Items",
    condition: "New",
    image: "/src/assets/dogfood.png",
  },
  {
    id: 24,
    name: "Sugar 1kg",
    price: "৳120",
    category: "Grocery & Pet Items",
    condition: "New",
    image: "/src/assets/suger.png",
  },
  {
    id: 25,
    name: "Toothpaste",
    price: "৳80",
    category: "Grocery & Pet Items",
    condition: "New",
    image: "/src/assets/paste.png",
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
                   onClick={() => navigate("/product-detail", { state: { product } })}
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
