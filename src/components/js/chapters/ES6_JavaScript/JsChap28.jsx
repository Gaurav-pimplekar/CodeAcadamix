import React from "react";
import { FaJs, FaBookOpen, FaBolt, FaCogs, FaLightbulb, FaLayerGroup } from "react-icons/fa";

const JsChap28 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> ES6 JavaScript
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          ECMAScript 6 (ES6) introduced several powerful features that enhance JavaScript development, making it more readable, maintainable, and efficient.
        </p>
      </section>
      
      {/* Let & Const */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLayerGroup /> Let & Const
        </h2>
        <p className="text-gray-700">ES6 introduced <code>let</code> and <code>const</code> for variable declaration, replacing <code>var</code>.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let name = "John";
const age = 30;`}</code>
        </pre>
      </section>
      
      {/* Arrow Functions */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBolt /> Arrow Functions
        </h2>
        <p className="text-gray-700">Arrow functions provide a concise syntax for defining functions.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`const greet = (name) => console.log("Hello, " + name);
greet("Alice");`}</code>
        </pre>
      </section>
      
      {/* Template Literals */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Template Literals
        </h2>
        <p className="text-gray-700">Template literals allow embedded expressions using backticks.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`const message = \`Hello, \${name}!\`; 
console.log(message);`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Prefer <code>const</code> over <code>let</code> when values do not change.</li>
          <li>Use arrow functions for concise function expressions.</li>
          <li>Leverage template literals for cleaner string handling.</li>
          <li>Utilize ES6 features to write cleaner, more efficient code.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaBolt className="text-green-500" /> Mastering ES6 JavaScript improves coding efficiency and readability!
      </p>
    </div>
  );
};

export default JsChap28;
