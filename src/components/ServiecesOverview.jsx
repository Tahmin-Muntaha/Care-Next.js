"use client";

export default function ServicesOverview() {
  const services = [
    {
      title: "Baby Care",
      description:
        "Professional babysitting and child care services for your little ones. Verified caregivers ensure safety, feeding, and fun learning activities.",
    },
    {
      title: "Elderly Service",
      description:
        "Compassionate support for seniors including companionship, mobility assistance, and daily routine help with trained caregivers.",
    },
    {
      title: "Sick People Service",
      description:
        "Home nursing and care for sick or recovering patients. Caregivers assist with medication, hygiene, monitoring, and post-surgery support.",
    },
  ];

  return (
    <section className="bg-white py-24 text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-700 mb-12">
          Care.xyz provides trusted care services for children, elderly, and sick people. Choose the right care for your loved ones with ease and confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="space-y-4 text-center">
              
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
