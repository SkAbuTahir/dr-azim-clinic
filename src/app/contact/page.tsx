export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch to schedule your consultation
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 94339 31233</p>
                    <a
                      href="tel:+919433931233"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                    <p className="text-gray-600">Quick consultation and appointment booking</p>
                    <a
                      href="https://wa.me/919433931233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">taazim@gmail.com</p>
                    <a
                      href="mailto:taazim@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Clinic Address</h3>
                    <p className="text-gray-600">
                      Dr. Azim's Homeo Clinic<br />
                      [Clinic Address]<br />
                      [City, State - PIN]
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Clinic Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 2:00 PM</p>
                      <p className="text-sm text-green-600 mt-1">*By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <span className="text-4xl block mb-4">🗺️</span>
                  <p>Interactive Map</p>
                  <p className="text-sm">Google Maps integration will be added here</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Exact location will be shared upon appointment confirmation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://wa.me/919433931233"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-lg transition-colors duration-300"
            >
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Consultation</h3>
              <p>Get instant response and book your appointment</p>
            </a>
            <a
              href="tel:+919433931233"
              className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg transition-colors duration-300"
            >
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Call Directly</h3>
              <p>Speak with our team for immediate assistance</p>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="section-padding bg-red-50 border-l-4 border-red-400">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <span className="text-2xl">🚨</span>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Notice</h3>
              <p className="text-red-700">
                For medical emergencies, please contact your nearest hospital or call emergency services. 
                Homeopathic treatment is complementary and should not replace emergency medical care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}