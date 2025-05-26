import React from "react";

const testimonials = [
  {
    name: "Lindiwe Zulu",
    feedback: "InnoWave620 transformed our online presence. Their team is professional, creative, and truly cares about client success.",
    company: "Zulu Consulting"
  },
  {
    name: "Sipho Mkhize",
    feedback: "The mobile app they built for us exceeded expectations. Highly recommended for any digital project!",
    company: "Mkhize Logistics"
  },
  {
    name: "Amanda Ndlovu",
    feedback: "Excellent service and attention to detail. Our website is now faster, more beautiful, and easier to use.",
    company: "Ndlovu Boutique"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-neutral-950 text-white p-8">
      <h2 className="text-4xl font-bold mb-8 text-yellow-400">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-neutral-900 rounded-lg shadow-lg p-6 border border-neutral-800 flex flex-col items-center">
            <svg className="w-8 h-8 text-yellow-400 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A5.001 5.001 0 0 0 2 11v1a5 5 0 0 0 5 5h.5a.5.5 0 0 0 .5-.5V15a.5.5 0 0 0-.5-.5H7a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h.17a.5.5 0 0 0 .5-.5V6.67a.5.5 0 0 0-.5-.5zM16.83 6.17a5.001 5.001 0 0 1 5 4.83v1a5 5 0 0 1-5 5h-.5a.5.5 0 0 1-.5-.5V15a.5.5 0 0 1 .5-.5h.5a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-.17a.5.5 0 0 1-.5-.5V6.67a.5.5 0 0 1 .5-.5z"/></svg>
            <p className="text-neutral-300 italic mb-4">"{t.feedback}"</p>
            <span className="font-semibold text-amber-400">{t.name}</span>
            <span className="text-sm text-neutral-400">{t.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;