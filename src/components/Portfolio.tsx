"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { portfolioCategories } from "@/constant";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="works"
      ref={portfolioRef}
      className="text-white py-16 md:py-24 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
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
              My Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing successful digital marketing campaigns and social media
              transformations
            </p>
          </div>
        </div>

        {/* Portfolio Categories */}
        <div className="space-y-16">
          {portfolioCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${(categoryIndex + 1) * 200}ms` }}
            >
              {/* Category Title */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent mb-4">
                  {category.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full"></div>
              </div>

              {/* Images Carousel */}
              <div className="relative group/swiper px-8">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: `.portfolio-next-${categoryIndex}`,
                    prevEl: `.portfolio-prev-${categoryIndex}`,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 16 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 24 },
                    1280: { slidesPerView: 5, spaceBetween: 28 },
                  }}
                  className="group/swiper"
                >
                  {category.items.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="group cursor-pointer">
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-900 shadow-xl">
                          <Image
                            fill
                            src={item.image}
                            alt={`${category.title} - ${item.id}`}
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4"></div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                  className={`portfolio-prev-${categoryIndex} absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-white/30 opacity-0 group-hover/swiper:opacity-100 hover:scale-105`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  className={`portfolio-next-${categoryIndex} absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-white/30 opacity-0 group-hover/swiper:opacity-100 hover:scale-105`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(135deg, #10b981, #a855f7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
