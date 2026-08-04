import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, role, review }) => {
  return (
    <div className="px-3">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <FaQuoteLeft className="text-4xl text-blue-600" />

        <p className="mt-6 leading-8 text-slate-600">{review}</p>

        <div className="mt-6 flex gap-1 text-amber-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="h-16 w-16 rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-bold text-slate-900">{name}</h3>

            <p className="text-slate-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
