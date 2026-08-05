import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left">
        <h3 className="text-lg font-semibold text-slate-900">{question}</h3>

        <span className="text-blue-600">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-6 px-6" : "max-h-0"
        }`}>
        <p className="leading-7 text-slate-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
