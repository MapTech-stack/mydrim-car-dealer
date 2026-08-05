import React from "react";

const ContactHero = () => {
  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500">
          CONTACT US
        </span>

        <h1 className="mt-4 text-5xl font-extrabold text-white lg:text-6xl">
          We'd Love To Hear From You
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you're looking for your next vehicle, scheduling a test drive,
          or have questions about financing, our team is ready to help.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;