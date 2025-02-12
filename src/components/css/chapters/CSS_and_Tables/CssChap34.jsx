import React from "react";
import { FaTable, FaInfoCircle, FaLightbulb } from "react-icons/fa";

const CssChap34 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaTable className="mr-2" /> Understanding CSS and Tables
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaInfoCircle className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides various properties to style HTML tables, making them visually appealing and easier to read. From setting border styles to adjusting spacing, CSS enhances the presentation of tabular data.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-green-500" /> Key CSS Properties for Tables
        </h2>
        <p className="text-gray-800 mt-2">
          Some of the essential CSS properties used to style tables include:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>border-collapse</strong>: Determines whether table borders are separated or collapsed.</li>
          <li><strong>border-spacing</strong>: Controls the space between table cells when borders are separated.</li>
          <li><strong>text-align</strong>: Aligns text within table cells (left, center, or right).</li>
          <li><strong>padding</strong>: Adds spacing inside table cells for better readability.</li>
          <li><strong>background-color</strong>: Sets the background color for table rows, columns, or individual cells.</li>
          <li><strong>width & height</strong>: Defines the size of the table and its cells.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-blue-500" /> Best Practices for Styling Tables
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>border-collapse: collapse;</code> to create clean and compact tables.</li>
          <li>Apply alternating row colors with <code>:nth-child(even)</code> for better readability.</li>
          <li>Ensure table headers are distinct using <code>font-weight: bold;</code> and background colors.</li>
          <li>Use <code>min-width</code> and <code>max-width</code> to control table layout responsiveness.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap34;
