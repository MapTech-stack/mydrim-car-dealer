import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const TeamCard = ({ image, name, role, description }) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img src={image} alt={name} className="h-95 w-full object-cover object-top" />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900">{name}</h3>

        <p className="mt-2 font-semibold text-blue-600">{role}</p>

        <p className="mt-5 leading-7 text-slate-600">{description}</p>

        <div className="mt-6 flex gap-3">
          <button className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white">
            <FaFacebookF />
          </button>

          <button className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white">
            <FaInstagram />
          </button>

          <button className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white">
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
