"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  // { href: "#projects", label: "Projects" },
  // { href: "#skills", label: "Skills" },
  // { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom >= 0;
      });
      if (currentSection) {
        setActiveSection(`#${currentSection.id}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 flex justify-between px-20 ${
        isTop
          ? ""
          : "bg-black bg-opacity-30 backdrop-blur shadow-sm shadow-slate-700"
      }`}
    >
      <div className="flex flex-col items-start p-4">
        <span className="text-white font-bold text-xl">
          <Link href={"/"}> Deba's Digital Space</Link>
        </span>
      </div>
      <nav className="flex gap-5 p-4">
        {navLinks.map((link) => (
          <div
            key={link.href}
            className={`${
              activeSection === link.href ? "border-b-2" : ""
            } hover:border-b-2`}
          >
            <a
              href={link.href}
              className="text-white"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.label}
            </a>
          </div>
        ))}
      </nav>
    </header>
  );
}
