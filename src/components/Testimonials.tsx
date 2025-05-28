"use client";
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<null | number>(null);
  const testimonialsRef = useRef(null);

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const testimonialData = [
    {
      id: 1,
      name: "Shohag Islam",
      position: "Owner of Eureca Fashion",
      testimonial:
        "I worked with Shatu to set up my business page, including logo design, cover design, ad campaigns, and overall page management. She handled everything very professionally and with great sincerity. I am fully satisfied with her service.",
      icon: "👔",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      rating: 5,
    },
    {
      id: 2,
      name: "Tasnina Trisha",
      position: "CEO of Ahliya's Home Schooling",
      testimonial:
        "May Allah bless her time and work with barakah. I have always found her sincere in her work. I have taken services for both Instagram and Facebook. Alhamdulillah, I'm pleased with her consultation as well.",
      icon: "📚",
      gradient: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
      rating: 5,
    },
    {
      id: 3,
      name: "Marian Akter",
      position: "Graphics Designer",
      testimonial:
        "Shatu is truly dedicated to her work. She has helped me a lot with my social media optimization (Facebook and LinkedIn). Wishing her continued success!",
      icon: "🎨",
      gradient: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500",
      rating: 5,
    },
    {
      id: 4,
      name: "Farah Sharna",
      position: "Graphics Designer",
      testimonial:
        "Shatu did some work on my Facebook, and Ma Sha Allah, she handled everything very professionally. She's also incredibly sincere and dedicated. May Allah bless her with abundant barakah.",
      icon: "✨",
      gradient: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500",
      rating: 5,
    },
    {
      id: 5,
      name: "Anonymous Client",
      position: "Business Owner",
      testimonial:
        "For the past year, Shatu has been handling the promotion, marketing strategies, and ad campaigns for my business page with great sincerity and responsibility. If you're looking for reliable digital marketing services or consultation, you can confidently take her support.",
      icon: "🚀",
      gradient: "from-orange-500 to-red-500",
      borderColor: "border-orange-500",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section
      ref={testimonialsRef}
      className="bg-gray-950 text-white py-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-green-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-medium mb-2 tracking-wide text-sm">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Client Reviews
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            What my clients say about my work
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`bg-gray-900 border-2 ${
                  hoveredCard === testimonial.id
                    ? testimonial.borderColor
                    : "border-gray-800"
                } rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] group h-full relative`}
              >
                {/* Quote Icon */}
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                    <span className="text-blue-400 text-lg">&quot;</span>
                  </div>
                </div>

                {/* Header Section */}
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center text-xl transform transition-all duration-300 group-hover:scale-110`}
                    >
                      {testimonial.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors leading-tight">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                </div>

                {/* Hover Effect - Bottom Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    testimonial.gradient
                  } rounded-b-2xl transition-all duration-500 ${
                    hoveredCard === testimonial.id ? "w-full" : "w-0"
                  }`}
                ></div>

                {/* Floating Elements */}
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="text-center mt-12">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-xl mx-auto hover:border-blue-500 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">💬</span>
              <h3 className="text-lg font-bold group-hover:text-blue-300 transition-colors">
                Trusted by Amazing Clients
              </h3>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              Building lasting relationships through dedicated service and
              professional excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
