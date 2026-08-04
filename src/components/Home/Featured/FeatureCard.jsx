
const FeatureCard = ({ img, name, price }) => {
  return (
    <div className="px-3">
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="overflow-hidden">
          <img
            src={img}
            alt={name}
            className="h-64 w-full object-cover transition duration-500 hover:scale-110"
          />
        </div>

        <div className="p-6">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Available
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900">
            {name}
          </h3>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Starting From
              </p>

              <h4 className="text-2xl font-bold text-blue-600">
                {price}
              </h4>
            </div>

            <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;