import React from "react";
import { FaJsSquare, FaBook, FaCode } from "react-icons/fa";

const DomChap1 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-600">
        <FaJsSquare /> Introduction to JavaScript DOM
      </h1>
      
      {/* What is the DOM? */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBook /> What is the DOM?
        </h2>
        <p className="text-gray-700">
          The Document Object Model (DOM) is a programming interface that allows JavaScript to interact with and manipulate HTML and CSS. It represents a webpage as a tree of objects.
        </p>
      </section>
      
      {/* Why is the DOM Important? */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBook /> Why is the DOM Important?
        </h2>
        <p className="text-gray-700">
          The DOM enables dynamic changes to content, structure, and styles, making modern web applications interactive and responsive.
        </p>
      </section>
      
      {/* Basic DOM Structure */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Basic DOM Structure
        </h2>
        <p className="text-gray-700">
          The DOM represents an HTML document as a tree, where elements are nodes with parent-child relationships.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1 id="title">Hello, DOM!</h1>
  </body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* Interacting with the DOM */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaJsSquare /> Interacting with the DOM
        </h2>
        <p className="text-gray-700">
          JavaScript can be used to select, modify, and manipulate DOM elements. Methods like <code>document.getElementById</code> and <code>document.querySelector</code> help in accessing elements.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Selecting an element by ID
const title = document.getElementById("title");
console.log(title.textContent); // Output: Hello, DOM!
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap1;
