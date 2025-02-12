import React from "react";
import { FaJsSquare, FaCode, FaEdit } from "react-icons/fa";

const DomChap11 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-purple-600">
        <FaJsSquare /> Source Code & Examples: DOM Style & Attributes
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          The Document Object Model (DOM) allows JavaScript to manipulate element styles and attributes dynamically. 
          This section provides practical examples of how to modify styles and attributes using JavaScript.
        </p>
      </section>
      
      {/* Example 1: Changing Inline Styles */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaEdit /> Changing Inline Styles
        </h2>
        <p className="text-gray-700">Modify an element's styles using the <code>style</code> property.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const box = document.getElementById("box");
box.style.backgroundColor = "lightblue";
box.style.fontSize = "18px";
box.style.padding = "15px";
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Changing Element Attributes */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Changing Element Attributes
        </h2>
        <p className="text-gray-700">Modify element attributes using <code>setAttribute</code> and <code>removeAttribute</code>.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const link = document.getElementById("myLink");
link.setAttribute("href", "https://www.example.com");
link.setAttribute("target", "_blank");
link.removeAttribute("data-temp");
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap11;