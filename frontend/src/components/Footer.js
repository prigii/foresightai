import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto px-4 text-center space-y-4">
      
      <p className="text-sm">
        Transforming raw data into actionable insights for smarter business decisions.
      </p>
      <p className="text-sm">
        Contact us: <a href="mailto:email@example.com" className="text-blue-400 hover:text-blue-300">email@example.com</a> | Phone: +123 456 7890
      </p>
      <p className="text-sm">
        Our Mission: To empower businesses with accurate, AI-powered revenue forecasting and insightful recommendations.
      </p>
      <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} ForeSightAI. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
