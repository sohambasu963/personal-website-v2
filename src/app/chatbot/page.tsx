import React from "react";
import MacTerminal from "../components/MacTerminal";

export default function Chatbot() {
  return (
    <div className="mt-16 mb-8 flex flex-col items-center">
      <div className="typewriter">
        <h1 className="text-4xl font-tiempos-headline">Soham GPT</h1>
      </div>

      <div className="md:w-[65%] w-full mt-8">
        <p className="font-dm-sans text-xl text-center mb-2">
          An AI Chatbot that pretends to be me
          <br />
          Try asking it about me, or what I&apos;m currently up to!
        </p>
        <MacTerminal />
      </div>
    </div>
  );
}
