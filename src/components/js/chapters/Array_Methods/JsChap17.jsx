import React from "react";
import { FaJs, FaBookOpen, FaTools, FaCogs, FaDatabase, FaCode, FaLightbulb } from "react-icons/fa";

const JsChap17 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Array Methods
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript provides various built-in methods to manipulate and work with arrays efficiently. These methods help in modifying, filtering, and iterating over arrays.
        </p>
      </section>
      
      {/* Common Array Methods */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaTools /> Common Array Methods
        </h2>
        <p className="text-gray-700">Here are some widely used array methods in JavaScript:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>push()</code> - Adds an element to the end of the array.</li>
          <li><code>pop()</code> - Removes the last element from the array.</li>
          <li><code>shift()</code> - Removes the first element from the array.</li>
          <li><code>unshift()</code> - Adds an element to the beginning of the array.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
numbers.pop();   // [1, 2, 3]
numbers.shift(); // [2, 3]
numbers.unshift(1); // [1, 2, 3]`}</code>
        </pre>
      </section>
      
      {/* Higher Order Array Methods */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Higher Order Array Methods
        </h2>
        <p className="text-gray-700">These methods allow for efficient iteration and transformation of arrays:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>map()</code> - Transforms each array element.</li>
          <li><code>filter()</code> - Filters elements based on a condition.</li>
          <li><code>reduce()</code> - Reduces the array to a single value.</li>
          <li><code>forEach()</code> - Iterates over each element in the array.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>map()</code> instead of loops when transforming arrays.</li>
          <li>Use <code>filter()</code> for creating subsets of an array.</li>
          <li>Use <code>reduce()</code> for aggregating data into a single value.</li>
          <li>Avoid modifying the original array when using higher-order functions.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding array methods will help you handle data more effectively in JavaScript!
      </p>
    </div>
  );
};

export default JsChap17;
