export default function AboutMe() {
  return (
    <div className="w-full h-[calc(100vh-50px)] flex text-white">
      <div className="w-[70%] flex justify-center items-center">
        <div className="p-10 text-lg">
          <h2 className="text-5xl font-bold mb-4 uppercase ">What I do</h2>
          <p className={`text-[#a0aec0] fonet-semibold `}>
            I`ve been coding professionally for 9 years now and currently
            working as a{" "}
            <span className="text-[#9decf9] font-bold">Software Engineer</span>{" "}
            that focuses on architecture, APIs, nitty-gritty business logics and
            even front end integration stuff now, how time flies!
          </p>
          <p className="mt-4 text-[#a0aec0]">
            Here are few technologies that are cup of my tea coffee:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>C# - .NET.Core</li>
            <li>Javascript (ES6+)</li>
            <li>Typescript</li>
            <li>Node</li>
            <li>Graphql</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Docker</li>
          </ul>
          <p className="mt-4 text-[#9decf9] ">See my full arsenal</p>
        </div>
      </div>
      <div className="w-[30%] flex justify-center items-center">
        <img
          src="./images/about.jpg"
          alt="About Me"
          className="w-64 h-64 object-cover rounded-full border-4 border-[#9decf9]"
        />
      </div>
    </div>
  );
}
