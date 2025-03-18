import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Gamer Zone</h2>
            <p className="text-sm">Your ultimate gaming destination</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>© 2025 Gamer Zone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
