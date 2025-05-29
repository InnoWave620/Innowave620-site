import React from "react";

const teamMembers = [
  {
    name: "Senzo Shinga",
    role: "Founder & CEO",
    bio: "Founder and CEO of InnoWave620, dedicated to delivering innovative technology solutions and premium digital experiences.",
    image: "/founder.jpg" // Local image from public folder
  }
];

const Team: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 text-yellow-500">
      <section className="w-full max-w-3xl px-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">Meet Our Founder</h2>
        <div className="flex justify-center w-full">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-yellow-500 p-6 flex flex-col items-center text-center shadow-md hover:shadow-yellow-500/20 transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-4 border-4 border-yellow-400 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-1 text-yellow-400">{member.name}</h3>
              <p className="text-md mb-2 text-yellow-300">{member.role}</p>
              <p className="text-sm text-yellow-100 max-w-md">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
