import React from "react";
import { FaTable, FaInfoCircle, FaLightbulb } from "react-icons/fa";

const CssChap35 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaTable className="mr-2" /> CSS for Tables
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaInfoCircle className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides powerful styling options for HTML tables, allowing for enhanced readability and improved aesthetics. By leveraging various CSS properties, you can customize the appearance of tables, including borders, spacing, and alignment.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-green-500" /> Essential Table Styling Properties
        </h2>
        <p className="text-gray-800 mt-2">
          Below are some crucial CSS properties for styling tables:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>border</strong>: Defines the border around table cells.</li>
          <li><strong>border-collapse</strong>: Merges table borders to create a cleaner layout.</li>
          <li><strong>padding</strong>: Adds space inside table cells for better readability.</li>
          <li><strong>text-align</strong>: Aligns content within table cells.</li>
          <li><strong>background-color</strong>: Changes the background color of table elements.</li>
          <li><strong>width & height</strong>: Controls the dimensions of the table and its cells.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-blue-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>border-collapse: collapse;</code> for a compact and clean table design.</li>
          <li>Apply <code>:nth-child(even)</code> to alternate row colors for better readability.</li>
          <li>Utilize <code>th</code> elements with distinct styles for headers.</li>
          <li>Ensure tables are responsive with <code>min-width</code> and <code>max-width</code>.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap35;
