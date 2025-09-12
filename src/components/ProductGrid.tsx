'use client';

import { Star, ShoppingCart, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isOnSale?: boolean;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid = ({ title, products }: ProductGridProps) => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isOnSale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    SALE
                  </span>
                )}
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white text-black p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                    <Eye size={16} />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-gray-400 text-sm mb-1">{product.category}</p>
                <h3 className="text-white font-medium mb-2 hover:text-red-500 transition-colors">
                  <Link href={`/products/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-400'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-bold text-lg">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;