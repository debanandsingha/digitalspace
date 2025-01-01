import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div id="home">
        <Hero />
      </div>
      <div
        id="about"
        className="h-screen flex items-center justify-center text-white"
      >
        <h1>About Section</h1>
      </div>
      <div
        id="services"
        className="h-screen flex items-center justify-center text-white"
      >
        <h1>Services Section</h1>
      </div>
      <div
        id="contact"
        className="h-screen flex items-center justify-center text-white"
      >
        <h1>Contact Section</h1>
      </div>
    </div>
  );
}
