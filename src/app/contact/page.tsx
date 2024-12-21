import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <header className="text-gray-900 py-10 text-center">
        <h1 className="md:text-4xl text-2xl font-bold mb-4 text-gray-800 gravitas">Contact Us</h1>
        <p className="mt-2 md:text-lg text-sm crimson">
          Have questions? Feel free to reach out to us.
        </p>
      </header>

      <main className="max-w-7xl mx-auto lg:px-6 px-3 py-10 grid gap-10 md:grid-cols-2">
        <div className="bg-white shadow-md rounded-lg md:p-8 p-3">
          <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-6 gravitas">
            Get in Touch
          </h2>
          <form>
            <div className="mb-4 crimson">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-gray-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-gray-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-gray-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 crimson text-white py-3 rounded-md hover:bg-gray-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gray-900 text-white shadow-md rounded-lg md:p-8 p-4">
          <h2 className="md:text-2xl text-xl font-semibold mb-6 gravitas">Contact Information</h2>
          <div className="space-y-6 crimson">
            <div className="flex items-center gap-4">
              <FaPhone className="md:text-2xl text-lg" />
              <span className="md:text-lg text-sm">+123 456 789</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="md:text-2xl text-lg" />
              <span className="md:text-lg text-sm">info@yourwebsite.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="md:text-2xl text-lg" />
              <span className="md:text-lg text-sm">
                123 Street, City, Country
              </span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-10">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-xl text-gray-400 hover:text-white transition duration-200"
            >
              <FaFacebook/>
            </a>
            <a
              href="#"
              className="text-xl text-gray-400 hover:text-white transition duration-200"
            >
              <FaTwitter/>
            </a>
            <a
              href="#"
              className="text-xl text-gray-400 hover:text-white transition duration-200"
            >
              <FaInstagram/>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
