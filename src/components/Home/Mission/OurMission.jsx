import { Link } from "react-router-dom";
import img from "../../../assets/img/mission.jpg";

const OurMission = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:px-8">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute -bottom-6 -right-6 hidden h-full w-full rounded-3xl bg-blue-600 lg:block"></div>

          <img
            src={img}
            alt="Luxury Car Showroom"
            className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            ABOUT MYDRIM
          </span>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            Driving Excellence,
            <br />
            Delivering Confidence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At MYDRIM, we believe purchasing a vehicle should be simple,
            transparent, and enjoyable. Our carefully selected inventory
            includes premium new and pre-owned vehicles from the world's most
            trusted automotive brands.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're searching for a luxury sedan, a reliable family SUV,
            or your next business vehicle, our experienced team is committed to
            helping you find the perfect match with competitive pricing,
            flexible financing, and exceptional customer service.
          </p>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="mt-2 text-slate-600">Premium Vehicles Available</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">2,000+</h3>
              <p className="mt-2 text-slate-600">Happy Customers</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-slate-600">Years of Experience</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="mt-2 text-slate-600">Customer-Focused Service</p>
            </div>
          </div>

          <Link
            to="/about"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-blue-700">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
