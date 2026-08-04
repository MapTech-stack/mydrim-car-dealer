import img from "../../assets/img/approch.jpg";

const Approch = () => {
  return (
    <section className="mt-24 grid items-center gap-16 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          OUR APPROACH
        </span>

        <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
          Customer First. Every Step of the Way.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Every vehicle in our inventory is carefully inspected to ensure it
          meets our standards for quality, performance, and reliability. We
          focus on providing honest information so customers can make confident
          decisions.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          From the first consultation to financing and after-sales support, our
          experienced team is dedicated to delivering a seamless ownership
          experience built on trust and long-term relationships.
        </p>
      </div>

      <div className="order-1 lg:order-2">
        <img src={img} alt="Our Approach" className="rounded-3xl shadow-2xl" />
      </div>
    </section>
  );
};

export default Approch;
