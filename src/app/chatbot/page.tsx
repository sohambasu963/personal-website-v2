import React from "react";
import MacTerminal from "../components/MacTerminal";

export default function Chatbot() {
  return (
    <div className="mt-16 mb-8 flex flex-col items-center">
      <div className="typewriter">
        <h1 className="text-4xl font-tiempos-headline">Soham GPT</h1>
      </div>

      <div className="md:w-[65%] w-full md:mt-8 mt-4">
        <p className="font-dm-sans md:text-xl text-md text-center md:mb-2 mb-1">
          An AI chatbot that read my tweets and learned to talk like me
        </p>
        <MacTerminal />
      </div>
    </div>
  );
}
