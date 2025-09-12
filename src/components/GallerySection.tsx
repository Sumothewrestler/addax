'use client';

import Image from 'next/image';
import { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/addax-shop-1.jpg',
      alt: 'ADDAX AUTOMOTIVE Service Center - Front View',
      caption: 'Our professional service center in Vanagaram, Chennai'
    },
    {
      id: 2,
      src: '/images/gallery/addax-shop-2.jpg', 
      alt: 'ADDAX AUTOMOTIVE Workshop Interior',
      caption: 'Well-equipped workshop with modern tools and equipment'
    },
    {
      id: 3,
      src: '/images/gallery/addax-shop-3.jpg',
      alt: 'ADDAX AUTOMOTIVE Service Area',
      caption: 'Dedicated service area for car repair and maintenance'
    },
    {
      id: 4,
      src: '/images/services/battery-service.jpg',
      alt: 'Battery Service and Replacement',
      caption: 'Professional battery testing and replacement service'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 racing-sans-one-regular">
            Our Service Center
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a look at our professional automotive service facility in Vanagaram, Chennai
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg bg-gray-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage}
                alt="Gallery Image"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Business Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4 racing-sans-one-regular">
              Visit Our Service Center
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Located in Vanagaram, Chennai, our state-of-the-art facility is equipped with modern 
              tools and staffed by experienced technicians to provide the best automotive services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Get Directions
              </button>
              <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;