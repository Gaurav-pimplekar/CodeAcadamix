import React from "react";
import { FaMouse, FaHandPointer, FaArrowRight } from "react-icons/fa";

const DomChap14 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaMouse /> JavaScript Mouse Events
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          JavaScript provides a variety of mouse events to interact with elements on a webpage. These events allow developers to handle user interactions like clicking, double-clicking, moving the mouse, and more.
        </p>
      </section>
      
      {/* Example 1: Click Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaHandPointer /> Click Event
        </h2>
        <p className="text-gray-700">A click event occurs when a user clicks on an element.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button Clicked!");
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Double Click Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaHandPointer /> Double Click Event
        </h2>
        <p className="text-gray-700">A double-click event is triggered when the user clicks twice in quick succession.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("myBox").addEventListener("dblclick", function() {
  alert("Element Double-Clicked!");
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: Mouse Over Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Mouse Over Event
        </h2>
        <p className="text-gray-700">The mouseover event is triggered when the mouse moves over an element.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("hoverBox").addEventListener("mouseover", function() {
  this.style.backgroundColor = "lightblue";
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 4: Mouse Out Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Mouse Out Event
        </h2>
        <p className="text-gray-700">The mouseout event is triggered when the mouse leaves an element.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("hoverBox").addEventListener("mouseout", function() {
  this.style.backgroundColor = "white";
});
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap14;
