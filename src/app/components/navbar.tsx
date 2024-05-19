"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  return (
    <div className="absolute top-24" style={{ top: "15%", left: "10%" }}>
      <ul className="flex flex-col space-y-1 md:space-y-6">
        <li className="group relative inline-flex">
          <GradientLink href="/" text="home" imgSrc="/images/house.png" />
        </li>
        <li className="group relative inline-flex">
          <GradientLink
            href="/about"
            text="about"
            imgSrc="/images/SohamEmoji.png"
          />
        </li>
        <li className="group relative inline-flex">
          <GradientLink
            href="/work"
            text="work"
            imgSrc="/images/desktop_computer.png"
          />
        </li>
        <li className="group relative inline-flex">
          <GradientLink
            href="/projects"
            text="projects"
            imgSrc="/images/books.png"
          />
        </li>
      </ul>
    </div>
  );
}

function GradientLink({
  href,
  text,
  imgSrc,
}: {
  href: string;
  text: string;
  imgSrc: string;
}) {
  const [gradientStyle, setGradientStyle] = useState({});
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (elementRef.current) {
      const { left, top, width, height } =
        elementRef.current.getBoundingClientRect();
      const x = ((event.clientX - left) / width) * 100;
      const y = ((event.clientY - top) / height) * 100;

      setGradientStyle({
        background: `radial-gradient(circle at ${x}% ${y}%, #bdd0de, #FFFDF5)`,
      });
    }
  };

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      element.addEventListener("mousemove", handleMouseMove);

      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div ref={elementRef}>
      <Link
        href={href}
        style={gradientStyle}
        className="shadow-lg flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 group-hover:bg-gray-200 rounded-full transition-colors duration-500 ease-in-out"
      >
        <Image src={imgSrc} alt={text} width={24} height={24} />
        <span className="text-orange font-sf-mono uppercase font-bold">
          {text}
        </span>
      </Link>
    </div>
  );
}
