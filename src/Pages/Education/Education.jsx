
const educations = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    year: "July 2023 - July 2027",
    result: "Ongoing",
    details: [
      "Department of Computer Science and Engineering.",
      "Currently focusing on Data Structures, Algorithms, and Web Development.",
      "Active participant in university programming contests and tech seminars.",
    ],
  },
  {
    degree: "HSC (Science)",
    institution: "Dighapatia M.K. college, Natore",
    year: "2020 - 2022",
    details: ["Focused on Physics, Chemistry, and Higher Mathematics."],
  },
];


const Education = () => {

  return (
    <section className="secondary mx-auto px-6 py-16" id="education">
      <h2 className="text-4xl font-bold text-center text-sky-500 mb-10">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {educations.map((edu, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#2f3337] to-[#26282b] p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-gray-300 mt-1">{edu.institution}</p>
              </div>

              <div className="text-right">
                <span className="inline-block bg-sky-600 text-white text-sm px-3 py-1 rounded">
                  {edu.year}
                </span>
                {edu.result && (
                  <p className="text-gray-300 mt-2">{edu.result}</p>
                )}
              </div>
            </div>

            {edu.details && edu.details.length > 0 && (
              <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                {edu.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;
