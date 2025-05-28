"use client";
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<null | string>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const contactRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//   const handleSubmit = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

  const contactInfo = [
    {
      icon: "📞",
      label: "Phone",
      value: "+8801874262668",
      gradient: "from-green-500 to-emerald-500",
      link: "tel:+8801874262668",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "fardousaktershatu@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      link: "mailto:fardousaktershatu@gmail.com",
    },
    {
      icon: "📍",
      label: "Address",
      value: "Dhaka, Bangladesh",
      gradient: "from-purple-500 to-indigo-500",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/fardous-akter-shatu",
      gradient: "from-blue-600 to-blue-700",
      hoverColor: "hover:border-blue-500",
    },
    {
      name: "Facebook",
      icon: "📘",
      url: "https://www.facebook.com/FardousAkterShatu",
      gradient: "from-blue-500 to-blue-600",
      hoverColor: "hover:border-blue-400",
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "#", // You mentioned you'll provide the new account link
      gradient: "from-pink-500 to-purple-500",
      hoverColor: "hover:border-pink-500",
    },
    {
      name: "Telegram",
      icon: "💬",
      url: "https://t.me/F_Shatu",
      gradient: "from-cyan-500 to-blue-500",
      hoverColor: "hover:border-cyan-500",
    },
  ];

  return (
    <section
      ref={contactRef}
      className="bg-gray-950 text-white py-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-pink-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-medium mb-2 tracking-wide text-sm">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Ready to start your next project? Let&apos;s discuss how I can help
            you grow your business
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 group h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  Contact Information
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Feel free to reach out through any of these channels
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all duration-300 group/item"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center text-xl group-hover/item:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-medium mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-blue-400 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-pink-500 transition-all duration-300 group h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-300 transition-colors">
                  Send a Message
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Let&apos;s discuss your project requirements
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Project subject"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                //   onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Send Message 🚀
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div
          className={`transform transition-all duration-700 mt-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Connect With Me</h3>
            <p className="text-gray-400">Follow me on social media</p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative`}
                onMouseEnter={() => setHoveredSocial(social.name)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border-2 border-transparent ${social.hoverColor}`}
                >
                  {social.icon}
                </div>

                {/* Tooltip */}
                <div
                  className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded-lg transition-all duration-300 ${
                    hoveredSocial === social.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  {social.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
