import React from "react";
import WhyChooseServiceCard from "./WhyChooseServiceCard";

import { FaShieldAlt, FaUserTie, FaHandshake, FaAward } from "react-icons/fa";

const WhyChooseServices = () => {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt size={28} />,
      title: "Quality Guaranteed",
      description:
        "Every vehicle undergoes a detailed inspection to ensure safety, reliability, and outstanding performance before it reaches our showroom.",
    },
    {
      id: 2,
      icon: <FaUserTie size={28} />,
      title: "Professional Team",
      description:
        "Our experienced automotive specialists provide honest advice and personalized guidance to help you make the right choice.",
    },
    {
      id: 3,
      icon: <FaHandshake size={28} />,
      title: "Transparent Process",
      description:
        "No hidden charges, no unnecessary pressure—just straightforward pricing and a smooth purchasing experience from start to finish.",
    },
    {
      id: 4,
      icon: <FaAward size={28} />,
      title: "Exceptional Support",
      description:
        "Our commitment doesn't end after the sale. We continue to support you with reliable after-sales service and customer care.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            WHY CHOOSE OUR SERVICES
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 lg:text-5xl max-w-xl mx-auto">
            Experience Service You Can Trust
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl mx-auto">
            From your first visit to long after you drive away, we're committed
            to delivering a professional, transparent, and customer-focused
            experience every step of the way.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <WhyChooseServiceCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseServices;
