"use client";
import { useState, useEffect, useRef } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<null | number>(null);
  const servicesRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Social Media Strategy",
      icon: "🎯",
      gradient: "from-teal-500 to-cyan-500",
      borderColor: "border-teal-500",
      glowColor: "shadow-teal-500/25",
      features: [
        "Brand-centric content planning",
        "Growth roadmap by platform",
        "Goal-oriented strategy setup",
      ],
    },
    {
      id: 2,
      title: "Social Media Management",
      icon: "📱",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500",
      glowColor: "shadow-purple-500/25",
      features: [
        "Profile optimization & scheduling",
        "Engaging content posts",
        "Community interaction",
      ],
    },
    {
      id: 3,
      title: "Ad Campaign Management",
      icon: "📊",
      gradient: "from-blue-500 to-indigo-500",
      borderColor: "border-blue-500",
      glowColor: "shadow-blue-500/25",
      features: [
        "Targeted ad setup & optimization",
        "A/B testing for better results",
        "ROI tracking & reporting",
      ],
    },
    {
      id: 4,
      title: "Content Creation",
      icon: "✨",
      gradient: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500",
      glowColor: "shadow-pink-500/25",
      features: [
        "SEO-focused captions",
        "Branded visual assets",
        "Consistent content calendar",
      ],
    },
  ];

  return (
    <section
      ref={servicesRef}
      className="text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* <p className="text-teal-400 font-medium mb-2 tracking-wide">
              SERVICES
            </p> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              My Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive social media solutions tailored to elevate your
              brand and drive meaningful engagement
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transform transition-all duration-1000 ${
                index % 2 === 0 ? "delay-200" : "delay-400"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-gray-900 border-2 ${
                  hoveredCard === service.id
                    ? service.borderColor
                    : "border-gray-700"
                } rounded-3xl p-8 h-full transition-all duration-500 hover:transform hover:scale-105 ${
                  hoveredCard === service.id
                    ? `hover:shadow-2xl ${service.glowColor}`
                    : ""
                } group`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Service Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl text-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="relative z-10 text-2xl md:text-3xl font-bold mb-6 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Features */}
                <div className="relative z-10 space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-start space-x-3 transform transition-all duration-500 ${
                        hoveredCard === service.id ? "translate-x-2" : ""
                      }`}
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${
                          service.gradient
                        } rounded-full mt-2 flex-shrink-0 transform transition-all duration-300 ${
                          hoveredCard === service.id ? "scale-150" : ""
                        }`}
                      ></div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hover Effect - Bottom Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    service.gradient
                  } rounded-b-3xl transform transition-all duration-500 ${
                    hoveredCard === service.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 max-w-2xl mx-auto hover:border-teal-500 transition-all duration-500 group">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-300 transition-colors duration-300">
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
              Let&apos;s discuss how these services can transform your social
              media presence and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Get Started Today
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center bg-transparent border-2 border-teal-500 text-teal-400 py-3 px-8 rounded-full font-medium hover:bg-teal-900/30 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div> */}
        </div>
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #14b8a6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default Services;
