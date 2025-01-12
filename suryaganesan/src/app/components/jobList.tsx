"use client";

import React, { useState } from "react";

const jobs = [
  {
    id: "job1",
    title: "swe consultant",
    company: "reform think tank",
    description:
      "built a full-stack RAG app that reduced research time by 30% for the research company.",
    link: "https://reform.uk/",
  },
  {
    id: "job2",
    title: "swe intern",
    company: "11x",
    description:
      "ai voice agent startup. i developed a feature to transform cold-calling agents into call-answering agents that saves ~2 hours each customer.",
    link: "https://www.11x.ai/worker/mike",
  },
  {
    id: "job3",
    title: "swe associate",
    company: "s a p",
    description:
      "built internal llm tools for employees, including a coding assistant for data analysts.",
    link: "https://www.sap.com/uk/index.html?url_id=auto_hp_redirect_uk",
  },
  {
    id: "job4",
    title: "marketing",
    company: "easy transfer",
    description:
      "fintech startup. drove a £35k+ transaction volume in two quarters which was 45% of the total volume.",
    link: "https://www.easytransferglobal.com/",
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
            <div className="collapse-content">
              <p>{job.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobList;
