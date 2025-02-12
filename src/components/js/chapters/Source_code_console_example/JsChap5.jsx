import React from "react";
import { FaJs, FaBookOpen, FaCode, FaTerminal, FaLightbulb } from "react-icons/fa";

const JsChap5 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Source Code Console Example
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          The console is a powerful tool for debugging and testing JavaScript code. In this section, we'll explore how to write and execute JavaScript code using the browser console.
        </p>
      </section>
      
      {/* Console Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaTerminal /> Console Example
        </h2>
        <p className="text-gray-700">You can use <code>console.log()</code> to print values to the console:</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// Example: Logging to the console
console.log("Hello, JavaScript!");`}</code>
        </pre>
      </section>
      
      {/* Debugging with Console */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Debugging with Console
        </h2>
        <p className="text-gray-700">You can use different console methods for debugging:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>console.warn()</code> - Displays a warning message.</li>
          <li><code>console.error()</code> - Displays an error message.</li>
          <li><code>console.table()</code> - Displays tabular data.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// Example: Using console methods
console.warn("This is a warning!");
console.error("This is an error!");
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>console.log()</code> to test variables and function outputs.</li>
          <li>Utilize <code>console.error()</code> and <code>console.warn()</code> to track issues.</li>
          <li>Use <code>console.table()</code> for better visualization of objects and arrays.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding console methods helps in effective debugging and better code development!
      </p>
    </div>
  );
};

export default JsChap5;
