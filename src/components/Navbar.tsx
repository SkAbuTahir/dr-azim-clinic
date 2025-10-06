'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-green-600">
            Dr. Azim&apos;s Homeo Clinic
          </button>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-green-600 transition-colors">Services</button>
            {/* <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-green-600 transition-colors">Testimonials</button> */}
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors">Contact</button>
          </div>

          <a
            href="https://wa.me/919433931233"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary"
          >
            Book Appointment
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 py-2 text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 py-2 text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-green-600 py-2 text-left">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-green-600 py-2 text-left">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 py-2 text-left">Contact</button>
              <a
                href="https://wa.me/919433931233"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}