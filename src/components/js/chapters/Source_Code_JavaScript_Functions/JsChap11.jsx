import React from "react";
import { FaJs, FaBookOpen, FaCode, FaTerminal, FaLightbulb } from "react-icons/fa";

const JsChap11 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Source Code: JavaScript Functions
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript functions are fundamental building blocks that allow code reusability and modularization. A function is a block of code designed to perform a particular task and can be invoked multiple times.
        </p>
      </section>
      
      {/* Function Syntax */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Function Syntax
        </h2>
        <p className="text-gray-700">Functions in JavaScript can be defined in multiple ways:</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

// Arrow Function
const greet = (name) => "Hello, " + name + "!";`}</code>
        </pre>
      </section>
      
      {/* Function Parameters & Arguments */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaTerminal /> Function Parameters & Arguments
        </h2>
        <p className="text-gray-700">Functions can accept parameters, which act as placeholders for values:</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use meaningful function names for clarity.</li>
          <li>Keep functions small and focused on a single task.</li>
          <li>Use default parameters to avoid errors with missing arguments.</li>
          <li>Prefer arrow functions for shorter syntax when appropriate.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding JavaScript functions enhances your ability to write clean and reusable code.
      </p>
    </div>
  );
};

export default JsChap11;