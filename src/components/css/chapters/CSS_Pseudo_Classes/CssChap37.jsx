import React from "react";
import { FaMousePointer, FaInfoCircle, FaLightbulb } from "react-icons/fa";

const CssChap37 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaMousePointer className="mr-2" /> CSS Pseudo-Classes
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaInfoCircle className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS pseudo-classes allow you to apply styles to elements based on their state or position within the document. They enhance interactivity and usability without requiring JavaScript.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-green-500" /> Common Pseudo-Classes
        </h2>
        <p className="text-gray-800 mt-2">
          Some commonly used pseudo-classes include:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>:hover</strong> - Styles an element when the user hovers over it.</li>
          <li><strong>:focus</strong> - Applies styles when an element receives focus.</li>
          <li><strong>:nth-child(n)</strong> - Targets the nth child of a parent element.</li>
          <li><strong>:first-child</strong> - Selects the first child of a parent element.</li>
          <li><strong>:last-child</strong> - Targets the last child of a parent element.</li>
          <li><strong>:checked</strong> - Styles checkboxes or radio buttons when checked.</li>
          <li><strong>:disabled</strong> - Targets disabled form elements.</li>
          <li><strong>:not(selector)</strong> - Excludes elements that match the given selector.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-blue-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use pseudo-classes to enhance user interaction without JavaScript.</li>
          <li>Combine multiple pseudo-classes for more refined styling.</li>
          <li>Ensure sufficient contrast and visibility when using <code>:hover</code> or <code>:focus</code>.</li>
          <li>Utilize <code>:nth-child()</code> or <code>:nth-of-type()</code> for structured styling.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap37;