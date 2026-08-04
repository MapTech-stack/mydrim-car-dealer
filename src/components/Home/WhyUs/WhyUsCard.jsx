
const WhyUsCard = ({ icon, title, description }) => {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
        <div className="transition group-hover:text-white">
          {icon}
        </div>
      </div>

      <h3 className="mb-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default WhyUsCard;