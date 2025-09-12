'use client';

import { Shield, Wrench, Clock, Award, Phone, MapPin } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Wrench className="w-12 h-12 text-red-500" />,
      title: 'Car Repair & Service',
      description: 'Complete automotive repair and maintenance services for all vehicle types',
      features: ['Engine Repair', 'Transmission Service', 'Brake System', 'Suspension Work']
    },
    {
      id: 2,
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AC Repair',
      description: 'Professional air conditioning repair and maintenance services',
      features: ['AC Gas Refill', 'Compressor Repair', 'Cooling System', 'Climate Control']
    },
    {
      id: 3,
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: 'Denting & Painting',
      description: 'Expert body work and paint services to restore your vehicle',
      features: ['Dent Removal', 'Paint Touch-up', 'Body Restoration', 'Accident Repair']
    },
    {
      id: 4,
      icon: <Award className="w-12 h-12 text-red-500" />,
      title: 'General Maintenance',
      description: 'Comprehensive vehicle maintenance to keep your car running smoothly',
      features: ['Oil Changes', 'Filter Replacement', 'Battery Service', 'Tire Service']
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional automotive services and support you can trust
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-black rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300 group"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-black rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-500 mb-3" />
              <h4 className="text-white font-bold mb-2">Call Us</h4>
              <p className="text-gray-400">Contact us for service</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-500 mb-3" />
              <h4 className="text-white font-bold mb-2">Visit Us</h4>
              <p className="text-gray-400">Vanagaram, Chennai</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-red-500 mb-3" />
              <h4 className="text-white font-bold mb-2">Working Hours</h4>
              <p className="text-gray-400">Open 24/7</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Book Service Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;