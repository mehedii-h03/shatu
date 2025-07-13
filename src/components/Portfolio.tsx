"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
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

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Brand Strategy",
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
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop",
      description: "Influencer partnership and content amplification",
      results: "1M+ reach, +400% engagement rate",
      platforms: ["Instagram", "TikTok", "YouTube"],
    },
  ];

  const visibleItems = showMore ? portfolioItems : portfolioItems.slice(0, 6);

  return (
    <section
      id="works"
      ref={portfolioRef}
      className="text-white py-16 md:py-24 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-8">
              My work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing successful digital marketing campaigns and social media
              transformations
            </p>
          </div>
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
              <div className="bg-gray-900 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                {/* Image/Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    fill
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Video Play Button Overlay */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <p className="text-green-400 font-medium text-sm">
                      {item.results}
                    </p>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2">
                    {item.platforms.map((platform, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {portfolioItems.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className={`inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {showMore ? "Show Less" : "Show More Work"}
              <svg
                className={`ml-2 w-4 h-4 transform transition-all duration-300 ${
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
      </div>
    </section>
  );
};

export default Portfolio;
