import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaGithub, FaFacebook, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
        className={({ isActive }) =>
          isActive
            ? "text-sky-500 font-semibold block px-3 py-2 rounded"
            : "hover:text-sky-400 block px-3 py-2 rounded transition"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-sky-500 font-semibold block px-3 py-2 rounded"
            : "hover:text-sky-400 block px-3 py-2 rounded transition"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/skill"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-sky-500 font-semibold block px-3 py-2 rounded"
            : "hover:text-sky-400 block px-3 py-2 rounded transition"
        }
      >
        Skill
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 primary shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <div className="flex-1">
          <NavLink to="/" className="text-2xl font-bold text-sky-600">
            ShihabUddin
          </NavLink>
        </div>

        {/* Center: Nav Links (hidden on small screens) */}
        <div className="hidden md:flex gap-8 flex-1 justify-center text-gray-700 text-lg">
          {links}
        </div>

        {/* Right: Social Icons (hidden on small screens) */}
        <div className="hidden md:flex gap-6 flex-1 justify-end text-gray-700 text-2xl">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/your-facebook-profile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="text-gray-700 text-3xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 gap-4">
            {/* Nav Links */}
            {links}

            {/* Social Links */}
            <div className="flex gap-6 text-gray-700 text-2xl mt-4">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-500 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://facebook.com/your-facebook-profile"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-500 transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
