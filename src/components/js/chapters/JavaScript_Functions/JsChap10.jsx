import React from "react";
import { FaJs, FaBookOpen, FaCode, FaCogs, FaRocket, FaLightbulb } from "react-icons/fa";

const JsChap10 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Functions
      </h1>
      
      {/* Introduction */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaBookOpen /> Introduction to JavaScript Functions
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Functions in JavaScript are reusable blocks of code designed to perform a specific task. They help in writing **modular**, **maintainable**, and **efficient** code.
      </p>

      {/* Why Use Functions? */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Why Use Functions?</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>**Reusability** – Write once, use multiple times.</li>
        <li>**Modularity** – Break large programs into smaller, manageable pieces.</li>
        <li>**Readability** – Improves code structure and understanding.</li>
        <li>**Scalability** – Makes debugging and updating easier.</li>
      </ul>

      {/* Function Types */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Types of Functions</h3>
      <p className="text-gray-700">
        JavaScript supports different types of functions, each serving a unique purpose.
      </p>
      
      {/* 1. Function Declaration */}
      <h4 className="mt-4 text-xl font-semibold">🔹 Function Declaration</h4>
      <p className="text-gray-700">A standard function that can be called **before** or **after** declaration due to hoisting.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function greet() {
  return "Hello, World!";
}
console.log(greet());`}</code>
      </pre>

      {/* 2. Function Expression */}
      <h4 className="mt-4 text-xl font-semibold">🔹 Function Expression</h4>
      <p className="text-gray-700">A function stored inside a variable. It **cannot** be called before its definition.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const greet = function() {
  return "Hello, JavaScript!";
};
console.log(greet());`}</code>
      </pre>

      {/* 3. Arrow Function */}
      <h4 className="mt-4 text-xl font-semibold">🔹 Arrow Function (ES6+)</h4>
      <p className="text-gray-700">A concise syntax introduced in ES6. It automatically binds **this**.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const greet = () => "Hello, ES6!";
console.log(greet());`}</code>
      </pre>

      {/* 4. Immediately Invoked Function Expression (IIFE) */}
      <h4 className="mt-4 text-xl font-semibold">🔹 Immediately Invoked Function Expression (IIFE)</h4>
      <p className="text-gray-700">Executes immediately after being defined.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`(function() {
  console.log("This runs immediately!");
})();`}</code>
      </pre>

      {/* Function Parameters and Return Values */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">3. Function Parameters & Return Values</h3>
      <p className="text-gray-700">
        Functions can accept parameters (inputs) and return values.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8`}</code>
      </pre>

      {/* Higher-Order Functions */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. Higher-Order Functions</h3>
      <p className="text-gray-700">
        A function that takes another function as an argument or returns a function.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function operate(a, b, callback) {
  return callback(a, b);
}
console.log(operate(10, 5, (x, y) => x * y)); // Output: 50`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **meaningful** function names.</li>
        <li>Keep functions **short and focused** on one task.</li>
        <li>Use **arrow functions** for simple one-liners.</li>
        <li>Avoid modifying global variables inside functions.</li>
        <li>Use **default parameters** to handle missing arguments.</li>
      </ul>

      {/* Interactive Practice */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">🛠️ Interactive Practice</h3>
      <p className="text-gray-700">Try modifying the function below and observe the output.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const greet = (name = "Student") => "Hello, " + name + "!";
console.log(greet()); // Try changing the argument`}</code>
      </pre>

      {/* Summary */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">📌 Summary</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Functions help in **code reuse, readability, and maintainability**.</li>
        <li>Different types include **declarations, expressions, arrow functions, and IIFE**.</li>
        <li>Higher-order functions allow **callbacks** and functional programming.</li>
        <li>Using **parameters and return values** makes functions **flexible**.</li>
      </ul>

      {/* Lightbulb Icon for Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Keep practicing functions to write **efficient JavaScript code!**
      </p>
    </div>
      
      {/* Defining Functions */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCogs /> Defining Functions in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Functions in JavaScript can be defined in multiple ways. Each approach has its own use cases and advantages.
      </p>

      {/* Why Functions Matter? */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Why Functions?</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Encapsulate reusable logic to avoid repetition.</li>
        <li>Improve **code organization** and **readability**.</li>
        <li>Support **modularity** and **scalability**.</li>
      </ul>

      {/* Function Declaration */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Function Declaration</h3>
      <p className="text-gray-700">
        A function declaration is the most common way to define functions. These functions are **hoisted**, meaning they can be called **before their definition**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function greet() {
  return "Hello, World!";
}
console.log(greet()); // Output: Hello, World!`}</code>
      </pre>

      {/* Function Expression */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Function Expression</h3>
      <p className="text-gray-700">
        A function expression assigns a function to a variable. Unlike declarations, these functions **are not hoisted**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const greet = function() {
  return "Hello, JavaScript!";
};
console.log(greet()); // Output: Hello, JavaScript!`}</code>
      </pre>

      {/* Arrow Function */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. Arrow Function (ES6+)</h3>
      <p className="text-gray-700">
        Arrow functions provide a more concise syntax and automatically bind **this**. They are commonly used in modern JavaScript.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const greet = () => "Hello, ES6!";
console.log(greet()); // Output: Hello, ES6!`}</code>
      </pre>

      {/* Function Parameters and Default Values */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">5. Function Parameters & Default Values</h3>
      <p className="text-gray-700">
        Functions can accept parameters (inputs) and return computed values. ES6 allows **default parameters** if no arguments are passed.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **function declarations** for globally reusable functions.</li>
        <li>Use **function expressions** to create **anonymous functions** when needed.</li>
        <li>Use **arrow functions** for concise syntax and to avoid binding issues.</li>
        <li>Always use **meaningful** function names.</li>
      </ul>

      {/* Lightbulb Icon for Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Mastering function definitions is key to writing **efficient JavaScript code!**
      </p>
    </div>
      
      {/* Function Parameters and Arguments */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCode /> Parameters & Arguments
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Functions can accept parameters to process dynamic input and return results.
      </p>

      {/* What Are Parameters? */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. What Are Parameters?</h3>
      <p className="text-gray-700">
        **Parameters** are placeholders for values that a function receives when called.
      </p>
      <p className="text-gray-700">
        **Arguments** are actual values passed into the function when calling it.
      </p>

      {/* Basic Function with Parameters */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">2. Basic Example</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function sum(a, b) {
  return a + b;
}
console.log(sum(5, 10)); // Output: 15`}</code>
      </pre>

      {/* Default Parameters */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">3. Default Parameters (ES6)</h3>
      <p className="text-gray-700">
        You can assign **default values** to parameters in case no arguments are provided.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!`}</code>
      </pre>

      {/* Function with Multiple Parameters */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">4. Multiple Parameters</h3>
      <p className="text-gray-700">
        A function can take multiple parameters to handle different types of input.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function introduce(name, age) {
  return "My name is " + name + " and I am " + age + " years old.";
}
console.log(introduce("John", 30)); 
// Output: My name is John and I am 30 years old.`}</code>
      </pre>

      {/* Function with Rest Parameters */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">5. Rest Parameters (Handling Multiple Arguments)</h3>
      <p className="text-gray-700">
        The **rest parameter** (<code>...args</code>) allows a function to accept an indefinite number of arguments as an array.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(2, 4, 6, 8)); // Output: 20`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **default parameters** to prevent unexpected <code>undefined</code> values.</li>
        <li>Use **descriptive parameter names** for better readability.</li>
        <li>Use **rest parameters** when handling multiple arguments dynamically.</li>
        <li>Ensure **data validation** inside functions for safe execution.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Understanding function parameters helps in writing **flexible and reusable** code.
      </p>
    </div>
      
      {/* Returning Values */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaRocket /> Returning Values
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Functions can return values, allowing them to be used elsewhere in the program.
      </p>

      {/* Basic Example */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Basic Example</h3>
      <p className="text-gray-700">
        The <code>return</code> statement sends a value back to the function caller.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4)); // Output: 12`}</code>
      </pre>

      {/* Storing Return Values */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">2. Storing Return Values</h3>
      <p className="text-gray-700">
        The returned value can be stored in a variable and used in calculations.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function square(num) {
  return num * num;
}
let result = square(5);
console.log(result); // Output: 25`}</code>
      </pre>

      {/* Function Without Return */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">3. Function Without <code>return</code></h3>
      <p className="text-gray-700">
        If a function doesn’t use <code>return</code>, it returns <code>undefined</code>.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function greet(name) {
  console.log("Hello, " + name);
}
let message = greet("Alice");
console.log(message); // Output: undefined`}</code>
      </pre>

      {/* Returning Objects */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">4. Returning Objects</h3>
      <p className="text-gray-700">
        Functions can return complex data types like **objects**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function createUser(name, age) {
  return { name: name, age: age };
}
console.log(createUser("Alice", 25)); 
// Output: { name: "Alice", age: 25 }`}</code>
      </pre>

      {/* Returning Functions (Higher-Order Functions) */}
      <h3 className="mt-6 text-xl font-semibold text-blue-500">5. Returning Functions</h3>
      <p className="text-gray-700">
        A function can return another function, enabling **function composition**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5)); // Output: 10`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Always use <code>return</code> to send values back from a function when needed.</li>
        <li>Use **explicit return values** to make functions predictable.</li>
        <li>Return **objects or functions** when working with complex logic.</li>
        <li>Use **default parameters** to avoid returning <code>undefined</code>.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Functions with return values make code **modular and reusable**.
      </p>
    </div>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use meaningful function names.</li>
          <li>Keep functions small and focused.</li>
          <li>Avoid modifying global variables inside functions.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Experiment with functions in JavaScript to master their usage!
      </p>
    </div>
  );
};

export default JsChap10;
