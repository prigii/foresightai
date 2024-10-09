// frontend/src/pages/signup.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-4">Sign Up</h1>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
