import React from "react";
import { FaCss3Alt, FaLightbulb, FaInfoCircle } from "react-icons/fa";

const CssChap3 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> What is CSS?
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-yellow-500" /> Definition
        </h2>
        <p className="text-gray-800 mt-2">
          CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML.
          It allows developers to control the layout, colors, fonts, and overall appearance of web pages.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaInfoCircle className="mr-2 text-green-500" /> Key Features of CSS
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Separates content from design to improve maintainability.</li>
          <li>Enables responsive web design for different screen sizes.</li>
          <li>Reduces redundancy and enhances website performance.</li>
          <li>Supports animations and transitions for interactive effects.</li>
          <li>Allows styling of multiple pages with a single stylesheet.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap3;
