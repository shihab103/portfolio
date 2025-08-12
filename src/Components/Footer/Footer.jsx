import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const smoothScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="primary text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        {/* Left: About Me */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 text-white">About Me</h3>
          <p>
            I'm ShihabUddin, a passionate web developer specializing in
            modern JavaScript frameworks and backend technologies.
          </p>
          <p className="mt-2 text-sm">Email: shihabuddin2469@gmail.com</p>
          <p className="text-sm">Phone: +8801786707639</p>
        </div>

        {/* Center: Quick Links */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul>
            <li>
              <button
                onClick={() => smoothScrollTo("home")}
                className="hover:text-sky-500 transition"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScrollTo("about")}
                className="hover:text-sky-500 transition"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScrollTo("skills")}
                className="hover:text-sky-500 transition"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScrollTo("projects")}
                className="hover:text-sky-500 transition"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="hover:text-sky-500 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Right: Social Links */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 text-white">Social Links</h3>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/shihab103"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/csei52s2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/shihab-web-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ShihabUddin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
