"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Image / Illustration */}
        <div className="flex justify-center md:justify-start">
         <Image alt=""
         src="https://plus.unsplash.com/premium_vector-1724790120971-502257474e46?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0" 
         height={300} width={500}
         ></Image>
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            About Care.xyz
          </h2>

          <p className="text-gray-700 text-lg">
            Care.xyz is a modern platform dedicated to making caregiving simple, 
            secure, and accessible for everyone. We connect families with 
            trusted and verified caregivers for children, elderly individuals, 
            and special care needs at home. Our mission is to ensure that 
            families can find professional care quickly and confidently, 
            whether it’s for babysitting, elderly support, or post-surgery 
            home care.
          </p>

          <p className="text-gray-700 text-lg">
            At Care.xyz, we believe caregiving should not be stressful. 
            Our platform offers easy online booking, flexible duration options, 
            location-based search, and transparent pricing. Every caregiver 
            is background-verified and trained to provide compassionate 
            and reliable support, so you can focus on your loved ones 
            while we handle the rest.
          </p>

          <p className="text-gray-700 text-lg">
            Our vision is to become the most trusted caregiving platform, 
            making professional home care accessible to families across the country. 
            By combining technology, safety, and empathy, Care.xyz aims to transform 
            caregiving into a seamless and reassuring experience.
          </p>
        </div>

      </div>
    </section>
  );
}
