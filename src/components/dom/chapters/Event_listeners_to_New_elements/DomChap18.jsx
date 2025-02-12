import React from "react";
import { FaCode, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const DomChap18 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCode className="mr-2" /> JavaScript DOM - Event Listener to New Element
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          Event listeners allow you to add interactivity to dynamically created elements.
          JavaScript provides methods like <code>addEventListener</code> to handle user interactions.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-green-500" /> Adding an Event Listener
        </h2>
        <p className="text-gray-800 mt-2">
          You can attach an event listener to a newly created element using <code>addEventListener</code>.
          Below is an example demonstrating how to create a button and add a click event to it.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create a new button element
const button = document.createElement("button");
button.textContent = "Click Me";
button.style.backgroundColor = "blue";
button.style.color = "white";

// Add an event listener to the button
button.addEventListener("click", () => {
  alert("Button Clicked!");
});

// Append the button to a specific div
const container = document.getElementById("container");
container.appendChild(button);`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" /> Example: Dynamic List Items
        </h2>
        <p className="text-gray-800 mt-2">
          The following example demonstrates adding event listeners to dynamically generated list items:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create a new list item element
const listItem = document.createElement("li");
listItem.textContent = "Click Me";

// Add an event listener
listItem.addEventListener("click", () => {
  listItem.style.color = "red";
});

// Append the list item to an unordered list
const list = document.getElementById("myList");
list.appendChild(listItem);`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use event delegation when handling multiple dynamic elements.</li>
          <li>Remove unnecessary event listeners to optimize performance.</li>
          <li>Ensure elements exist before attaching event listeners.</li>
          <li>Avoid inline event handlers; use <code>addEventListener</code> instead.</li>
        </ul>
      </section>
    </div>
  );
};

export default DomChap18;
