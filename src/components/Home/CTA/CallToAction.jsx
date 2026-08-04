import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 shadow-2xl lg:p-16">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div className="max-w-2xl">
              <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Ready To Drive?
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-6xl">
                Drive Home
                <span className="block text-blue-500"> with Confidence</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Discover a carefully selected collection of quality new and
                pre-owned vehicles. Whether you're upgrading your family car or
                investing in your dream vehicle, MYDRIM makes every step simple,
                transparent, and stress-free.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
              <Link
                to="/inventory"
                className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700">
                Browse Inventory
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-white/20 px-8 py-4 text-center font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900">
                Contact Our Team
              </Link>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold text-blue-500">
                ✓ Premium Vehicles
              </h3>
              <p className="mt-2 text-slate-400">
                Carefully inspected new and pre-owned cars
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-500">
                {" "}
                Flexible Financing
              </h3>
              <p className="mt-2 text-slate-400">
                Payment plans tailored to your budget.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-500">
                ✓ Trusted Quality
              </h3>
              <p className="mt-2 text-slate-400">
                Every vehicle is thoroughly inspected.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-500">
                ✓ Expert Support
              </h3>
              <p className="mt-2 text-slate-400">
                rofessional assistance before and after purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
