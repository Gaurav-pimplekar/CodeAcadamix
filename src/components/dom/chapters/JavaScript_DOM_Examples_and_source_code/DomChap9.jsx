import React from "react";
import { FaJsSquare, FaCode, FaDatabase } from "react-icons/fa";

const DomChap9 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaJsSquare /> JavaScript DOM Examples & Source Code
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          The Document Object Model (DOM) allows JavaScript to interact with and manipulate
          HTML elements dynamically. Here are some common examples of JavaScript DOM manipulation.
        </p>
      </section>
      
      {/* Example 1: Changing Text Content */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Changing Text Content
        </h2>
        <p className="text-gray-700">Modify the text of an HTML element using <code>textContent</code>.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("title").textContent = "Hello, DOM!";
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Changing HTML Content */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Changing HTML Content
        </h2>
        <p className="text-gray-700">Modify the HTML inside an element using <code>innerHTML</code>.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("container").innerHTML = "<strong>Updated Content</strong>";
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: Adding a New Element */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaDatabase /> Adding a New Element
        </h2>
        <p className="text-gray-700">Create and insert a new element into the DOM dynamically.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.body.appendChild(newElement);
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap9;
