import React from "react";
import { FaKeyboard, FaArrowRight } from "react-icons/fa";

const DomChap15 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaKeyboard /> JavaScript Keypress Event
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          The keypress event in JavaScript is used to detect when a user presses a key on their keyboard. This event is particularly useful for capturing user input in forms, handling shortcuts, and creating interactive applications.
        </p>
      </section>
      
      {/* Example 1: Detecting Keypress */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Basic Keypress Event
        </h2>
        <p className="text-gray-700">This example logs the key pressed by the user.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.addEventListener("keypress", function(event) {
  console.log("Key pressed: " + event.key);
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Keypress in Input Field */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Keypress in Input Field
        </h2>
        <p className="text-gray-700">This example captures keypress events inside an input field.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("myInput").addEventListener("keypress", function(event) {
  console.log("You pressed: " + event.key);
});
          `}</code>
        </pre>
      </section>
      
      {/* Example 3: Prevent Default Action */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaArrowRight /> Preventing Default Behavior
        </h2>
        <p className="text-gray-700">This example prevents the default action of a keypress (e.g., form submission).</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Enter key pressed, but form submission prevented.");
  }
});
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap15;
