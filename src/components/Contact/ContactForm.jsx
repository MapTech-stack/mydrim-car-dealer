import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            SEND US A MESSAGE
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Let's Start the Conversation
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Fill out the form below and one of our automotive specialists will
            get back to you as soon as possible.
          </p>
        </div>

        <form className="mt-16 rounded-3xl bg-slate-50 p-8 shadow-xl lg:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                First Name
              </label>

              <input
                type="text"
                placeholder="John"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+234 800 000 0000"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-600"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-semibold text-slate-700">
              Subject
            </label>

            <input
              type="text"
              placeholder="How can we help you?"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-600"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-semibold text-slate-700">
              Your Message
            </label>

            <textarea
              rows="6"
              placeholder="Tell us about the vehicle you're interested in or ask us any questions..."
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-600 resize-none"
            ></textarea>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;