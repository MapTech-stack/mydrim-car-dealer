import React from "react";

const WhyChooseServiceCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
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

export default WhyChooseServiceCard;