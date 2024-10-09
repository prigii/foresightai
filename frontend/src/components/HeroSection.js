// frontend/src/components/HeroSection.js


export default function HeroSection() {
    return (
      <div
        className="w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        >
        {/* <img src="/bg-image.png" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" /> */}
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to ForeSightAI
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Unlock the power of AI-driven insights for your revenue forecasting.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
            Upload Your Data
          </button>
        </div>
      </div>
    );
  }
  