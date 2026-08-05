import React from "react";

const ServiceCards = ({ icon, title, description }) => {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex justify-center text-blue-600">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCards;