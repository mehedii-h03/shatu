"use client";
import { useState, useEffect, useRef } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<null | number>(null);
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experienceData = [
    {
      id: 1,
      title: "Facebook Ads Specialist",
      company: "Ahliya's Home Schooling",
      duration: "March 2025 - Present",
      status: "Current",
      icon: "📱",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      skills: [
        "Facebook Ads",
        "Lead Generation",
        "Campaign Optimization",
        "Analytics",
      ],
    },
    {
      id: 2,
      title: "Social Media Marketing Manager",
      company: "Eureca Fashion",
      duration: "July 2024 - Present",
      status: "Completed",
      icon: "👗",
      gradient: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500",
      skills: [
        "Social Media Strategy",
        "Content Marketing",
        "Brand Management",
        "Fashion Marketing",
      ],
    },
    {
      id: 3,
      title: "Social Media Manager",
      company: "Watch Mania",
      duration: "November 2023 - March 2025",
      status: "Completed",
      icon: "⌚",
      gradient: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500",
      skills: [
        "Social Media Management",
        "Content Creation",
        "Community Building",
        "E-commerce Marketing",
      ],
    },
  ];

  return (
    <section
      ref={experienceRef}
      className="b text-white py-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-pink-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* <p className="text-blue-400 font-medium mb-2 tracking-wide text-sm">
            EXPERIENCE
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Building digital marketing expertise across diverse industries
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`bg-gray-900 border-2 ${
                  hoveredCard === exp.id ? exp.borderColor : "border-gray-800"
                } rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] group h-full relative`}
              >
                {/* Status Badge */}
                <div className="absolute -top-2 -right-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.status === "Current"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-700/50 text-gray-400 border border-gray-600/30"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>

                {/* Header Section */}
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${exp.gradient} rounded-xl flex items-center justify-center text-xl transform transition-all duration-300 group-hover:scale-110`}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300">
                    Key Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-700 hover:border-gray-600 transition-colors duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect - Bottom Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    exp.gradient
                  } rounded-b-2xl transition-all duration-500 ${
                    hoveredCard === exp.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        {/* <div className="text-center mt-12">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-xl mx-auto hover:border-blue-500 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">🚀</span>
              <h3 className="text-lg font-bold group-hover:text-blue-300 transition-colors">
                Growing Digital Marketing Expertise
              </h3>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              Specializing in social media marketing and Facebook advertising
              across multiple industries
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
