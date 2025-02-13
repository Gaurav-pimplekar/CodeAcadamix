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
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCogs /> Function Scope & Closures
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Scope determines where variables are accessible. **Closures** allow functions to retain access to their parent scope even after execution.
      </p>

      {/* Function Scope Example */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Function Scope</h3>
      <p className="text-gray-700">
        Variables declared inside a function are not accessible outside of it.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function exampleScope() {
  let message = "Hello, Scope!";
}
console.log(message); // ❌ Error: message is not defined`}</code>
      </pre>

      {/* Nested Function Scope */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">2. Nested Function Scope</h3>
      <p className="text-gray-700">
        Inner functions have access to variables from their parent functions.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function outerFunction() {
  let outerVar = "Accessible Inside";
  function innerFunction() {
    console.log(outerVar);
  }
  innerFunction();
}
outerFunction(); // ✅ Output: Accessible Inside`}</code>
      </pre>

      {/* Closures */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">3. Closures</h3>
      <p className="text-gray-700">
        A **closure** is a function that retains access to its **parent function’s variables** even after the parent function has executed.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`\${outerVariable} - \${innerVariable}\`);
  };
}
const newFunction = outerFunction("Hello");
newFunction("World"); // ✅ Output: Hello - World`}</code>
      </pre>

      {/* Real-World Example: Private Variables */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">4. Real-World Example: Private Variables</h3>
      <p className="text-gray-700">
        Closures can be used to create **private variables** that are not accessible from outside the function.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const increment = counter();
increment(); // ✅ Output: 1
increment(); // ✅ Output: 2`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **closures** to maintain state (e.g., counters, caches).</li>
        <li>Keep function scope **small** to improve code readability.</li>
        <li>Avoid creating **unnecessary closures** in performance-critical applications.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Closures **preserve data** even after the outer function exits.
      </p>
    </div>
      
      {/* Function Hoisting */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaRocket /> Function Hoisting
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        **Function Hoisting** allows function declarations to be used **before they are defined** in the code. This is because JavaScript moves function declarations to the top during execution.
      </p>

      {/* Function Declaration Hoisting */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Hoisting in Function Declarations</h3>
      <p className="text-gray-700">
        Function declarations are **fully hoisted**, meaning they can be called before being defined.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`console.log(hoistedFunction()); // ✅ Output: This function is hoisted!

function hoistedFunction() {
  return "This function is hoisted!";
}`}</code>
      </pre>

      {/* Function Expressions are NOT Hoisted */}
      <h3 className="mt-6 text-xl font-semibold text-red-500">2. Function Expressions are NOT Hoisted</h3>
      <p className="text-gray-700">
        Function expressions are **not hoisted**, meaning they **cannot be called before** they are assigned.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`console.log(nonHoistedFunction()); // ❌ Error: Cannot access 'nonHoistedFunction' before initialization

const nonHoistedFunction = function() {
  return "This function is NOT hoisted!";
};`}</code>
      </pre>

      {/* Arrow Functions and Hoisting */}
      <h3 className="mt-6 text-xl font-semibold text-red-500">3. Arrow Functions are NOT Hoisted</h3>
      <p className="text-gray-700">
        Like function expressions, **arrow functions are also not hoisted**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`console.log(arrowFunction()); // ❌ Error: Cannot access 'arrowFunction' before initialization

const arrowFunction = () => "Arrow functions are not hoisted!";`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Always **declare functions before using them** to improve code readability.</li>
        <li>Use **function declarations** for globally used functions.</li>
        <li>Use **function expressions or arrow functions** when defining functions within variables.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Only **function declarations** are hoisted, not expressions or arrow functions.
      </p>
    </div>
      
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