import { Link } from "react-router-dom";
import img from "../../../assets/img/hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl"></div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 pt-28 pb-16 lg:flex-row lg:px-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Premium Car Dealership
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            Find Your
            <span className="block text-blue-500">Dream Car</span>
            Today
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Browse our carefully selected collection of premium new and
            pre-owned vehicles from trusted brands including Mercedes-Benz, BMW,
            Lexus, Toyota, Audi and more.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/inventory"
              className="rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold transition hover:bg-blue-700">
              Browse Inventory
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/30 px-8 py-4 text-base font-semibold transition hover:bg-white hover:text-slate-900">
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-500">500+</h3>
              <p className="mt-2 text-sm text-slate-400">Premium Vehicles</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-500">2,000+</h3>
              <p className="mt-2 text-sm text-slate-400">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-500">10+</h3>
              <p className="mt-2 text-sm text-slate-400">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl"></div>

          <img
            src={img}
            alt="Luxury Car"
            className="relative w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
