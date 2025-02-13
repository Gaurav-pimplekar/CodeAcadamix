import React from "react";
import { FaJs, FaBookOpen, FaBolt, FaCogs, FaLightbulb } from "react-icons/fa";
import { FiCode } from "react-icons/fi";


const JsChap26 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Event Listeners
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Event listeners in JavaScript allow developers to handle user interactions and system-generated events efficiently. They provide a way to execute functions when a particular event occurs.
        </p>
      </section>
      
      {/* Adding Event Listeners */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title */}
      <div className="flex items-center gap-4 mb-6">
        <FaBolt className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold text-yellow-600">JavaScript Event Listeners</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="text-gray-700">
          JavaScript allows you to handle user interactions using event listeners. 
          The <code>addEventListener()</code> method is commonly used to attach event handlers to elements dynamically.
        </p>
      </section>

      {/* Adding Event Listeners */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FiCode /> Adding Event Listeners
        </h2>
        <p className="text-gray-700">
          The <code>addEventListener()</code> method is used to attach an event handler to an element. 
          This method allows multiple event handlers for the same event on the same element.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});`}</code>
        </pre>
      </section>

      {/* Code Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Examples</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`// Example 1: Adding a Click Event Listener
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});

// Example 2: Attaching Event Listener for Mouse Over
document.getElementById("myDiv").addEventListener("mouseover", function() {
  this.style.backgroundColor = "lightblue";
});

// Example 3: Removing an Event Listener
function sayHello() {
  console.log("Hello, World!");
}
document.getElementById("myButton").addEventListener("click", sayHello);
document.getElementById("removeBtn").addEventListener("click", function() {
  document.getElementById("myButton").removeEventListener("click", sayHello);
});`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-green-600">💡 Best Practices</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Use <code>addEventListener()</code> instead of inline event handlers for cleaner and more maintainable code.</li>
          <li>Always remove event listeners when they are no longer needed using <code>removeEventListener()</code> to avoid memory leaks.</li>
          <li>Use named functions instead of anonymous functions when possible, making it easier to remove event listeners.</li>
          <li>For dynamically added elements, consider event delegation using <code>document.addEventListener()</code> on a parent element.</li>
        </ul>
      </section>
    </div>
      
      {/* Removing Event Listeners */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title */}
      <div className="flex items-center gap-4 mb-6">
        <FaCogs className="text-gray-700 text-4xl" />
        <h1 className="text-3xl font-bold text-gray-700">Removing Event Listeners</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="text-gray-700">
          In JavaScript, you can remove event listeners using the <code>removeEventListener()</code> method.
          This is useful for optimizing performance and preventing unnecessary event triggers.
        </p>
      </section>

      {/* Removing Event Listeners */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FiCode /> Removing Event Listeners
        </h2>
        <p className="text-gray-700">
          To remove an event listener, use <code>removeEventListener()</code>. 
          The function reference must be the same as the one used in <code>addEventListener()</code>.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`function handleClick() {
  alert("Button clicked!");
}
let btn = document.getElementById("btn");
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);`}</code>
        </pre>
      </section>

      {/* Code Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Examples</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`// Example 1: Adding and Removing an Event Listener
function logMessage() {
  console.log("Button clicked!");
}
let button = document.getElementById("myButton");

// Adding event listener
button.addEventListener("click", logMessage);

// Removing event listener
button.removeEventListener("click", logMessage);

// Example 2: Using Named Function
function changeColor() {
  document.getElementById("box").style.backgroundColor = "red";
}
let box = document.getElementById("box");
box.addEventListener("mouseenter", changeColor);
box.removeEventListener("mouseenter", changeColor);`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-green-600">💡 Best Practices</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Use named functions when adding event listeners so they can be easily removed later.</li>
          <li>Always remove event listeners when they are no longer needed to prevent memory leaks.</li>
          <li>Ensure that the function reference in <code>removeEventListener()</code> matches the one used in <code>addEventListener()</code>.</li>
          <li>Be cautious when using anonymous functions because they cannot be removed directly.</li>
        </ul>
      </section>
    </div>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>addEventListener()</code> instead of inline event handlers for better separation of concerns.</li>
          <li>Always remove event listeners when they are no longer needed to prevent memory leaks.</li>
          <li>Use event delegation to optimize performance when handling multiple elements.</li>
          <li>Use named functions instead of anonymous functions for better readability and maintainability.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaBolt className="text-green-500" /> Mastering event listeners will help you create interactive and dynamic web applications!
      </p>
    </div>
  );
};

export default JsChap26;
