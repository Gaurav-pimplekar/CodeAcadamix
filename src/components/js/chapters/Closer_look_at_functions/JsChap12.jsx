import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaRocket, FaLightbulb } from "react-icons/fa";

const JsChap12 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> A Closer Look at Functions
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Functions are a core part of JavaScript. In this section, we take a deeper dive into their behavior, scope, closures, and best practices.
        </p>
      </section>
      
      {/* Function Scope and Closures */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCogs /> Function Scope & Closures
        </h2>
        <p className="text-gray-700">Scope determines where variables are accessible. Closures allow functions to retain access to their parent scope even after execution.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`\${outerVariable} - \${innerVariable}\`);
  };
}
const newFunction = outerFunction("Hello");
newFunction("World"); // Output: Hello - World`}</code>
        </pre>
      </section>
      
      {/* Function Hoisting */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaRocket /> Function Hoisting
        </h2>
        <p className="text-gray-700">Function declarations are hoisted, meaning they can be called before they are defined in the code.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`console.log(hoistedFunction());

function hoistedFunction() {
  return "This function is hoisted!";
}`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use meaningful function names.</li>
          <li>Prefer pure functions where possible.</li>
          <li>Leverage closures to maintain state effectively.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Mastering functions allows you to write more modular and efficient JavaScript code!
      </p>
    </div>
  );
};

export default JsChap12;