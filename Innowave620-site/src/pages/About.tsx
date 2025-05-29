import React from "react";
import { FaRocket, FaUsers, FaAward, FaLaptopCode } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4 bg-transparent">
      {/* Section Title */}
      <section className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-500 drop-shadow-sm">
          About InnoWave620
        </h2>
        <p className="text-lg md:text-xl text-gray-800">
          InnoWave620 is a forward-thinking startup delivering innovative technology
          solutions and premium digital experiences. Our team helps businesses thrive
          in the digital age through creativity, expertise, and a deep commitment to excellence.
        </p>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 w-full max-w-6xl">
        {[
          {
            icon: <FaRocket />,
            title: "Innovation",
            desc: "We push the boundaries of technology to deliver cutting-edge solutions.",
          },
          {
            icon: <FaUsers />,
            title: "Team",
            desc: "Experienced professionals passionate about technology and innovation.",
          },
          {
            icon: <FaAward />,
            title: "Recognition",
            desc: "Recognized for outstanding service and groundbreaking innovation.",
          },
          {
            icon: <FaLaptopCode />,
            title: "Technology",
            desc: "Leveraging modern tech to provide scalable, efficient solutions.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/70 backdrop-blur-md rounded-xl p-6 text-center shadow-md hover:shadow-yellow-400/30 transition-all duration-300"
          >
            <div className="text-5xl text-yellow-500 mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
