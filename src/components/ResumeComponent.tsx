import React from "react";
import { Calendar, Award, GraduationCap, Briefcase } from "lucide-react";

const ResumeComponent = () => {
  return (
    <section id="profile" className="text-white p-6 mt-16">
      <div>
        {/* Header */}
        <div className=" p-8">
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
          <div className="p-8 ">
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
          <div className="p-8">
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
      </div>
    </section>
  );
};

export default ResumeComponent;

// import React from "react";
// import { Calendar, MapPin, Award, GraduationCap } from "lucide-react";

// const ResumeComponent = () => {
//   return (
//     <div className="p-6 text-gray-100 mt-16">
//       {/* Main Content Grid */}
//       <div className="grid lg:grid-cols-2 gap-8">
//         {/* Experience Section */}
//         <div className="space-y-6">
//           <div className="flex items-center mb-8">
//             <div className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center mr-3">
//               <Calendar className="w-5 h-5 text-white" />
//             </div>
//             <h2 className="text-2xl font-semibold">Work Experience</h2>
//           </div>

//           {[
//             {
//               icon: "🧠",
//               role: "Facebook Ads Specialist",
//               company: "Ahliya's Home Schooling",
//               period: "March 2025 - Present",
//               desc: "Managing Facebook advertising campaigns for educational services, optimizing ad performance and ROI for home schooling programs.",
//             },
//             {
//               icon: "📱",
//               role: "Social Media Marketing Manager",
//               company: "Eureca Fashion",
//               period: "July 2024 - Present",
//               desc: "Leading social media strategy and campaigns for fashion brand, driving engagement and brand awareness across multiple platforms.",
//             },
//             {
//               icon: "⌚",
//               role: "Social Media Manager",
//               company: "Watch Mania",
//               period: "Previous Role",
//               desc: "Managed social media presence for watch retail business, creating engaging content and building customer relationships.",
//             },
//           ].map((item, index) => (
//             <div key={index} className="rounded-md p-5">
//               <div className="flex items-center mb-1">
//                 <span className="mr-2 text-lg">{item.icon}</span>
//                 <h3 className="text-lg font-semibold">{item.role}</h3>
//               </div>
//               <p className="text-gray-400 text-sm mb-1">{item.company}</p>
//               <div className="flex items-center text-xs text-gray-500 mb-2">
//                 <Calendar className="w-3 h-3 mr-1" />
//                 <span>{item.period}</span>
//               </div>
//               <p className="text-sm text-gray-300 max-w-md">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Education Section */}
//         <div className="space-y-6">
//           <div className="flex items-center mb-8">
//             <div className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center mr-3">
//               <GraduationCap className="w-5 h-5 text-white" />
//             </div>
//             <h2 className="text-2xl font-semibold">Education</h2>
//           </div>

//           <div className="rounded-md p-5">
//             <div className="flex items-center mb-2">
//               <span className="mr-2 text-lg">🎓</span>
//               <span className="text-xs font-medium bg-gray-700 px-2 py-0.5 rounded">
//                 Doctorate Degree
//               </span>
//             </div>
//             <h3 className="text-lg font-semibold mb-1">
//               Doctor of Veterinary Medicine (DVM)
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Faculty of Veterinary Science
//             </p>
//             <p className="text-gray-500 text-xs mb-2">
//               Bangladesh Agricultural University, Mymensingh
//             </p>
//             <div className="flex justify-between text-xs text-gray-500">
//               <div className="flex items-center">
//                 <Calendar className="w-3 h-3 mr-1" />
//                 <span>2018 - 2024</span>
//               </div>
//               <div className="flex items-center">
//                 <Award className="w-3 h-3 mr-1 text-yellow-400" />
//                 <span className="text-yellow-400">CGPA: 3.515/4.0</span>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-md p-5">
//             <div className="flex items-center mb-2">
//               <span className="mr-2 text-lg">📘</span>
//               <span className="text-xs font-medium bg-gray-700 px-2 py-0.5 rounded">
//                 Higher Secondary
//               </span>
//             </div>
//             <h3 className="text-lg font-semibold mb-1">
//               Higher Secondary Certificate
//             </h3>
//             <p className="text-gray-400 text-sm">Science Group</p>
//             <p className="text-gray-500 text-xs mb-2">
//               Shaheed Police Smrity College
//             </p>
//             <div className="flex justify-between text-xs text-gray-500">
//               <div className="flex items-center">
//                 <Calendar className="w-3 h-3 mr-1" />
//                 <span>2015 - 2017</span>
//               </div>
//               <div className="flex items-center">
//                 <Award className="w-3 h-3 mr-1 text-yellow-400" />
//                 <span className="text-yellow-400">GPA: 5.0/5.0</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeComponent;
