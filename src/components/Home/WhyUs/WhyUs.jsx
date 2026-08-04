import WhyUsCard from "./WhyUsCard";

import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const WhyUs = () => {
  const data = [
    {
      id: 1,
      icon: <FaMoneyCheckAlt size={32} className="text-blue-600" />,
      title: "Flexible Financing",
      description:
        "Drive home your dream car with financing plans designed to fit your budget. Our team works with trusted financial partners to make ownership simple and affordable.",
    },
    {
      id: 2,
      icon: <MdVerified size={32} className="text-blue-600" />,
      title: "Quality Guaranteed",
      description:
        "Every vehicle is carefully inspected to meet high standards of quality, safety, and performance before it reaches our showroom.",
    },
    {
      id: 3,
      icon: <RiCustomerService2Fill size={32} className="text-blue-600" />,
      title: "Exceptional Customer Care",
      description:
        "From your first inquiry to after-sales support, our experienced team is committed to delivering a smooth, transparent, and enjoyable buying experience.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            More Than a Dealership
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine premium vehicles, competitive pricing, and outstanding
            customer service to deliver a car-buying experience you can trust.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <WhyUsCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;