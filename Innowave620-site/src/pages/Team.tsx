import React from "react";

const teamMembers = [
  {
    name: "Senzo Shinga",
    role: "Founder & CEO",
    bio: "Founder and CEO of InnoWave620, dedicated to delivering innovative technology solutions and premium digital experiences.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const Team: React.FC = () => {
  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-neutral-950 text-white p-8">
      <h2 className="text-4xl font-bold mb-8 text-yellow-400">Meet Our Founder</h2>
      <div className="flex justify-center w-full max-w-2xl">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-neutral-900 rounded-lg shadow-lg p-6 border border-neutral-800 flex flex-col items-center">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-400 object-cover" />
            <h3 className="text-xl font-semibold mb-1 text-amber-400">{member.name}</h3>
            <p className="text-sm text-neutral-400 mb-2">{member.role}</p>
            <p className="text-neutral-300 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;