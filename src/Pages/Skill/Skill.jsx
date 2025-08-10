import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaServer,
  FaCode,
  FaTerminal,
} from "react-icons/fa";

const skillIcons = {
  "React.js": <FaReact className="text-sky-400 w-16 h-16" />,
  "JavaScript": <FaJsSquare className="text-yellow-400 w-16 h-16" />,
  "HTML & CSS": (
    <>
      <FaHtml5 className="text-orange-600 w-16 h-16 inline-block mr-2" />
      <FaCss3Alt className="text-blue-600 w-16 h-16 inline-block" />
    </>
  ),
  "Tailwind CSS": <FaCss3Alt className="text-teal-400 w-16 h-16" />,
  "Node.js": <FaNodeJs className="text-green-600 w-16 h-16" />,
  "Express.js": <FaServer className="text-gray-300 w-16 h-16" />,
  "MongoDB": <FaDatabase className="text-green-500 w-16 h-16" />,
  "MySQL": <FaDatabase className="text-blue-700 w-16 h-16" />,
  "Git & GitHub": <FaGitAlt className="text-orange-500 w-16 h-16" />,
  "VS Code": <FaCode className="text-blue-500 w-16 h-16" />,
  "Postman": <FaTerminal className="text-orange-600 w-16 h-16" />,
  "Docker": <FaDocker className="text-blue-500 w-16 h-16" />,
};

const skills = {
  Frontend: ["React.js", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  Tools: ["Git & GitHub", "VS Code", "Postman", "Docker"],
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
                  background:
                    "linear-gradient(135deg, #3a3d42, #2d2f33)", // সামান্য ডার্ক গ্রেডিয়েন্ট
                  boxShadow:
                    "0 4px 15px rgba(13, 15, 23, 0.7)", // ডার্ক কিন্তু নরম শ্যাডো
                  borderRadius: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(56, 150, 250, 0.7)"; // হোভার এ হালকা নীল শ্যাডো
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
