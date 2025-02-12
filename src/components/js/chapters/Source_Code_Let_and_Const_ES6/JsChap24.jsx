import React from "react";
import { FaJs, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const JsChap24 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Source Code: Let and Const in ES6
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          ES6 introduced <code>let</code> and <code>const</code> as block-scoped variable declarations, replacing the traditional <code>var</code> keyword for better control over variable scoping and mutability.
        </p>
      </section>
      
      {/* Let vs Const */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Let vs Const
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>let</code> allows reassignment but is block-scoped.</li>
          <li><code>const</code> prevents reassignment and is also block-scoped.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// Using let
let age = 25;
age = 30; // Allowed

// Using const
const name = "John";
name = "Doe"; // Error: Assignment to constant variable.`}</code>
        </pre>
      </section>
      
      {/* Block Scope */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Block Scope Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function example() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // 20
  }
  console.log(x); // 10
}
example();`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>const</code> by default unless you need to reassign.</li>
          <li>Use <code>let</code> when you need to update a variable.</li>
          <li>Avoid <code>var</code> due to its function-scoping behavior.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding <code>let</code> and <code>const</code> is key to writing modern JavaScript code efficiently.
      </p>
    </div>
  );
};

export default JsChap24;
