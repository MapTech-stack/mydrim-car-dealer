import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-lg shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <GiSteeringWheel
            size={38}
            className="text-blue-600 transition-transform duration-300 hover:rotate-180"
          />

          <div className="flex flex-col leading-none">
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              MYDRIM
            </span>

            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
              GROUP
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="font-medium text-slate-700 transition hover:text-blue-600">
            Home
          </Link>

          <Link
            to="/about"
            className="font-medium text-slate-700 transition hover:text-blue-600">
            About
          </Link>

          <Link
            to="/inventory"
            className="font-medium text-slate-700 transition hover:text-blue-600">
            Inventory
          </Link>

          <Link
            to="/services"
            className="font-medium text-slate-700 transition hover:text-blue-600">
            Services
          </Link>

          <Link
            to="/contact"
            className="font-medium text-slate-700 transition hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl">
            Browse Inventory
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={handleChange} className="text-slate-800 md:hidden">
          {menu ? <AiOutlineClose size={28} /> : <RiMenu3Line size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-20 w-full bg-white shadow-xl transition-all duration-300 md:hidden ${
          menu
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}>
        <div className="flex flex-col px-6 py-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="border-b border-slate-100 py-4 font-medium text-slate-700 hover:text-blue-600">
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="border-b border-slate-100 py-4 font-medium text-slate-700 hover:text-blue-600">
            About
          </Link>

          <Link
            to="/inventory"
            onClick={closeMenu}
            className="border-b border-slate-100 py-4 font-medium text-slate-700 hover:text-blue-600">
            Inventory
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
            className="border-b border-slate-100 py-4 font-medium text-slate-700 hover:text-blue-600">
            Services
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="border-b border-slate-100 py-4 font-medium text-slate-700 hover:text-blue-600">
            Contact
          </Link>

          <button className="mt-6 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Browse Inventory
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
