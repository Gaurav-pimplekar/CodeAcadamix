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
          <FaPalette className="mr-2 text-green-500" /> Class Selectors
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.my-class {
    color: red;
    font-size: 18px;
    text-align: center;
}`}
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this class to an element in HTML:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<p class="my-class">This text is styled with a class.</p>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-blue-500" /> ID Selectors
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
#my-id {
    background-color: lightblue;
    padding: 10px;
    font-weight: bold;
}`}
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this ID to an element in HTML:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div id="my-id">This is styled using an ID.</div>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-purple-500" /> Tag Selectors
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
h1 {
    color: green;
    font-family: Arial, sans-serif;
}`}
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this to an HTML document:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<h1>This is styled with a tag selector.</h1>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use class selectors for reusable styles across multiple elements.</li>
          <li>Use ID selectors sparingly, as they should be unique in a document.</li>
          <li>Use tag selectors for global styling but avoid excessive use to prevent conflicts.</li>
          <li>Combine different selectors strategically for better styling efficiency.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap12;