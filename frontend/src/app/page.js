// frontend/app/page.js
import Navbar from '@/components/Navbar';     // Import Navbar component
import HeroSection from '@/components/HeroSection';  // Import HeroSection component
import Footer from '@/components/Footer';     // Import Footer component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
