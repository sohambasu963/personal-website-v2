import React from "react";

export default function WorkPage() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="typewriter">
        <h1 className="text-4xl font-tiempos-headline">Work</h1>
      </div>

      <div className="mt-12 md:w-3/5 w-full text-left">
        <ul className="list-disc space-y-4 md:space-y-8">
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <span className="font-bold">
                Software Development Engineering Intern
              </span>{" "}
              @
              <a
                href="https://www.amazon.com/"
                target="_blank"
                className="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Amazon
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Developed software that supports Amazon Credit Cards in the Payments org
            </p>
          </li>
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <span className="font-bold">Full Stack Engineering Intern</span> @
              <a
                href="https://www.bronco.ai/"
                target="_blank"
                className="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Bronco AI
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Built LLM-backed prototypes that help factories run more
              efficiently
            </p>
          </li>
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <span className="font-bold">Software Engineering Intern</span> @
              <a
                href="https://www.portfolioxpressway.com/"
                target="_blank"
                className="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Portfolio Xpressway
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Built dashboards and data visualizations that help advisors and
              clients track their investments
            </p>
          </li>
          <li>
            <p className="tracking-tight font-dm-sans md:text-lg text-md">
              <span className="font-bold">Full Stack Engineering Intern</span> @
              <a
                href="https://www.birdseyeglobal.com/"
                target="_blank"
                className="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Birdseye
              </a>
            </p>
            <p className="tracking-tight font-dm-sans text-off-black md:text-lg text-md mt-1 md:mt-2">
              Developed an ad-tech query engine to help clients track customer
              insights and boost ad traffic
            </p>
          </li>
        </ul>
      </div>

      {/* <div className="w-full mt-8 ml-10 flex justify-center">
        <iframe
          title="Resume"
          src="/Soham_Basu_Resume.pdf"
          className="w-4/5 h-screen"
        >
          This browser does not support PDFs. Please download the PDF to view
          it:
          <a href="/Soham_Basu_Resume.pdf">Download PDF</a>.
        </iframe>
      </div> */}
    </div>
  );
}
