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
      className="bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center text-white py-7 px-6 border-t border-b border-cyan-600 shadow-2xl"
      ref={sectionRef}
    >
      <h1 className="text-6xl font-extrabold mb-5 text-cyan-500 tracking-wide">
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
                  <p className="text-lg font-semibold text-cyan-400">
                    {item.date}
                  </p>
                  <p className="text-md italic text-cyan-300">
                    {item.position}
                  </p>
                </div>
                <div className="w-full md:w-3/4 pl-8">
                  <h2 className="text-3xl font-semibold text-cyan-500">
                    {item.company}
                  </h2>
                  <p className="text-lg mt-2 text-cyan-200">
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
