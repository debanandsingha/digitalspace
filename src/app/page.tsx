import Hero from "./components/hero";
import About from "./components/about";
import Timeline from "./components/timeline";
import Education from "./components/education";

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
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
  },
  {
    date: "Sep 2013 - Jun 2015",
    degree: "High School Diploma",
    institution: "High School Name",
  },
  {
    date: "Sep 2013 - Jun 2015",
    degree: "High School Diploma",
    institution: "High School Name",
  },
  // Add more education details as needed
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <Timeline id="experience" header="Experience" items={experiencesData} />
      <Education id="education" header="Education" items={educationData} />
    </div>
  );
}
