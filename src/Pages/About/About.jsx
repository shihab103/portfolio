import React from "react";

const About = () => {
  return (
    <section className="secondary mx-auto px-6 py-16" id="about">
      <h2 className="text-4xl font-bold text-center text-sky-500 mb-8">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
        {/* Programming Journey */}
        <p>
          I am <span className="text-sky-400 font-semibold">Shihab Uddin</span>, and my programming journey began out of sheer curiosity about how websites and apps work. From experimenting with basic HTML and CSS to mastering JavaScript frameworks like React, I have grown continuously as a developer. Each project taught me new skills and strengthened my passion for coding.
        </p>

        {/* Type of Work Enjoy */}
        <p>
          I particularly enjoy building intuitive, responsive, and visually appealing frontend applications that provide seamless user experiences. I love working with React.js, modern JavaScript libraries, and CSS frameworks to bring creative ideas to life. Backend development also interests me, especially creating APIs and working with databases.
        </p>

        {/* Hobbies/Interests */}
        <p>
          Outside of programming, I am an avid football player and a photography enthusiast. I also enjoy painting occasionally, as these hobbies fuel my creativity and help me stay balanced and inspired in life.
        </p>

        {/* Showcase Personality */}
        <p>
          I am a lifelong learner who believes in continuous growth and the power of collaboration. I enjoy tackling challenges head-on and am always excited to explore new technologies or improve my skills. Friendly and open-minded, I value teamwork and strive to contribute positively wherever I work.
        </p>
      </div>
    </section>
  );
};

export default About;
