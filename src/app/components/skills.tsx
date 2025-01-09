import React from "react";

const skills = {
  languages: [
    { name: "JavaScript", image: "/path/to/javascript.png" },
    { name: "TypeScript", image: "/path/to/typescript.png" },
    // ...add more languages
  ],
  frameworks: [
    { name: "React", image: "/path/to/react.png" },
    { name: "Node.js", image: "/path/to/nodejs.png" },
    // ...add more frameworks
  ],
  tools: [
    { name: "Git", image: "/path/to/git.png" },
    { name: "Webpack", image: "/path/to/webpack.png" },
    // ...add more tools
  ],
  // ...add more categories as needed
};

const Skills: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-950 to-black flex flex-col items-center justify-center px-8 w-full py-16">
      <h2 className="text-5xl font-bold mb-10 text-[#836FFF] tracking-wide">
        My Skills
      </h2>
      {Object.keys(skills).map((category) => (
        <div key={category} className="w-full md:w-4/5 mb-8">
          <h3 className="text-3xl font-semibold text-white mb-4 capitalize">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills[category].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-3 flex items-center shadow-md custom-rect-shape"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 mr-3"
                />
                <p className="text-lg font-semibold text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
