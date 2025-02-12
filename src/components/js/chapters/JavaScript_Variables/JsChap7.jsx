import React from "react";
import { FaJs, FaCode, FaDatabase, FaClipboardList, FaLightbulb, FaCloudUploadAlt, FaShapes } from "react-icons/fa";

const JsChap7 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Variables
      </h1>
      <p className="mt-4 text-gray-700">
        Variables in JavaScript are used to store data values. JavaScript provides different ways to declare variables, each with its own scope and usage.
      </p>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaCode /> Declaring Variables
      </h2>
      <p className="mt-2 text-gray-700">
        JavaScript variables can be declared using <code>var</code>, <code>let</code>, or <code>const</code>.
      </p>
      
      <h3 className="mt-4 text-xl font-semibold">1. var</h3>
      <p className="text-gray-700">The <code>var</code> keyword is function-scoped and can be reassigned.</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`var name = "John";
console.log(name);`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">2. let</h3>
      <p className="text-gray-700">The <code>let</code> keyword is block-scoped and can be reassigned.</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`let age = 25;
age = 26;
console.log(age);`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">3. const</h3>
      <p className="text-gray-700">The <code>const</code> keyword is block-scoped and cannot be reassigned.</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`const pi = 3.14;
console.log(pi);`}</code>
      </pre>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaShapes /> Data Types in JavaScript
      </h2>
      <p className="text-gray-700">JavaScript has different data types including:</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>String - <code>let text = "Hello";</code></li>
        <li>Number - <code>let num = 10;</code></li>
        <li>Boolean - <code>let isTrue = true;</code></li>
        <li>Object - <code>let obj = {`{ key: "value" }`};</code></li>
        <li>Array - <code>let arr = {`[1, 2, 3]`};</code></li>
        <li>Undefined - <code>let x;</code></li>
        <li>Null - <code>let y = null;</code></li>
      </ul>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaCloudUploadAlt /> Variable Hoisting
      </h2>
      <p className="text-gray-700">Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`console.log(a);
var a = 5; // Output: undefined due to hoisting`}</code>
      </pre>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaClipboardList /> Best Practices
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Use <code>const</code> by default unless reassignment is needed.</li>
        <li>Use <code>let</code> instead of <code>var</code> to avoid scope issues.</li>
        <li>Avoid global variables to prevent conflicts.</li>
      </ul>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaLightbulb /> Variable Naming Rules
      </h2>
      <p className="mt-2 text-gray-700">Variable names must begin with a letter, underscore, or dollar sign and cannot be a reserved keyword.</p>
      
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaDatabase className="text-green-500" /> Practice declaring variables in your JavaScript console!
      </p>
    </div>
  );
};

export default JsChap7;
