"use client";

import React, { useState } from "react";

const jobs = [
  {
    id: "job1",
    title: "swe consultant",
    company: "reform think tank",
    description:
      "i developed a full stack RAG app for the research team using nextjs, django and langchain which resulted in 30% lesser research time for the team.",
    link: "https://www.github.com/cod-ux/polly-agent",
  },
  {
    id: "job2",
    title: "swe intern",
    company: "11x",
    description:
      "ai voice agent startup. i developed a feature to transform cold-calling agents into call-answering agents that saves the team ~2 hrs per customer and ~10 hrs per month.",
    link: "https://www.github.com/cod-ux/rio-voice-agent",
  },
  {
    id: "job3",
    title: "swe associate",
    company: "s a p",
    description:
      "saas company. i built new internal llm tools for employee productivity, including a coding assistant for data analysts.",
    link: "https://www.github.com/cod-ux/sap-llm-tools",
  },
  {
    id: "job4",
    title: "marketing",
    company: "easy transfer",
    description:
      "fintech startup. drove a £35k+ transaction volume in two quarters which was 45% of the total volume.",
    link: "https://www.github.com/cod-ux/easytransfer-marketing",
  },
  // Add more jobs here...
];

const JobList: React.FC = () => {
  const jobListClassClose =
    "p-0 rounded-xl hover:shadow-xl collapse collapse-plus m-0 collapse-close";
  const jobListClassOpen =
    "p-0 rounded-xl border border-stone-300 collapse collapse-plus collapse-open";

  const [openJobs, setOpenJobs] = useState<Record<string, boolean>>({});

  const toggleJobClass = (jobId: string) => {
    setOpenJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-1">
      {jobs.map((job) => (
        <div
          key={job.id}
          className={openJobs[job.id] ? jobListClassOpen : jobListClassClose}
          onClick={() => toggleJobClass(job.id)}
        >
          <div className="collapse-title pr-16">
            <span className="text-stone-600 font-semibold">{job.title}</span> @{" "}
            <a
              className="link text-stone-500"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {job.company}
            </a>
          </div>
          {openJobs[job.id] && (
            <div className="collapse-content text-base">
              <p>{job.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobList;
