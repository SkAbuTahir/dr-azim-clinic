export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Dr. Sk Abdul Azim
          </h1>
          <p className="text-xl text-gray-600">
            Dedicated to Natural Healing and Patient Wellness
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-6xl">👨⚕️</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Meet Dr. Sk Abdul Azim
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dr. Sk Abdul Azim is a highly qualified and experienced homeopathic physician 
                dedicated to providing natural healing solutions to his patients. With years 
                of practice in homeopathic medicine, he has helped countless individuals 
                achieve better health through gentle, effective treatments.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                His approach combines traditional homeopathic principles with modern 
                understanding of health and wellness, ensuring each patient receives 
                personalized care tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Qualifications & Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Education</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bachelor of Homeopathic Medicine & Surgery (BHMS)</li>
                <li>• Advanced Diploma in Homeopathic Medicine</li>
                <li>• Certified in Classical Homeopathy</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Experience</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 15+ years of clinical practice</li>
                <li>• Specialized in chronic disease management</li>
                <li>• Successfully treated 5000+ patients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Philosophy
          </h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "I believe in the body's natural ability to heal itself. Homeopathy works 
              by stimulating this innate healing power, addressing not just the symptoms 
              but the root cause of illness."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Every patient is unique, and so should be their treatment. I take time to 
              understand each individual's complete health picture to provide the most 
              effective, personalized care."
            </p>
            <p className="text-base text-gray-600 mt-6 italic">
              - Dr. Sk Abdul Azim
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8">
            Book a consultation today and experience the gentle power of homeopathy
          </p>
          <a
            href="https://wa.me/919433931233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Schedule Appointment
          </a>
        </div>
      </section>
    </div>
  );
}