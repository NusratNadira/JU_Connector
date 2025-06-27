 import React from "react";

function Home() {
  return (
    <div className="px-4 md:px-12 py-6">
      {/* Category Sidebar & Welcome */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-4 text-center text-xl text-[#007f5f]">Categories</h2>
          <ul className="space-y-2">
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
        <div className="md:w-3/4 bg-white p-6 rounded shadow flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#007f5f]">Welcome to JU Marketplace</h1>
          <p className="mb-4 text-gray-700">Buy, Sell, Connect and Explore services within the JU community</p>
          <button className="bg-[#007f5f] text-white px-4 py-2 rounded hover:bg-[#005f3f]">Explore Now</button>
        </div>
      </div>

      {/* What You Will Do */}
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#007f5f]">What You Can Do Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative bg-white p-6 h-48 rounded-lg shadow-md group overflow-hidden hover:shadow-xl transition duration-300">
            <div className="shine-effect absolute inset-0 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Buy & Sell</h3>
              <p className="text-gray-600 text-sm">Find second-hand books, electronics, and accessories. Post your own items for sale!</p>
            </div>
          </div>
          <div className="relative bg-white p-6 h-48 rounded-lg shadow-md group overflow-hidden hover:shadow-xl transition duration-300">
            <div className="shine-effect absolute inset-0 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Services & Jobs</h3>
              <p className="text-gray-600 text-sm">Offer or hire for freelancing jobs like tutoring, design, coding, and more.</p>
            </div>
          </div>
          <div className="relative bg-white p-6 h-48 rounded-lg shadow-md group overflow-hidden hover:shadow-xl transition duration-300">
            <div className="shine-effect absolute inset-0 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Find friends and alumni in discussions with the JU student community.</p>
            </div>
          </div>
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
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow text-center">
              <img src="https://via.placeholder.com/150" alt="product" className="mx-auto mb-2" />
              <h3 className="font-bold">Product {idx + 1}</h3>
              <p className="text-red-500">$20.{idx}9</p>
              <button className="bg-[#007f5f] text-white px-3 py-1 mt-2 rounded hover:bg-[#005f3f]">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Today Section */}
      <div className="my-10 bg-[#003c2f] text-white p-8 rounded text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6">Sign up now to start your journey with JU Marketplace</p>
        <button className="bg-white text-[#003c2f] px-4 py-2 rounded font-semibold">Register Now</button>
      </div>

      {/* New Arrival Products */}
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#007f5f]">New Arrival</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="bg-white rounded overflow-hidden shadow hover:shadow-lg">
              <img src="https://via.placeholder.com/200x200" alt="new" className="w-full" />
              <div className="p-3">
                <h3 className="font-bold">Item {idx + 1}</h3>
                <p className="text-gray-600">$10.{idx}5</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          "Free and Fast Delivery",
          "24/7 Customer Service",
          "Money Back Guarantee",
        ].map((feature, idx) => (
          <div key={idx} className="text-center bg-white p-6 shadow rounded">
            <img
              src={`https://via.placeholder.com/60x60?text=Logo+${idx + 1}`}
              alt={`logo-${idx}`}
              className="mx-auto mb-3"
            />
            <h3 className="font-bold text-lg mb-2">{feature}</h3>
            <p className="text-gray-600 text-sm">Service for all university students</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;