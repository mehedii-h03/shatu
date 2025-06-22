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
      className="text-white py-16 px-4 relative to-gray-900/10"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">
              My <span className="text-purple-400">Services</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Comprehensive social media solutions tailored to elevate your
              brand and drive meaningful engagement
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className={`relative bg-[#1a1a2e] border ${
                  hoveredCard === service.id
                    ? "border-purple-500/50"
                    : "border-gray-700/60"
                } rounded-2xl p-6 h-full transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 group`}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                {/* Service Icon */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-800/60 rounded-xl text-lg transform transition-all duration-500 group-hover:bg-purple-600/20 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="relative z-10 text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Features */}
                <div className="relative z-10 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-start space-x-3 transform transition-all duration-300 ${
                        hoveredCard === service.id ? "translate-x-1" : ""
                      }`}
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 transform transition-all duration-300 ${
                          hoveredCard === service.id ? "scale-125" : ""
                        }`}
                      ></div>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
