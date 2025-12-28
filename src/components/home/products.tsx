
"use client";
import Image from 'next/image';
import image1 from '@/src/assets/images/napa.png'

const products = Array.from({ length: 8 }); // 8 cards

export default function Products() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <Image
                src={image1}
                alt={`Product ${i + 1}`}
                className="w-full h-64 object-cover"
              />
              <span>
                <p className='text-xl text-center p-2'>Napa</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
