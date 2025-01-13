import JobList from "./components/jobList";
import Projects from "./components/projects";
import VacantButton from "./components/vacantButton";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="px-4 py-2 w-11/12 justify-center md:w-11/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
        <h1 className="text-2xl text-left">surya g ganesan</h1>
        <p className="pt-7 text-left text-base pb-12">
          i&apos;m a software engineer with 2 years of experience building
          llm-based web applications using python, react and langchain. i am
          especially passionate about <i>agentic ai</i> and its potential to
          solve hard problems. my goal is to work with similarly passionate
          teams tackling new challenges with software and getting better as a
          builder.
          <br />
          <br />
          one of my favourite things to do before building new ideas is to judge
          how important the problem is. i am most excited about projects that
          solve painful problems for users. in my free time, i love immersing in
          great stories - anime, video games, movies, etc.
        </p>

        <div className="pb-12">
          <h2 className="text-xl text-left pb-3 justify-start">
            jobs i&apos;ve had
          </h2>

          <div className="p-3">
            currently working @ <VacantButton />{" "}
            <span> (click to fill position)</span>
          </div>
          <JobList />
        </div>
        <div className="pb-14">
          <h2 className="text-xl text-left pb-5">projects</h2>
          <Projects />
        </div>
      </div>
    </div>
  );
}
