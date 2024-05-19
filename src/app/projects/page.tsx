import React from "react";

export default function ProjectsPage() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="typewriter">
        <h1 className="text-4xl font-tiempos-headline">Projects</h1>
      </div>

      <div className="mt-8 mb-8 w-3/5 text-left">
        <a
          href="https://www.socratica.info/"
          target="_blank"
          className="font-dm-sans font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
        >
          Socratica Website
        </a>
        <p className="mb-6 tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1">
          Built a website for Socratica, with a map that tracks nodes from
          around the world
        </p>
        <a
          href="https://invoicer-soham.vercel.app/"
          target="_blank"
          className="tracking-tight font-dm-sans font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
        >
          Invoicer
        </a>
        <p className="mb-6 font-dm-sans text-off-black md:text-lg text-md mt-1">
          Built an app that allows users to generate and export custom invoices
        </p>
        <a
          href="https://finance-portfolio.vercel.app/signup"
          target="_blank"
          className="tracking-tight font-dm-sans font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
        >
          Portfolio Builder
        </a>
        <p className="mb-6 font-dm-sans text-off-black md:text-lg text-md mt-1">
          Developed a full-stack app that builds custom portfolios for users
        </p>
        <a
          href="https://github.com/sohambasu963/MealMetrics"
          target="_blank"
          className="tracking-tight font-dm-sans font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
        >
          Meal Metrics
        </a>
        <p className="mb-6 font-dm-sans text-off-black md:text-lg text-md mt-1">
          Created an app that uses a picture of your meal to identify its
          nutritional value
        </p>
        <a
          href="https://devpost.com/software/agents-school"
          target="_blank"
          className="tracking-tight font-dm-sans font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
        >
          School AI Agent
        </a>
        <p className="mb-6 font-dm-sans text-off-black md:text-lg text-md mt-1">
          Developed an AI agent that solves assignments from MIT OpenCourseWare
          (won our team a hackathon!)
        </p>
      </div>
    </div>
  );
}
