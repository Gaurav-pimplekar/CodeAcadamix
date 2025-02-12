import React from "react";
import { FaJsSquare, FaCode, FaTools } from "react-icons/fa";

const DomChap4 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaJsSquare /> JavaScript DOM Manipulation
      </h1>
      
      {/* Introduction to DOM Manipulation */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaTools /> Introduction
        </h2>
        <p className="text-gray-700">
          DOM Manipulation allows JavaScript to dynamically update content, structure, and styles in an HTML document. This enables interactivity, animations, and real-time updates on web pages.
        </p>
      </section>
      
      {/* Selecting Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Selecting Elements
        </h2>
        <p className="text-gray-700">JavaScript provides multiple methods to select HTML elements:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>getElementById:</strong> Selects an element by its ID.</li>
          <li><strong>getElementsByClassName:</strong> Selects elements by class name.</li>
          <li><strong>getElementsByTagName:</strong> Selects elements by tag name.</li>
          <li><strong>querySelector:</strong> Selects the first element that matches a CSS selector.</li>
          <li><strong>querySelectorAll:</strong> Selects all elements that match a CSS selector.</li>
        </ul>
        
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Example: Selecting an element by ID
document.getElementById("demo").innerText = "Hello, DOM!";
          `}</code>
        </pre>
      </section>
      
      {/* Modifying Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Modifying Elements
        </h2>
        <p className="text-gray-700">You can modify content, styles, and attributes of HTML elements using JavaScript.</p>
        
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Changing text content
document.querySelector("h1").innerText = "Updated Title";

// Changing styles
document.querySelector("p").style.color = "blue";

// Changing attributes
document.querySelector("img").setAttribute("src", "new-image.jpg");
          `}</code>
        </pre>
      </section>
      
      {/* Event Listeners */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Event Listeners
        </h2>
        <p className="text-gray-700">Event listeners allow you to respond to user interactions.</p>
        
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
// Adding a click event listener
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap4;
