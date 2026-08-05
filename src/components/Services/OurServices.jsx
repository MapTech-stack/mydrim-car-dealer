import React from "react";

import {
  FaCarSide,
  FaMoneyCheckAlt,
  FaClipboardCheck,
  FaCar,
} from "react-icons/fa";

import {
  MdOutlineSupportAgent,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import ServiceCards from "./ServiceCards";

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaCarSide size={48} />,
      title: "Vehicle Sales",
      description:
        "Explore a premium selection of new and certified pre-owned vehicles from leading automotive brands.",
    },
    {
      id: 2,
      icon: <FaMoneyCheckAlt size={48} />,
      title: "Flexible Financing",
      description:
        "Affordable financing solutions designed to help you own your dream vehicle with confidence.",
    },
    {
      id: 3,
      icon: <MdOutlineDirectionsCar size={48} />,
      title: "Test Drives",
      description:
        "Schedule a personalized test drive and experience your preferred vehicle before making a decision.",
    },
    {
      id: 4,
      icon: <FaClipboardCheck size={48} />,
      title: "Vehicle Inspection",
      description:
        "Every vehicle undergoes a comprehensive inspection to ensure quality, safety, and reliability.",
    },
    {
      id: 5,
      icon: <FaCar size={48} />,
      title: "Trade-In Services",
      description:
        "Upgrade your current vehicle with competitive trade-in valuations and a hassle-free process.",
    },
    {
      id: 6,
      icon: <MdOutlineSupportAgent size={48} />,
      title: "After-Sales Support",
      description:
        "Our relationship continues after your purchase with dedicated customer support and vehicle assistance.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            OUR SERVICES
          </span>

          <h1 className="mt-4 text-5xl max-w-lg mx-auto font-extrabold text-slate-900">
            Everything You Need in One Place
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl mx-auto">
            From helping you choose the perfect vehicle to financing and
            after-sales support, we're committed to delivering a seamless
            car-buying experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCards
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;