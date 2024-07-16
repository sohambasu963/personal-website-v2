"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { decode } from "punycode";

export default function MacTerminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { text: "Hi, I'm Soham -- let's chat. Ask me what I'm working on!", prefix: "$ SohamGPT: ", isAI: true },
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

        const response = await fetch(`${serverAddress}?message=${encodeURIComponent(message)}`, {
            method: "GET",
            headers: {
                "Content-Type": "text/event-stream",
            },
        });
        if (!response.body) {
            throw new Error("Response body is null");
        }

        const reader = response.body
          .pipeThrough(new TextDecoderStream())
          .getReader();

        let text = "";
        while (true) {
            const {value, done} = await reader.read();
            if (done) break;
            console.log("Chunk:", value);
            text += value;
            setOutput([...output,
                { text: `${input}`, prefix: "$ You: ", isAI: false },
                { text: `${text}`, prefix: "$ SohamGPT: ", isAI: true }
            ]);
        }

    } catch (error) {
        setOutput([
            ...output,
            { text: `${input}`, prefix: "$ You: ", isAI: false },
            { text: `ERROR -- Could not reach the server.`, prefix: "$ SohamGPT: ", isAI: true }
        ]);
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;
    setOutput([...output, 
        { text: `${input}`, prefix: "$ You: ", isAI: false },
        { text: "...", prefix: "$ SohamGPT: ", isAI: true }
    ]);
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
        className="p-4 text-white md:h-[28rem] h-[24rem] overflow-y-auto"
      >
        {output.map((line, index) => (
          <pre
            key={index}
            className={`font-sf-mono whitespace-pre-wrap break-words ${index % 2 === 1 ? "mt-4" : ""}`}
          >
            <span className={`${line.isAI ? "text-green-500" : "text-blue-400"}`}>
              {line.prefix}
            </span>
            <span className="text-white">
              {line.text}
            </span>
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
        <button type="submit" className="ml-2">
          <img src="/images/send-button.png" alt="Send" className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
}
