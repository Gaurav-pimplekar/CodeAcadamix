import React from "react";
import { FaJs, FaBookOpen, FaBolt, FaCogs, FaLightbulb, FaLayerGroup } from "react-icons/fa";

const JsChap27 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Advanced Event Listeners
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript event listeners provide a way to handle user interactions and system-generated events effectively. Advanced event listeners allow for fine-tuned control over event propagation, delegation, and performance optimization.
        </p>
      </section>
      
      {/* Event Delegation */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLayerGroup /> Event Delegation
        </h2>
        <p className="text-gray-700">Event delegation allows handling events efficiently by attaching a single event listener to a parent element instead of multiple child elements.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`document.getElementById("list").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    alert("Item clicked: " + event.target.textContent);
  }
});`}</code>
        </pre>
      </section>
      
      {/* Event Propagation */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBolt /> Event Propagation
        </h2>
        <p className="text-gray-700">Understanding event bubbling and capturing can help control event flow in the DOM.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`document.getElementById("child").addEventListener("click", function(event) {
  alert("Child clicked!");
}, true);

document.getElementById("parent").addEventListener("click", function(event) {
  alert("Parent clicked!");
}, false);`}</code>
        </pre>
      </section>
      
      {/* Passive Event Listeners */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Passive Event Listeners
        </h2>
        <p className="text-gray-700">Using passive event listeners can improve performance, especially for scroll and touch events.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`document.addEventListener("scroll", function(event) {
  console.log("Scrolling detected");
}, { passive: true });`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use event delegation to minimize event listeners.</li>
          <li>Leverage passive event listeners to enhance performance.</li>
          <li>Remove unnecessary event listeners to prevent memory leaks.</li>
          <li>Understand event propagation to handle events effectively.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaBolt className="text-green-500" /> Mastering advanced event listeners will help you build efficient and interactive web applications!
      </p>
    </div>
  );
};

export default JsChap27;
