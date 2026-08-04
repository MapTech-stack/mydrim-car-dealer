import Vision from "./Vision";
import Approch from "./Approch";
import Team from "./Team";

const AboutUs = () => {
  return (
    <section className="pt-24">
      {/* Hero */}
      <div className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500">
            ABOUT MYDRIM
          </span>

          <h1 className="mt-4 text-5xl font-extrabold text-white lg:text-6xl">
            Excellence in Every Drive
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We are committed to helping every customer find the perfect vehicle
            through exceptional service, trusted expertise, and a carefully
            selected inventory of premium automobiles.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Vision />
        <Approch />
        <Team />
      </div>
    </section>
  );
};

export default AboutUs;
