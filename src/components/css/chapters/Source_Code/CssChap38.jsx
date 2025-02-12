import React from "react";
import { FaCode, FaClipboardList, FaMagic } from "react-icons/fa";

const CssChap38 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCode className="mr-2" /> CSS Pseudo-Code - Examples & Source Code
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaClipboardList className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS pseudo-code provides predefined ways to interact with elements dynamically based on user interaction and structure.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaMagic className="mr-2 text-green-500" /> Example: Using Pseudo-Classes
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Highlight links when hovered */
a:hover {
  color: red;
  text-decoration: underline;
}

/* Style the first paragraph inside a container */
.container p:first-child {
  font-weight: bold;
}

/* Style every even table row differently */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Style checked checkboxes */
input[type="checkbox"]:checked {
  accent-color: green;
}`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaClipboardList className="mr-2 text-blue-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use pseudo-classes to enhance accessibility and interactivity.</li>
          <li>Combine pseudo-classes for refined styling.</li>
          <li>Ensure clear distinctions in hover and focus states.</li>
          <li>Test across browsers for consistent behavior.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap38;