"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <div>
      {isMobile && (
        <div className="absolute top-2 right-2 z-30">
          <button
            className="w-10 h-10 bg-black rounded-full flex flex-col justify-center items-center"
            onClick={() => {
              setIsMobileNavbarOpen(!isMobileNavbarOpen);
            }}
          >
            <div className="w-3 h-0.5 bg-white mb-1" />
            <div className="w-3 h-0.5 bg-white" />
          </button>
        </div>
      )}
      {(isMobileNavbarOpen || !isMobile) && (
        <div className="absolute top-2 left-0 md:top-[15%] md:left-[10%] ml-2">
          <ul className="flex flex-col space-y-6">
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
            <li className="group relative inline-flex">
              <GradientLink
                href="/investing"
                text="investing"
                imgSrc="/images/investing.png"
              />
            </li>
          </ul>
        </div>
      )}
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
        background: `radial-gradient(circle at ${x}% ${y}%, #dbd2ce, #FFFDF5)`,
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
        className="shadow-lg flex items-center space-x-1 md:space-x-2 md:py-3 md:px-6 py-1.5 px-3 bg-[#edebe1] group-hover:bg-gray-200 rounded-full transition-colors duration-500 ease-in-out"
      >
        <Image
          src={imgSrc}
          alt={text}
          width={24}
          height={24}
          className="md:w-6 md:h-6 w-5 h-5"
        />
        <span className="text-orange font-sf-mono uppercase font-bold md:text-md text-sm">
          {text}
        </span>
      </Link>
    </div>
  );
}
