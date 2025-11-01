import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer2";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800 pt-20">
        <Navbar></Navbar>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Contact Us</h1>

        <p className="text-lg mb-10">
          We’d love to hear from you! Whether you’re a farmer, researcher, or partner organization,
          your feedback helps us grow stronger.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div>
            <ContactInfo label="📧 Email" value="support@agrisense.ai" />
            <ContactInfo label="📞 Phone" value="+91 98765 43210" />
            <ContactInfo
              label="📍 Address"
              value="AgriSense Innovations, BVCOE Campus, New Delhi, India"
            />
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Send us a message</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-5 rounded-lg hover:bg-green-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}

function ContactInfo({ label, value }) {
  return (
    <div className="flex flex-col mb-4">
      <p className="font-semibold text-gray-700">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
