
const InventoryCard = ({ img, name, price }) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={name}
          className="h-60 w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Carefully inspected and professionally maintained to deliver
          outstanding comfort, reliability, and performance.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Starting From
            </p>

            <h4 className="text-2xl font-bold text-blue-600">
              ${price}
            </h4>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;