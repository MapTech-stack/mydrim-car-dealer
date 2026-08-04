
import customer1 from "../../../assets/img/customer1.jpg";
import customer2 from "../../../assets/img/customer2.jpg";
import customer3 from "../../../assets/img/customer3.jpg";
import customer4 from "../../../assets/img/customer4.jpg";

import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Business Owner",
      image: customer1,
      review:
        "Buying my BMW from WheelsDeal was one of the best car buying experiences I've ever had. The staff was professional, transparent, and incredibly helpful.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Marketing Executive",
      image: customer2,
      review:
        "The financing process was straightforward, and I drove home my dream Mercedes-Benz sooner than I expected. Highly recommended.",
    },
    {
      id: 3,
      name: "David Brown",
      role: "Entrepreneur",
      image: customer3,
      review:
        "Excellent customer service from start to finish. The vehicle matched the description perfectly, and the entire purchase was stress-free.",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Architect",
      image: customer4,
      review:
        "Professional staff, premium vehicles, and a smooth buying experience. I would definitely purchase from WheelsDeal again.",
    },
  ];

 
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            TESTIMONIALS
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are proud to help drivers find quality vehicles with confidence.
            Here's what some of our satisfied customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
