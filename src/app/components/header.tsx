"use client";
import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
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
          Deba's Digital Space
        </span>
      </div>
      <nav className="flex gap-5 p-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white  hover:underline"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
