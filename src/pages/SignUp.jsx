import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      navigate("/about");
    } else {
      alert("Please complete all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e0f7f1] transition-all duration-500">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md transform hover:scale-[1.01] transition-all">
        <h2 className="text-3xl font-bold text-center text-[#007f5f] mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-4 py-2 rounded mt-1 outline-none focus:ring-2 focus:ring-[#007f5f]"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-4 py-2 rounded mt-1 outline-none focus:ring-2 focus:ring-[#007f5f]"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border px-4 py-2 rounded mt-1 outline-none focus:ring-2 focus:ring-[#007f5f]"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#007f5f] text-white py-2 rounded hover:bg-[#005f3f] transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-[#007f5f] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
