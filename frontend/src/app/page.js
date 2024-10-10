// frontend/app/page.js

import Image from "next/image";
import bgImage from "../assets/bg-image.png";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-full">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="AI Data Analysis Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0 opacity-50"
          priority
        />
        
        {/* Overlay Section */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-transparent to-gray-900">
          {/* Welcome Message */}
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Welcome to ForeSightAI
          </h1>
          <p className="text-white text-lg md:text-xl mb-4 text-center max-w-2xl">
            Discover the power of AI-driven insights for revenue forecasting and
            sales optimization. Empower your business with data-driven decisions.
          </p>
          
          {/* Mission and Vision */}
          <div className="bg-white p-4 rounded-lg shadow-lg bg-opacity-70 max-w-xl text-center mb-8">
            <h2 className="text-gray-900 text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To enable businesses to make informed decisions through accurate and intuitive revenue forecasts.
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-700">
              To become the leader in AI-based financial forecasting for businesses of all sizes.
            </p>
          </div>
          
          {/* Upload Data Button */}
          <button
            className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Upload Data (CSV or XLSX)
          </button>
        </div>
      </div>
    </div>
  );
}
