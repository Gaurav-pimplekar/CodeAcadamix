import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaCheckCircle, FaLightbulb } from "react-icons/fa";

const JsChap19 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Combining JavaScript Conditional Statements with Functions
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript functions combined with conditional statements enhance code reusability and decision-making processes. This combination allows us to create dynamic and adaptable programs.
        </p>
      </section>
      
      {/* Using If-Else in Functions */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Using If-Else in Functions
        </h2>
        <p className="text-gray-700">Conditional statements like <code>if</code> and <code>else</code> can be used inside functions to execute logic based on input values.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function checkAge(age) {
  if (age >= 18) {
    return "You are an adult.";
  } else {
    return "You are a minor.";
  }
}
console.log(checkAge(20)); // Output: You are an adult.`}</code>
        </pre>
      </section>
      
      {/* Using Switch in Functions */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Using Switch in Functions
        </h2>
        <p className="text-gray-700">The <code>switch</code> statement can be used inside functions to evaluate multiple possible values.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function getDayMessage(day) {
  switch (day) {
    case "Monday":
      return "Start of the workweek.";
    case "Friday":
      return "Weekend is near!";
    default:
      return "Just another day.";
  }
}
console.log(getDayMessage("Monday")); // Output: Start of the workweek.`}</code>
        </pre>
      </section>
      
      {/* Using Ternary Operator in Functions */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCheckCircle /> Using Ternary Operator in Functions
        </h2>
        <p className="text-gray-700">The ternary operator provides a concise way to write conditional expressions in functions.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(4)); // Output: Even`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use functions to avoid code duplication.</li>
          <li>Utilize <code>switch</code> for multiple condition checks to improve readability.</li>
          <li>Prefer the ternary operator for short conditional expressions.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Combining conditional statements with functions allows for cleaner and more structured code in JavaScript applications.
      </p>
    </div>
  );
};

export default JsChap19;