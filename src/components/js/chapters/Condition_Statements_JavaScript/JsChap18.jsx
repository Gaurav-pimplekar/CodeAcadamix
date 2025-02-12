import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaCheckCircle, FaLightbulb } from "react-icons/fa";

const JsChap18 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Conditional Statements
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Conditional statements in JavaScript allow the execution of different code based on conditions. The main conditional statements include <code>if</code>, <code>else</code>, <code>else if</code>, and <code>switch</code>.
        </p>
      </section>
      
      {/* If-Else Statement */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> If-Else Statements
        </h2>
        <p className="text-gray-700">The <code>if</code> statement executes a block of code if a condition is true. The <code>else</code> statement executes if the condition is false.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}`}</code>
        </pre>
      </section>
      
      {/* Else-If Statement */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Else-If Statements
        </h2>
        <p className="text-gray-700">The <code>else if</code> statement tests multiple conditions in sequence.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`}</code>
        </pre>
      </section>
      
      {/* Switch Statement */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCheckCircle /> Switch Statement
        </h2>
        <p className="text-gray-700">The <code>switch</code> statement evaluates an expression and executes code based on matching cases.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the workweek.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day.");
}`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>if-else</code> for simple conditions.</li>
          <li>Use <code>switch</code> when checking multiple possible values.</li>
          <li>Avoid deep nesting by using early returns in functions.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Mastering conditional statements is essential for controlling program flow in JavaScript!
      </p>
    </div>
  );
};

export default JsChap18;