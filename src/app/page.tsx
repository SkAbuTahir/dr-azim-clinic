// 'use client';

// import { useState } from 'react';
import Services from "@/components/services";
export default function Home() {
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);


  // const testimonials = [
  //   { name: "Priya Sharma", condition: "Chronic Migraine", text: "After suffering from severe migraines for 5 years, Dr. Azim's treatment has given me my life back. I'm now migraine-free for over 8 months!", rating: 5 },
  //   { name: "Rajesh Kumar", condition: "Skin Allergies", text: "My son's eczema was getting worse with conventional treatments. Dr. Azim's homeopathic approach cleared his skin completely within 3 months.", rating: 5 },
  //   { name: "Anita Das", condition: "Digestive Issues", text: "Years of IBS made my life miserable. Dr. Azim's gentle treatment not only cured my symptoms but improved my overall health.", rating: 5 }
  // ];

  return (
    <div>
      {/* Home Section */}
      <section id="home" className="bg-gradient-to-br from-green-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Dr. Azim&apos;s Homeo Clinic
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Healing Naturally with Homeopathy
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the gentle power of homeopathic medicine for natural healing and wellness
          </p>
          <a href="https://wa.me/919433931233" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 inline-block">
            Book Appointment
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Dr. Sk Abdul Azim</h2>
            <p className="text-xl text-gray-600">Dedicated to Natural Healing and Patient Wellness</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-6xl">👨⚕️</span>
            </div>
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dr. Sk Abdul Azim is a highly qualified and experienced homeopathic physician with 15+ years of practice. 
                He has successfully treated over 5000 patients using gentle, effective homeopathic treatments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Education</h4>
                  <p className="text-sm text-gray-600">BHMS, Advanced Diploma in Homeopathy</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Experience</h4>
                  <p className="text-sm text-gray-600">15+ years, 5000+ patients treated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      {/* <section id="testimonials" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Patient Testimonials</h2>
            <p className="text-xl text-gray-600">Real stories of healing and recovery</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg relative">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].condition}</p>
              </div>
            </div>
            <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md">←</button>
            <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md">→</button>
          </div>
        </div>
      </section> */}
      <Services />

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch to schedule your consultation</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full"><span className="text-2xl">📞</span></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 94339 31233</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full"><span className="text-2xl">💬</span></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">Quick consultation and appointment booking</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full"><span className="text-2xl">🕒</span></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Clinic Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://wa.me/919433931233" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-lg transition-colors duration-300 text-center">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p>Book appointment instantly</p>
              </a>
              <a href="tel:+919433931233" className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg transition-colors duration-300 text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Call Now</h3>
                <p>Speak with our team</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}