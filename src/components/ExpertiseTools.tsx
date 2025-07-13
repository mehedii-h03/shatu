"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiMeta, SiCanva, SiCapacitor } from "react-icons/si";

const expertise = [
  { title: "Social Media Optimization (SMO)", level: 98, category: "Strategy" },
  { title: "Meta Ads Campaign Management", level: 97, category: "Advertising" },
  { title: "Social Media Management", level: 99, category: "Management" },
  { title: "Social Media Marketing Strategy", level: 94, category: "Strategy" },
  {
    title: "Community Engagement & Moderation",
    level: 95,
    category: "Engagement",
  },
  { title: "Content Creation & Scheduling", level: 96, category: "Content" },
  { title: "Visual Content Design", level: 89, category: "Design" },
  { title: "Analytics & Reporting", level: 92, category: "Analytics" },
];

const platforms = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaPinterestP />, label: "Pinterest" },
  { icon: <FaXTwitter />, label: "X" },
  { icon: <FaLinkedinIn />, label: "LinkedIn" },
  { icon: <SiMeta />, label: "Meta Ads" },
  { icon: <SiCanva />, label: "Canva" },
  { icon: <SiCapacitor />, label: "CapCut" },
];

function SkillBar({
  skill,
  index,
}: {
  skill: { title: string; level: number; category: string };
  index: number;
}) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedLevel(skill.level);
          }, index * 100 + 200);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level, index, isVisible]);

  return (
    <div
      ref={skillRef}
      className="group bg-[#1a1a2e] p-5 rounded-xl border border-gray-700/60 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col"
    >
      {/* Header section with fixed height */}
      <div className="flex justify-between items-start mb-4 min-h-[72px]">
        <div className="flex-1 pr-4">
          <h3 className="text-base font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight min-h-[40px] flex items-start">
            {skill.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-gray-300 border border-gray-600/50 whitespace-nowrap">
            {skill.category}
          </span>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            <span
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              {animatedLevel}%
            </span>
          </div>
        </div>
      </div>

      {/* Progress bar section */}
      <div className="relative mt-auto">
        <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full transition-all duration-1500 ease-out relative"
            style={{
              width: isVisible ? `${skill.level}%` : "0%",
              transitionDelay: `${index * 100 + 300}ms`,
            }}
          >
            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-75"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertiseTools() {
  return (
    <section id="skills" className="py-16 px-4 text-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Expertise</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Specialized skills and experience in digital marketing & social
            media
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {expertise.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-2">
            Tools & <span className="text-purple-400">Platforms</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Professional tools I use regularly in my workflow
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((tool, i) => (
            <div key={i} className="group relative">
              <div
                className="w-14 h-14 flex items-center justify-center text-xl bg-gray-800/80 backdrop-blur-sm rounded-xl text-white hover:bg-purple-600/20 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-purple-500/30"
                title={tool.label}
              >
                {tool.icon}
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded border border-gray-700/50">
                  {tool.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}