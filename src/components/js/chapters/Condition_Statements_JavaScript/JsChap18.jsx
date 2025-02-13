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
      
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* If-Else Statement */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCode /> If-Else Statements
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        The <code>if</code> statement executes a block of code if a condition is <b>true</b>. 
        The <code>else</code> statement executes if the condition is <b>false</b>.
      </p>
      
      {/* If-Else Code Example */}
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
        <code>{`let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}`}</code>
      </pre>

      {/* Else-If Statement */}
      <h2 className="mt-8 text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCogs /> Else-If Statements
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        The <code>else if</code> statement tests multiple conditions in sequence, 
        executing only the first matching block.
      </p>

      {/* Else-If Code Example */}
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
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

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Always cover all possible cases with an <code>else</code> statement to handle unexpected values.</li>
        <li>Use <code>else if</code> when there are multiple conditions to check.</li>
        <li>For shorter conditions, consider using a **ternary operator** (<code>condition ? true : false</code>).</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> **Simplify conditions to improve readability & maintainability!**
      </p>
    </div>
      
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Switch Statement */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCheckCircle /> Switch Statement
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        The <code>switch</code> statement evaluates an expression and executes code based on the matching case. 
        It is useful when checking multiple conditions for a single variable.
      </p>

      {/* Switch Statement Code Example */}
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4">
        <code>{`let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the workweek.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Just another day.");
}`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Always use the <code>break</code> statement to prevent fall-through behavior unless intentional.</li>
        <li>Combine cases if multiple conditions share the same output (e.g., Saturday and Sunday).</li>
        <li>Use a <code>default</code> case to handle unexpected values.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> **Use switch statements when checking the same variable against multiple values!**
      </p>
    </div>
      
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