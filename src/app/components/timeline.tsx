"use client";

import { useEffect, useRef } from "react";

interface TimelineProps {
  id: string;
  header: string;
  items: {
    date: string;
    position: string;
    company: string;
    description: string;
  }[];
}

export default function Timeline({ id, header, items }: TimelineProps) {
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
      ".timeline-item"
    ) as NodeListOf<Element>;
    if (sectionRef.current) {
      items = sectionRef.current.querySelectorAll(".timeline-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  useEffect(() => {
    const timeline = sectionRef.current?.querySelector(".timeline");
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
      className="bg-gradient-to-r from-gray-700 via-gray-950 to-black flex flex-col items-center justify-center py-10 px-8  w-full border-b border-dashed"
      ref={sectionRef}
    >
      <h1 className="text-6xl font-bold text-[#836FFF] tracking-wide">
        {header}
      </h1>
      <div className="w-full md:w-4/5 relative">
        <ul className="timeline">
          {items.map((item, index) => (
            <li
              className="timeline-item"
              key={index}
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="flex flex-col md:flex-row mb-12">
                <div className="w-full md:w-1/4 text-right pr-8">
                  <p className="text-md font-semibold text-cyan-400">
                    {item.date}
                  </p>
                  <p className="text-sm italic text-cyan-300">
                    {item.position}
                  </p>
                </div>
                <div className="w-full md:w-3/4 pl-8">
                  <h2 className="text-2xl font-semibold text-cyan-500">
                    {item.company}
                  </h2>
                  <p className="text-md mt-2 text-cyan-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
