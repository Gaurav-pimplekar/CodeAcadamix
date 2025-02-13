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
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaTools /> Common Array Methods
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Here are some widely used array methods in JavaScript:
      </p>

      {/* Array Method List */}
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li><code>push()</code> - Adds an element to the end of the array.</li>
        <li><code>pop()</code> - Removes the last element from the array.</li>
        <li><code>shift()</code> - Removes the first element from the array.</li>
        <li><code>unshift()</code> - Adds an element to the beginning of the array.</li>
        <li><code>length</code> - Returns the number of elements in the array.</li>
        <li><code>concat()</code> - Merges two or more arrays.</li>
        <li><code>toString()</code> - Converts an array to a string.</li>
        <li><code>splice()</code> - Adds or removes elements at a specific index.</li>
      </ul>

      {/* Code Example */}
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
        <code>{`let numbers = [1, 2, 3];
numbers.push(4);  // [1, 2, 3, 4]
numbers.pop();    // [1, 2, 3]
numbers.shift();  // [2, 3]
numbers.unshift(1); // [1, 2, 3]`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li><code>push()</code> and <code>pop()</code> are faster than <code>shift()</code> and <code>unshift()</code> because they don't reindex elements.</li>
        <li>Use <code>push()</code> and <code>pop()</code> for stack-like structures.</li>
        <li>Use <code>shift()</code> and <code>unshift()</code> when order at the start matters.</li>
        
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> **Choosing the right method optimizes performance & memory usage!**
      </p>
    </div>
      
      {/* Higher Order Array Methods */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCogs /> Higher-Order Array Methods
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        These methods allow for efficient iteration and transformation of arrays:
      </p>

      {/* List of Methods */}
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li><code>map()</code> - Transforms each array element.</li>
        <li><code>filter()</code> - Filters elements based on a condition.</li>
        <li><code>reduce()</code> - Reduces the array to a single value.</li>
        <li><code>forEach()</code> - Iterates over each element in the array.</li>
      </ul>

      {/* Code Example */}
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
        <code>{`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use <code>map()</code> when you need a transformed version of the array.</li>
        <li><code>filter()</code> is great for extracting specific elements.</li>
        <li><code>reduce()</code> is powerful but should be used wisely for performance.</li>
        <li><code>forEach()</code> is useful for running side effects, but it doesn’t return a new array.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> **Choosing the right method improves readability & performance!**
      </p>
    </div>
      
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
