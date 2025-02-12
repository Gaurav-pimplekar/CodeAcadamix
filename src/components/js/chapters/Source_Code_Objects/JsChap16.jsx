import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaLightbulb } from "react-icons/fa";

const JsChap16 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Source Code: JavaScript Objects
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript objects are collections of key-value pairs that allow you to store and manipulate data efficiently. Objects are fundamental in JavaScript and form the backbone of many applications.
        </p>
      </section>
      
      {/* Object Syntax */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Object Syntax
        </h2>
        <p className="text-gray-700">Objects in JavaScript can be created using different approaches:</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`// Object Literal
const person = {
  name: "John Doe",
  age: 30,
  greet: function() {
    return "Hello, " + this.name;
  }
};`}</code>
        </pre>
      </section>
      
      {/* Object Methods */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Object Methods
        </h2>
        <p className="text-gray-700">Objects can contain methods to perform actions:</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`const car = {
  brand: "Toyota",
  start: function() {
    return "The car has started.";
  }
};
console.log(car.start()); // "The car has started."`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use object literals for simple data structures.</li>
          <li>Utilize <code>this</code> keyword within methods for object context.</li>
          <li>Use <code>Object.keys()</code> and <code>Object.values()</code> for easy data retrieval.</li>
          <li>Leverage constructor functions or ES6 classes for scalable object creation.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding JavaScript objects helps in structuring and managing data efficiently.
      </p>
    </div>
  );
};

export default JsChap16;