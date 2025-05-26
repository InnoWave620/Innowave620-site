import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications tailored to your business needs, using the latest technologies for performance and scalability."
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces with a focus on seamless user experiences and modern aesthetics."
  },
  {
    title: "Mobile Solutions",
    description: "Cross-platform mobile apps that connect you with your customers on any device, anywhere."
  },
  {
    title: "Digital Strategy",
    description: "Consulting and strategy services to help you innovate, grow, and stay ahead in the digital landscape."
  }
];

const Services: React.FC = () => {
  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-neutral-950 text-white p-8">
      <h2 className="text-4xl font-bold mb-8 text-yellow-400">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {services.map((service) => (
          <div key={service.title} className="bg-neutral-900 rounded-lg shadow-lg p-6 border border-neutral-800">
            <h3 className="text-2xl font-semibold mb-2 text-amber-400">{service.title}</h3>
            <p className="text-neutral-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;