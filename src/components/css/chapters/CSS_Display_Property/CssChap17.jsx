import React from "react";
import { FaCss3Alt, FaExpand, FaCheckCircle } from "react-icons/fa";

const CssChap17 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Display Property
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>display</code> property determines how an element is displayed on the page. It plays a crucial role in structuring layouts.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-green-500" /> Common Display Values
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
div {
    display: block; /* Default for divs */
}

span {
    display: inline; /* Default for spans */
}

.flex-container {
    display: flex; /* Enables flexbox */
    justify-content: center;
    align-items: center;
}

.grid-container {
    display: grid; /* Enables grid layout */
    grid-template-columns: repeat(3, 1fr);
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-blue-500" /> Example Usage
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div class="flex-container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

<div class="grid-container">
    <div>Grid 1</div>
    <div>Grid 2</div>
    <div>Grid 3</div>
</div>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>flex</code> for one-dimensional layouts (rows or columns).</li>
          <li>Use <code>grid</code> for complex two-dimensional layouts.</li>
          <li>Set <code>display: none</code> to hide elements without removing them from the DOM.</li>
          <li>Understand <code>inline</code>, <code>block</code>, and <code>inline-block</code> behavior.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap17;