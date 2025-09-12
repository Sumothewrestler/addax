'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  href: string;
  itemCount: number;
}

const CategoryShowcase = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: 'Car Service',
      description: 'Complete automotive repair and maintenance services',
      image: '/api/placeholder/400/300',
      href: '/services/car-service',
      itemCount: 50
    },
    {
      id: 2,
      name: 'AC Repair',
      description: 'Professional air conditioning repair and servicing',
      image: '/api/placeholder/400/300',
      href: '/services/ac-repair',
      itemCount: 25
    },
    {
      id: 3,
      name: 'Denting & Painting',
      description: 'Expert bodywork and paint restoration services',
      image: '/api/placeholder/400/300',
      href: '/services/denting-painting',
      itemCount: 30
    },
    {
      id: 4,
      name: 'Engine Diagnostics',
      description: 'Advanced engine diagnostic and repair services',
      image: '/api/placeholder/400/300',
      href: '/services/diagnostics',
      itemCount: 20
    },
    {
      id: 5,
      name: 'Car Parts',
      description: 'Genuine automobile parts and accessories',
      image: '/api/placeholder/400/300',
      href: '/parts/car-parts',
      itemCount: 100
    },
    {
      id: 6,
      name: 'General Maintenance',
      description: 'Routine maintenance to keep your vehicle running smoothly',
      image: '/api/placeholder/400/300',
      href: '/services/maintenance',
      itemCount: 40
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of automotive services and solutions
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="bg-black bg-opacity-70 rounded-lg p-4 group-hover:bg-opacity-80 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {category.itemCount} items
                      </span>
                      <div className="flex items-center text-red-500 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-medium mr-1">Shop Now</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;