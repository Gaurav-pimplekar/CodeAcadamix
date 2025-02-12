import React from "react";
import { FaJs, FaBookOpen, FaListUl, FaTools, FaDatabase, FaCode, FaLightbulb } from "react-icons/fa";

const JsChap15 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Arrays
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Arrays in JavaScript are used to store multiple values in a single variable. They provide various methods for easy manipulation of data.
        </p>
      </section>
      
      {/* Creating Arrays */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaListUl /> Creating Arrays
        </h2>
        <p className="text-gray-700">There are multiple ways to create an array in JavaScript:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Using array literals</li>
          <li>Using the <code>new Array()</code> constructor</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple`}</code>
        </pre>
      </section>
      
      {/* Array Methods */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaTools /> Array Methods
        </h2>
        <p className="text-gray-700">JavaScript provides numerous built-in methods to manipulate arrays.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Adds 6 to the end
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]`}</code>
        </pre>
      </section>
      
      {/* Iterating Over Arrays */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaDatabase /> Iterating Over Arrays
        </h2>
        <p className="text-gray-700">You can loop through an array using different methods.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`const colors = ["Red", "Green", "Blue"];
colors.forEach(color => console.log(color));`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use array methods like <code>map()</code>, <code>filter()</code>, and <code>reduce()</code> for cleaner code.</li>
          <li>Prefer <code>const</code> for arrays unless reassigning is needed.</li>
          <li>Avoid modifying arrays directly; use methods that return new arrays instead.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Mastering arrays will help you handle data efficiently in JavaScript!
      </p>
    </div>
  );
};

export default JsChap15;
