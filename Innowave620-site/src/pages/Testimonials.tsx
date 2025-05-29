import React from "react";

const testimonials = [
  {
    name: "Lindiwe Zulu",
    feedback:
      "InnoWave620 transformed our online presence. Their team is professional, creative, and truly cares about client success.",
    company: "Zulu Consulting",
  },
  {
    name: "Sipho Mkhize",
    feedback:
      "The mobile app they built for us exceeded expectations. Highly recommended for any digital project!",
    company: "Mkhize Logistics",
  },
  {
    name: "Amanda Ndlovu",
    feedback:
      "Excellent service and attention to detail. Our website is now faster, more beautiful, and easier to use.",
    company: "Ndlovu Boutique",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="w-full py-20 px-4 flex flex-col items-center">
      <section className="text-center max-w-4xl mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-700">
          Hear directly from the people we've helped grow their digital presence.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="border border-yellow-400 rounded-xl p-6 flex flex-col items-center text-center 
                       bg-white bg-opacity-70 backdrop-blur-sm shadow-md"
          >
            <svg
              className="w-10 h-10 text-yellow-400 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.17 6.17A5.001 5.001 0 0 0 2 11v1a5 5 0 0 0 5 5h.5a.5.5 0 0 0 .5-.5V15a.5.5 0 0 0-.5-.5H7a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h.17a.5.5 0 0 0 .5-.5V6.67a.5.5 0 0 0-.5-.5zM16.83 6.17a5.001 5.001 0 0 1 5 4.83v1a5 5 0 0 1-5 5h-.5a.5.5 0 0 1-.5-.5V15a.5.5 0 0 1 .5-.5h.5a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-.17a.5.5 0 0 1-.5-.5V6.67a.5.5 0 0 1 .5-.5z" />
            </svg>
            <p className="italic text-gray-800 mb-4">"{t.feedback}"</p>
            <span className="font-semibold text-yellow-600">{t.name}</span>
            <span className="text-sm text-gray-700">{t.company}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
