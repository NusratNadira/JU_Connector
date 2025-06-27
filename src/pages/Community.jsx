 // src/pages/Community.jsx
import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaUserGraduate,
  FaComments,
  FaBriefcase,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaBook,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const alumniData = [
  {
    name: "Sadia Rahman",
    email: "sadia@alumni.juniv.edu",
    facebook: "https://facebook.com/sadia.rahman",
    linkedin: "https://linkedin.com/in/sadiarahman",
  },
  {
    name: "Tariq Islam",
    email: "tariq@alumni.juniv.edu",
    facebook: "https://facebook.com/tariq.islam",
    linkedin: "https://linkedin.com/in/tariqislam",
  },
  {
    name: "Junaid Kabir",
    email: "junaid@alumni.juniv.edu",
    facebook: "https://facebook.com/junaid.kabir",
    linkedin: "https://linkedin.com/in/junaidkabir",
  },
  {
    name: "Faria Noor",
    email: "faria@alumni.juniv.edu",
    facebook: "https://facebook.com/faria.noor",
    linkedin: "https://linkedin.com/in/farianoor",
  },
];

const Community = () => {
  return (
    <div className="bg-[#f0fdf4] min-h-screen px-4 py-10 md:px-20">
      <h2 className="text-4xl font-bold text-center text-[#007f5f] mb-10">JU Community</h2>

      {/* Social Media Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded shadow flex flex-col items-center text-center">
          <FaFacebookF className="text-blue-600 text-3xl mb-3" />
          <h3 className="text-xl font-semibold">JU Official Facebook Group</h3>
          <p className="text-sm mt-2">Join our Facebook group to connect with fellow students, post updates, or ask for help.</p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Join Facebook Group
          </a>
        </div>

        <div className="bg-white p-6 rounded shadow flex flex-col items-center text-center">
          <FaWhatsapp className="text-green-600 text-3xl mb-3" />
          <h3 className="text-xl font-semibold">JU WhatsApp Community</h3>
          <p className="text-sm mt-2">Stay updated in real-time with WhatsApp notifications on functions and exams.</p>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          >
            Join WhatsApp Group
          </a>
        </div>
      </div>

      {/* Alumni Panel */}
      <div className="bg-white p-6 rounded shadow mb-12">
        <h3 className="text-2xl font-bold text-center text-[#007f5f] mb-4">Alumni Panel</h3>
        <p className="text-center text-sm mb-6">
          Connect with experienced alumni for guidance on academic and career paths. Ask questions and get answers directly from mentors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {alumniData.map((alum, index) => (
            <div key={index} className="bg-[#f7f7f7] p-4 rounded hover:shadow-lg transition">
              <FaUserGraduate className="text-[#007f5f] text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">{alum.name}</h4>
              <p className="text-xs text-gray-500 mb-2">JU Alumni Mentor</p>
              <div className="flex justify-center gap-2 text-[#007f5f]">
                <a href={`mailto:${alum.email}`}><FaEnvelope /></a>
                <a href={alum.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href={alum.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunities Section */}
      <div className="bg-white p-6 rounded shadow mb-12">
        <h3 className="text-2xl font-bold text-center text-[#007f5f] mb-4">Opportunities & Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          <Link to="/tuition-offers" className="bg-[#e6fff5] p-4 rounded shadow hover:shadow-lg transition">
            <FaChalkboardTeacher className="text-[#007f5f] text-2xl mb-2" />
            <h4 className="font-semibold">Tuition Offers</h4>
            <p className="text-sm">Explore or post tuition opportunities with full details.</p>
          </Link>
          <Link to="/parttime-jobs" className="bg-[#e6fff5] p-4 rounded shadow hover:shadow-lg transition">
            <FaBriefcase className="text-[#007f5f] text-2xl mb-2" />
            <h4 className="font-semibold">Part-Time Jobs</h4>
            <p className="text-sm">Find or post jobs with salary, department, and location.</p>
          </Link>
          <Link to="/freelancing" className="bg-[#e6fff5] p-4 rounded shadow hover:shadow-lg transition">
            <FaHandsHelping className="text-[#007f5f] text-2xl mb-2" />
            <h4 className="font-semibold">Freelancing Support</h4>
            <p className="text-sm">Find or offer freelance gigs based on department or skills.</p>
          </Link>
          <Link to="/blind-assistance" className="bg-[#e6fff5] p-4 rounded shadow hover:shadow-lg transition">
            <FaBook className="text-[#007f5f] text-2xl mb-2" />
            <h4 className="font-semibold">Writer for Blind Students</h4>
            <p className="text-sm">Assist or request writers for visually impaired students.</p>
          </Link>
          <Link to="/project-help" className="bg-[#e6fff5] p-4 rounded shadow hover:shadow-lg transition">
            <FaComments className="text-[#007f5f] text-2xl mb-2" />
            <h4 className="font-semibold">Project & Assignment Help</h4>
            <p className="text-sm">Get help or collaborate on academic projects and tasks.</p>
          </Link>
        </div>
      </div>

      {/* AI Chatbot Section */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold text-center text-[#007f5f] mb-4">AI Chatbot Assistant</h3>
        <p className="text-center text-sm mb-6">
          Ask any question about upcoming events, exams, or campus updates. The chatbot will respond instantly using real-time data.
        </p>

        <div className="w-full md:w-2/3 mx-auto">
          <div className="border border-[#007f5f] rounded p-4 h-96 overflow-y-auto bg-gray-50">
            <p className="text-sm text-gray-600 italic">[Chatbot UI will connect with a JU notice API or integrated chatbot script]</p>
          </div>
          <input
            type="text"
            placeholder="Ask the AI Assistant..."
            className="mt-4 border p-3 w-full rounded focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
