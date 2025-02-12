import React from "react";
import { FaMousePointer, FaArrowRight } from "react-icons/fa";

const DomChap16 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaMousePointer /> JavaScript DOM Events
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          JavaScript DOM events allow you to execute JavaScript code when specific interactions happen on a webpage. Events like clicks, keyboard presses, and mouse movements can trigger event listeners to execute desired actions.
        </p>
      </section>
      
      {/* Example 1: Click Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Click Event
        </h2>
        <p className="text-gray-700">This example logs a message when a button is clicked.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Mouseover Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Mouseover Event
        </h2>
        <p className="text-gray-700">This example changes the text color when hovering over a paragraph.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("myText").addEventListener("mouseover", function() {
  this.style.color = "red";
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: Keydown Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Keydown Event
        </h2>
        <p className="text-gray-700">This example captures any key press and logs the key name.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.addEventListener("keydown", function(event) {
  console.log("Key pressed: " + event.key);
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 4: Form Submit Event */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Form Submit Event
        </h2>
        <p className="text-gray-700">This example prevents a form from submitting and logs the event.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submission prevented!");
});
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap16;
