// src/pages/Community.jsx
import React from "react";
import { FaFacebookF, FaWhatsapp, FaUserGraduate, FaComments } from "react-icons/fa";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {["Sadia Rahman", "Tariq Islam", "Junaid Kabir", "Faria Noor"].map((name) => (
            <div className="bg-[#f7f7f7] p-4 rounded hover:shadow-lg transition">
              <FaUserGraduate className="text-[#007f5f] text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">{name}</h4>
              <p className="text-xs text-gray-500">JU Alumni Mentor</p>
            </div>
          ))}
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
            <p className="text-sm text-gray-600 italic">[Chat interface will be integrated here using real-time AI API]</p>
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
