"use client";
import { useRef } from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import {
  FaUser,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"; // Import more icons

export default function Home() {
  const rightContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen overflow-auto">
      {/* Left Container */}
      <div className="h-full w-[40%] fixed p-1 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[90%] w-full border-r-4 border-[#9decf9] rounded-r-full"></div>
        <div className="w-full h-full p-10 text-white flex flex-col justify-start items-center space-y-6 relative">
          <FaUser className="text-6xl self-start" />
          <div className="flex flex-col items-start space-y-6">
            <p className="text-[#9decf9] text-lg">
              Ohh you found me? Howdy! I am
            </p>
            <div>
              <h1 className="text-6xl font-bold">
                Debanand <span className="text-[#9decf9]">Singha.</span>
              </h1>
              <p className="text-sm mt-2">
                Or you could call me KL. That works too . . .
              </p>
            </div>
            <h2 className="text-2xl font-bold text-[#9decf9]">
              Software Engineer
            </h2>
            <p className="text-base leading-relaxed text-[#a0aec0]">
              Hey! How nice of you to look at my personal site
              <br />
              <span className="text-[#9decf9]">Thank you!</span>
              <br /> I am a software engineer that specializes in backend APIs,
              front end integration, and recently found myself studying UX too.
            </p>
            <button className="px-4 py-2 border border-[#9decf9] text-white rounded">
              Contact Me
            </button>
            <div className="flex space-x-4 text-[#a0aec0]">
              <FaLinkedin className="text-2xl" />
              <FaGithub className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaFacebook className="text-2xl" />
              <FaInstagram className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div
        className="h-full w-[60%] fixed right-0 overflow-auto"
        ref={rightContainerRef}
      >
        <Navbar containerRef={rightContainerRef} />
        <AboutMe />
        <div className="border w-full h-[200vh] text text-5xl">2. RIGHT</div>
      </div>
    </div>
  );
}
