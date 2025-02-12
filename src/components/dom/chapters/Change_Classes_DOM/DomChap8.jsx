import React from "react";
import { FaJsSquare, FaCode, FaEdit } from "react-icons/fa";

const DomChap8 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaJsSquare /> JavaScript Change Classes in DOM
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          JavaScript allows manipulation of CSS classes using the DOM API. This enables 
          dynamic styling of elements without modifying CSS files directly.
        </p>
      </section>
      
      {/* Example 1: classList.add */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Adding a Class
        </h2>
        <p className="text-gray-700">The <code>classList.add</code> method adds a class to an element.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const element = document.getElementById("myBox");
element.classList.add("highlight");
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: classList.remove */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaEdit /> Removing a Class
        </h2>
        <p className="text-gray-700">The <code>classList.remove</code> method removes a class.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const element = document.getElementById("myBox");
element.classList.remove("highlight");
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: classList.toggle */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaEdit /> Toggling a Class
        </h2>
        <p className="text-gray-700">The <code>classList.toggle</code> method adds/removes a class.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const element = document.getElementById("myBox");
element.classList.toggle("highlight");
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap8;
