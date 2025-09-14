'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
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
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/918056588845?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setShowWhatsAppModal(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
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
                    <h4 className="font-semibold text-gray-800">
                      {service.title}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;