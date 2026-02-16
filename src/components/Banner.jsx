"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Trusted Care <br />
            <span className="text-blue-800">
              For Your Loved Ones
            </span>
          </h1>

          <p className="text-gray-700 text-lg max-w-lg">
            Care.xyz connects you with verified and professional caregivers 
            for baby sitting, elderly support, and home nursing services. 
            Safe, reliable, and easy booking at your fingertips.
          </p>

          <div className="flex gap-4">
            <Link
              href="/cares"
              className="bg-blue-800 text-white hover:bg-blue-900 transition px-6 py-3 rounded-lg font-medium"
            >
              Explore All Care
            </Link>

            
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="bg-blue-100 absolute inset-0 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white text-black p-8 rounded-3xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Care.xyz?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Verified & Trusted Caregivers</li>
              <li>✔ Easy Online Booking</li>
              <li>✔ Flexible Duration & Location</li>
              <li>✔ Secure & Reliable Platform</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
