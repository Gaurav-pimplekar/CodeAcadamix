import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaTextHeight, FaLightbulb } from "react-icons/fa";

const JsChap25 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript String Methods
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript provides a variety of built-in methods to manipulate and work with strings effectively. These methods help in modifying, searching, and formatting strings.
        </p>
      </section>
      
      {/* Common String Methods */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaTextHeight /> Common String Methods
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>length</code> - Returns the length of a string.</li>
          <li><code>toUpperCase()</code> - Converts a string to uppercase.</li>
          <li><code>toLowerCase()</code> - Converts a string to lowercase.</li>
          <li><code>trim()</code> - Removes whitespace from both ends of a string.</li>
          <li><code>slice(start, end)</code> - Extracts a part of a string.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let str = "  Hello World  ";
console.log(str.length); // 15
console.log(str.toUpperCase()); // "  HELLO WORLD  "
console.log(str.toLowerCase()); // "  hello world  "
console.log(str.trim()); // "Hello World"
console.log(str.slice(2, 7)); // "Hello"`}</code>
        </pre>
      </section>
      
      {/* Advanced String Methods */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Advanced String Methods
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>replace()</code> - Replaces a specified value in a string.</li>
          <li><code>split()</code> - Splits a string into an array.</li>
          <li><code>includes()</code> - Checks if a string contains a specified value.</li>
          <li><code>charAt(index)</code> - Returns the character at a specified position.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let sentence = "JavaScript is awesome!";
console.log(sentence.replace("awesome", "powerful")); // "JavaScript is powerful!"
console.log(sentence.split(" ")); // ["JavaScript", "is", "awesome!"]
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.charAt(5)); // "S"`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>trim()</code> to remove unnecessary whitespace before processing input.</li>
          <li>Use <code>includes()</code> for efficient string searching.</li>
          <li>Use <code>split()</code> to break strings into manageable parts.</li>
          <li>Avoid modifying strings in loops as they are immutable.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding string methods helps in text manipulation and improves JavaScript programming efficiency.
      </p>
    </div>
  );
};

export default JsChap25;
