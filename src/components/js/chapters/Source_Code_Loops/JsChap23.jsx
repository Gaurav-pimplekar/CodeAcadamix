import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaLightbulb } from "react-icons/fa";

const JsChap23 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Source Code: JavaScript Loops
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Loops in JavaScript allow executing a block of code multiple times efficiently. They help in iterating over arrays, objects, or performing repeated actions.
        </p>
      </section>
      
      {/* Loop Types */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Types of Loops
        </h2>
        <p className="text-gray-700">JavaScript supports various types of loops:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>for</code> loop - Iterates a specified number of times.</li>
          <li><code>while</code> loop - Runs as long as a condition is true.</li>
          <li><code>do...while</code> loop - Executes at least once before checking the condition.</li>
          <li><code>for...in</code> - Iterates over object properties.</li>
          <li><code>for...of</code> - Iterates over iterable objects like arrays.</li>
        </ul>
      </section>
      
      {/* Code Examples */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Examples
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// For Loop
for(let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let j = 0;
while(j < 5) {
  console.log(j);
  j++;
}

// Do...While Loop
do {
  console.log(j);
  j++;
} while(j < 10);

// For...In Loop
const person = {name: "John", age: 30};
for(let key in person) {
  console.log(key, person[key]);
}

// For...Of Loop
const numbers = [1, 2, 3];
for(let num of numbers) {
  console.log(num);
}`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>forEach()</code> instead of loops when iterating over arrays.</li>
          <li>Break long loops using <code>break</code> and <code>continue</code> for readability.</li>
          <li>Use <code>for...of</code> for iterating over arrays instead of <code>for...in</code>.</li>
          <li>Avoid infinite loops by ensuring conditions eventually become false.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Mastering loops is essential for handling repetitive tasks efficiently in JavaScript.
      </p>
    </div>
  );
};

export default JsChap23;