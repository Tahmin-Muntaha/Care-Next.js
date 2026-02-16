import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BookNowbtn from './BookNowbtn';

const CaresDetails = ({ care }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-6">
      
      {/* Image */}
      <div className="relative h-80 w-full rounded-lg overflow-hidden">
        <Image
          src={care.image}
          alt={care.serviceName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      {/* Info */}
      <div className="mt-6">
        {/* Name & Category */}
        <h1 className="text-3xl font-bold text-gray-800">{care.serviceName}</h1>
        <p className="text-gray-500 mt-1 text-lg">{care.category}</p>

        {/* Charges */}
        <div className="flex flex-wrap justify-start gap-6 mt-4 text-gray-700 text-lg">
          <span>Per Hour: ₹{care.chargePerHour}</span>
          <span>Per Day: ₹{care.chargePerDay}</span>
          <span>Experience: {care.experienceRequired}</span>
          <span>{care.availability}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-3 text-yellow-500 text-lg">
          <span className="font-bold">{care.rating}</span>
          <svg className="w-5 h-5 ml-1 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09L5.454 11 0 6.91l6.561-.955L10 0l3.439 5.955L20 6.91 14.546 11l1.332 7.09z" />
          </svg>
          <span className="ml-2 text-gray-500 text-base">({care.reviews} reviews)</span>
        </div>

        {/* Features */}
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 text-xl">Features:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            {care.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Full Description */}
        <div className="mt-4 text-gray-700 text-base leading-relaxed">
          <h3 className="font-semibold text-gray-800 text-xl mb-2">Description:</h3>
          <p>{care.description}</p>
        </div>

        {/* Book Now Button */}
        <div className="mt-6">
          <BookNowbtn care={care}></BookNowbtn>
        </div>
      </div>
    </div>
  );
};

export default CaresDetails;
