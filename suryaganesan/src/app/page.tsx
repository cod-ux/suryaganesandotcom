import Image from "next/image";
import VacantButton from "./components/vacantButton";

export default function Home() {
  const jobListClass = "pb-2";
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="px-4 py-2 w-7/12">
        <h1 className="text-3xl text-left">surya g ganesan</h1>
        <p className="py-7 text-left text-base pb-12">
          i&apos;m a software engineer with 2 years of experience building
          llm-based web applications using python, react and langchain. i am
          deeply passionate about <i>agentic ai</i> and its potential to solve
          hard problems. my goal is to work with similarly passionate teams
          tackling new challenges with software and getting better as a builder.
          <br />
          <br />
          one of my favourite things to do before building new ideas is to judge
          how important the problem i am solving is by having lots of
          conversations wilth potential users. i am most excited about projects
          that will solve painful problems for users. in my free time, i love
          immersing in great stories - anime, video games, movies, etc.
        </p>
        <h2 className="text-xl text-left pb-5">jobs</h2>
        <p className="text-left pb-1">my professional journey so far</p>
        <ul className="list-disc pl-7 pb-12">
          <li className="">
            currently working @ <VacantButton />{" "}
            <span className={jobListClass}>(click to fill position)</span>
          </li>
          <li className={jobListClass}>
            <span className="text-stone-600 font-semibold">swe consultant</span>{" "}
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
          </li>
          <li className={jobListClass}>
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
          </li>
          <li className={jobListClass}>
            <span className="text-stone-600 font-semibold">swe associate</span>{" "}
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
          </li>
          <li className={jobListClass}>
            <span className="text-stone-600 font-semibold">marketing</span> @{" "}
            <a
              className="link text-stone-500"
              href="https://www.sap.com/uk/index.html?url_id=auto_hp_redirect_uk"
              target="_blank"
            >
              easy transfer
            </a>{" "}
            : fintech. drove a £35k+ transaction volume in two quarters which
            was 45% of the total volume.
          </li>
        </ul>
        <h2 className="text-xl text-left pb-5">projects</h2>
        <div className="grid grid-cols-3 gap-x-2 gap-y-2">
          <div className="card rounded-2xl shadow-xl">
            <figure className="h-full w-full">
              <Image
                src="/images/polly.png"
                alt="a picture of a cat"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">cat</h2>
              <p>a picture of a cat</p>
            </div>
          </div>
          <div className="card rounded-2xl shadow-xl">
            <figure className="h-full w-full">
              <Image
                src="/images/polly.png"
                alt="a picture of a dog"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">dog</h2>
              <p>a picture of a dog</p>
            </div>
          </div>
          <div className="card rounded-2xl shadow-xl">
            <figure className="h-full w-full">
              <Image
                src="/images/polly.png"
                alt="a picture of a house"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">house</h2>
              <p>a picture of a house</p>
            </div>
          </div>
          <div className="card rounded-2xl shadow-xl">
            <figure className="h-full w-full">
              <Image
                src="/images/polly.png"
                alt="a picture of a car"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">car</h2>
              <p>a picture of a car</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
