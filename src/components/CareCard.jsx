import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CareCard = ({ care }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      <div className="relative h-48 w-full">
        <Image
          src={care.image}
          alt={care.serviceName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{care.serviceName}</h2>
        <p className="text-sm text-gray-500 mt-1">{care.category}</p>

        <div className="flex justify-between mt-2 text-gray-700">
          <span>Per Hour: ₹{care.chargePerHour}</span>
          <span>Per Day: ₹{care.chargePerDay}</span>
        </div>

        <div className="flex justify-between mt-2 text-gray-700">
          <span>Experience: {care.experienceRequired}</span>
          <span>{care.availability}</span>
        </div>

        <div className="flex items-center mt-2 text-yellow-500">
          <span className="font-bold">{care.rating}</span>
          <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09L5.454 11 0 6.91l6.561-.955L10 0l3.439 5.955L20 6.91 14.546 11l1.332 7.09z" />
          </svg>
          <span className="ml-2 text-gray-500 text-sm">({care.reviews} reviews)</span>
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-gray-800">Features:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-1">
            {care.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600 text-sm mt-3 line-clamp-3">{care.description}</p>

        <Link
          href={`/cares/${care._id}`}
          className="mt-4 w-full inline-block bg-blue-800 text-white py-2 text-center rounded-lg hover:bg-black transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CareCard;
