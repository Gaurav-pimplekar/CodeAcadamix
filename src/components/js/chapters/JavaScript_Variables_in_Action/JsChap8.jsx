import React from "react";
import { FaJs, FaEdit, FaTrashAlt, FaExchangeAlt, FaLightbulb, FaCode, FaBookOpen, FaRocket, FaCodeBranch } from "react-icons/fa";

const JsChap8 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Variable Actions
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript variables are used to store and manipulate data. They can hold different data types, including numbers, strings, objects, and functions. Managing variables efficiently allows developers to create dynamic applications.
        </p>
      </section>
      
      {/* Declaring Variables */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaEdit /> Declaring Variables
        </h2>
        <p className="text-gray-700">JavaScript provides three ways to declare variables:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>var</code> - Function-scoped, can be redeclared.</li>
          <li><code>let</code> - Block-scoped, cannot be redeclared in the same scope.</li>
          <li><code>const</code> - Block-scoped, cannot be reassigned.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`var x = 10;
let y = 20;
const z = 30;`}</code>
        </pre>
      </section>
      
      {/* Updating Variables */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaExchangeAlt /> Updating Variables
        </h2>
        <p className="text-gray-700">Variables declared with <code>var</code> or <code>let</code> can be updated, but <code>const</code> cannot be reassigned.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let name = "Alice";
name = "Bob";
console.log(name); // Output: Bob`}</code>
        </pre>
      </section>
      
      {/* Variable Scope */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCodeBranch /> Variable Scope
        </h2>
        <p className="text-gray-700">Scope determines where a variable is accessible in a program:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Global scope - Accessible throughout the script.</li>
          <li>Function scope - Available only inside a function.</li>
          <li>Block scope - Available only inside a block (<code>{`{}`}</code>).</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function example() {
  let a = 10;
  console.log(a); // Accessible here
}
console.log(a); // Error: a is not defined`}</code>
        </pre>
      </section>
      
      {/* Hoisting */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaRocket /> Hoisting
        </h2>
        <p className="text-gray-700">JavaScript moves variable declarations to the top of their scope before execution. Only <code>var</code> is hoisted with an undefined value.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`console.log(a); // Undefined
var a = 5;`}</code>
        </pre>
      </section>
      
      {/* Deleting Variables */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaTrashAlt /> Deleting Variables
        </h2>
        <p className="text-gray-700">Only object properties can be deleted using the <code>delete</code> operator.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let obj = { name: "Alice" };
delete obj.name;
console.log(obj); // Output: {}`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>const</code> unless reassignment is necessary.</li>
          <li>Avoid using <code>var</code> due to scope and hoisting issues.</li>
          <li>Declare variables at the beginning of their scope to improve readability.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Experiment with these concepts in your JavaScript console!
      </p>
    </div>
  );
};

export default JsChap8;
