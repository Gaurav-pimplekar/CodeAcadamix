import React from "react";
import { FaCode, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const DomChap23 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCode className="mr-2" /> JavaScript DOM - Create Dynamic List
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          Dynamically creating list elements in the DOM allows you to generate content dynamically
          based on user input or data from an external source.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-green-500" /> Creating a Dynamic List
        </h2>
        <p className="text-gray-800 mt-2">
          You can create a list dynamically using <code>document.createElement</code> and append list items dynamically.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create an unordered list
const ul = document.createElement("ul");
ul.id = "dynamicList";

document.body.appendChild(ul);

// Function to add list items dynamically
function addListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
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
          <FaCheckCircle className="mr-2 text-blue-500" /> Example: Interactive List
        </h2>
        <p className="text-gray-800 mt-2">
          The following example allows users to add items to a list dynamically by entering text and clicking a button.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create input and button elements
document.body.innerHTML += '<input id="itemInput" type="text" placeholder="Enter item" />';
document.body.innerHTML += '<button id="addItem">Add Item</button>';
const ul = document.createElement("ul");
document.body.appendChild(ul);

// Event listener for button click
document.getElementById("addItem").addEventListener("click", () => {
  const input = document.getElementById("itemInput");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use a container element to manage dynamic lists effectively.</li>
          <li>Sanitize user input to prevent security issues.</li>
          <li>Use event delegation for handling large lists efficiently.</li>
          <li>Remove unnecessary elements when no longer needed.</li>
        </ul>
      </section>
    </div>
  );
};

export default DomChap23;