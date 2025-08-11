import React from "react";
import { useParams, Link } from "react-router-dom";

const projectData = {
  "service-review": {
    name: "Service Review System",
    image: "/images/service-review.jpg",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    description:
      "A platform where users can add, update, delete reviews, and view others' feedback. Built with MERN stack.",
    liveLink: "https://service-review.example.com",
    githubLink: "https://github.com/username/service-review-client",
    challenges: [
      "Secure authentication & authorization",
      "Image upload handling",
      "Responsive UI design",
    ],
    futurePlans: [
      "AI-based sentiment analysis",
      "Advanced search & filtering",
      "Admin dashboard",
    ],
  },
  "blood-donation": {
    name: "Blood Donation Website",
    image: "/images/blood-donation.jpg",
    stack: ["React.js", "Bootstrap", "Firebase", "Node.js", "Express.js", "MongoDB"],
    description:
      "A blood donation platform to connect donors and seekers with real-time search features.",
    liveLink: "https://blood-donation.example.com",
    githubLink: "https://github.com/username/blood-donation-client",
    challenges: [
      "Real-time donor availability management",
      "Firebase authentication integration",
      "User-friendly responsive UI",
    ],
    futurePlans: [
      "SMS notification for urgent requests",
      "Geolocation-based matching",
      "Multi-language support",
    ],
  },
  "portfolio-site": {
    name: "Personal Portfolio Website",
    image: "/images/portfolio.jpg",
    stack: ["React.js", "Tailwind CSS", "React Router"],
    description:
      "A responsive personal portfolio showcasing skills, education, and projects.",
    liveLink: "https://portfolio.example.com",
    githubLink: "https://github.com/username/portfolio-client",
    challenges: [
      "Smooth animations without performance drops",
      "Consistent design across devices",
      "SEO optimization",
    ],
    futurePlans: [
      "Add blog section",
      "Integrate dark/light mode",
      "Multi-language support",
    ],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="text-center text-white mt-20">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <Link to="/#projects" className="text-sky-400 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#2f3337] to-[#26282b] p-8 rounded-lg shadow-md">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-4xl font-bold text-sky-500 mt-6">{project.name}</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="bg-sky-600 text-white text-sm px-3 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-300 mt-4">{project.description}</p>

        <div className="mt-6 space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            GitHub Repo
          </a>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white">Challenges Faced</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-white">Future Plans</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            {project.futurePlans.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Link to="/#projects" className="text-sky-400 underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
