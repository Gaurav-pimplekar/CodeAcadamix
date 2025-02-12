import React from "react";
import { FaJs, FaBookOpen, FaCalculator, FaEquals, FaPlus, FaCode, FaLightbulb } from "react-icons/fa";

const JsChap9 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Operators and Assignments
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Operators in JavaScript allow you to perform operations on variables and values. Assignment operators are used to assign values to variables. Understanding these concepts is fundamental to writing efficient JavaScript code.
        </p>
      </section>
      
      {/* Arithmetic Operators */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCalculator /> Arithmetic Operators
        </h2>
        <p className="text-gray-700">JavaScript provides several arithmetic operators for mathematical computations:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>+</code> (Addition)</li>
          <li><code>-</code> (Subtraction)</li>
          <li><code>*</code> (Multiplication)</li>
          <li><code>/</code> (Division)</li>
          <li><code>%</code> (Modulus)</li>
          <li><code>**</code> (Exponentiation)</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let a = 10;
let b = 5;
console.log(a + b); // Output: 15`}</code>
        </pre>
      </section>
      
      {/* Assignment Operators */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaEquals /> Assignment Operators
        </h2>
        <p className="text-gray-700">Assignment operators assign values to variables.</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>=</code> (Simple assignment)</li>
          <li><code>+=</code> (Addition assignment)</li>
          <li><code>-=</code> (Subtraction assignment)</li>
          <li><code>*=</code> (Multiplication assignment)</li>
          <li><code>/=</code> (Division assignment)</li>
          <li><code>%=</code> (Modulus assignment)</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let x = 10;
x += 5;
console.log(x); // Output: 15`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use shorthand assignment operators to simplify code.</li>
          <li>Be cautious with division and modulus to avoid unexpected results.</li>
          <li>Understand operator precedence when writing complex expressions.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Experiment with these operators to understand their functionality!
      </p>
    </div>
  );
};

export default JsChap9;
