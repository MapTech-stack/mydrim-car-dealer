import React from "react";
import img from "../../assets/img/vision.jpg";

const Vision = () => {
  return (
    <section className="grid items-center gap-16 lg:grid-cols-2">
      <div>
        <img src={img} alt="Our Vision" className="rounded-3xl shadow-2xl" />
      </div>

      <div>
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          OUR VISION
        </span>

        <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
          Becoming the Most Trusted Automotive Destination.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Our vision is to redefine the car-buying experience by combining
          transparency, innovation, and exceptional customer care. We believe
          purchasing a vehicle should be exciting, straightforward, and
          completely stress-free.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Through quality vehicles, competitive pricing, and professional
          service, we strive to become the dealership customers confidently
          recommend to family and friends.
        </p>
      </div>
    </section>
  );
};

export default Vision;
