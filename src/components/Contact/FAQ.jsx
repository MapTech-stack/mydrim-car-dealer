import React from "react";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Can I schedule a test drive online?",
      answer:
        "Yes. Simply contact us through the form or call our team to book a convenient date and time for your test drive.",
    },
    {
      id: 2,
      question: "Do you offer financing options?",
      answer:
        "Yes. We work with trusted financial partners to provide flexible financing solutions that suit different budgets and needs.",
    },
    {
      id: 3,
      question: "Can I trade in my current vehicle?",
      answer:
        "Absolutely. We provide competitive trade-in valuations that can be applied toward your next vehicle purchase.",
    },
    {
      id: 4,
      question: "Are all your vehicles inspected?",
      answer:
        "Yes. Every vehicle is carefully inspected by our experienced technicians to ensure it meets our quality and safety standards.",
    },
    {
      id: 5,
      question: "How can I contact your sales team?",
      answer:
        "You can reach us by phone, email, or by completing the contact form on this page. Our team will respond as quickly as possible.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to some of the most common questions about our
            vehicles, financing options, and dealership services.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
