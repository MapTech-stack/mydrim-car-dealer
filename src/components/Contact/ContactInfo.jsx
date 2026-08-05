import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <FaMapMarkerAlt size={22} />,
      title: "Our Location",
      value: "122 Lokogoma, Abuja, Nigeria",
    },
    {
      id: 2,
      icon: <FaPhoneAlt size={22} />,
      title: "Phone Number",
      value: "+234 800 123 4567",
    },
    {
      id: 3,
      icon: <FaEnvelope size={22} />,
      title: "Email Address",
      value: "info@mydrim.com",
    },
  ];

  const businessHours = [
    { day: "Monday", time: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
    { day: "Thursday", time: "8:00 AM - 6:00 PM" },
    { day: "Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            GET IN TOUCH
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Contact Information
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have questions about a vehicle or need assistance? Reach out to our
            friendly team—we're always ready to help.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900">Reach Us</h3>

            <div className="mt-8 space-y-8">
              {contactDetails.map((item) => (
                <div key={item.id} className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-slate-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-lg">
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-500" size={26} />

              <h3 className="text-2xl font-bold">Business Hours</h3>
            </div>

            <div className="mt-8 space-y-5">
              {businessHours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-slate-700 pb-3">
                  <span>{item.day}</span>
                  <span className="font-semibold">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-blue-600 p-5">
              <p className="font-semibold">Need immediate assistance?</p>

              <p className="mt-2 text-sm text-blue-100">
                Call us during business hours and one of our automotive
                specialists will be happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
