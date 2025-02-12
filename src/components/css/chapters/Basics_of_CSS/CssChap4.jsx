import React from "react";
import { FaCss3Alt, FaPaintBrush, FaCogs, FaPalette, FaLayerGroup, FaRegLightbulb } from "react-icons/fa";

const CssChap4 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> Basics of CSS
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPaintBrush className="mr-2 text-yellow-500" /> Introduction to CSS
        </h2>
        <p className="text-gray-800 mt-2">
          CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning of HTML elements.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCogs className="mr-2 text-green-500" /> CSS Syntax
        </h2>
        <p className="text-gray-800 mt-2">
          CSS is composed of selectors and declarations. A declaration contains properties and values that define the appearance of an element.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example CSS */
body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
}

h1 {
  color: darkblue;
  text-align: center;
}`}            
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-red-500" /> CSS Selectors
        </h2>
        <p className="text-gray-800 mt-2">
          Selectors are used to target specific HTML elements and apply styles to them.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* CSS Selectors */
p {
  color: green;
}

.container {
  width: 80%;
  margin: auto;
}`}            
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLayerGroup className="mr-2 text-purple-500" /> Box Model
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS Box Model represents the structure of HTML elements with margins, borders, padding, and content.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Box Model Example */
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}`}            
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRegLightbulb className="mr-2 text-blue-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Keep styles organized and avoid inline styles when possible.</li>
          <li>Use external stylesheets for better maintainability.</li>
          <li>Leverage CSS variables for reusability.</li>
          <li>Test across different devices to ensure responsiveness.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap4;
