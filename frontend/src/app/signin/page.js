// frontend/src/app/signin.js

import { FaGoogle, FaGithub } from 'react-icons/fa'; // Import Google and GitHub icons

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="max-w-lg w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-4">Sign In</h1>
        <form className="flex flex-col space-y-4">
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
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
            Sign In
          </button>
        </form>
        
        {/* Divider */}
        <div className="my-4 flex items-center">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="px-4 text-gray-500">or sign in with</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        {/* Social Sign In Options */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FaGoogle className="mr-2" /> Google
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FaGithub className="mr-2" /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
