import React from "react";
import { FaMousePointer, FaRegHandPointer, FaBolt } from "react-icons/fa";

const DomChap13 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaMousePointer /> Interactive DOM Events in JavaScript
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          JavaScript provides event listeners to make web pages interactive. These listeners allow developers to execute code in response to user actions like clicks, key presses, and mouse movements.
        </p>
      </section>
      
      {/* Example 1: Click Event Listener */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaRegHandPointer /> Handling Click Events
        </h2>
        <p className="text-gray-700">Listening for click events and responding to user interactions.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Mouse Over Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBolt /> Mouse Over Event
        </h2>
        <p className="text-gray-700">Changing styles when the user hovers over an element.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "yellow";
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: Key Press Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBolt /> Key Press Event
        </h2>
        <p className="text-gray-700">Detecting user key presses.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.addEventListener("keydown", function(event) {
  console.log("Key pressed: ", event.key);
});
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap13;
