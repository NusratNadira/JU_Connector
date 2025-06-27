 import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaChalkboardTeacher,
  FaBriefcase,
  FaLaptopCode,
  FaBlind,
  FaClipboardList,
  FaPaintBrush,
  FaWhatsapp,
  FaUsers,
} from "react-icons/fa";

const alumni = [
  {
    name: "Tanvir Ahsan",
    role: "Software Engineer at Google",
    fb: "https://facebook.com/tanvir",
    email: "tanvir@gmail.com",
    linkedin: "https://linkedin.com/in/tanvir",
  },
  {
    name: "Mahmuda Sultana",
    role: "Data Scientist at Meta",
    fb: "https://facebook.com/mahmuda",
    email: "mahmuda@gmail.com",
    linkedin: "https://linkedin.com/in/mahmuda",
  },
  {
    name: "Asif Rahman",
    role: "Backend Developer at Amazon",
    fb: "https://facebook.com/asif",
    email: "asif@gmail.com",
    linkedin: "https://linkedin.com/in/asif",
  },
  {
    name: "Jarin Alam",
    role: "UX/UI Designer at Adobe",
    fb: "https://facebook.com/jarin",
    email: "jarin@gmail.com",
    linkedin: "https://linkedin.com/in/jarin",
  },
];

const OpportunityCard = ({ icon, title, path }) => (
  <Link
    to={path}
    className="group bg-white p-6 rounded-lg border border-gray-200 shadow hover:shadow-xl transition transform hover:scale-105"
  >
    <div className="text-4xl text-[#007f5f] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-[#007f5f] group-hover:text-green-800">{title}</h3>
    <p className="text-gray-500 mt-2 text-sm">Tap to explore more opportunities</p>
  </Link>
);

const Community = () => {
  return (
    <div className="px-5 py-10 bg-[#f3fdf8] min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#007f5f] mb-10">JU Community </h1>

      {/* Social Groups Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#007f5f] mb-4 text-center">JU Social Community Groups</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href="https://facebook.com/groups/juofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#f0f0f0] px-5 py-3 rounded-lg shadow hover:shadow-md hover:bg-[#007f5f]/10 transition"
          >
            <FaFacebook className="text-[#3b5998] text-3xl" />
            <span className="font-semibold text-[#007f5f]">JU Official Facebook Group</span>
          </a>
          <a
            href="https://chat.whatsapp.com/jucommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#f0f0f0] px-5 py-3 rounded-lg shadow hover:shadow-md hover:bg-[#007f5f]/10 transition"
          >
            <FaWhatsapp className="text-green-500 text-3xl" />
            <span className="font-semibold text-[#007f5f]">JU WhatsApp Group</span>
          </a>
        </div>
      </div>

      {/* Alumni Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-[#007f5f] mb-6">Alumni Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="bg-[#f9fdfb] p-6 rounded-lg shadow relative group overflow-hidden hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#007f5f]">{person.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{person.role}</p>
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 group-hover:top-4 transition-all duration-500 flex space-x-3 bg-[#e1f8ef] p-2 rounded-full shadow">
                <a href={person.fb} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href={`mailto:${person.email}`}><FaEnvelope /></a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunity Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-10 max-w-6xl mx-auto">
        <h2 className="text-2xl text-center font-semibold mb-6 text-[#007f5f]">Student Supports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <OpportunityCard icon={<FaChalkboardTeacher />} title="Tuition Offers" path="/opportunities/TuitionOffers" />
          <OpportunityCard icon={<FaBriefcase />} title="Part-Time Jobs" path="/opportunities/PartTimeJobs" />
          <OpportunityCard icon={<FaLaptopCode />} title="Freelancing" path="/opportunities/Freelancing" />
          <OpportunityCard icon={<FaBlind />} title="Sight-loss Helper" path="/opportunities/BlindSupport" />
          <OpportunityCard icon={<FaClipboardList />} title="Project Assistant" path="/opportunities/ProjectHelp" />
          <OpportunityCard icon={<FaPaintBrush />} title="Event Stylist" path="/opportunities/Designer" />
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#007f5f] mb-3 text-center">Ask JU AI Chatbot</h2>
        <p className="text-gray-500 mb-4 text-center">Get the latest updates on events, functions, and university notices</p>
        <div className="bg-[#f9fdfb] p-5 rounded-md shadow">
          <input
            type="text"
            placeholder="Ask something about JU..."
            className="w-full border border-gray-300 p-3 rounded mb-3"
          />
          <button className="bg-[#007f5f] text-white px-5 py-2 rounded hover:bg-green-700 transition w-full">
            Ask the Bot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
