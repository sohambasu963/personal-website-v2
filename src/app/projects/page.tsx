import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="typewriter">
        <h1 className="text-4xl font-tiempos-headline">Projects</h1>
      </div>

      <div className="mt-12 md:w-3/5 w-full text-left">
        <ul className="list-disc space-y-4 md:space-y-8">
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <a
                href="https://www.socratica.info/"
                target="_blank"
                className="font-bold border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Socratica Website
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Built a website for Socratica, with a map that tracks nodes from around the world
            </p>
          </li>
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <a
                href="https://invoicer-soham.vercel.app/"
                target="_blank"
                className="font-bold border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Invoicer
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Built an app that allows users to generate and export custom invoices
            </p>
          </li>
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <a
                href="https://finance-portfolio.vercel.app/signup"
                target="_blank"
                className="font-bold border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Portfolio Builder
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Developed a full-stack app that builds custom portfolios for users
            </p>
          </li>
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <a
                href="https://github.com/sohambasu963/MealMetrics"
                target="_blank"
                className="font-bold border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Meal Metrics
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Created an app that uses a picture of your meal to identify its nutritional value
            </p>
          </li>
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <a
                href="https://devpost.com/software/agents-school"
                target="_blank"
                className="font-bold border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                School AI Agent
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Developed an AI agent that solves assignments from MIT OpenCourseWare (won our team a hackathon!)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
