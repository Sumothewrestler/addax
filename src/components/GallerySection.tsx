'use client';

import Image from 'next/image';
import { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: '/images/services/1.jpeg',
      alt: 'Professional Automotive Service',
      caption: 'Expert car repair and maintenance services'
    },
    {
      id: 2,
      src: '/images/services/2.jpeg', 
      alt: 'Advanced Diagnostic Equipment',
      caption: 'State-of-the-art diagnostic tools and equipment'
    },
    {
      id: 3,
      src: '/images/services/3.jpeg',
      alt: 'Quality Service Work',
      caption: 'Professional service work in progress'
    },
    {
      id: 4,
      src: '/images/services/4.jpeg',
      alt: 'ADDAX AUTOMOTIVE Service Center',
      caption: 'Modern automotive service center in Chennai'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 racing-sans-one-regular">
Our Services
          </h2>
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
              <div className="relative h-64 overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Loading...</div>
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={256}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 relative z-10"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`, e);
                    // Show fallback
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded image: ${image.src}`);
                  }}
                  priority={image.id <= 2}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rick+ne5KuTVpeZTRdwdvo9G/q4kSHx9VIrOO4fTl5Pj6hF7KH6xWGUjeMq8rZFJEn5MlDUJxI2Kop6fCJRjqMZJjWzC+IyVhiRFGrz6hClN7YEtNf7J7DJGwF3FQVPFN6FMKZ8SzJ3PwRNNfQJmtT2+QVQPW7/2Q=="
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

      </div>
    </section>
  );
};

export default GallerySection;