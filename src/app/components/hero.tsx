import Image from "next/image";
import { FaGithub, FaFileAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="home"
      className="bg-slate-800 h-screen relative flex items-center justify-center"
    >
      <Image
        src="/images/background1.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-35 bg-blink-appear"
      />
      <div className="absolute text-center text-white w-2/3">
        <h1 className="text-5xl font-bold mb-4 text-3d text-gray-200 ">
          Welcome to My Digital World
        </h1>
        <p className="text-xl leading-relaxed mb-10 text-gray-300">
          I'm a Computer Science and Engineering student specializing in full
          stack web development, app development, and a growing expertise in
          cyber security.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#836FFF] text-white px-6 py-3 page-corner hover:bg-[#211951] transition flex items-center gap-2 shadow-lg transform hover:scale-105 font-semibold"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="/path/to/your/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#548CFF] text-white px-6 py-3 page-corner hover:bg-[#000D6B] transition flex items-center gap-2 shadow-lg transform hover:scale-105 font-semibold"
          >
            <FaFileAlt />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
