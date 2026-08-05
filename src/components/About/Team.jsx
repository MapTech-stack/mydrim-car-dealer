import React from "react";
import TeamCard from "./TeamCard";

import member1 from "../../assets/img/team1.jpg";
import member2 from "../../assets/img/team2.jpg";
import member3 from "../../assets/img/team3.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      image: member1,
      name: "Chief Damisa",
      role: "Founder & CEO",
      description:
        "With over 15 years of experience in the automotive industry, Chief Damisa leads the company with a commitment to honesty, quality, and exceptional customer service.",
    },
    {
      id: 2,
      image: member2,
      name: "Sophia Williams",
      role: "Sales Manager",
      description:
        "Sophia helps customers find the perfect vehicle while ensuring a smooth and enjoyable buying experience from start to finish.",
    },
    {
      id: 3,
      image: member3,
      name: "Michael Carter",
      role: "Customer Relations",
      description:
        "Michael is dedicated to providing outstanding after-sales support and building lasting relationships with every customer.",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            OUR TEAM
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Meet the Professionals Behind WheelsDeal
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our experienced team is passionate about helping customers find the
            right vehicle with confidence, transparency, and outstanding
            service.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
