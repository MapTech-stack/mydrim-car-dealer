import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import FAQ from "../components/Contact/FAQ";

const Contact = () => {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <FAQ />

      <Footer />
    </>
  );
};

export default Contact;
