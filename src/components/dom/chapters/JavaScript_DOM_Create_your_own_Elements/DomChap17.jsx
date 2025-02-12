import React from "react";
import { FaCode, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const DomChap17 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCode className="mr-2" /> JavaScript DOM - Create Your Own Element
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The Document Object Model (DOM) allows you to create and manipulate elements dynamically.
          Using JavaScript, you can create new elements, modify their properties, and add them to the webpage.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-green-500" /> Creating an Element
        </h2>
        <p className="text-gray-800 mt-2">
          You can create a new HTML element using the <code>document.createElement</code> method.
          After creation, you can set attributes, add text, and append it to the DOM.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Creating a new paragraph element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" /> Example: Adding a Button
        </h2>
        <p className="text-gray-800 mt-2">
          Below is an example of creating a button element and adding it to a div container:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create a new button element
const button = document.createElement("button");
button.textContent = "Click Me";
button.style.backgroundColor = "blue";
button.style.color = "white";

// Append the button to a specific div
const container = document.getElementById("container");
container.appendChild(button);`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Always check if an element already exists before creating it.</li>
          <li>Use CSS classes instead of inline styles when possible.</li>
          <li>Append new elements to the DOM only when necessary to improve performance.</li>
          <li>Use <code>document.createTextNode</code> for text-based elements.</li>
        </ul>
      </section>
    </div>
  );
};

export default DomChap17;