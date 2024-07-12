"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function MacTerminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "$ SohamGPT: Hi, I'm Soham -- let's chat!",
  ]);

  const terminalRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const submitMessage = async (message: string) => {
    try {
      const serverAddress = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
      if (!serverAddress) {
        throw new Error("Server address is not defined");
      }
      const res = await axios.get(serverAddress, { params: { message } });
      setOutput([...output, `$ You: ${input}`, `$ SohamGPT: ${res.data}`]);
    } catch (error) {
      console.error("There was an error sending the message!", error);
      setOutput([
        ...output,
        `$ You: ${input}`,
        `$ SohamGPT: ERROR -- Could not reach the server.`,
      ]);
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;
    setOutput([...output, `$ You: ${input}`]);

    submitMessage(input);
    setInput("");
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center p-2 bg-gray-700">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div
        ref={terminalRef}
        className="p-4 text-white h-[28rem] overflow-y-auto"
      >
        {output.map((line, index) => (
          <pre
            key={index}
            className={`font-sf-mono whitespace-pre-wrap break-words ${index % 2 === 1 ? "mt-4" : ""}`}
          >
            {line}
          </pre>
        ))}
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="flex py-2 px-4 bg-gray-700 text-lg font-sf-mono"
      >
        <span className="text-white mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-grow bg-transparent border-none outline-none text-white"
        />
      </form>
    </div>
  );
}
