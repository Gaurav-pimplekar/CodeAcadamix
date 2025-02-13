import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaSyncAlt, FaLightbulb } from "react-icons/fa";

const JsChap22 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Loops
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Loops in JavaScript allow us to execute a block of code multiple times efficiently. The main types of loops include <code>for</code>, <code>while</code>, and <code>do-while</code> loops.
        </p>
      </section>
      
      {/* Types of Loops */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaSyncAlt /> Types of Loops in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Loops allow us to execute a block of code multiple times. Here are the most common loop types in JavaScript:
      </p>

      {/* Loop Types */}
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li><code>for</code> loop - Runs a block of code a specific number of times.</li>
        <li><code>while</code> loop - Runs a block of code while a condition is <code>true</code>.</li>
        <li><code>do-while</code> loop - Runs at least once, then continues if a condition is <code>true</code>.</li>
      </ul>

      {/* Code Examples */}
      <div className="mt-6">
        {/* For Loop Example */}
        <h3 className="text-2xl font-semibold text-green-600">🔁 For Loop</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-2">
          <code>{`for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
// Output: 1, 2, 3, 4, 5`}</code>
        </pre>
      </div>

      <div className="mt-6">
        {/* While Loop Example */}
        <h3 className="text-2xl font-semibold text-green-600">🔄 While Loop</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-2">
          <code>{`let count = 1;
while (count <= 3) {
  console.log("Count:", count);
  count++;
}
// Output: 1, 2, 3`}</code>
        </pre>
      </div>

      <div className="mt-6">
        {/* Do-While Loop Example */}
        <h3 className="text-2xl font-semibold text-green-600">🔂 Do-While Loop</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-2">
          <code>{`let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 2);
// Output: 1, 2`}</code>
        </pre>
      </div>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use a <code>for</code> loop when the number of iterations is known beforehand.</li>
        <li>Use a <code>while</code> loop when looping depends on a condition.</li>
        <li>Use a <code>do-while</code> loop when at least one execution is required.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> **Avoid infinite loops! Ensure the loop condition changes over time.**
      </p>
    </div>
      
      {/* Example Usage */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Example Usage
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// For loop example
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// While loop example
let j = 0;
while (j < 5) {
  console.log("Iteration: " + j);
  j++;
}

// Do-while loop example
let k = 0;
do {
  console.log("Iteration: " + k);
  k++;
} while (k < 5);`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>for</code> loops when the number of iterations is known.</li>
          <li>Use <code>while</code> loops when the stopping condition is dynamic.</li>
          <li>Avoid infinite loops by ensuring conditions will eventually become false.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding loops helps in optimizing code execution and controlling flow efficiently in JavaScript.
      </p>
    </div>
  );
};

export default JsChap22;
