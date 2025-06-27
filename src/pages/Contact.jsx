 // src/pages/Contact.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen py-10 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center text-[#007f5f] mb-10">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Left Info Section */}
        <div className="bg-white p-6 rounded shadow">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <FaPhoneAlt className="text-[#007f5f] text-xl" />
              <h3 className="font-bold text-lg">Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p className="mt-2 font-semibold">Phone: +880-01989902813</p>
          </div>

          <hr className="my-6" />

          <div>
            <div className="flex items-center gap-4 mb-2">
              <FaEnvelope className="text-[#007f5f] text-xl" />
              <h3 className="font-bold text-lg">Write To Us</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="mt-2 text-sm">Emails: jumarketplace50@gmail.com</p>
            <p className="text-sm">support247@gmail.com</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white p-6 rounded shadow">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="border p-3 rounded col-span-1"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="border p-3 rounded col-span-1"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="border p-3 rounded col-span-1"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="border p-3 rounded col-span-3"
            ></textarea>
            <button
              type="submit"
              className="bg-[#006d5b] hover:bg-[#005547] transition text-white font-semibold py-3 rounded col-span-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Location Map */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center text-[#007f5f] mb-6">Our Location</h3>
        <div className="w-full h-[400px] rounded overflow-hidden shadow-lg">
          <iframe
            title="JU Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.3490122625094!2d90.2664126153668!3d23.88127829043501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e9a2f7c1b0a1%3A0x226de22381dc6a78!2sJahangirnagar%20University!5e0!3m2!1sen!2sbd!4v1665239870209!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
