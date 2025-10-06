

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Dr. Azim's Homeo Clinic</h3>
            <p className="text-gray-300 mb-4">Healing Naturally with Homeopathy</p>
            <p className="text-gray-300">Professional homeopathic treatment for natural healing and wellness.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-green-400 transition-colors">Home</a>
              <a href="/about" className="block text-gray-300 hover:text-green-400 transition-colors">About</a>
              <a href="/services" className="block text-gray-300 hover:text-green-400 transition-colors">Services</a>
              <a href="/contact" className="block text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 +91 94339 31233</p>
              <p>📧 taazim@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://wa.me/919433931233" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. Azim's Homeo Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}