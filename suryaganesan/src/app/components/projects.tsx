"use client";

import React, { useState } from "react";

const projects = [
  {
    id: "project1",
    title: "ai voice agent",
    name: "rio",
    description:
      "built a llama-powered voice agent, rio, that connects to your company's database and answers any finance question over a phone call. developed this during meta's llama impact hackathon in london.",
    techStack: ["python", "langchain", "openai", "fastapi", "pydantic"],
    link: "https://github.com/cod-ux/rio-voice-agent",
    image: "/rio.png",
  },
  {
    id: "project2",
    title: "voice agent testing tool",
    description: "temp content",
  },
  {
    id: "project3",
    title: "code gen agent for data analysis",
    description: "temp content",
  },
];

const Projects: React.FC = () => {
  const projectClassClose =
    "collapse collapse-arrow border-base-200 bg-base-100 rounded-2xl border collapse-close";
  const projectClassOpen =
    "collapse collapse-arrow border-base-200 bg-base-100 rounded-2xl border collapse-open";

  const projectTitleClass = "collapse-title text-base font-medium";
  const projectContentClass = "collapse-content";

  // State to track which projects are open
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});

  const toggleProjectClass = (projectId: string): void => {
    setOpenProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId], // Toggle the clicked project's state
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-5">
      {projects.map((project) => (
        <div
          key={project.id}
          className={
            openProjects[project.id] ? projectClassOpen : projectClassClose
          }
          onClick={() => toggleProjectClass(project.id)}
        >
          <div className={projectTitleClass}>{project.title}</div>
          {openProjects[project.id] && (
            <div className={projectContentClass}>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
