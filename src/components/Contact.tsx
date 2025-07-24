"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      // You can add actual form submission logic here
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="text-white py-16 md:py-24 relative overflow-hidden"
    >
      {/* Minimal decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to elevate your brand? Get in touch and let&apos;s create
            something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-teal-400 mb-8">
                Get In Touch
              </h3>

              {/* Contact Items */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-800 p-3 rounded-full group-hover:bg-teal-700 transition-colors">
                    <FaEnvelope className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:hello@fardous.com"
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      fardousaktershatu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-800 p-3 rounded-full group-hover:bg-teal-700 transition-colors">
                    <FaPhone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      +8801874262668
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-800 p-3 rounded-full group-hover:bg-teal-700 transition-colors">
                    <FaMapMarkerAlt className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            {/* <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                <p className="font-semibold text-white">
                  Available for Projects
                </p>
              </div>
              <p className="text-gray-300 text-sm">
                Currently accepting new clients for 2025. Let&apos;s discuss your
                project!
              </p>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] disabled:scale-100 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
