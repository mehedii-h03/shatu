"use client";
import { useState, useEffect, useRef } from "react";

const Expertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<null | number>(null);
  const expertiseRef = useRef(null);

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

    if (expertiseRef.current) {
      observer.observe(expertiseRef.current);
    }

    return () => {
      if (expertiseRef.current) {
        observer.unobserve(expertiseRef.current);
      }
    };
  }, []);

  const expertiseData = [
    {
      id: 1,
      skill: "Social Media Management",
      percentage: 99,
      icon: "📱",
      gradient: "from-emerald-500 to-teal-500",
      category: "Core Skills",
    },
    {
      id: 2,
      skill: "Social Media Optimization (SMO)",
      percentage: 98,
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500",
      category: "Core Skills",
    },
    {
      id: 3,
      skill: "Meta Ads Campaign Management",
      percentage: 97,
      icon: "📊",
      gradient: "from-purple-500 to-indigo-500",
      category: "Advertising",
    },
    {
      id: 4,
      skill: "Content Creation & Scheduling",
      percentage: 96,
      icon: "✨",
      gradient: "from-pink-500 to-rose-500",
      category: "Content",
    },
    {
      id: 5,
      skill: "Community Engagement & Moderation",
      percentage: 95,
      icon: "👥",
      gradient: "from-orange-500 to-amber-500",
      category: "Community",
    },
    {
      id: 6,
      skill: "Social Media Marketing Strategy",
      percentage: 94,
      icon: "🚀",
      gradient: "from-red-500 to-pink-500",
      category: "Strategy",
    },
    {
      id: 7,
      skill: "Analytics & Reporting",
      percentage: 92,
      icon: "📈",
      gradient: "from-violet-500 to-purple-500",
      category: "Analytics",
    },
    {
      id: 8,
      skill: "Visual Content Design",
      percentage: 89,
      icon: "🎨",
      gradient: "from-green-500 to-emerald-500",
      category: "Design",
    },
  ];

  return (
    <section
      ref={expertiseRef}
      className="text-white py-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* <p className="text-emerald-400 font-medium mb-2 tracking-wide text-sm">
            MY EXPERTISE
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent mb-3">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Comprehensive digital marketing skills with proven expertise levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseData.map((skill, index) => (
            <div
              key={skill.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`bg-gray-900 border-2 ${
                  hoveredSkill === skill.id
                    ? "border-gray-600"
                    : "border-gray-800"
                } rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] group relative`}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center text-xl transform transition-all duration-300 group-hover:scale-110`}
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors leading-tight">
                        {skill.skill}
                      </h3>
                      <p className="text-gray-500 text-sm">{skill.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-2xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                    >
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">
                      Proficiency Level
                    </span>
                    <span className="text-gray-300 text-sm font-medium">
                      {skill.percentage >= 95
                        ? "Expert"
                        : skill.percentage >= 90
                        ? "Advanced"
                        : "Proficient"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1500 ease-out`}
                      style={{
                        width: isVisible ? `${skill.percentage}%` : "0%",
                        transitionDelay: `${index * 150 + 500}ms`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i < Math.ceil(skill.percentage / 20)
                          ? `bg-gradient-to-r ${skill.gradient}`
                          : "bg-gray-700"
                      }`}
                      style={{
                        transitionDelay: `${index * 100 + i * 100 + 800}ms`,
                      }}
                    ></div>
                  ))}
                  <span className="text-gray-400 text-xs ml-2">
                    {Math.ceil(skill.percentage / 20)}/5 Stars
                  </span>
                </div>

                {/* Hover Effect - Bottom Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    skill.gradient
                  } rounded-b-2xl transition-all duration-500 ${
                    hoveredSkill === skill.id ? "w-full" : "w-0"
                  }`}
                ></div>

                {/* Floating Elements */}
                <div
                  className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${skill.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-emerald-500 transition-all duration-300 group">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
              95.5%
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              Average Expertise Level
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-500 transition-all duration-300 group">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">
              8
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              Core Competencies
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500 transition-all duration-300 group">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              6
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              Expert Level Skills (95%+)
            </p>
          </div>
        </div> */}

        {/* Bottom Summary */}
        {/* <div className="text-center mt-12">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-2xl mx-auto hover:border-emerald-500 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">💪</span>
              <h3 className="text-lg font-bold group-hover:text-emerald-300 transition-colors">
                Comprehensive Digital Marketing Expertise
              </h3>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              Proven track record with high proficiency across all major social
              media marketing disciplines
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Expertise;
