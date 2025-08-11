// ContactInfo.jsx
import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="bg-gradient-to-r from-[#2d2f33] to-[#1e293b] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-6 h-6 text-blue-400" />
            <a
              href="mailto:shihabuddin2469@gmail.com"
              className="text-lg hover:underline"
            >
              shihabuddin2469@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-6 h-6 text-green-400" />
            <a
              href="tel:01786707639"
              className="text-lg hover:underline"
            >
              01786707639
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-center space-x-3">
            <MessageCircle className="w-6 h-6 text-green-500" />
            <a
              href="https://wa.me/8801786707639"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
