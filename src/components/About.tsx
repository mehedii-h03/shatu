"use client";

import { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    clients: 0,
    projects: 0,
  });
  const aboutRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (isVisible) {
      const animateCounter = (
        target: number,
        key: keyof typeof animatedStats,
        duration: number = 2000
      ) => {
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(easeOutQuart * target);

          setAnimatedStats((prev) => ({
            ...prev,
            [key]: current,
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        animate();
      };

      // Animate counters with slight delays
      setTimeout(() => animateCounter(2, "experience"), 200);
      setTimeout(() => animateCounter(20, "clients"), 400);
      setTimeout(() => animateCounter(50, "projects"), 600);
    }
  }, [isVisible]);

  const stats = [
    {
      number: animatedStats.experience,
      suffix: "+",
      label: "Years of Experience",
      icon: "🎯",
      delay: "delay-200",
    },
    {
      number: animatedStats.clients,
      suffix: "+",
      label: "Clients Worked With",
      icon: "🤝",
      delay: "delay-400",
    },
    {
      number: animatedStats.projects,
      suffix: "+",
      label: "Projects Completed",
      icon: "✨",
      delay: "delay-600",
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="bg-gray-900 text-white py-8 md:py-16 px-4 md:px-8 relative overflow-hidden rounded-xl"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-teal-400 font-medium mb-2 tracking-wide">
              ABOUT
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-8">
              About Me
            </h2>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                stat.delay
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-teal-500 transition-all duration-500 hover:transform hover:scale-105 group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Decorative Element */}
          <div
            className={`transform transition-all duration-1000 delay-800 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Animated circles */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative bg-gray-800 border-2 border-teal-500/30 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce"></div>
                      <p className="text-teal-300 font-medium">
                        Social Media Strategy
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-200"></div>
                      <p className="text-purple-300 font-medium">
                        Content Creation
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-400"></div>
                      <p className="text-pink-300 font-medium">Brand Growth</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-600"></div>
                      <p className="text-blue-300 font-medium">
                        Data Analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            className={`transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-teal-300 mb-6">
                Hi, I&apos;m Fardous Akter Shatu
              </h3>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p className="hover:text-white transition-colors duration-300">
                  I&apos;m a passionate{" "}
                  <span className="text-teal-400 font-semibold">
                    Social Media Marketing Manager
                  </span>{" "}
                  with over two years of experience driving brand growth. I
                  specialize in crafting customized strategies that blend
                  content creation, community engagement, and targeted campaigns
                  across platforms like{" "}
                  <span className="text-teal-400">
                    Facebook, Instagram, and Pinterest
                  </span>
                  .
                </p>

                <p className="hover:text-white transition-colors duration-300">
                  By combining{" "}
                  <span className="text-purple-400 font-semibold">
                    data-driven insights
                  </span>{" "}
                  with creative solutions, I help e-commerce and personal brands
                  strengthen their social media presence, build genuine
                  connections, and achieve measurable results.
                </p>

                <p className="hover:text-white transition-colors duration-300">
                  Whether it&apos;s increasing brand awareness, boosting
                  engagement, or driving conversions, I focus on delivering
                  strategies that align with your unique business goals and
                  <span className="text-teal-400 font-semibold">
                    {" "}
                    long-term vision
                  </span>
                  .
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  Let&apos;s Work Together
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
              </div>
            </div>
          </div>
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

export default About;
