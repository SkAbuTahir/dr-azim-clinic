export default function Services() {
  const services = [
    {
      icon: "🦠",
      title: "Chronic Diseases",
      description: "Effective treatment for diabetes, hypertension, arthritis, and other long-term conditions"
    },
    {
      icon: "🤧",
      title: "Allergies",
      description: "Natural relief from seasonal allergies, food allergies, and environmental sensitivities"
    },
    {
      icon: "🧴",
      title: "Skin Problems",
      description: "Treatment for eczema, psoriasis, acne, dermatitis, and other skin conditions"
    },
    {
      icon: "🧠",
      title: "Migraine & Headaches",
      description: "Gentle relief from chronic headaches, migraines, and tension-related pain"
    },
    {
      icon: "🫁",
      title: "Respiratory Issues",
      description: "Treatment for asthma, bronchitis, sinusitis, and recurring respiratory infections"
    },
    {
      icon: "🍽️",
      title: "Digestive Disorders",
      description: "Relief from IBS, acid reflux, gastritis, and other digestive problems"
    },
    {
      icon: "😰",
      title: "Stress & Anxiety",
      description: "Natural support for mental wellness, anxiety, depression, and sleep disorders"
    },
    {
      icon: "👶",
      title: "Pediatric Care",
      description: "Safe, gentle treatment for children's health issues and developmental concerns"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive homeopathic treatments for natural healing
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Treatment Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Detailed Consultation</h3>
              <p className="text-gray-600">Comprehensive assessment of your health history and current symptoms</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Personalized Treatment</h3>
              <p className="text-gray-600">Customized homeopathic remedies based on your unique constitution</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Follow-up Care</h3>
              <p className="text-gray-600">Regular monitoring and adjustment of treatment for optimal results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Natural Healing Journey
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your health concerns and treatment options
          </p>
          <a
            href="https://wa.me/919433931233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
}