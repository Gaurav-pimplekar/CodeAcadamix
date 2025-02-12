import React from "react";
import { FaJs, FaBookOpen, FaCogs, FaTools, FaDatabase, FaCode, FaLightbulb } from "react-icons/fa";

const JsChap14 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Objects
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript objects are fundamental building blocks used to store data and organize functionality. Objects allow you to group related data and methods together.
        </p>
      </section>
      
      {/* Creating Objects */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Creating Objects
        </h2>
        <p className="text-gray-700">There are multiple ways to create objects in JavaScript:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Using object literals</li>
          <li>Using the <code>new Object()</code> syntax</li>
          <li>Using constructor functions</li>
          <li>Using ES6 classes</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Output: Hello, Alice`}</code>
        </pre>
      </section>
      
      {/* Accessing and Modifying Objects */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaTools /> Accessing and Modifying Objects
        </h2>
        <p className="text-gray-700">You can access and modify object properties using dot notation or bracket notation.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 25

person.age = 26;
console.log(person.age); // Output: 26`}</code>
        </pre>
      </section>
      
      {/* Object Methods */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaDatabase /> Object Methods
        </h2>
        <p className="text-gray-700">Objects can have methods, which are functions stored as properties.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`const car = {
  brand: "Toyota",
  model: "Corolla",
  getDetails: function() {
    return this.brand + " " + this.model;
  }
};
console.log(car.getDetails()); // Output: Toyota Corolla`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use object literals for simple objects.</li>
          <li>Use ES6 classes for complex objects with multiple methods.</li>
          <li>Use <code>Object.freeze()</code> to prevent modifications if immutability is required.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding objects is key to writing efficient JavaScript code!
      </p>
    </div>
  );
};

export default JsChap14;
