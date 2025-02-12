import React from "react";
import { FaCode, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const DomChap24 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCode className="mr-2" /> JavaScript DOM - Add Event Listener to Created Element
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          Adding event listeners to dynamically created elements ensures interactivity.
          This is useful for handling user interactions with elements generated at runtime.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-green-500" /> Adding Event Listeners to Created Elements
        </h2>
        <p className="text-gray-800 mt-2">
          You can use <code>addEventListener</code> to attach events to elements after they are created.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create a button element
document.body.innerHTML += '<button id="dynamicButton">Click Me</button>';

// Select the newly created button
const button = document.getElementById("dynamicButton");

// Add an event listener to the button
button.addEventListener("click", () => {
  alert("Button clicked!");
});`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" /> Example: Adding Click Events to List Items
        </h2>
        <p className="text-gray-800 mt-2">
          The following example dynamically adds list items and assigns a click event to each item.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create an unordered list
document.body.innerHTML += '<ul id="list"></ul>';
const list = document.getElementById("list");

// Function to add a list item with an event listener
function addListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", () => {
    alert(\`You clicked: \${text}");
  });
  list.appendChild(li);
}

// Example usage
addListItem("Item 1");
addListItem("Item 2");
addListItem("Item 3");`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use event delegation when handling a large number of dynamic elements.</li>
          <li>Avoid memory leaks by removing unnecessary event listeners.</li>
          <li>Use meaningful event handlers to improve code maintainability.</li>
          <li>Test event listeners thoroughly for smooth user interactions.</li>
        </ul>
      </section>
    </div>
  );
};

export default DomChap24;