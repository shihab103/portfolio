import React from "react";
import image from "../../assets/Image/image.png";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Home = () => {
  const resumeLink = "./MD Shihab Uddin.pdf";

  return (
    <div
      id="home"
      className="w-full min-h-screen bg-gradient-to-b from-[#2d2f33] to-[#1e293b] flex flex-col-reverse md:flex-row items-center px-6 md:px-20 py-10"
    >
      {/* Left Side Text */}
      <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Hi, I’m <span className="text-sky-400">Shihab Uddin</span>
        </h1>

        <h3 className="text-xl text-sky-400 font-semibold mt-2">
          Frontend Developer
        </h3>

        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg mx-auto md:mx-0">
          A passionate <span className="text-sky-400">Web Developer</span>{" "}
          crafting interactive and visually stunning web experiences.
        </p>

        <a
          href={resumeLink}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-lg shadow-lg transition"
        >
          Download Resume
        </a>

        <div className="flex gap-6 mt-8 justify-center md:justify-start text-white text-3xl">
          <a
            href="https://github.com/shihab103"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-sky-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shihab-web-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sky-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/shihab_web_dev?s=21"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/csei52s2"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-sky-400 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src={image}
          alt="Shihab Uddin"
          className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-sky-400 shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
