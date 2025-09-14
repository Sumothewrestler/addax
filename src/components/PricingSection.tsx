'use client';

import { Check, Clock } from 'lucide-react';

const PricingSection = () => {
  const serviceCategories = [
    {
      category: 'Basic Services',
      services: [
        { name: 'General Car Service', price: '₹1,500 - ₹3,500', duration: '2-4 hrs' },
        { name: 'Oil Change', price: '₹800 - ₹2,000', duration: '30 min' },
        { name: 'Battery Check', price: '₹200 - ₹500', duration: '15 min' },
        { name: 'Tyre Pressure Check', price: 'Free', duration: '10 min' }
      ]
    },
    {
      category: 'Advanced Services', 
      services: [
        { name: 'Engine Diagnostics', price: '₹800 - ₹1,500', duration: '1-2 hrs' },
        { name: 'AC Service Complete', price: '₹1,200 - ₹4,000', duration: '2-3 hrs' },
        { name: 'Brake & Suspension', price: '₹1,800 - ₹8,000', duration: '3-4 hrs' },
        { name: 'Battery Replacement', price: '₹2,500 - ₹8,000', duration: '1 hr' }
      ]
    },
    {
      category: 'Body Work',
      services: [
        { name: 'Minor Dent Repair', price: '₹2,000 - ₹5,000', duration: '1-2 days' },
        { name: 'Paint Touch-up', price: '₹1,500 - ₹8,000', duration: '1-3 days' },
        { name: 'Full Body Paint', price: '₹15,000 - ₹50,000', duration: '5-7 days' },
        { name: 'Scratch Removal', price: '₹500 - ₹3,000', duration: '1-2 hrs' }
      ]
    }
  ];

  const packages = [
    {
      name: 'Basic Care',
      duration: '3 Months',
      originalPrice: '₹4,500',
      price: '₹3,999',
      popular: false,
      features: [
        'General service (1x)',
        'Oil change',
        'Basic inspection',
        'Tyre pressure check',
        'Battery check',
        'Free pickup & drop'
      ]
    },
    {
      name: 'Complete Care',
      duration: '6 Months', 
      originalPrice: '₹9,500',
      price: '₹7,999',
      popular: true,
      features: [
        'General service (2x)',
        'Engine diagnostics',
        'AC service',
        'Brake inspection',
        'Battery maintenance',
        'Free pickup & drop',
        '24/7 emergency support'
      ]
    },
    {
      name: 'Premium Care',
      duration: '12 Months',
      originalPrice: '₹18,000', 
      price: '₹14,999',
      popular: false,
      features: [
        'General service (4x)',
        'Complete diagnostics',
        'AC service (2x)',
        'Brake & suspension check',
        'Battery replacement',
        'Insurance claim assistance',
        'Free pickup & drop',
        '24/7 priority support'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 racing-sans-one-regular">
            Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Honest, upfront pricing with no hidden charges. Choose from individual services or 
            money-saving maintenance packages tailored to your needs.
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Service Categories Pricing */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Service Pricing Guide</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-black rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-4">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2">
                      <div>
                        <p className="text-gray-300 font-medium">{service.name}</p>
                        <div className="flex items-center mt-1">
                          <Clock className="w-3 h-3 text-red-500 mr-1" />
                          <span className="text-gray-400 text-xs">{service.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-red-500 font-bold">{service.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              * Prices may vary based on vehicle model, parts required, and specific conditions
            </p>
          </div>
        </div>

        {/* Maintenance Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Annual Maintenance Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-black rounded-lg p-8 ${pkg.popular ? 'ring-2 ring-red-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
                  <p className="text-gray-400 mb-4">{pkg.duration} Package</p>
                  <div className="mb-4">
                    <span className="text-gray-400 line-through text-sm">{pkg.originalPrice}</span>
                  </div>
                  <div className="text-3xl font-bold text-red-500 mb-2">{pkg.price}</div>
                  <p className="text-gray-400 text-sm">Save up to ₹{parseInt(pkg.originalPrice.replace(/₹|,/g, '')) - parseInt(pkg.price.replace(/₹|,/g, ''))}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                  pkg.popular 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                }`}>
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;