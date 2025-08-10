import React from "react";
import image from "../../assets/Image/image.jpeg";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Home = () => {
  // Replace this with your actual resume file path or URL
  //   const resumeLink = "/resume/ShihabUddin_Resume.pdf";

  return (
    <div id="home" className="w-full h-screen bg-gradient-to-b from-[#2d2f33] to-[#1e293b] flex items-center px-6 md:px-20">
      {/* Left Side Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Hi, I’m <span className="text-sky-400">Shihab Uddin</span>
        </h1>

        {/* Designation */}
        <h3 className="text-2xl text-sky-400 font-semibold mt-2">
          Frontend Developer
        </h3>

        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg">
          A passionate <span className="text-sky-400">Web Developer</span>{" "}
          crafting interactive and visually stunning web experiences.
        </p>

        {/* Resume Download Button */}
        <a
          //   href={resumeLink}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-lg shadow-lg transition"
        >
          Download Resume
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 justify-center md:justify-start text-white text-3xl">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-sky-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sky-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/your-facebook-profile"
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
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt="Shihab Uddin"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-sky-400 shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
