import React, { useState } from "react";
import { FaGithub, FaFacebook, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/shihab103",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.facebook.com/csei52s2",
    label: "Facebook",
    icon: <FaFacebook />,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const renderLinks = (className = "") =>
    links.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        className={`cursor-pointer text-sky-400 transition px-3 py-2 rounded ${className}`}
      >
        {label}
      </button>
    ));

  const renderSocialIcons = () =>
    socialLinks.map(({ href, label, icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-sky-500 transition"
        aria-label={label}
      >
        {icon}
      </a>
    ));

  return (
    <nav className="sticky top-0 z-50 primary shadow-md">
      <div className="px-6 mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex-1">
          <a
            href="#"
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-sky-600 cursor-pointer"
          >
            ShihabUddin
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 flex-1 justify-center text-gray-700 text-lg">
          {renderLinks()}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-6 flex-1 justify-end text-gray-700 text-2xl">
          {renderSocialIcons()}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="text-sky-600 text-3xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden secondary shadow-md border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 gap-4">
            {renderLinks(
              "text-gray-700 hover:text-sky-500 transition px-3 py-2 rounded text-left"
            )}
            <div className="flex gap-6 text-gray-700 text-2xl mt-4">
              {renderSocialIcons()}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
