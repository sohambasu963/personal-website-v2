import React from "react";

export default function AboutPage() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="typewriter">
        <h1 className="text-4xl font-tiempos-headline">About Me</h1>
      </div>

      <div className="flex flex-row justify-between md:w-3/5 w-full mt-12 space-x-4">
        <div className="w-1/2 text-left">
          <h2 className="gradient text-xl md:text-2xl font-tiempos-headline tracking-tight"
              style={{
                background: "linear-gradient(to right, #e06c0d, #ab530a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
            What I'm currently up to:
          </h2>
          <ul className="list-disc mt-4 space-y-2">
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Building out cool software for startups
            </li>
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Hosting{" "}
              <a
                href="https://www.socratica.info/"
                target="_blank"
                className="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Socratica
              </a>{" "}
              sessions (I built the website!!)
            </li>
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Tinkering with LLMs and the latest frontend frameworks
            </li>
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Playing some 🔥 jazz improv on the piano
            </li>
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Playing bullet chess to improve my reaction time
            </li>
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Working out, swimming, playing soccer
            </li>
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              All of the above
            </li>
          </ul>
        </div>
        <div className="w-1/2 text-left">
          <h2 className="gradient text-xl md:text-2xl font-tiempos-headline tracking-tight"
              style={{
                background: "linear-gradient(to right, #e06c0d, #ab530a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
            What keeps me going:
          </h2>
          <ul className="list-disc mt-4 space-y-2">
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Playing pianos on campus and{" "}
              <a
                href="https://youtu.be/v9qndL3QweY"
                target="_blank"
                className="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                recording reactions
              </a>
            </li>
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Signing up for as many intramural sports as possible
            </li>
            <li className="tracking-tight font-dm-sans text-off-black md:text-lg text-md">
              Hosting friends and building a community
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
