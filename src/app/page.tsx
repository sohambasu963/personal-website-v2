import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="typewriter">
        <h1 className="text-4xl font-tiempos-headline">Hi, I'm Soham!</h1>
      </div>

      <div
        className="md:w-4/5 flex flex-col items-center mt-12 space-y-2"
        style={{ width: "90%" }}
      >
        <p className="md:text-lg text-md font-dm-sans text-off-black text-center tracking-tight">
          <span
            className="font-bold italic"
            style={{
              background: "linear-gradient(to right, #e06c0d, #ab530a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CS + Finance
          </span>{" "}
          at the University of Waterloo!
        </p>

        <p className="md:text-lg text-md font-dm-sans text-off-black text-center tracking-tight">
          Currently interning at Amazon as a{" "}
          <span
            className="font-bold italic"
            style={{
              background: "linear-gradient(to right, #e06c0d, #ab530a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Software Development Engineer
          </span>{" "}
          in Vancouver
        </p>

        <p className="md:text-lg text-md font-dm-sans text-off-black text-center tracking-tight">
          Actively seeking challenging projects and internship opportunities
        </p>
        <p className="md:text-lg text-md font-dm-sans text-off-black text-center tracking-tight">
          Reach me at {""}
          <a
            href="mailto:sohambasu963@gmail.com"
            className="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
          >
            sohambasu963@gmail.com
          </a>
          or {""}
          <a
            href="https://twitter.com/sohambasu963"
            target="_blank"
            className="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
          >
            @sohambasu963
          </a>
          anywhere else
        </p>
      </div>

      <div className="mt-12">
        <Image
          src="/images/Soham.png"
          alt="Soham"
          width={450}
          height={450}
          className="rounded"
        />
      </div>
    </div>
  );
}
