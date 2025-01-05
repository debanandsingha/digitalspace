export default function About() {
  return (
    <div
      id="about"
      className="relative py-10 flex items-center justify-center text-gray-200 bg-gray-900 px-10 gap-5 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-55"></div>
      <div className="relative flex flex-col items-center mr-10">
        <h1 className="text-6xl font-extrabold mb-4 text-[#FFD700] tracking-widest">
          About
        </h1>
      </div>
      <div className="relative text-center max-w-3xl">
        <p className="text-lg leading-relaxed  text-white">
          Welcome to DigitalSpace! We are a team of dedicated professionals
          passionate about creating innovative digital solutions. Our mission is
          to help businesses thrive in the digital age by providing top-notch
          web development, design, and marketing services. With years of
          experience and a commitment to excellence, we strive to deliver
          exceptional results that exceed our clients' expectations. Join us on
          our journey to make the digital world a better place.
        </p>
        <p className="text-lg leading-relaxed font-medium text-white mt-4">
          Our team is composed of talented individuals with diverse backgrounds
          and expertise. We believe in the power of collaboration and the
          importance of staying ahead of industry trends. By leveraging the
          latest technologies and best practices, we ensure that our solutions
          are not only effective but also future-proof.
        </p>
        <p className="text-lg leading-relaxed font-medium text-white mt-4">
          At DigitalSpace, we value integrity, innovation, and customer
          satisfaction. We are committed to building long-term relationships
          with our clients by delivering personalized services that cater to
          their unique needs. Our vision is to be a trusted partner in the
          digital transformation journey of businesses worldwide.
        </p>
      </div>
    </div>
  );
}
