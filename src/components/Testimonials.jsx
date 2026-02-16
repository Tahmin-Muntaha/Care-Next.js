"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      message:
        "Care.xyz made finding a reliable babysitter so easy! The caregiver was professional, friendly, and my child felt safe immediately.",
    },
    {
      name: "Michael Lee",
      role: "Family Member",
      message:
        "The elderly care service gave my parents independence while ensuring they are well looked after. Highly recommend!",
    },
    {
      name: "Anika Rahman",
      role: "Patient",
      message:
        "After my surgery, the home nursing service was amazing. Caregivers were attentive, skilled, and caring. I felt completely supported.",
    },
  ];

  const metrics = [
    { label: "Happy Families", value: "1,200+" },
    { label: "Verified Caregivers", value: "350+" },
    { label: "Services Delivered", value: "5,000+" },
  ];

  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Testimonials & Success Metrics</h2>
          <p className="text-gray-700">
            Hear from our users and see the impact we have made in caregiving.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testi) => (
            <div key={testi.name} className="border rounded-xl p-6 shadow-sm text-center">
              <p className="text-gray-700 mb-4">"{testi.message}"</p>
              <h3 className="font-semibold">{testi.name}</h3>
              <span className="text-gray-500 text-sm">{testi.role}</span>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-800">{metric.value}</h3>
              <p className="text-gray-700">{metric.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
