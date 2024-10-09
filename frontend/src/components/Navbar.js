// frontend/src/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">ForeSightAI</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link href="/signin">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
