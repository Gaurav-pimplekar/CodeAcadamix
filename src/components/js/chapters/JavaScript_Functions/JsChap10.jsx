import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaRocket, FaLightbulb } from "react-icons/fa";

const JsChap10 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Functions
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Functions in JavaScript are reusable blocks of code that perform a specific task. They help in writing modular and maintainable code.
        </p>
      </section>
      
      {/* Defining Functions */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Defining Functions
        </h2>
        <p className="text-gray-700">Functions can be defined in multiple ways:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Function Declaration</li>
          <li>Function Expression</li>
          <li>Arrow Function</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function greet() {
  return "Hello, World!";
}
console.log(greet()); // Output: Hello, World!`}</code>
        </pre>
      </section>
      
      {/* Function Parameters and Arguments */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Parameters & Arguments
        </h2>
        <p className="text-gray-700">Functions can accept parameters to process dynamic input.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function sum(a, b) {
  return a + b;
}
console.log(sum(5, 10)); // Output: 15`}</code>
        </pre>
      </section>
      
      {/* Returning Values */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaRocket /> Returning Values
        </h2>
        <p className="text-gray-700">Functions can return values to be used elsewhere in the program.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4)); // Output: 12`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use meaningful function names.</li>
          <li>Keep functions small and focused.</li>
          <li>Avoid modifying global variables inside functions.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Experiment with functions in JavaScript to master their usage!
      </p>
    </div>
  );
};

export default JsChap10;
