"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -50% 0px" }
    );

    const sections = navLinks.map((link) => document.querySelector(link.href));

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
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
              activeSection === link.href ? "border-b-4 border-[#836FFF]" : ""
            } hover:border-b-4 hover:border-[#836FFF]`}
          >
            <a
              href={link.href}
              className="text-white font-semibold"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
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
