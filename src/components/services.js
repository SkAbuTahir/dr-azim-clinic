// "use client";

// const services = [
//   { icon: "🦠", title: "Chronic Diseases", description: "Effective treatment for diabetes, hypertension, arthritis, and other long-term conditions" },
//   { icon: "🤧", title: "Allergies", description: "Natural relief from seasonal allergies, food allergies, and environmental sensitivities" },
//   { icon: "🧴", title: "Skin Problems", description: "Treatment for eczema, psoriasis, acne, dermatitis, and other skin conditions" },
//   { icon: "🧠", title: "Migraine & Headaches", description: "Gentle relief from chronic headaches, migraines, and tension-related pain" },
//   { icon: "🫁", title: "Respiratory Issues", description: "Treatment for asthma, bronchitis, sinusitis, and recurring respiratory infections" },
//   { icon: "🍽️", title: "Digestive Disorders", description: "Relief from IBS, acid reflux, gastritis, and other digestive problems" }
// ];

// export default function Services() {
//   return (
//     <section id="services" className="section-padding bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
//           <p className="text-xl text-gray-600">Comprehensive homeopathic treatments for natural healing</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




























"use client";

import { useState } from 'react';

const services = [
  { 
    icon: "🦠", 
    title: "Chronic Diseases", 
    description: "Effective treatment for diabetes, hypertension, arthritis, and other long-term conditions",
    details: "Personalized homeopathic solutions for managing chronic conditions with minimal side effects",
    gradient: "from-purple-500 to-blue-500"
  },
  { 
    icon: "🤧", 
    title: "Allergies", 
    description: "Natural relief from seasonal allergies, food allergies, and environmental sensitivities",
    details: "Gentle remedies that address the root cause of allergic reactions",
    gradient: "from-green-500 to-teal-500"
  },
  { 
    icon: "🧴", 
    title: "Skin Problems", 
    description: "Treatment for eczema, psoriasis, acne, dermatitis, and other skin conditions",
    details: "Holistic approach to skin health addressing internal and external factors",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    icon: "🧠", 
    title: "Migraine & Headaches", 
    description: "Gentle relief from chronic headaches, migraines, and tension-related pain",
    details: "Targeted treatments to reduce frequency and intensity of headaches",
    gradient: "from-indigo-500 to-purple-500"
  },
  { 
    icon: "🫁", 
    title: "Respiratory Issues", 
    description: "Treatment for asthma, bronchitis, sinusitis, and recurring respiratory infections",
    details: "Natural support for respiratory health and immune system strengthening",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: "🍽️", 
    title: "Digestive Disorders", 
    description: "Relief from IBS, acid reflux, gastritis, and other digestive problems",
    details: "Comprehensive digestive wellness through personalized homeopathic care",
    gradient: "from-amber-500 to-orange-500"
  }
];

export default function Services() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg mb-2 block tracking-wider">OUR EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Comprehensive Homeopathic Care
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience natural healing with our personalized homeopathic treatments designed 
            to address the root cause of your health concerns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative group cursor-pointer ${
                expandedCard === index ? 'z-10' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => toggleCard(index)}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm`}></div>
              
              {/* Floating animation container */}
              <div className={`transform transition-all duration-700 ease-out ${
                expandedCard === index 
                  ? 'scale-105 rotate-0' 
                  : 'group-hover:scale-105 group-hover:-translate-y-2'
              } ${
                hoveredCard === index ? 'animate-float-card' : ''
              }`}>
                
                {/* Main card */}
                <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-2xl relative overflow-hidden ${
                  expandedCard === index 
                    ? 'ring-2 ring-blue-200 ring-opacity-50' 
                    : 'group-hover:shadow-2xl'
                } transition-all duration-500`}>
                  
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                  <div className="absolute inset-[2px] rounded-2xl bg-white/80 backdrop-blur-sm -z-10"></div>
                  
                  {/* Icon with floating animation */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`text-5xl p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      expandedCard === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      {service.icon}
                    </div>
                    <div className={`transform transition-all duration-500 ${
                      expandedCard === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                    }`}>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content with staggered animations */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transition-all duration-500 group-hover:tracking-wide ${
                      expandedCard === index ? 'tracking-wide' : ''
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed transition-all duration-500 group-hover:text-gray-900">
                      {service.description}
                    </p>
                    
                    {/* Expandable content with slide animation */}
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      expandedCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.details}
                        </p>
                        <button className="group/btn flex items-center text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                          Learn more about treatment
                          <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                    expandedCard === index || hoveredCard === index ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((dot) => (
                        <div 
                          key={dot}
                          className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${dot * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section with enhanced animations */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/60 relative overflow-hidden group/cta">
            {/* Animated background for CTA */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
              Can't Find Your Condition?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto relative z-10">
              Homeopathy offers solutions for a wide range of health issues. 
              Contact us for a personalized consultation to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
                <span className="flex items-center justify-center">
                  Book Consultation
                  <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="group/btn border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  Call Now
                  <svg className="w-5 h-5 ml-2 transform group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-180deg); }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }
        .animate-float-card {
          animation: float-card 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}