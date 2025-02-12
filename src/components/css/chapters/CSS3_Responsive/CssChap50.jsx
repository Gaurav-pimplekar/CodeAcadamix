import React from "react";
import { FaMobileAlt, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap50 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaMobileAlt className="mr-2" /> CSS Responsive Design
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          Responsive design ensures that web pages adapt to different screen sizes and devices.
          It enhances user experience by making websites functional on desktops, tablets, and smartphones.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Key Concepts
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Fluid Grids - Using percentage-based widths instead of fixed units.</li>
          <li>Flexible Images - Ensuring images scale without breaking layout.</li>
          <li>Media Queries - Applying CSS rules based on screen width.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use a mobile-first approach for designing layouts.</li>
          <li>Apply media queries to adjust styles for different screen sizes.</li>
          <li>Test responsiveness using browser developer tools.</li>
          <li>Avoid fixed widths for elements to maintain flexibility.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap50;
