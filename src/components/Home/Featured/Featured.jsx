
import FeatureCard from "./FeatureCard";

import car1 from "../../../assets/img/car1.png";
import car2 from "../../../assets/img/car2.png";
import car3 from "../../../assets/img/car3.png";
import car4 from "../../../assets/img/car4.png";
import car5 from "../../../assets/img/car5.png";
import car6 from "../../../assets/img/car6.png";

const Featured = () => {
  const carsData = [
    {
      id: 1,
      img: car1,
      name: "Cadillac Escalade",
      price: "$22,440",
    },
    {
      id: 2,
      img: car2,
      name: "BMW 3 Series",
      price: "$54,890",
    },
    {
      id: 3,
      img: car3,
      name: "Mercedes-Benz S-Class",
      price: "$75,890",
    },
    {
      id: 4,
      img: car4,
      name: "BMW 7 Series",
      price: "$55,789",
    },
    {
      id: 5,
      img: car5,
      name: "Mercedes-Benz GLE",
      price: "$95,776",
    },
    {
      id: 6,
      img: car6,
      name: "Range Rover Sport",
      price: "$88,450",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Featured Collection
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Explore Our Premium Vehicles
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Browse a carefully selected collection of luxury and performance
            vehicles from the world's leading automotive brands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {carsData.map((car) => (
            <FeatureCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
