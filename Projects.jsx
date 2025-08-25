import React from "react";

const projects = [
  { title: "TicTacToe App", link: "https://github.com/neerajpatidar45/TicTacToe" },
  { title: "Weather App", link: "https://github.com/neerajpatidar45/WeatherApp" },
  { title: "Portfolio Website", link: "" },
];

const Projects = () => (
  <div className="p-10">
    <h2 className="text-3xl font-bold">Projects</h2>
    <ul className="mt-4">
      {projects.map((p, i) => (
        <li key={i} className="mb-2">
          <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-600 underline">
            {p.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
