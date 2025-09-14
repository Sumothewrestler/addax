'use client';

import { Clock, Wrench, Battery, Snowflake, Brush, Activity, Car, Shield } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  timeEstimate: string;
  priceRange: string;
  features: string[];
}

const DetailedServices = () => {
  const services: Service[] = [
    {
      id: 1,
      name: 'General Car Service',
      icon: <Wrench className="w-8 h-8 text-red-500" />,
      description: 'Comprehensive vehicle maintenance including engine check, fluid levels, filters, and overall inspection to keep your car running smoothly.',
      timeEstimate: '2-4 hours',
      priceRange: '₹1,500 - ₹3,500',
      features: ['Engine oil change', 'Filter replacement', 'Fluid level check', 'Basic inspection', 'Performance testing']
    },
    {
      id: 2,
      name: 'Engine Diagnostics',
      icon: <Activity className="w-8 h-8 text-red-500" />,
      description: 'Advanced computer diagnostics to identify engine problems, fault codes, and performance issues using professional scanning equipment.',
      timeEstimate: '1-2 hours',
      priceRange: '₹800 - ₹1,500',
      features: ['OBD scanning', 'Error code analysis', 'Performance testing', 'Compression check', 'Diagnostic report']
    },
    {
      id: 3,
      name: 'Battery Replacement',
      icon: <Battery className="w-8 h-8 text-red-500" />,
      description: 'Battery testing, replacement, and electrical system check to ensure reliable starting and optimal electrical performance.',
      timeEstimate: '30 minutes - 1 hour',
      priceRange: '₹2,500 - ₹8,000',
      features: ['Battery testing', 'Alternator check', 'Terminal cleaning', 'Electrical system inspection', '1-year warranty']
    },
    {
      id: 4,
      name: 'AC Service',
      icon: <Snowflake className="w-8 h-8 text-red-500" />,
      description: 'Complete air conditioning service including gas refill, compressor check, and cooling system maintenance for optimal comfort.',
      timeEstimate: '1-3 hours',
      priceRange: '₹1,200 - ₹4,000',
      features: ['Gas refilling', 'Compressor check', 'Filter cleaning', 'Cooling coil service', 'Performance testing']
    },
    {
      id: 5,
      name: 'Denting & Painting',
      icon: <Brush className="w-8 h-8 text-red-500" />,
      description: 'Expert bodywork including dent removal, scratch repair, and professional painting to restore your vehicle\'s appearance.',
      timeEstimate: '1-5 days',
      priceRange: '₹2,000 - ₹25,000',
      features: ['Dent removal', 'Scratch repair', 'Body preparation', 'Quality paint job', 'Color matching']
    },
    {
      id: 6,
      name: 'Brakes & Suspension',
      icon: <Car className="w-8 h-8 text-red-500" />,
      description: 'Comprehensive brake and suspension system service including pad replacement, fluid change, and safety inspection.',
      timeEstimate: '2-4 hours',
      priceRange: '₹1,800 - ₹8,000',
      features: ['Brake pad replacement', 'Brake fluid change', 'Suspension check', 'Safety inspection', 'Performance testing']
    },
    {
      id: 7,
      name: 'Tyre Replacement',
      icon: <Car className="w-8 h-8 text-red-500" />,
      description: 'Tyre inspection, replacement, balancing, and alignment services to ensure safe driving and optimal vehicle performance.',
      timeEstimate: '1-2 hours',
      priceRange: '₹3,000 - ₹15,000',
      features: ['Tyre inspection', 'Professional fitting', 'Wheel balancing', 'Alignment service', 'Pressure check']
    },
    {
      id: 8,
      name: 'Insurance Claim Assistance',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      description: 'Complete support for insurance claims including documentation, surveyor coordination, and repair approval process.',
      timeEstimate: '3-7 days',
      priceRange: 'As per insurance coverage',
      features: ['Claim documentation', 'Surveyor coordination', 'Repair estimation', 'Insurance liaison', 'Direct settlement']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 racing-sans-one-regular">
            Our Professional Services
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive automotive solutions with transparent pricing, professional expertise, and reliable service timelines
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="bg-black rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300 group scroll-mt-20"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Time and Price Info */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 text-red-500 mr-2" />
                  <span className="text-gray-300">{service.timeEstimate}</span>
                </div>
                <div className="text-sm">
                  <span className="text-red-500 font-semibold">{service.priceRange}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            * Pricing may vary based on vehicle model and specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;