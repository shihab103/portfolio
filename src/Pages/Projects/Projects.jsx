import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import blood from '../../assets/Image/bloodHome.png';
import review from '../../assets/Image/reviewHome.png';

const projects = [
  {
    id: "service-review",
    name: "Service Review System",
    image: review,
    description:
      "A platform where users can add, update, delete reviews, and view others' feedback. Built with MERN stack.",
    liveLink: "https://brilliant-churros-578b1f.netlify.app/",
    githubClient: "https://github.com/shihab103/Service-Review-System-client",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "blood-donation",
    name: "Blood Donation Website",
    image: blood,
    description:
      "A blood donation platform to connect donors and seekers with real-time search and request management.",
    liveLink: "https://imaginative-pithivier-76028d.netlify.app/",
    githubClient: "https://github.com/shihab103/shihab103-Blood-Donation-ClientSide",
    stack: ["React.js", "Bootstrap", "Firebase", "Node.js", "Express.js", "MongoDB"],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // will trigger every time on scroll
  }, []);

  return (
    <section className="mx-auto secondary px-6 py-16 space-y-12" id="projects">
      <h2 className="text-4xl font-bold text-center text-sky-500 mb-12">
        My Projects
      </h2>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col lg:flex-row ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          } bg-gradient-to-br from-[#2f3337] to-[#26282b] rounded-lg shadow-md overflow-hidden`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // left-right alternate
        >
          {/* Left Side - Info */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-white">{project.name}</h3>
            <p className="text-gray-300 mt-4">{project.description}</p>

            <div className="mt-6 space-x-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Live Demo
              </a>
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                Client Repo
              </a>
            </div>

            {/* Tools */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-sky-400 mb-2">
                Used Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-sky-600 text-white text-sm px-3 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#2f3337] to-[#26282b] p-6">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
