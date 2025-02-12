import React from "react";
import { FaJsSquare, FaCode, FaFileCode } from "react-icons/fa";

const DomChap5 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaJsSquare /> Source Code: DOM Manipulation
      </h1>
      
      {/* Example 1: Changing Text Content */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Changing Text Content
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Select an element and change its text
const heading = document.getElementById("title");
heading.innerText = "Updated Title!";
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Modifying Styles */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Modifying Styles
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Change the style of a paragraph
const para = document.querySelector("p");
para.style.color = "blue";
para.style.fontSize = "20px";
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: Adding and Removing Classes */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Adding and Removing Classes
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Add and remove a class from an element
const box = document.querySelector(".box");
box.classList.add("highlight");
setTimeout(() => box.classList.remove("highlight"), 2000);
          `}</code>
        </pre>
      </section>
      
      {/* Example 4: Handling Events */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Handling Events
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Button click event
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    alert("Button Clicked!");
});
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap5;
