'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Instagram, ExternalLink, X } from 'lucide-react';

const ContactSection = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  
  const whatsappServices = [
    {
      title: '🔧 General Service',
      message: 'Hi! I need general car service. Please provide details about pricing and availability.'
    },
    {
      title: '❄️ AC Service',
      message: 'Hi! My car AC needs servicing. Can you help me with AC repair and maintenance?'
    },
    {
      title: '🎨 Denting & Painting', 
      message: 'Hi! I need denting and painting service for my car. Please share the pricing details.'
    },
    {
      title: '🛡️ Insurance Assistance',
      message: 'Hi! I need help with my car insurance claim. Please assist me with the documentation process.'
    },
    {
      title: '🔋 Battery Service',
      message: 'Hi! I need battery replacement/service for my car. Please check availability.'
    },
    {
      title: '🚗 Engine Diagnostics',
      message: 'Hi! My car needs engine diagnostics. Can you help identify and fix the issue?'
    },
    {
      title: '🛞 Tyre Service',
      message: 'Hi! I need tyre replacement/service. Please provide pricing and availability.'
    },
    {
      title: '🚨 Emergency Service',
      message: 'Hi! I need emergency roadside assistance. My car broke down and needs immediate help.'
    },
    {
      title: '💰 Get Pricing',
      message: 'Hi! Can you please share your service pricing list and maintenance packages?'
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/918056588845?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setShowWhatsAppModal(false);
  };
  const contactButtons = [
    {
      id: 'call',
      label: 'Call',
      icon: <Phone size={24} />,
      href: 'tel:+919363039969',
      bgColor: 'bg-green-600 hover:bg-green-700',
      description: 'Call us now'
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: <MessageCircle size={24} />,
      href: '#',
      bgColor: 'bg-green-500 hover:bg-green-600',
      description: 'WhatsApp us',
      isModal: true
    },
    {
      id: 'visit',
      label: 'Visit Us',
      icon: <MapPin size={24} />,
      href: 'https://www.google.com/maps/place/ADDAX+AUTOMOTIVE+(Car+Service,+Car+AC+Repair,+Car+Accident+Insurance+Claim,+Car+Mechanic,+Car+Towing,+Car+road+assistance))/@13.0546086,80.1462193,17z/data=!4m7!3m6!1s0x3a52610f527eee05:0xf0228105c8d0de9f!8m2!3d13.0546086!4d80.1510902!10e1!16s%2Fg%2F11kq8bcykg?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D',
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      description: 'Get directions'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: <Instagram size={24} />,
      href: 'https://www.instagram.com/addax_automotive/',
      bgColor: 'bg-pink-600 hover:bg-pink-700',
      description: 'Follow us'
    },
    {
      id: 'justdial',
      label: 'Justdial',
      icon: <ExternalLink size={24} />,
      href: 'https://www.justdial.com/Chennai/ADDAX-AUTOMOTIVE-Opposite-To-Sv-High-School-Vanagaram-Vanagaram/044PXX44-XX44-240810180847-M7X5_BZDET',
      bgColor: 'bg-orange-600 hover:bg-orange-700',
      description: 'View listing'
    }
  ];

  const handleClick = (button: { id: string; href: string }) => {
    if (button.id === 'whatsapp') {
      setShowWhatsAppModal(true);
    } else if (button.id === 'instagram' || button.id === 'justdial' || button.id === 'visit') {
      window.open(button.href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = button.href;
    }
  };

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 racing-sans-one-regular">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to help with all your automotive needs
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Contact Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {contactButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleClick(button)}
              className={`${button.bgColor} text-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
            >
              <div className="flex flex-col items-center">
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  {button.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{button.label}</h3>
                <p className="text-sm opacity-90 text-center">{button.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Info */}
        <div className="mt-12 text-center">
          <div className="bg-black rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-xl mb-4">Quick Contact Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-gray-300">
                <p className="font-medium text-red-500 mb-1">Phone</p>
                <p>+91 93630 39969</p>
              </div>
              <div className="text-gray-300">
                <p className="font-medium text-red-500 mb-1">Hours</p>
                <p>Open 24/7 - All days</p>
              </div>
              <div className="text-gray-300 md:col-span-2">
                <p className="font-medium text-red-500 mb-1">Address</p>
                <p>No.17, Andal Nagar, Masilamani Street, Opposite To SV High School, Vanagaram, Chennai - 600095</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Service Selection Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <MessageCircle size={24} className="mr-2" />
                <h3 className="text-xl font-bold">Choose Service for WhatsApp</h3>
              </div>
              <button 
                onClick={() => setShowWhatsAppModal(false)}
                className="hover:bg-green-600 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 overflow-y-auto max-h-96">
              <p className="text-gray-600 mb-4 text-center">
                Select the service you need and we&apos;ll open WhatsApp with a pre-filled message
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whatsappServices.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => sendWhatsAppMessage(service.message)}
                    className="bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg p-4 text-left transition-all duration-200 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {service.message.substring(0, 60)}...
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;