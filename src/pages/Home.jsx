import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  // Unique product images
  const bestSelling = [
    { name: "Medicines", price: "250 Taka", img: "/src/assets/firstaid.png" },
    { name: "Wireless Mouse", price: "200 Taka", img: "/src/assets/mouse.png" },
    { name: "Headphones", price: "450 Taka", img: "/src/assets/headphn.png" },
    { name: "Smart Watch", price: "1K Taka", img: "/src/assets/watch.png" },
  ];

  const newArrivals = [
    { name: "Bluetooth Speaker", price: "850 Taka", img: "/src/assets/bluetooth.png" },
    { name: "Fitness Band", price: "600 Taka", img: "/src/assets/fitness.png" },
    { name: "Portable Charger", price: "400 Taka", img: "/src/assets/charger.png" },
    { name: "LED Lamp", price: "250 Taka", img: "/src/assets/lamp.png" },
  ];

  return (
    <div className="px-4 md:px-12 py-6">
      {/* Category Sidebar & Welcome */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-4 text-center text-xl text-[#007f5f]">Categories</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Clothing</li>
            <li>Electronics</li>
            <li>Daily Essentials</li>
            <li>Machines</li>
            <li>Sports & Outdoor</li>
            <li>Groceries & Pets</li>
            <li>Transportation</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        <div
          className="md:w-3/4 bg-white p-6 rounded shadow flex flex-col justify-center items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl"
          style={{
            backgroundImage: "url('/src/assets/j.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl font-bold mb-2 text-[#007f5f]">Welcome to JU Marketplace</h1>
          <p className="mb-4 text-gray-700 bg-white/70 px-4 py-2 rounded">Buy, Sell, Connect and Explore services within the JU community</p>
          <button
            onClick={handleExplore}
            className="bg-[#007f5f] text-white px-4 py-2 rounded hover:bg-[#005f3f] transition duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* What You Can Do Section */}
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#007f5f]">What You Can Do Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Buy & Sell",
              desc: "Find second-hand books, electronics, and accessories. Post your own items for sale!",
            },
            {
              title: "Services & Jobs",
              desc: "Offer or hire for freelancing jobs like tutoring, design, coding, and more.",
            },
            {
              title: "Community",
              desc: "Find friends and alumni in discussions with the JU student community.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white p-6 h-48 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Browse By Category */}
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#007f5f]">Browse By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {['Electronics', 'Computer', 'Regular Products', 'Clothes', 'Headphones', 'Gaming'].map((cat, idx) => (
            <div key={idx} className="bg-white p-4 text-center shadow rounded hover:shadow-lg transition">{cat}</div>
          ))}
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#007f5f]">Best Selling Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSelling.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow text-center hover:shadow-lg transition">
              <img src={item.img} alt={item.name} className="mx-auto mb-2 h-40 object-cover" />
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-red-500">{item.price}</p>
              <button className="bg-[#007f5f] text-white px-3 py-1 mt-2 rounded hover:bg-[#005f3f] transition">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Today */}
      <div className="my-10 bg-[#003c2f] text-white p-8 rounded text-center transition-all duration-300 hover:bg-[#00261f]">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6">Sign up now to start your journey with JU Marketplace</p>
        <button
          onClick={handleRegister}
          className="bg-white text-[#003c2f] px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
          Register Now
        </button>
      </div>

      {/* New Arrival Products */}
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#007f5f]">New Arrival</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newArrivals.map((item, idx) => (
            <div key={idx} className="bg-white rounded overflow-hidden shadow hover:shadow-lg transition">
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      {/* Features Section */}
<div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Feature 1 */}
  <div className="flex flex-col items-center bg-white p-6 shadow-md rounded transition hover:shadow-xl">
    <img
      src="/src/assets/del.png"
      alt="Free and Fast Delivery"
      className="w-12 h-12 mb-3"
    />
    <h3 className="font-bold text-lg text-[#007f5f] mb-2">Free & Fast Delivery</h3>
    <p className="text-center text-gray-600 text-sm">
      Enjoy free delivery on all orders above 140৳ within campus areas.
    </p>
  </div>

  {/* Feature 2 */}
  <div className="flex flex-col items-center bg-white p-6 shadow-md rounded transition hover:shadow-xl">
    <img
      src="/src/assets/247.png"
      alt="24/7 Customer Support"
      className="w-12 h-12 mb-3"
    />
    <h3 className="font-bold text-lg text-[#007f5f] mb-2">24/7 Customer Service</h3>
    <p className="text-center text-gray-600 text-sm">
      Friendly and fast help is always available for your orders and listings.
    </p>
  </div>

  {/* Feature 3 */}
  <div className="flex flex-col items-center bg-white p-6 shadow-md rounded transition hover:shadow-xl">
    <img
      src="/src/assets/mb.png"
      alt="Money Back Guarantee"
      className="w-12 h-12 mb-3"
    />
    <h3 className="font-bold text-lg text-[#007f5f] mb-2">Money Back Guarantee</h3>
    <p className="text-center text-gray-600 text-sm">
      Not satisfied? We offer refunds within 30 days of purchase for verified orders.
    </p>
  </div>
</div>

    </div>
  );
}

export default Home;
