import React from "react";
import Image from "next/image";
import { Calendar, Award, GraduationCap, Briefcase } from "lucide-react";
import DigitalMarketingCertificate from "@/assets/images/certificate/Digital Marketing .jpg";
import AdvanceDigitalMarketingCertificate from "@/assets/images/certificate/Advance Digital Marketing .jpg";

const ResumeComponent = () => {
  return (
    <section id="profile" className="text-white mt-16">
      <div>
        {/* Header */}
        <div className="">
          <h1 className="text-3xl font-bold text-white mb-2">
            Professional Profile
          </h1>
          <p className="text-teal-400">
            Veterinary Professional & Digital Marketing Specialist
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Experience Section - Left Side */}
          <div className="mt-6">
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-teal-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
            </div>

            <div className="space-y-8 relative">
              {/* Facebook Ads Specialist */}
              <div className="relative">
                <div className="absolute left-0 top-2 w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Facebook Ads Specialist
                  </h3>
                  <p className="text-teal-400 font-medium mb-2">
                    Ahliya&apos;s Home Schooling
                  </p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>March 2025 - Present</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Managing Facebook advertising campaigns for educational
                    services, optimizing ad performance and ROI for home
                    schooling programs.
                  </p>
                </div>
              </div>

              {/* Social Media Marketing Manager */}
              <div className="relative">
                <div className="absolute left-0 top-2 w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Social Media Marketing Manager
                  </h3>
                  <p className="text-teal-400 font-medium mb-2">
                    Eureca Fashion
                  </p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>July 2024 - Present</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Leading social media strategy and campaigns for fashion
                    brand, driving engagement and brand awareness across
                    multiple platforms.
                  </p>
                </div>
              </div>

              {/* Social Media Manager */}
              <div className="relative">
                <div className="absolute left-0 top-2 w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Social Media Manager
                  </h3>
                  <p className="text-teal-400 font-medium mb-2">Watch Mania</p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Previous Role</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Managed social media presence for watch retail business,
                    creating engaging content and building customer
                    relationships.
                  </p>
                </div>
              </div>

              {/* Timeline Line */}
              <div className="absolute left-1.5 top-8 bottom-8 w-0.5 bg-gray-600"></div>
            </div>
          </div>

          {/* Education Section - Right Side */}
          <div className="">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-teal-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Education</h2>
            </div>

            <div className="space-y-8 relative">
              {/* DVM Degree */}
              <div className="relative">
                <div className="absolute left-0 top-2 w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="ml-6">
                  <div className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    Doctorate Degree
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Doctor of Veterinary Medicine (DVM)
                  </h3>
                  <p className="text-teal-400 font-medium mb-1">
                    Faculty of Veterinary Science
                  </p>
                  <p className="text-gray-300 text-sm mb-3">
                    Bangladesh Agricultural University, Mymensingh
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2018 - 2024</span>
                    </div>
                    <div className="flex items-center bg-gray-700 px-2 py-1 rounded">
                      <Award className="w-4 h-4 mr-1 text-teal-400" />
                      <span className="text-teal-400 font-medium text-xs">
                        CGPA: 3.515/4.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* HSC */}
              <div className="relative">
                <div className="absolute left-0 top-2 w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="ml-6">
                  <div className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    Higher Secondary
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Higher Secondary Certificate
                  </h3>
                  <p className="text-teal-400 font-medium mb-1">
                    Science Group
                  </p>
                  <p className="text-gray-300 text-sm mb-3">
                    Shaheed Police Smrity College
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2015 - 2017</span>
                    </div>
                    <div className="flex items-center bg-gray-700 px-2 py-1 rounded">
                      <Award className="w-4 h-4 mr-1 text-teal-400" />
                      <span className="text-teal-400 font-medium text-xs">
                        GPA: 5.0/5.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Line */}
              <div className="absolute left-1.5 top-8 bottom-8 w-0.5 bg-gray-600"></div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 text-teal-400 mr-3" />
            <h2 className="text-2xl font-semibold text-white">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Marketing Certificate */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-teal-500 transition-all duration-300 group">
              <div className="aspect-video w-full bg-gray-900">
                <Image
                  src={DigitalMarketingCertificate}
                  alt="Digital Marketing Certificate"
                  width={800}
                  height={450}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  quality={95}
                  placeholder="blur"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-white mb-2">
                  Digital Marketing Certificate
                </h3>
                <p className="text-gray-400 text-sm">
                  Professional certification in digital marketing fundamentals
                </p>
              </div>
            </div>

            {/* Advanced Digital Marketing Certificate */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-teal-500 transition-all duration-300 group">
              <div className="aspect-video w-full bg-gray-900">
                <Image
                  src={AdvanceDigitalMarketingCertificate}
                  alt="Advanced Digital Marketing Certificate"
                  width={800}
                  height={450}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  quality={95}
                  placeholder="blur"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-white mb-2">
                  Advanced Digital Marketing Certificate
                </h3>
                <p className="text-gray-400 text-sm">
                  Advanced certification in digital marketing strategies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeComponent;
