"use client";

import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: "project1",
    title: "voice agent optimisation tool (wip)",
    name: "??",
    description:
      "work in progress. a typescript based prompt optimisation tool for voice agents.",
    techStack: ["typescript", "langchain"],
    link: "https://github.com/cod-ux/voice-agent-optimizer",
  },
  {
    id: "project2",
    title: "ai voice agent",
    name: "rio",
    description:
      "built a llama-powered voice agent, rio, that connects to your company's database that can answer questions in real-time by querying a database using LLM-generated SQL code. developed this during meta's llama impact hackathon in london.",
    techStack: ["python", "langchain", "pipecat", "flask", "pydantic"],
    link: "https://github.com/cod-ux/rio-voice-agent",
    image: "/images/rio.jpg",
    imageWidth: 300,
  },

  {
    id: "project3",
    title: "coding assistant for data analysis",
    name: "pepper",
    description:
      "web app that runs data analysis from natural language queries.",
    techStack: ["python", "langgraph", "pydantic", "streamlit", "supabase"],
    link: "https://github.com/cod-ux/pepper-ai",
    image: "/images/pepper.png",
    imageWidth: 300,
    website: "https://www.pepperapp.co.uk",
    demo: "https://youtu.be/4Jv0DpR9PQs",
  },
  {
    id: "project4",
    title: "research assistant for policy analysis",
    name: "polly",
    description:
      "full stack chatbot based on retrieval augmented generation, that combs through research papers to answer questions. built and deployed this for the 15 person resarch team at reform think tank.",
    techStack: [
      "nextjs",
      "django",
      "langchain",
      "python",
      "typescript",
      "chromadb",
    ],
    link: "https://github.com/cod-ux/polly-agent",
    image: "/images/polly.png",
    imageWidth: 300,
  },
  {
    id: "project5",
    title: "budgeting app that roasts you",
    name: "guilty",
    description:
      "cross platform mobile app that connects with your bank account to roast you when you overspend.",
    techStack: ["flutter", "python", "flask", "plaid", "firebase"],
    link: "https://github.com/cod-ux/the-guilty-app",
    image: "/images/guilty.webp",
    imageWidth: 200,
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
    <div className="grid grid-cols-1 gap-3">
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
              <p className="font-medium text-lg italic pb-2">{project.name}</p>
              <p className="pb-2">{project.description}</p>
              <p className="pb-2 text-sm">
                <span className="font-semibold">tech stack:</span>{" "}
                {project.techStack.join(", ")}
              </p>
              <div className="pb-4">
                <div>
                  <a
                    className="link text-blue-600"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    repo
                  </a>
                </div>
                <div>
                  {project.website && (
                    <a
                      className="link text-blue-600"
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                  )}
                </div>
                <div>
                  {project.demo && (
                    <a
                      className="link text-blue-600"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      demo
                    </a>
                  )}
                </div>
              </div>

              {project.image && (
                <Image
                  className=" rounded-2xl"
                  src={project.image}
                  alt={project.title}
                  width={project.imageWidth}
                  height={project.imageWidth}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
