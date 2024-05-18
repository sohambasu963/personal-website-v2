import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className="absolute top-24" style={{ top: "15%", left: "10%" }}>
      <ul className="flex flex-col space-y-1 md:space-y-6">
        <li className="group relative inline-flex">
          <Link href="/" className="shadow-sm flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 group-hover:bg-gray-200 rounded-full transition-colors duration-500 ease-in-out">
            <Image src="/images/house.png" alt="Home" width={24} height={24} />
            <span className="text-orange font-sf-mono uppercase font-bold">home</span>
          </Link>
        </li>
        <li className="group relative inline-flex">
          <Link href="/about" className="shadow-sm flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 group-hover:bg-gray-200 rounded-full transition-colors duration-500 ease-in-out">
            <Image src="/images/SohamEmoji.png" alt="Soham" width={24} height={24} />
            <span className="text-orange font-sf-mono uppercase font-bold">about</span>
          </Link>
        </li>
        <li className="group relative inline-flex">
          <Link href="/work" className="shadow-sm flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 group-hover:bg-gray-200 rounded-full transition-colors duration-500 ease-in-out">
            <Image src="/images/desktop_computer.png" alt="Working" width={24} height={24} />
            <span className="text-orange font-sf-mono uppercase font-bold">work</span>
          </Link>
        </li>
        <li className="group relative inline-flex">
          <Link href="/projects" className="shadow-sm flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 group-hover:bg-gray-200 rounded-full transition-colors duration-500 ease-in-out">
            <Image src="/images/books.png" alt="Projects" width={24} height={24} />
            <span className="text-orange font-sf-mono uppercase font-bold">projects</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}