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
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaSyncAlt /> Types of Loops
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>for</code> loop - Runs a block of code a specific number of times.</li>
          <li><code>while</code> loop - Runs a block of code while a condition is true.</li>
          <li><code>do-while</code> loop - Runs at least once, then continues if a condition is true.</li>
        </ul>
      </section>
      
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
