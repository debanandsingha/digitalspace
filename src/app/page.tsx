import Hero from "./components/hero";
import About from "./components/about";
import Timeline from "./components/timeline";

const experiencesData = [
  {
    date: "Jan 2020 - Dec 2021",
    position: "Developer",
    company: "Company Name",
    description:
      "Worked on developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    date: "Jan 8 - Dec 2019",
    position: "Junior Developer",
    company: "Another Company",
    description:
      "Assisted in the development of web applications, performed code reviews, and contributed to team meetings to improve project outcomes.",
  },
  // Add more experiences as needed
];

const educationData = [
  {
    date: "Sep 2015 - Jun 2019",
    position: "Bachelor of Science in Computer Science",
    company: "University Name",
    description:
      "Studied various computer science topics including algorithms, data structures, and software engineering principles.",
  },
  {
    date: "Sep 2013 - Jun 2015",
    position: "High School Diploma",
    company: "High School Name",
    description:
      "Focused on science and mathematics, participated in various extracurricular activities and competitions.",
  },
  // Add more education details as needed
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <Timeline id="experience" header="Experience" items={experiencesData} />
      <Timeline id="education" header="Education" items={educationData} />
      <div
        id="contact"
        className="h-screen flex items-center justify-center text-white"
      >
        <h1>Contact Section</h1>
      </div>
    </div>
  );
}
