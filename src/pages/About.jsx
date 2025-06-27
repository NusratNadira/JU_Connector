 import React from "react";
import aboutImg from "../assets/about-img.png"; // Placeholder image
import { FaStore, FaDollarSign, FaUsers, FaShoppingBag, FaTruck, FaHeadphones, FaCheckCircle } from "react-icons/fa";

const team = [
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Natalie Portman",
    position: "Marketing Lead",
    img: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#e6f7f2] to-[#f7f7f3] text-[#003c2f] py-10 px-4 md:px-20">
      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 text-center md:text-left text-[#007f5f]">Our Story</h2>
          <p className="text-base leading-relaxed text-justify">
            Launched in 2025, JU Marketplace is a leading student-centric marketplace at Jahangirnagar University.
            From second-hand textbooks to local services, our platform connects students in a vibrant community
            of buying, selling, and support. We now support 10,000+ students and faculty members, making education and
            daily campus life easier and more affordable.
          </p>
        </div>
        <img
          src={aboutImg}
          alt="about"
          className="md:w-1/2 rounded-xl shadow-2xl"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
        {[
          { icon: <FaStore />, title: "10.5k", subtitle: "Sellers active" },
          { icon: <FaDollarSign />, title: "33k", subtitle: "Monthly Product Sales" },
          { icon: <FaUsers />, title: "45.5k", subtitle: "Active Buyers" },
          { icon: <FaShoppingBag />, title: "25k", subtitle: "Annual Orders" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded p-4 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-[#e6f7f2] hover:border-t-4 hover:border-[#007f5f]"
          >
            <div className="text-xl mb-2 text-[#007f5f]">{stat.icon}</div>
            <h3 className="text-2xl font-bold">{stat.title}</h3>
            <p className="text-sm">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#007f5f]">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded shadow p-4 text-center hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section (smaller size) */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm">
        <div className="flex flex-col items-center bg-white p-3 rounded shadow hover:shadow-lg transition">
          <FaTruck className="text-xl text-[#007f5f] mb-2" />
          <h4 className="font-semibold">Free & Fast Delivery</h4>
          <p>Free delivery for all orders over 140৳</p>
        </div>
        <div className="flex flex-col items-center bg-white p-3 rounded shadow hover:shadow-lg transition">
          <FaHeadphones className="text-xl text-[#007f5f] mb-2" />
          <h4 className="font-semibold">24/7 Customer Service</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center bg-white p-3 rounded shadow hover:shadow-lg transition">
          <FaCheckCircle className="text-xl text-[#007f5f] mb-2" />
          <h4 className="font-semibold">Money Back Guarantee</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default About;