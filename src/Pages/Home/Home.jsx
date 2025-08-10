import React from "react";
import image from "../../assets/Image/image.jpeg";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b primary flex items-center px-6 md:px-20">
      {/* Left Side Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Hi, I’m <span className="text-sky-400">Shihab Uddin</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg">
          A passionate <span className="text-sky-400">Web Developer</span> crafting
          interactive and visually stunning web experiences.
        </p>
        <button className="mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-lg shadow-lg transition">
          View My Work
        </button>
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
