import { Link } from "react-router-dom";
import { GiSteeringWheel } from "react-icons/gi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <GiSteeringWheel size={38} className="text-blue-500" />

              <Link to="/" className="flex flex-col leading-none">
                <h2 className="text-2xl font-bold text-white">
                 MYDRIM
                </h2>

                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  GROUP
                </p>
              </Link>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Your trusted destination for premium new and pre-owned vehicles.
              We deliver quality, transparency, and exceptional customer
              service with every purchase.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              <Link to="/" className="transition hover:text-blue-500">
                Home
              </Link>

              <Link to="/about" className="transition hover:text-blue-500">
                About Us
              </Link>

              <Link to="/inventory" className="transition hover:text-blue-500">
                Inventory
              </Link>

              <Link to="/services" className="transition hover:text-blue-500">
                Services
              </Link>

              <Link to="/contact" className="transition hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>

          {/* Vehicle Categories */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Vehicle Categories
            </h3>

            <div className="flex flex-col gap-4">
              <Link to="/" className="transition hover:text-blue-500">
                Luxury Sedans
              </Link>

              <Link to="/" className="transition hover:text-blue-500">
                SUVs
              </Link>

              <Link to="/" className="transition hover:text-blue-500">
                Sports Cars
              </Link>

              <Link to="/" className="transition hover:text-blue-500">
                Electric Vehicles
              </Link>

              <Link to="/" className="transition hover:text-blue-500">
                Certified Pre-Owned
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <p>Lagos, Nigeria</p>

              <p>+234 XXX XXX XXXX</p>

              <p>info@mydrim.com</p>

              <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row">
            <p>
              © {year} MYDRIM™. All Rights Reserved.
            </p>

            <p>
              Designed & Developed by{" "}
              <span className="font-semibold text-blue-500">
                MapVisTech
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;