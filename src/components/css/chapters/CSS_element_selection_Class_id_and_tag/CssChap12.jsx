import React from "react";
import { FaCss3Alt, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap12 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Element Selection: Class, ID, and Tag
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS allows selecting and styling elements using different selectors, including class selectors, ID selectors, and tag selectors. Understanding how to use them effectively helps in structuring and designing better web pages.
        </p>
      </section>
      
      

      <section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
    <FaPalette className="mr-2 text-blue-500" /> Types of CSS Selectors
  </h2>
  <p className="mt-2 text-gray-600">
    CSS selectors are patterns used to select and style HTML elements. They help target specific 
    elements in a webpage and apply styles efficiently. Below are the main types of CSS selectors:
  </p>

  {/* 1. Universal Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">1. Universal Selector (<code>*</code>)</h3>
  <p className="text-gray-600">
    The universal selector (<code>*</code>) applies styles to all elements on a webpage.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`}
    </code>
  </pre>

  {/* 2. Type Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">2. Type Selector</h3>
  <p className="text-gray-600">
    The type selector targets HTML elements directly by their tag name.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
h1 {
    color: blue;
    font-size: 24px;
}`}
    </code>
  </pre>

  {/* 3. Class Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">3. Class Selector (<code>.</code>)</h3>
  <p className="text-gray-600">
    The class selector applies styles to elements with a specific class attribute.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
.highlight {
    background-color: yellow;
    font-weight: bold;
}`}
    </code>
  </pre>

  {/* 4. ID Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">4. ID Selector (<code>#</code>)</h3>
  <p className="text-gray-600">
    The ID selector styles an element with a unique ID.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
#header {
    background-color: black;
    color: white;
    padding: 10px;
}`}
    </code>
  </pre>

  {/* 5. Group Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">5. Group Selector</h3>
  <p className="text-gray-600">
    The group selector applies the same styles to multiple elements at once.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
h1, p, button {
    font-family: Arial, sans-serif;
}`}
    </code>
  </pre>

  {/* 6. Descendant Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">6. Descendant Selector</h3>
  <p className="text-gray-600">
    The descendant selector applies styles to an element only when it is inside another element.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
div p {
    color: green;
}`}
    </code>
  </pre>

  {/* 7. Child Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">7. Child Selector (<code>&gt;</code>)</h3>
  <p className="text-gray-600">
    The child selector applies styles only to direct children of a specific element.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
div > p {
    font-size: 18px;
}`}
    </code>
  </pre>

  {/* 8. Adjacent Sibling Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">8. Adjacent Sibling Selector (<code>+</code>)</h3>
  <p className="text-gray-600">
    The adjacent sibling selector applies styles to an element that is immediately after another element.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
h1 + p {
    color: red;
}`}
    </code>
  </pre>

  {/* 9. General Sibling Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">9. General Sibling Selector (<code>~</code>)</h3>
  <p className="text-gray-600">
    The general sibling selector applies styles to all siblings of a given element.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
h1 ~ p {
    font-style: italic;
}`}
    </code>
  </pre>

  {/* 10. Attribute Selector */}
  <h3 className="text-lg font-medium text-gray-600 mt-4">10. Attribute Selector</h3>
  <p className="text-gray-600">
    The attribute selector targets elements based on attributes and values.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
    <code>
      {`/* styles.css */
input[type="text"] {
    border: 2px solid blue;
}`}
    </code>
  </pre>

  <h3 className="text-lg font-medium text-gray-600 mt-4">Conclusion:</h3>
  <ul className="list-disc pl-5 text-gray-600">
    <li>Selectors are the foundation of CSS styling.</li>
    <li>Using the right selector improves performance and maintainability.</li>
    <li>Advanced selectors like `:hover`, `:nth-child()`, and `::before` can further enhance designs.</li>
  </ul>
</section>
    </div>
  );
};

export default CssChap12;