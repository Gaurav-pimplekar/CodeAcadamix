import React from "react";
import { FaColumns, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap47 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaColumns className="mr-2" /> CSS Multiple Columns
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS multiple columns allow text content to be split into multiple columns, creating newspaper-style layouts.
          This feature enhances readability and organizes information effectively.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Using CSS Columns
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>column-count</code> and <code>column-width</code> properties define how content flows into columns.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of Multiple Columns */
.text-columns {
  column-count: 3;
  column-gap: 20px;
}

/* Example of Column Width */
.text-columns-width {
  column-width: 200px;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>column-gap</code> to ensure spacing between columns is adequate.</li>
          <li>Combine <code>column-count</code> and <code>column-width</code> for better control.</li>
          <li>Be mindful of content readability when using multiple columns.</li>
          <li>Test on different screen sizes to ensure proper display.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap47;
