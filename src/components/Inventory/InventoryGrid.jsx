
import InventoryCard from "./InventoryCard";

import car1 from "../../assets/img/car1.png";
import car2 from "../../assets/img/car2.png";
import car3 from "../../assets/img/car3.png";
import car4 from "../../assets/img/car4.png";
import car5 from "../../assets/img/car5.png";
import car6 from "../../assets/img/car6.png";

const InventoryGrid = () => {
  const carsData = [
    {
      id: 1,
      img: car1,
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 2,
      img: car2,
      name: "BMW 3 Series",
      price: "54,890",
    },
    {
      id: 3,
      img: car3,
      name: "Mercedes-Benz C-Class",
      price: "75,890",
    },
    {
      id: 4,
      img: car4,
      name: "BMW 7 Series",
      price: "55,789",
    },
    {
      id: 5,
      img: car5,
      name: "Mercedes-Benz S-Class",
      price: "95,776",
    },
    {
      id: 6,
      img: car6,
      name: "Range Rover Sport",
      price: "88,450",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            OUR INVENTORY
          </span>

          <h1 className="mt-4 text-5xl font-extrabold text-slate-900">
            Explore Premium Vehicles
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse our carefully selected collection of luxury sedans, SUVs,
            sports cars, and certified pre-owned vehicles from the world's
            leading automotive brands.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {carsData.map((car) => (
            <InventoryCard
              key={car.id}
              img={car.img}
              name={car.name}
              price={car.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventoryGrid;
