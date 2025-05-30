import React from "react";
import founderImage from "../assets/images/founder.jpg"; // Adjust this path based on your file location

const teamMembers = [
  {
    name: "Senzo Shinga",
    role: "Founder & CEO",
    bio: "Founder and CEO of InnoWave620, dedicated to delivering innovative technology solutions and premium digital experiences.",
    image: founderImage,
  },
];

const Team: React.FC = () => {
  return (
    <div className="w-full bg-cover bg-center flex flex-col items-center justify-center py-16">
      <section className="relative z-10 min-h-[60vh] w-full flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">Meet Our Founder</h2>
        <div className="flex justify-center w-full max-w-2xl">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-lg shadow-lg p-6 border border-neutral-800 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-400 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1 text-amber-400">{member.name}</h3>
              <p className="text-sm mb-2 text-white">{member.role}</p>
              <p className="text-center text-white">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
