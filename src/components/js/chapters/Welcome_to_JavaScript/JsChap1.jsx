import React from "react";
import { FaJs, FaCode, FaCheckCircle, FaLaptopCode, FaPlay } from "react-icons/fa";

const JsChap1 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Welcome to JavaScript
      </h1>
      <p className="mt-4 text-gray-700">
        JavaScript is a high-level, interpreted programming language primarily used for creating interactive web pages. It is a core technology alongside HTML and CSS in web development.
      </p>
      <p className="mt-2 text-gray-700">
        Originally developed by Netscape, JavaScript has grown into one of the most widely used programming languages. It enables dynamic behavior on websites, allowing for user interaction without reloading the page.
      </p>
      <p className="mt-2 text-gray-700">
        JavaScript follows the ECMAScript standard and is supported by all modern web browsers. Over time, it has expanded beyond the client side and is now used for server-side applications through environments like Node.js.
      </p>
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaCode /> Why Learn JavaScript?
      </h2>
      <ul className="mt-3 space-y-2 text-gray-700">
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> JavaScript is beginner-friendly and widely used.</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> It enables interactive web applications.</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> It is supported by all modern browsers.</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> JavaScript frameworks like React, Angular, and Vue enhance development.</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> JavaScript is also used in backend development with Node.js.</li>
      </ul>
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaLaptopCode /> JavaScript Examples
      </h2>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 1: Hello World</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>console.log("Hello, World!");</code>
        </pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 2: Variables</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let name = "Alice";
console.log("Hello, " + name + "!");`}</code>
        </pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 3: Functions</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function add(a, b) {
  return a + b;
}
console.log(add(5, 10));`}</code>
        </pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 4: Conditionals</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let temperature = 30;
if (temperature > 25) {
  console.log("It's a hot day!");
} else {
  console.log("It's a cool day!");
}`}</code>
        </pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 5: Loops</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}`}</code>
        </pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 6: Arrays</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));`}</code>
        </pre>
      </div>
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaPlay className="text-red-500" /> Try running these examples in your browser console!
      </p>
    </div>
  );
};

export default JsChap1;
