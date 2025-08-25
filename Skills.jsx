import React from "react";

const skills = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Python" ,"C++"];

const Skills = () => (
  <div className="p-10">
    <h2 className="text-3xl font-bold">Skills</h2>
    <ul className="mt-4 grid grid-cols-3 gap-4">
      {skills.map((s, i) => (
        <li key={i} className="p-3 border rounded shadow text-center">{s}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
