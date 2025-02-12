import React from "react";
import { FaJs, FaCode, FaTerminal, FaLaptopCode, FaClipboardList, FaCogs } from "react-icons/fa";

const JsChap6 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Code Basics
      </h1>
      <p className="mt-4 text-gray-700">
        JavaScript is a powerful programming language that allows you to add interactivity to web pages. It is executed in the browser and enables dynamic content, event handling, and various functionalities.
      </p>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaCode /> Writing JavaScript Code
      </h2>
      <p className="mt-2 text-gray-700">
        JavaScript code can be written in different ways within an HTML document:
      </p>
      
      <h3 className="mt-4 text-xl font-semibold">1. Inline JavaScript</h3>
      <p className="text-gray-700">Adding JavaScript inside an HTML element using the <code>onclick</code> attribute:</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`<button onclick="alert('Hello, JavaScript!')">Click Me</button>`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">2. Internal JavaScript</h3>
      <p className="text-gray-700">Writing JavaScript inside a <code>&lt;script&gt;</code> tag within the HTML file:</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">3. External JavaScript</h3>
      <p className="text-gray-700">Storing JavaScript in a separate file and linking it using the <code>src</code> attribute:</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`<script src="script.js"></script>`}</code>
      </pre>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaClipboardList /> Best Practices
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Use external JavaScript for better maintainability.</li>
        <li>Avoid inline JavaScript as it makes debugging harder.</li>
        <li>Use meaningful variable names and consistent formatting.</li>
        <li>Keep scripts at the end of the body for faster page loading.</li>
      </ul>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaCogs /> JavaScript Execution
      </h2>
      <p className="mt-2 text-gray-700">JavaScript runs in the browser but can also be executed in Node.js for server-side applications.</p>
      
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaTerminal className="text-green-500" /> Try writing JavaScript in your browser console!
      </p>
    </div>
  );
};

export default JsChap6;
