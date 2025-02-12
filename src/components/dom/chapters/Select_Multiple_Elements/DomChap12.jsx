import React from "react";
import { FaJsSquare, FaCode, FaList } from "react-icons/fa";

const DomChap12 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaJsSquare /> Selecting Multiple Elements in the DOM
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          JavaScript provides various methods to select multiple elements from the DOM. These methods allow developers to manipulate multiple elements at once, improving efficiency and code clarity.
        </p>
      </section>
      
      {/* Example 1: Using getElementsByClassName */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaList /> Using getElementsByClassName
        </h2>
        <p className="text-gray-700">Select multiple elements by class name.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "blue";
}
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Using getElementsByTagName */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Using getElementsByTagName
        </h2>
        <p className="text-gray-700">Select multiple elements by tag name.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
  p.style.fontWeight = "bold";
}
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: Using querySelectorAll */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Using querySelectorAll
        </h2>
        <p className="text-gray-700">Select multiple elements using CSS selectors.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const buttons = document.querySelectorAll("button.primary");
buttons.forEach((button) => {
  button.style.backgroundColor = "green";
});
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap12;
