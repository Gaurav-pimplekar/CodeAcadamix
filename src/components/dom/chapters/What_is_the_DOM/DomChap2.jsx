import React from "react";
import { FaJsSquare, FaBook, FaCode } from "react-icons/fa";

const DomChap2 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-600">
        <FaJsSquare /> What is DOM?
      </h1>
      
      {/* Definition of DOM */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBook /> Definition of DOM
        </h2>
        <p className="text-gray-700">
          The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, enabling developers to manipulate content dynamically using JavaScript.
        </p>
      </section>
      
      {/* DOM Representation */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> DOM Representation
        </h2>
        <p className="text-gray-700">
          The DOM represents an HTML or XML document as a structured tree where each element is a node. JavaScript can traverse and modify this structure dynamically.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<html>
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <h1 id="header">Understanding the DOM</h1>
  </body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* How JavaScript Interacts with the DOM */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaJsSquare /> JavaScript and the DOM
        </h2>
        <p className="text-gray-700">
          JavaScript provides methods to select and manipulate DOM elements, such as <code>document.getElementById</code>, <code>document.querySelector</code>, and <code>document.createElement</code>.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Selecting an element by ID
const header = document.getElementById("header");
header.style.color = "blue";
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap2;
