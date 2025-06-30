import React from "react";
import aboutImg from "../assets/about-img.png";
import {
  FaStore,
  FaDollarSign,
  FaUsers,
  FaShoppingBag,
  FaTruck,
  FaHeadphones,
  FaCheckCircle,
} from "react-icons/fa";

const team = [
  {
    name: "Nadira Sultana",
    position: "Founder & Chairman",
    img: "/src/assets/nadira'simage.jpg",
  },
  {
    name: "Sharmin Akter",
    position: "Managing Director",
    img: "/src/assets/shar.png",
  },
  {
    name: "Abdullah Al Hossain",
    position: "Product Designer",
    img: "/src/assets/hossain.png",
  },
  {
    name: "Rana Hamid",
    position: "Marketing Lead",
    img: "/src/assets/rana.png",
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#e6f7f2] to-[#f7f7f3] text-[#003c2f] py-12 px-4 md:px-20">
      
      {/* Our Story */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#007f5f] text-center md:text-left">Our Story</h2>
          <p className="text-base leading-relaxed text-justify text-gray-700">
            Launched in 2025, <strong>JU Marketplace</strong> is a student-focused marketplace built for the community of Jahangirnagar University. From second-hand books to essential services, we connect buyers and sellers in a secure and trusted environment. With over 10,000+ users, we help students and faculty buy, sell, and collaborate with ease.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="About JU Marketplace"
            className="w-full rounded-xl shadow-xl transition duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { icon: <FaStore />, title: "10.5k+", subtitle: "Sellers Active" },
          { icon: <FaDollarSign />, title: "33k+", subtitle: "Monthly Sales" },
          { icon: <FaUsers />, title: "45.5k+", subtitle: "Active Buyers" },
          { icon: <FaShoppingBag />, title: "25k+", subtitle: "Annual Orders" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 shadow hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <div className="text-3xl mb-3 text-[#007f5f]">{stat.icon}</div>
            <h3 className="text-2xl font-bold">{stat.title}</h3>
            <p className="text-gray-600">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Meet the Team */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#007f5f]">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto mb-4 rounded-full object-cover"
              />
              <h4 className="text-lg font-bold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: <FaTruck />,
            title: "Free & Fast Delivery",
            description: "Free delivery for all orders over 140৳",
          },
          {
            icon: <FaHeadphones />,
            title: "24/7 Customer Support",
            description: "Friendly support anytime you need",
          },
          {
            icon: <FaCheckCircle />,
            title: "Money Back Guarantee",
            description: "Refund within 30 days of purchase",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-3xl text-[#007f5f] mb-3">{feature.icon}</div>
            <h4 className="font-semibold text-lg">{feature.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
