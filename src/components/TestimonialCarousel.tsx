'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  initial: string;
  bike: string;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Karthik Raghavan',
      location: 'Vanagaram, Chennai',
      rating: 5,
      comment: 'Excellent service and reasonable prices. ADDAX AUTOMOTIVE fixed my car AC perfectly. Professional team with good technical knowledge.',
      initial: 'K',
      bike: 'Honda City'
    },
    {
      id: 2,
      name: 'Hariharan',
      location: 'Velachery',
      rating: 5,
      comment: 'Good service for general maintenance. They explained all the work needed and completed it on time. Will visit again.',
      initial: 'H',
      bike: 'Maruti Swift'
    },
    {
      id: 3,
      name: 'Suresh Babu',
      location: 'Avadi, Chennai',
      rating: 5,
      comment: 'Great experience with car repair service. The staff is helpful and the work quality is good. Affordable pricing.',
      initial: 'S',
      bike: 'Hyundai i20'
    },
    {
      id: 4,
      name: 'Divya Rajesh',
      location: 'Ambattur, Chennai',
      rating: 5,
      comment: 'Outstanding denting and painting work! My car looks brand new after the accident repair. Highly recommended!',
      initial: 'D',
      bike: 'Toyota Innova'
    },
    {
      id: 5,
      name: 'Ravi Kumar',
      location: 'Thiruvallur, Chennai',
      rating: 5,
      comment: 'Professional automotive service center. Quick diagnostics and fair pricing. Open 24/7 which is very convenient.',
      initial: 'R',
      bike: 'Ford EcoSport'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 racing-sans-one-regular">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from satisfied customers who trust us with their vehicles
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gray-900 rounded-lg p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-red-500 opacity-20" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-red-500 bg-red-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {testimonials[currentIndex].initial}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentIndex].location}
                </p>
                <p className="text-red-500 text-sm mt-1">
                  {testimonials[currentIndex].bike}
                </p>
                
                {/* Rating Stars */}
                <div className="flex justify-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonials[currentIndex].rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400'
                      }
                    />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                &ldquo;{testimonials[currentIndex].comment}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-red-500 scale-110'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="text-white">
            <h4 className="text-3xl font-bold text-red-500 mb-2">500+</h4>
            <p className="text-gray-400">Cars Serviced</p>
          </div>
          <div className="text-white">
            <h4 className="text-3xl font-bold text-red-500 mb-2">4.6</h4>
            <p className="text-gray-400">Rating (112 Reviews)</p>
          </div>
          <div className="text-white">
            <h4 className="text-3xl font-bold text-red-500 mb-2">24/7</h4>
            <p className="text-gray-400">Service Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;