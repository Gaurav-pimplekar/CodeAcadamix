import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaCheckCircle, FaLightbulb } from "react-icons/fa";

const JsChap20 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Switch Statement
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          The <code>switch</code> statement in JavaScript is used to execute one block of code from multiple options based on a given expression's value. It is an alternative to multiple <code>if-else</code> conditions.
        </p>
      </section>
      
      {/* Syntax and Usage */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Syntax and Usage
        </h2>
        <p className="text-gray-700">The <code>switch</code> statement evaluates an expression and matches it against various cases.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`switch (expression) {
  case value1:
    // Code to execute
    break;
  case value2:
    // Code to execute
    break;
  default:
    // Code to execute if no case matches
}`}</code>
        </pre>
      </section>
      
      {/* Example Usage */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Example Usage
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function getDayMessage(day) {
  switch (day) {
    case "Monday":
      return "Start of the workweek.";
    case "Friday":
      return "Weekend is near!";
    case "Saturday":
    case "Sunday":
      return "It's the weekend!";
    default:
      return "Just another day.";
  }
}
console.log(getDayMessage("Monday")); // Output: Start of the workweek.`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Always include a <code>default</code> case to handle unexpected values.</li>
          <li>Use <code>break</code> statements to prevent fall-through behavior unless intentional.</li>
          <li>Group cases when multiple values need the same outcome.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" /> The <code>switch</code> statement provides a cleaner and more structured approach compared to multiple <code>if-else</code> statements when handling multiple conditions.
      </p>
    </div>
  );
};

export default JsChap20;
