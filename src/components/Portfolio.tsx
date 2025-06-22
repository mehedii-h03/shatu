"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  //   const [hoveredItem, setHoveredItem] = useState<null | number>(null);
  const portfolioRef = useRef(null);

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

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  const categories = [
    "all",
    "social-media",
    "content",
    "campaigns",
    "branding",
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Brand Strategy",
      category: "social-media",
      type: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=400&fit=crop",
      description:
        "Complete social media transformation for fashion e-commerce brand",
      results: "+150% engagement, +200% followers",
      platforms: ["Instagram", "Facebook", "Pinterest"],
    },
    {
      id: 2,
      title: "Restaurant Social Campaign",
      category: "content",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
      description: "Visual content creation and community management",
      results: "+85% local reach, 40+ new customers",
      platforms: ["Instagram", "TikTok"],
    },
    {
      id: 3,
      title: "Tech Startup Launch",
      category: "campaigns",
      type: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
      description:
        "Multi-platform launch campaign with influencer partnerships",
      results: "50K+ impressions, 500+ leads",
      platforms: ["LinkedIn", "Twitter", "Instagram"],
    },
    {
      id: 4,
      title: "Fitness Brand Content",
      category: "content",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      description: "Daily content creation and engagement strategy",
      results: "+300% video views, +120% engagement",
      platforms: ["Instagram", "YouTube", "TikTok"],
    },
    {
      id: 5,
      title: "Beauty Brand Rebranding",
      category: "branding",
      type: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop",
      description: "Complete visual identity and social media makeover",
      results: "+180% brand recognition, +90% sales",
      platforms: ["Instagram", "Pinterest", "Facebook"],
    },
    {
      id: 6,
      title: "Local Business Growth",
      category: "campaigns",
      type: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop",
      description: "Targeted ad campaigns and local SEO optimization",
      results: "+250% local visibility, +160% foot traffic",
      platforms: ["Facebook", "Google Ads", "Instagram"],
    },
    // Additional items (shown when "Show More" is clicked)
    {
      id: 7,
      title: "Luxury Hotel Campaign",
      category: "social-media",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop",
      description: "Premium content strategy for luxury hospitality brand",
      results: "+220% bookings, +300% social engagement",
      platforms: ["Instagram", "Facebook", "Pinterest"],
    },
    {
      id: 8,
      title: "Nonprofit Awareness Drive",
      category: "campaigns",
      type: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop",
      description: "Social impact campaign with community engagement",
      results: "$50K+ donations raised, 10K+ volunteers",
      platforms: ["Facebook", "Instagram", "LinkedIn"],
    },
    {
      id: 9,
      title: "Fashion Influencer Collab",
      category: "content",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop",
      description: "Influencer partnership and content amplification",
      results: "1M+ reach, +400% engagement rate",
      platforms: ["Instagram", "TikTok", "YouTube"],
    },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  const visibleItems = showMore ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section
      id="works"
      ref={portfolioRef}
      className="text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl"></div>

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
              PORTFOLIO
            </p> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              My Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Showcasing successful digital marketing campaigns and social media
              transformations
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-teal-500"
              }`}
            >
              {category === "all"
                ? "All Work"
                : category === "social-media"
                ? "Social Media"
                : category === "content"
                ? "Content Creation"
                : category === "campaigns"
                ? "Ad Campaigns"
                : "Branding"}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              className={`transform transition-all duration-1000 ${
                index < 3 ? "delay-300" : index < 6 ? "delay-500" : "delay-700"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="relative bg-gray-800 rounded-3xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                {/* Image/Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    fill
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Video Play Button Overlay */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500/80">
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === "video"
                          ? "bg-purple-500/80 text-white"
                          : "bg-teal-500/80 text-white"
                      } backdrop-blur-sm`}
                    >
                      {item.type === "video" ? "📹 Video" : "🖼️ Image"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <p className="text-teal-400 font-semibold text-sm">
                      📈 {item.results}
                    </p>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2">
                    {item.platforms.map((platform, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full group-hover:bg-gray-600 transition-colors duration-300"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 border-2 border-transparent group-hover:border-teal-500/50 rounded-3xl transition-all duration-500 pointer-events-none`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredItems.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className={`inline-flex items-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-4 px-8 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {showMore ? "Show Less" : "Show More Work"}
              <svg
                className={`ml-2 w-5 h-5 transform transition-all duration-300 ${
                  showMore ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Contact CTA */}
        {/* <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 max-w-2xl mx-auto hover:border-teal-500 transition-all duration-500 group">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-300 transition-colors duration-300">
              Like What You See?
            </h3>
            <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
              Let&apos;s create something amazing together. Get in touch to
              discuss your project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Start Your Project
              <svg
                className="ml-2 w-5 h-5"
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
        </div> */}
      </div>

      <style jsx>{`
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

export default Portfolio;
