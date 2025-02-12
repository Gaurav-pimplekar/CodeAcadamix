import React from "react";
import { FaCode, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const DomChap25 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCode className="mr-2" /> JavaScript DOM - Dynamic Values in Elements & Objects
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          Dynamically updating values of HTML elements and JavaScript objects is crucial for interactive web applications.
          This allows elements to change content based on user input or data updates.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-green-500" /> Updating Dynamic Values in Elements
        </h2>
        <p className="text-gray-800 mt-2">
          You can update HTML elements dynamically using JavaScript by modifying their properties such as <code>textContent</code> and <code>innerHTML</code>.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create a paragraph element
document.body.innerHTML += '<p id="dynamicText">Original Text</p>';

document.body.innerHTML += '<button id="updateText">Update Text</button>';

// Add event listener to update text
document.getElementById("updateText").addEventListener("click", () => {
  document.getElementById("dynamicText").textContent = "Updated Dynamic Value!";
});`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" /> Example: Dynamic Object Values
        </h2>
        <p className="text-gray-800 mt-2">
          JavaScript objects can also have their properties updated dynamically based on user actions or data changes.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// Create an object with dynamic properties
const user = {
  name: "John Doe",
  age: 25,
};

document.body.innerHTML += '<p id="userInfo">Name: ' + user.name + ', Age: ' + user.age + '</p>';
document.body.innerHTML += '<button id="updateUser">Update User Info</button>';

// Add event listener to modify object dynamically
document.getElementById("updateUser").addEventListener("click", () => {
  user.name = "Jane Doe";
  user.age = 30;
  document.getElementById("userInfo").textContent = \`Name: \${user.name}, Age: \${user.age}\`;
});`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Ensure dynamic updates are optimized to avoid unnecessary re-renders.</li>
          <li>Use <code>textContent</code> instead of <code>innerHTML</code> to prevent security risks.</li>
          <li>Maintain state consistency when updating both elements and objects.</li>
          <li>Keep UI elements synchronized with JavaScript object updates.</li>
        </ul>
      </section>
    </div>
  );
};

export default DomChap25;
