"use client";
import { useState, useEffect, useRef } from "react";

import { RefObject } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function Navbar({ containerRef }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const scrollHeight = containerRef.current.scrollHeight;
        setIsScrolled(scrollTop > 500); // Adjusted scroll threshold
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef]);

  return (
    <>
      <motion.nav
        key="main-navbar"
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-[#121212] bg-opacity-80 p-4 sticky top-0`}
      >
        <ul className="flex justify-end space-x-4">
          <li className="text-white">
            <a href="#about">About</a>
          </li>
          <li className="text-white">
            <a href="#experience">Experience</a>
          </li>
          <li className="text-white">
            <a href="#work">Work</a>
          </li>
          <li className="text-white">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-white">
            <a href="/blogs">Blogs</a>
          </li>
        </ul>
      </motion.nav>
      {isScrolled && (
        <motion.nav
          key="scrolled-navbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#121212] bg-opacity-80 fixed p-10 h-56 right-0 top-0"
        >
          <ul className="flex flex-col justify-center">
            <li className="text-white">
              <a href="#about">About</a>
            </li>
            <li className="text-white">
              <a href="#experience">Experience</a>
            </li>
            <li className="text-white">
              <a href="#work">Work</a>
            </li>
            <li className="text-white">
              <a href="#contact">Contact</a>
            </li>
            <li className="text-white">
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
}
