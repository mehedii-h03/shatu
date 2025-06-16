"use client";
import { useState, useEffect, useRef } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<null | number>(null);
  const educationRef = useRef(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "Doctor of Veterinary Medicine (DVM)",
      institution: "Bangladesh Agricultural University",
      location: "Mymensingh",
      duration: "2018-2024",
      grade: "CGPA: 3.515/4",
      gradePercentage: 87.875,
      icon: "🎓",
      gradient: "from-teal-500 to-cyan-500",
      borderColor: "border-teal-500",
      subjects: [
        "Animal Medicine",
        "Surgery",
        "Public Health",
        "Clinical Practice",
      ],
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "Shaheed Police Smrity College",
      location: "Science Group",
      duration: "2015-2017",
      grade: "GPA: 5.0/5",
      gradePercentage: 100,
      icon: "📚",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    },
  ];

  return (
    <section
      ref={educationRef}
      className="text-white py-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-teal-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* <p className="text-teal-400 font-medium mb-2 tracking-wide text-sm">
            EDUCATION
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent mb-3">
            Education
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Academic foundation shaping my analytical approach to digital
            marketing
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(edu.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`bg-gray-900 border-2 ${
                  hoveredCard === edu.id ? edu.borderColor : "border-gray-800"
                } rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] group h-full`}
              >
                {/* Header Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center text-xl transform transition-all duration-300 group-hover:scale-110`}
                    >
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {edu.institution} • {edu.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                {/* Grade Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Grade</span>
                    <span
                      className={`font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}
                    >
                      {edu.grade}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`h-full bg-gradient-to-r ${edu.gradient} rounded-full transition-all duration-1000`}
                      style={{
                        width: `${edu.gradePercentage}%`,
                        transitionDelay: `${index * 300 + 500}ms`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subject, subjectIndex) => (
                    <span
                      key={subjectIndex}
                      className={`bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-700 hover:border-gray-600 transition-colors duration-300`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Hover Effect - Bottom Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    edu.gradient
                  } rounded-b-2xl transition-all duration-500 ${
                    hoveredCard === edu.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        {/* <div className="text-center mt-12">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-xl mx-auto hover:border-teal-500 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">🧠</span>
              <h3 className="text-lg font-bold group-hover:text-teal-300 transition-colors">
                Academic Excellence Meets Marketing Innovation
              </h3>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              Scientific background enhancing data-driven marketing strategies
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
