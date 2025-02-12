import React from "react";
import { FaJs, FaEdit, FaCheckCircle, FaLaptopCode, FaPlay, FaExclamationTriangle } from "react-icons/fa";

const JsChap3 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Writing JavaScript Code
      </h1>
      <p className="mt-4 text-gray-700">
        JavaScript can be written directly inside HTML using the &lt;script&gt; tag or in external files with a .js extension. It is executed by the browser and enhances the functionality of web pages.
      </p>
      <p className="mt-2 text-gray-700">
        JavaScript code can be placed in three ways: inside an HTML file, within a script tag, or as an external file. Using an external JavaScript file is a good practice as it keeps HTML and JS separate.
      </p>
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaEdit /> Writing JavaScript in HTML
      </h2>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 1: Inline JavaScript</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<button onclick="alert('Hello!')">Click Me</button>`}</code>
        </pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 2: Internal JavaScript</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<script>
  function greet() {
    alert('Welcome to JavaScript!');
  }
</script>
<button onclick="greet()">Click Me</button>`}</code>
        </pre>
      </div>
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaLaptopCode /> Using External JavaScript
      </h2>
      <p className="mt-2 text-gray-700">
        External JavaScript files should have a .js extension and can be linked using the &lt;script&gt; tag with the src attribute.
      </p>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 3: External JavaScript</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// script.js
function showMessage() {
  alert('This is an external JavaScript file!');
}`}</code>
        </pre>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto mt-2">
          <code>{`<!-- index.html -->
<script src="script.js"></script>`}</code>
        </pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 4: Using Console.log</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`console.log("Hello, Console!");`}</code>
        </pre>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Example 5: Using Document.Write</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`document.write("Hello, this text is written using JavaScript!");`}</code>
        </pre>
      </div>
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-red-600">
        <FaExclamationTriangle /> Exceptional Cases in JavaScript
      </h2>
      <p className="mt-2 text-gray-700">
        When writing JavaScript, there are exceptional cases to consider:
      </p>
      <ul className="mt-3 space-y-2 text-gray-700">
        <li className="flex items-center gap-2"><FaCheckCircle className="text-red-500" /> JavaScript is case-sensitive, so `console.log` is different from `Console.log`.</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-red-500" /> Some browsers may block JavaScript execution if certain security policies are in place.</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-red-500" /> Using `document.write()` after page load can overwrite the entire HTML content.</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-red-500" /> If `script.js` is not linked properly, JavaScript will not execute.</li>
        
      </ul>
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaPlay className="text-red-500" /> Try running these examples in your browser!
      </p>
    </div>
  );
};

export default JsChap3;
