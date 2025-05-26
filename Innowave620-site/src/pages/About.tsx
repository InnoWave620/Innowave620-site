import React from "react";

const About: React.FC = () => {
  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-neutral-950 text-white p-8">
      <h2 className="text-4xl font-bold mb-4 text-yellow-400">About InnoWave620</h2>
      <p className="text-lg max-w-2xl text-neutral-300 text-center">
        InnoWave620 is a forward-thinking startup dedicated to delivering innovative technology solutions and premium digital experiences. Our team is passionate about helping businesses grow and adapt in the digital age through creativity, expertise, and a commitment to excellence.
      </p>
    </section>
  );
};

export default About;