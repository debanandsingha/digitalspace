import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-cover bg-center text-white relative"
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-75"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-center text-neon-green">
          Contact
        </h2>
        <div className="max-w-lg mx-auto bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neon-green"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-neon-green focus:border-neon-green sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neon-green"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-neon-green focus:border-neon-green sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neon-green"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-neon-green focus:border-neon-green sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-neon-green hover:bg-neon-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green transition duration-150 ease-in-out transform hover:scale-105"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
