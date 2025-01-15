"use client";
import { useRef } from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";

export default function Home() {
  const rightContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen overflow-auto">
      {/* Left Container */}
      <div className="h-full w-[40%] border fixed p-1">
        <div className=" w-full h-full text text-5xl">LEFT</div>
      </div>
      {/* Right Container */}
      <div
        className="h-full w-[60%] fixed right-0 overflow-auto"
        ref={rightContainerRef}
      >
        <Navbar containerRef={rightContainerRef} />

        <AboutMe />
        <div className="bg-purple-200 w-full h-[200vh] text text-5xl">
          2. RIGHT
        </div>
      </div>
    </div>
  );
}
