import React from "react";
import { FaCode, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const DomChap19 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCode className="mr-2" /> JavaScript DOM - Create DOM Element
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The Document Object Model (DOM) allows you to create and manipulate elements dynamically.
          Using JavaScript, you can create new elements, modify their properties, and insert them into the webpage.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-green-500" /> Creating a New Element
        </h2>
        <p className="text-gray-800 mt-2">
          You can create a new HTML element using the <code>document.createElement</code> method.
          After creation, you can set attributes, add text, and append it to the DOM.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create a new div element
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, this is a new div!";
newDiv.style.backgroundColor = "lightblue";
newDiv.style.padding = "10px";

document.body.appendChild(newDiv);`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" /> Example: Adding an Image
        </h2>
        <p className="text-gray-800 mt-2">
          The following example demonstrates how to create and append an image element dynamically:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create a new image element
const image = document.createElement("img");
image.src = "https://via.placeholder.com/150";
image.alt = "Placeholder Image";
image.style.border = "2px solid black";

// Append the image to a specific container
document.getElementById("imageContainer").appendChild(image);`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use meaningful element tags to improve accessibility and structure.</li>
          <li>Set attributes and styles properly to avoid inline clutter.</li>
          <li>Ensure elements are added to the correct part of the DOM.</li>
          <li>Remove unused elements when they are no longer needed.</li>
        </ul>
      </section>
    </div>
  );
};

export default DomChap19;