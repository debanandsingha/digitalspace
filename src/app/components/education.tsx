"use client";

import { useEffect, useRef } from "react";
import { FaGraduationCap } from "react-icons/fa"; // Import the icon

interface EducationProps {
  id: string;
  header: string;
  items: {
    date: string;
    degree: string;
    institution: string;
  }[];
}

export default function Education({ id, header, items }: EducationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    let items: NodeListOf<Element> = sectionRef.current?.querySelectorAll(
      ".timeline-item-horizontal"
    ) as NodeListOf<Element>;
    if (sectionRef.current) {
      items = sectionRef.current.querySelectorAll(".timeline-item-horizontal");
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  useEffect(() => {
    const timeline = sectionRef.current?.querySelector(".timeline-horizontal");
    if (timeline) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              timeline.classList.add("visible");
              observer.unobserve(timeline);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(timeline);
      return () => observer.unobserve(timeline);
    }
  }, []);

  return (
    <div
      id={id}
      className="bg-gradient-to-r from-gray-700 via-gray-950 to-black flex flex-col items-center justify-center px-8  w-full h-80"
      ref={sectionRef}
    >
      <h1 className="text-6xl font-bold mb-6 text-[#836FFF] tracking-wide">
        {header}
      </h1>
      <div className="w-full md:w-4/5 relative">
        <ul className="timeline-horizontal">
          {items.map((item, index) => (
            <li
              className="timeline-item-horizontal"
              key={index}
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="icon">
                <FaGraduationCap className="text-4xl text-cyan-400 mb-4" />
              </div>
              <div className="content">
                <p className="text-md font-semibold text-cyan-400">
                  {item.date}
                </p>
                <h2 className="text-xl font-semibold text-white">
                  {item.institution}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
