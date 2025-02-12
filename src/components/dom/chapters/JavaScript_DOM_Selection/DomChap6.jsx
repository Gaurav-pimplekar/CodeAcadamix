import React from "react";
import { FaJsSquare, FaCode, FaFileCode } from "react-icons/fa";

const DomChap6 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaJsSquare /> JavaScript DOM Selection
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          JavaScript provides several methods to select and manipulate DOM elements. 
          Understanding these methods is crucial for dynamically updating content, 
          styling, and handling user interactions efficiently.
        </p>
      </section>
      
      {/* Example 1: getElementById */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Using getElementById
        </h2>
        <p className="text-gray-700">Selects an element by its unique ID.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const element = document.getElementById("myElement");
element.style.color = "red";
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: getElementsByClassName */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Using getElementsByClassName
        </h2>
        <p className="text-gray-700">Selects elements by class name (returns a collection).</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const items = document.getElementsByClassName("list-item");
for(let item of items) {
    item.style.fontWeight = "bold";
}
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: querySelector */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Using querySelector
        </h2>
        <p className="text-gray-700">Selects the first matching element.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const firstItem = document.querySelector(".list-item");
firstItem.style.backgroundColor = "yellow";
          `}</code>
        </pre>
      </section>
      
      {/* Example 4: querySelectorAll */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Using querySelectorAll
        </h2>
        <p className="text-gray-700">Selects all matching elements (returns a NodeList).</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const elements = document.querySelectorAll(".highlight");
elements.forEach(el => el.style.border = "2px solid blue");
          `}</code>
        </pre>
      </section>
      
    </div>
  );
};

export default DomChap6;
