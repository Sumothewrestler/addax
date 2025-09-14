'use client';

import { FileText, Users, CheckCircle, Star, Shield, Phone } from 'lucide-react';

const InsuranceSection = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'We inspect your vehicle damage and provide initial assessment for insurance claim preparation.',
      icon: <CheckCircle className="w-6 h-6 text-red-500" />
    },
    {
      step: '02', 
      title: 'Documentation',
      description: 'Our team helps prepare all necessary documents and photographs required for your insurance claim.',
      icon: <FileText className="w-6 h-6 text-red-500" />
    },
    {
      step: '03',
      title: 'Surveyor Coordination',
      description: 'We coordinate with insurance surveyors, schedule inspections, and facilitate smooth claim processing.',
      icon: <Users className="w-6 h-6 text-red-500" />
    },
    {
      step: '04',
      title: 'Repair & Settlement',
      description: 'Once approved, we complete repairs and handle direct settlement with insurance companies.',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];


  const testimonials = [
    {
      name: 'Ramesh Kumar',
      location: 'Vanagaram, Chennai',
      comment: 'ADDAX AUTOMOTIVE handled my insurance claim perfectly. They managed everything from documentation to surveyor meetings. Got my car repaired without any hassle.',
      rating: 5
    },
    {
      name: 'Hariharan',
      location: 'Velachery', 
      comment: 'Excellent insurance assistance service. They helped me get ₹45,000 claim approved and repaired my car to original condition. Very professional team.',
      rating: 5
    },
    {
      name: 'Arun Vijay',
      location: 'Avadi, Chennai',
      comment: 'Best service for insurance claims in Chennai. They coordinate with insurance company directly and ensure quick settlement. Highly recommended!',
      rating: 4
    }
  ];

  return (
    <section id="insurance" className="py-16 bg-black scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 racing-sans-one-regular">
            Insurance Claim Assistance
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Complete support for your vehicle insurance claims with expert documentation, 
            surveyor coordination, and direct settlement services
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Insurance Claim Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
                  <div className="text-red-500 text-3xl font-bold mb-4">{step.step}</div>
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h4 className="text-white font-bold text-lg mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Customer Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Insurance Claim Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Insurance Claim Help?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Get expert assistance with your vehicle insurance claim. Our team handles all documentation, 
            surveyor coordination, and ensures maximum claim approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Call for Claim Support
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;