import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaCode,
  FaTerminal,
  FaPython,
  FaJava,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiC, SiCplusplus, SiFirebase, SiJavascript } from "react-icons/si";

const skillIcons = {
  "React.js": <FaReact className="text-sky-400 w-16 h-16" />,
  "JavaScript": <FaJsSquare className="text-yellow-400 w-16 h-16" />,
  "ES6": <SiJavascript className="text-yellow-300 w-16 h-16" />,
  "HTML": <FaHtml5 className="text-orange-600 w-16 h-16" />,
  "CSS": <FaCss3Alt className="text-blue-600 w-16 h-16" />,
  "Tailwind CSS": <FaCss3Alt className="text-teal-400 w-16 h-16" />,
  "Bootstrap": <FaBootstrap className="text-purple-600 w-16 h-16" />,
  "Next.js": <SiNextdotjs className="text-white w-16 h-16" />,
  "C": <SiC className="text-blue-500 w-16 h-16" />,
  "C++": <SiCplusplus className="text-blue-400 w-16 h-16" />,
  "Python": <FaPython className="text-yellow-300 w-16 h-16" />,
  "Java": <FaJava className="text-red-500 w-16 h-16" />,
  "Node.js": <FaNodeJs className="text-green-600 w-16 h-16" />,
  "Express.js": <FaServer className="text-gray-300 w-16 h-16" />,
  "MongoDB": <FaDatabase className="text-green-500 w-16 h-16" />,
  "MySQL": <FaDatabase className="text-blue-700 w-16 h-16" />,
  "Firebase": <SiFirebase className="text-yellow-400 w-16 h-16" />,
  "Git & GitHub": <FaGitAlt className="text-orange-500 w-16 h-16" />,
  "VS Code": <FaCode className="text-blue-500 w-16 h-16" />,
  "Postman": <FaTerminal className="text-orange-600 w-16 h-16" />,
  "Figma": <FaFigma className="text-pink-500 w-16 h-16" />,
};

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "ES6",
    "Tailwind CSS",
    "Bootstrap",
    "Next.js",
  ],
  Backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
  Programming: ["C", "C++", "Python", "Java"],
  Tools: ["Git & GitHub", "VS Code", "Postman", "Figma"],
};

const Skill = () => {
  return (
    <section className="secondary mx-auto px-6 py-16" id="skills">
      <h2 className="text-4xl font-bold text-center text-sky-500 mb-12">
        My Skills
      </h2>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-12">
          <h3 className="text-3xl font-semibold mb-8 text-white">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skillList.map((skill) => (
              <div
                key={skill}
                className="primary rounded-lg p-10 flex flex-col items-center justify-center gap-4 cursor-default transition-transform transition-shadow duration-300"
                style={{
                  background: "linear-gradient(135deg, #3a3d42, #2d2f33)",
                  boxShadow: "0 4px 15px rgba(13, 15, 23, 0.7)",
                  borderRadius: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(56, 150, 250, 0.7)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(13, 15, 23, 0.7)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div>{skillIcons[skill]}</div>
                <div className="text-white font-semibold text-2xl text-center">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skill;
