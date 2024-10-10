import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ForeSightAI - Data-Driven Insights",
  description: "Empowering businesses with AI-driven data forecasting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Include the Navbar at the top of every page */}
        <Navbar />

        {/* Render the specific page's content */}
        <div className="min-h-screen">{children}</div>

        {/* Include the Footer at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
