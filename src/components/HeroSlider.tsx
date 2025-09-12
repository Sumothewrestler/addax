'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Professional Automotive Services",
      subtitle: "Your Trusted Car Care Partner",
      description: "Complete car repair, maintenance, and servicing solutions in Chennai with expert technicians, transparent pricing, and 24/7 availability.",
      image: "/images/gallery/addax-shop-1.jpg",
      cta: "View Services",
      ctaLink: "/services"
    },
    {
      id: 2,
      title: "Insurance Claim Assistance",
      subtitle: "Hassle-Free Insurance Claims",
      description: "Expert support for vehicle insurance claims including documentation, surveyor coordination, and direct settlement with major insurers.",
      image: "/images/gallery/addax-shop-2.jpg",
      cta: "Get Claim Help",
      ctaLink: "/insurance/claim-assistance"
    },
    {
      id: 3,
      title: "Transparent Pricing & Packages",
      subtitle: "No Hidden Charges",
      description: "Honest, upfront pricing with annual maintenance packages starting from ₹3,999. Save money with our comprehensive care plans.",
      image: "/images/gallery/addax-shop-3.jpg",
      cta: "View Pricing",
      ctaLink: "/pricing"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden bg-black">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h3 className="text-red-500 text-lg font-medium mb-2">
                    {slide.subtitle}
                  </h3>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight racing-sans-one-regular">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 text-lg mb-8">
                    {slide.description}
                  </p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-red-500 scale-110'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;