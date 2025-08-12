import React, { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row min-h-[350px] max-w-full"
    >
      {/* Left Side: Contact Info */}
      <div
        className="flex-1 shadow-lg pl-6 pr-26 py-16 flex flex-col justify-start text-white space-y-10"
        style={{
          background: "linear-gradient(135deg, #3a3d42, #2d2f33)",
        }}
      >
        <h2 className="text-4xl font-bold">Contact Information</h2>

        <div className="space-y-8 text-xl">
          <div className="flex items-center space-x-4">
            <Mail className="w-7 h-7 text-blue-400" />
            <a
              href="mailto:shihabuddin2469@gmail.com"
              className="hover:underline"
            >
              shihabuddin2469@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="w-7 h-7 text-green-400" />
            <a href="tel:01786707639" className="hover:underline">
              01786707639
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <MessageCircle className="w-7 h-7 text-green-500" />
            <a
              href="https://wa.me/8801786707639"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form with Home Page Gradient */}
      <div className="flex-1 bg-gradient-to-l from-[#2d2f33] to-[#1e293b] p-16 shadow-lg flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-white mb-8">Send a Message</h2>

        {submitted && (
          <p className="mb-6 text-green-400 font-semibold">
            Thank you for your message! I'll get back to you soon.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mx-auto space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-semibold text-white text-base"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-3 py-2 rounded bg-[#2d2f33] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 text-white text-base"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-white text-base"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-3 py-2 rounded bg-[#2d2f33] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 text-white text-base"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-semibold text-white text-base"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={4}
              required
              className="w-full px-3 py-2 rounded bg-[#2d2f33] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-y text-white text-base"
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 transition text-white font-semibold px-6 py-2 rounded text-base w-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
