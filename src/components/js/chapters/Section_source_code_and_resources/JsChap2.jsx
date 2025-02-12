import React from "react";
import { FaJs, FaBookOpen, FaCode, FaDatabase, FaFolderOpen, FaLightbulb } from "react-icons/fa";

const JsChap2 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Section Source Code & Resources
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Accessing high-quality source code and learning resources is crucial for mastering JavaScript. This section provides useful references, documentation, and sample projects to help enhance your skills.
        </p>
      </section>
      
      {/* Source Code */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Source Code
        </h2>
        <p className="text-gray-700">Here are some useful JavaScript code snippets and examples:</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// Example: Function to add two numbers
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8`}</code>
        </pre>
      </section>
      
      {/* Online Resources */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaDatabase /> Online Resources
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-blue-500 hover:underline">MDN Web Docs</a> - Comprehensive JavaScript documentation.</li>
          
          <li><a href="https://javascript.info/" className="text-blue-500 hover:underline">JavaScript.info</a> - Detailed JavaScript learning guide.</li>
        </ul>
      </section>
      
      {/* Project Resources */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaFolderOpen /> Project Resources
        </h2>
        <p className="text-gray-700">Explore repositories with sample projects and source code:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><a href="https://github.com/microsoft/TypeScript" className="text-blue-500 hover:underline">TypeScript GitHub Repo</a></li>
          <li><a href="https://github.com/airbnb/javascript" className="text-blue-500 hover:underline">Airbnb JavaScript Style Guide</a></li>
          <li><a href="https://github.com/getify/You-Dont-Know-JS" className="text-blue-500 hover:underline">You Don't Know JS (Book Series)</a></li>
        </ul>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Always refer to official documentation for up-to-date JavaScript knowledge.</li>
          <li>Practice coding by building small projects and debugging errors.</li>
          <li>Join developer communities for support and continuous learning.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Using the right resources and source code examples will help you become a proficient JavaScript developer!
      </p>
    </div>
  );
};

export default JsChap2;
