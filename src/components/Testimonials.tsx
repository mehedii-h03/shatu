"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Shohag Islam",
    role: "Owner, Eureca Fashion",
    text: "I worked with Shatu to set up my business page including logo design, ads, and page management. Very professional and sincere.",
  },
  {
    name: "Tasnina Trisha",
    role: "CEO, Ahliya's Home Schooling",
    text: "She is always sincere in her work. I've taken services for Instagram and Facebook. Very pleased with the results.",
  },
  {
    name: "Marian Akter",
    role: "Graphics Designer",
    text: "Shatu helped me a lot with optimizing my social media presence. Highly recommended!",
  },
  {
    name: "Farah Sharna",
    role: "Graphics Designer",
    text: "Handled my Facebook page very well. Extremely sincere and dedicated. May Allah bless her.",
  },
  {
    name: "Anonymous Client",
    role: "Business Owner",
    text: "She manages my marketing and campaigns with great responsibility. Perfect for reliable digital services.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonial" className="py-20 px-4 text-white relative">
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent mb-3">
            Testimonials
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don`&apos;t just take our word for it - hear what our clients have
            to say about their experience
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="!pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-[320px]">
                  <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#1e1e32] to-[#252540] rounded-2xl p-8 shadow-xl border border-gray-800/50 backdrop-blur-sm">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg
                        className="w-8 h-8 text-purple-400 opacity-60"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>

                    {/* Testimonial Text */}
                    <div className="flex-grow mb-8">
                      <p className="text-gray-300 leading-relaxed text-base font-medium">
                        &quot;{item.text}&quot;
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-purple-300 font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">5.0</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
          text-align: center !important;
        }
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          margin: 0 4px !important;
          background: #7e22ce !important;
          opacity: 0.4 !important;
          border-radius: 9999px !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
          opacity: 1 !important;
          background: #a855f7 !important;
        }
      `}</style>
    </section>
  );
}
