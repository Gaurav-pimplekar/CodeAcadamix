import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaTextHeight, FaLightbulb } from "react-icons/fa";
import { FiCode } from "react-icons/fi";

const JsChap25 = () => {
  return (
    <div>
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
      <section className="mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FiCode /> Common String Methods
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><code>length</code> - Returns the length of a string.</li>
          <li><code>toUpperCase()</code> - Converts a string to uppercase.</li>
          <li><code>toLowerCase()</code> - Converts a string to lowercase.</li>
          <li><code>trim()</code> - Removes whitespace from both ends of a string.</li>
          <li><code>slice(start, end)</code> - Extracts a section of a string.</li>
          <li><code>replace()</code> - Replaces part of a string with another value.</li>
          <li><code>split()</code> - Splits a string into an array of substrings.</li>
          <li><code>indexOf()</code> - Finds the position of a substring.</li>
          <li><code>includes()</code> - Checks if a string contains a specified value.</li>
          <li><code>charAt()</code> - Returns the character at a specific index.</li>
        </ul>
      </section>

      {/* Code Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Examples</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let str = "  Hello World  ";
console.log(str.length); // 15
console.log(str.toUpperCase()); // "  HELLO WORLD  "
console.log(str.toLowerCase()); // "  hello world  "
console.log(str.trim()); // "Hello World"
console.log(str.slice(2, 7)); // "Hello"
console.log(str.replace("World", "JavaScript")); // "  Hello JavaScript  "
console.log(str.split(" ")); // ["", "Hello", "World", ""]
console.log(str.indexOf("o")); // 4
console.log(str.includes("World")); // true
console.log(str.charAt(6)); // "W"`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-green-600">💡 Best Practices</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Use <code>trim()</code> to remove unwanted spaces in user input.</li>
          <li>Use <code>toLowerCase()</code> or <code>toUpperCase()</code> for case-insensitive comparisons.</li>
          <li><code>replace()</code> only replaces the first occurrence unless you use a regular expression.</li>
          <li>For finding all occurrences of a word, use <code>match()</code> with regex.</li>
        </ul>
      </section>
    </div>
      
      // {/* Advanced String Methods */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title */}
      <div className="flex items-center gap-4 mb-6">
        <FaCogs className="text-blue-600 text-4xl" />
        <h1 className="text-3xl font-bold text-blue-600">JavaScript Advanced String Methods</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="text-gray-700">
          JavaScript provides several advanced string methods that help manipulate and analyze strings efficiently. 
          These methods are essential for handling text data in various applications.
        </p>
      </section>

      {/* Advanced String Methods */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FiCode /> Advanced String Methods
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><code>replace()</code> - Replaces a specified value in a string with another value.</li>
          <li><code>split()</code> - Splits a string into an array of substrings based on a separator.</li>
          <li><code>includes()</code> - Checks whether a string contains a specific substring.</li>
          <li><code>charAt(index)</code> - Returns the character at a given index in the string.</li>
          <li><code>substring(start, end)</code> - Extracts a portion of a string between specified indexes.</li>
          <li><code>match()</code> - Searches for matches using regular expressions.</li>
          <li><code>repeat(n)</code> - Repeats a string <code>n</code> times.</li>
        </ul>
      </section>

      {/* Code Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Examples</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let sentence = "JavaScript is awesome!";
console.log(sentence.replace("awesome", "powerful")); // "JavaScript is powerful!"

console.log(sentence.split(" ")); // ["JavaScript", "is", "awesome!"]

console.log(sentence.includes("JavaScript")); // true

console.log(sentence.charAt(5)); // "S"

console.log(sentence.substring(0, 10)); // "JavaScript"

console.log(sentence.match(/is/)); // ["is", index: 11, input: "JavaScript is awesome!"]

console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi! "`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-green-600">💡 Best Practices</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Use <code>replace()</code> carefully, as it only replaces the first occurrence unless using a regular expression.</li>
          <li>For checking substring existence, prefer <code>includes()</code> over <code>indexOf()</code> for better readability.</li>
          <li><code>split()</code> is useful for breaking text into manageable parts (e.g., splitting sentences into words).</li>
          <li>Use <code>match()</code> with regex for advanced pattern-based string searches.</li>
          <li>Utilize <code>repeat()</code> for quickly generating repeated string patterns.</li>
        </ul>
      </section>
    </div>
      
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
