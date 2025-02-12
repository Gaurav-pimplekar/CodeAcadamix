import React from "react";
import { FaCube, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap49 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCube className="mr-2" /> CSS3 Box Sizing
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>box-sizing</code> property in CSS3 allows developers to control how the total width and height of an element are calculated.
          It helps in designing consistent layouts by including or excluding padding and borders from the element's dimensions.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Box Sizing Values
        </h2>
        <p className="text-gray-800 mt-2">
          There are two primary values for <code>box-sizing</code>:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><code>content-box</code> - Default value where width/height only includes content, excluding padding and border.</li>
          <li><code>border-box</code> - Includes padding and border in the total width and height calculation.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>border-box</code> for more predictable layouts.</li>
          <li>Apply <code>box-sizing</code> globally to ensure consistency across all elements.</li>
          <li>Test designs in different browsers to avoid layout inconsistencies.</li>
          <li>Use developer tools to inspect element sizes and box models.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap49;
