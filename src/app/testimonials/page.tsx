'use client';

import { useState } from 'react';

export default function Testimonials() {
  // const testimonials = [
  //   {
  //     name: "Priya Sharma",
  //     condition: "Chronic Migraine",
  //     text: "After suffering from severe migraines for 5 years, Dr. Azim's treatment has given me my life back. I'm now migraine-free for over 8 months!",
  //     rating: 5
  //   },
  //   {
  //     name: "Rajesh Kumar",
  //     condition: "Skin Allergies",
  //     text: "My son's eczema was getting worse with conventional treatments. Dr. Azim's homeopathic approach cleared his skin completely within 3 months.",
  //     rating: 5
  //   },
  //   {
  //     name: "Anita Das",
  //     condition: "Digestive Issues",
  //     text: "Years of IBS made my life miserable. Dr. Azim's gentle treatment not only cured my symptoms but improved my overall health.",
  //     rating: 5
  //   },
  //   {
  //     name: "Mohammed Ali",
  //     condition: "Respiratory Problems",
  //     text: "My chronic asthma is now well-controlled with homeopathic medicines. I can breathe freely and sleep peacefully again.",
  //     rating: 5
  //   },
  //   {
  //     name: "Sunita Roy",
  //     condition: "Anxiety & Stress",
  //     text: "Dr. Azim helped me overcome severe anxiety without any side effects. His caring approach made all the difference.",
  //     rating: 5
  //   },
  //   {
  //     name: "Amit Ghosh",
  //     condition: "Joint Pain",
  //     text: "My arthritis pain has reduced significantly. I can now walk and exercise without discomfort. Truly grateful!",
  //     rating: 5
  //   }
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextTestimonial = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  // };

  // const prevTestimonial = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  // };

  // return (
  //   <div>
  //     {/* Hero Section */}
  //     <section className="bg-gradient-to-br from-blue-50 to-green-50 section-padding">
  //       <div className="max-w-4xl mx-auto text-center">
  //         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
  //           Patient Testimonials
  //         </h1>
  //         <p className="text-xl text-gray-600">
  //           Real stories of healing and recovery from our patients
  //         </p>
  //       </div>
  //     </section>

  //     {/* Featured Testimonial Carousel */}
  //     <section className="section-padding bg-white">
  //       <div className="max-w-4xl mx-auto">
  //         <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg relative">
  //           <div className="text-center">
  //             <div className="flex justify-center mb-4">
  //               {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
  //                 <span key={i} className="text-yellow-400 text-2xl">⭐</span>
  //               ))}
  //             </div>
  //             <blockquote className="text-lg text-gray-700 mb-6 italic">
  //               &quot;{testimonials[currentIndex].text}&quot;
  //             </blockquote>
  //             <div>
  //               <p className="font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
  //               <p className="text-gray-600">{testimonials[currentIndex].condition}</p>
  //             </div>
  //           </div>
            
  //           <button
  //             onClick={prevTestimonial}
  //             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md"
  //           >
  //             ←
  //           </button>
  //           <button
  //             onClick={nextTestimonial}
  //             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md"
  //           >
  //             →
  //           </button>
  //         </div>
          
  //         <div className="flex justify-center mt-6 space-x-2">
  //           {testimonials.map((_, index) => (
  //             <button
  //               key={index}
  //               onClick={() => setCurrentIndex(index)}
  //               className={`w-3 h-3 rounded-full ${
  //                 index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
  //               }`}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* All Testimonials Grid */}
  //     <section className="section-padding bg-gray-50">
  //       <div className="max-w-7xl mx-auto">
  //         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
  //           More Success Stories
  //         </h2>
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //           {testimonials.map((testimonial, index) => (
  //             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
  //               <div className="flex mb-4">
  //                 {[...Array(testimonial.rating)].map((_, i) => (
  //                   <span key={i} className="text-yellow-400">⭐</span>
  //                 ))}
  //               </div>
  //               <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
  //               <div>
  //                 <p className="font-semibold text-gray-800">{testimonial.name}</p>
  //                 <p className="text-sm text-gray-600">{testimonial.condition}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* CTA Section */}
  //     <section className="section-padding bg-gradient-to-r from-green-500 to-blue-500 text-white">
  //       <div className="max-w-4xl mx-auto text-center">
  //         <h2 className="text-3xl font-bold mb-6">
  //           Ready to Write Your Success Story?
  //         </h2>
  //         <p className="text-xl mb-8">
  //           Join hundreds of satisfied patients who have found healing through homeopathy
  //         </p>
  //         <a
  //           href="https://wa.me/919433931233"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
  //         >
  //           Start Your Journey
  //         </a>
  //       </div>
  //     </section>
  //   </div>
  // );
}