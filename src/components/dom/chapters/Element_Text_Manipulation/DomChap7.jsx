import React from "react";
import { FaJsSquare, FaCode, FaEdit } from "react-icons/fa";

const DomChap7 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaJsSquare /> JavaScript Element Text Manipulation
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          JavaScript allows you to dynamically change and manipulate text content 
          inside HTML elements using various methods. This is useful for updating 
          UI dynamically without reloading the page.
        </p>
      </section>
      
      {/* Example 1: innerText */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Using innerText
        </h2>
        <p className="text-gray-700">Changes the text inside an element while ignoring hidden text.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const element = document.getElementById("myText");
element.innerText = "Updated Text Content";
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: textContent */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaEdit /> Using textContent
        </h2>
        <p className="text-gray-700">Updates text, including hidden elements.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const element = document.getElementById("myText");
element.textContent = "New Text with Hidden Content";
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: innerHTML */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaEdit /> Using innerHTML
        </h2>
        <p className="text-gray-700">Updates content with HTML formatting.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const element = document.getElementById("myText");
element.innerHTML = "<strong>Bold Text</strong>";
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap7;
