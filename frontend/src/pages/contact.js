// frontend/src/pages/contact.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-center max-w-lg mb-4">We’d love to hear from you! Reach out to us via email at contact@foresightai.com.</p>
        <form className="flex flex-col space-y-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
