import VacantButton from "./components/vacantButton";

export default function Home() {
  const jobListClass =
    "p-0 rounded-xl hover:shadow-xl collapse collapse-plus m-0";
  const jobListTitleClass = "collapse-title p-3 pr-16";
  const projectClass =
    "collapse collapse-arrow border-base-200 bg-base-100 rounded-2xl border";
  const projectTitleClass = "collapse-title text-base font-medium";
  const projectContentClass = "collapse-content";

  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="px-4 py-2 w-5/12">
        <h1 className="text-2xl text-left">surya g ganesan</h1>
        <p className="pt-7 text-left text-base pb-12">
          i&apos;m a software engineer with 2 years of experience building
          llm-based web applications using python, react and langchain. i am
          deeply passionate about <i>agentic ai</i> and its potential to solve
          hard problems. my goal is to work with similarly passionate teams
          tackling new challenges with software and getting better as a builder.
          <br />
          <br />
          one of my favourite things to do before building new ideas is to judge
          how important the problem is by having lots of conversations wilth
          potential users. i am most excited about projects that will solve
          painful problems for users. in my free time, i love immersing in great
          stories - anime, video games, movies, etc.
        </p>

        <h2 className="text-xl text-left pb-2">jobs i&apos;ve had</h2>
        <div className="pb-10">
          <div className="p-3">
            currently working @ <VacantButton />{" "}
            <span> (click to fill position)</span>
          </div>
          <div className={jobListClass}>
            <div className={jobListTitleClass}>
              <span className="text-stone-600 font-semibold">
                swe consultant
              </span>{" "}
              @{" "}
              <a
                className="link text-stone-500"
                href="https://reform.uk/"
                target="_blank"
              >
                reform think tank
              </a>{" "}
              : research firm. built a RAG app that reduced research time by 30%
              for them.
            </div>
          </div>
          <div className={jobListClass}>
            <div className={jobListTitleClass}>
              <span className="text-stone-600 font-semibold">swe intern</span> @{" "}
              <a
                className="link text-stone-500"
                href="https://www.11x.ai/worker/mike"
                target="_blank"
              >
                11x
              </a>{" "}
              : ai voice agent startup. developed a feature to transform
              cold-calling agents into call-answering agents that saves ~2 hours
              each customer.
            </div>
          </div>
          <div className={jobListClass}>
            <div className={jobListTitleClass}>
              <span className="text-stone-600 font-semibold">
                swe associate
              </span>{" "}
              @{" "}
              <a
                className="link text-stone-500"
                href="https://www.sap.com/uk/index.html?url_id=auto_hp_redirect_uk"
                target="_blank"
              >
                s a p
              </a>{" "}
              : built internal llm tools for employees, including a coding
              assistant for data analysts.
            </div>
          </div>
          <div className={jobListClass}>
            <div className={jobListTitleClass}>
              <span className="text-stone-600 font-semibold">marketing</span> @{" "}
              <a
                className="link text-stone-500"
                href="https://www.easytransferglobal.com/"
                target="_blank"
              >
                easy transfer
              </a>{" "}
              : fintech. drove a £35k+ transaction volume in two quarters which
              was 45% of the total volume.
            </div>
          </div>
        </div>
        <h2 className="text-xl text-left pb-5">projects</h2>
        <div className="grid grid-cols-1 gap-5 pb-20">
          <div className={projectClass}>
            <div className={projectTitleClass}>ai voice agent</div>
            <div className={projectContentClass}>
              <p>temp content</p>
            </div>
          </div>
          <div className={projectClass}>
            <div className={projectTitleClass}>voice agent testing tool</div>
            <div className={projectContentClass}>
              <p>temp content</p>
            </div>
          </div>
          <div className={projectClass}>
            <div className={projectTitleClass}>
              code gen agent for data analysis
            </div>
            <div className={projectContentClass}>
              <p>temp content</p>
            </div>
          </div>
          <div className={projectClass}>
            <div className={projectTitleClass}>ai generated blog posts</div>
            <div className={projectContentClass}>
              <p>temp content</p>
            </div>
          </div>
          <div className={projectClass}>
            <div className={projectTitleClass}>ai generated blog posts</div>
            <div className={projectContentClass}>
              <p>temp content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
