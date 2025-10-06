"use client";

const services = [
  { icon: "🦠", title: "Chronic Diseases", description: "Effective treatment for diabetes, hypertension, arthritis, and other long-term conditions" },
  { icon: "🤧", title: "Allergies", description: "Natural relief from seasonal allergies, food allergies, and environmental sensitivities" },
  { icon: "🧴", title: "Skin Problems", description: "Treatment for eczema, psoriasis, acne, dermatitis, and other skin conditions" },
  { icon: "🧠", title: "Migraine & Headaches", description: "Gentle relief from chronic headaches, migraines, and tension-related pain" },
  { icon: "🫁", title: "Respiratory Issues", description: "Treatment for asthma, bronchitis, sinusitis, and recurring respiratory infections" },
  { icon: "🍽️", title: "Digestive Disorders", description: "Relief from IBS, acid reflux, gastritis, and other digestive problems" }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive homeopathic treatments for natural healing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

























