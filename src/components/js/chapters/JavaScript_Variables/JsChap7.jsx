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
      
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="mt-6 text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCode /> JavaScript Variable Declarations
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        In JavaScript, variables store data and can be declared using <code className="bg-gray-200 px-1 rounded">var</code>, 
        <code className="bg-gray-200 px-1 rounded"> let</code>, or <code className="bg-gray-200 px-1 rounded">const</code>.
      </p>

      {/* var Section */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. var</h3>
      <p className="text-gray-700 text-lg">
        The <code className="bg-gray-200 px-1 rounded">var</code> keyword is **function-scoped**, meaning it is accessible throughout the function where it is declared.
        Variables declared with <code className="bg-gray-200 px-1 rounded">var</code> can be **reassigned** and **redeclared** in the same scope.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`var name = "John";
console.log(name); // Output: John

var name = "Doe"; // Redeclaration allowed
console.log(name); // Output: Doe`}</code>
      </pre>
      <p className="text-red-500 font-semibold mt-2">
        ⚠️ Avoid using <code>var</code> due to its issues with scoping and accidental redeclaration.
      </p>

      {/* let Section */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. let</h3>
      <p className="text-gray-700 text-lg">
        The <code className="bg-gray-200 px-1 rounded">let</code> keyword is **block-scoped**, meaning it is only accessible within the block `{}` where it is defined.
        Unlike <code>var</code>, it **cannot be redeclared in the same scope** but can be reassigned.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`let age = 25;
age = 26; // Allowed (Reassignment)
console.log(age); // Output: 26

let age = 30; // ❌ Error: Cannot redeclare block-scoped variable
console.log(age);`}</code>
      </pre>
      <p className="text-green-600 font-semibold mt-2">
        ✅ Use <code>let</code> when you expect the value to change but don’t want accidental redeclarations.
      </p>

      {/* const Section */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. const</h3>
      <p className="text-gray-700 text-lg">
        The <code className="bg-gray-200 px-1 rounded">const</code> keyword is also **block-scoped**, but it **cannot be reassigned or redeclared**.
        It is useful for declaring constants whose values should not change.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const pi = 3.14;
console.log(pi); // Output: 3.14

pi = 3.14159; // ❌ Error: Assignment to constant variable
console.log(pi);`}</code>
      </pre>
      <p className="text-green-600 font-semibold mt-2">
        ✅ Always use <code>const</code> by default unless you need to change the value.
      </p>

      {/* Key Differences Table */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">🔍 Key Differences</h3>
      <table className="w-full mt-4 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 p-2">Feature</th>
            <th className="border border-gray-400 p-2">var</th>
            <th className="border border-gray-400 p-2">let</th>
            <th className="border border-gray-400 p-2">const</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold">Scope</td>
            <td className="border border-gray-400 p-2">Function-scoped</td>
            <td className="border border-gray-400 p-2">Block-scoped</td>
            <td className="border border-gray-400 p-2">Block-scoped</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 font-semibold">Reassignable</td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">❌ No</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold">Redeclarable</td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">❌ No</td>
            <td className="border border-gray-400 p-2">❌ No</td>
          </tr>
        </tbody>
      </table>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Use <code>const</code> by default unless you need to reassign a variable.</li>
        <li>Use <code>let</code> when you need a variable whose value will change.</li>
        <li>Avoid <code>var</code> as it can cause unexpected issues due to function scoping.</li>
        <li>Always declare variables before using them to prevent errors.</li>
      </ul>
    </div>
      
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="mt-6 text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaShapes /> Data Types in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        JavaScript provides different types of data to store and manipulate values. These data types fall into **two categories**:
        <strong> Primitive</strong> and <strong>Non-primitive</strong> (Reference) types.
      </p>

      {/* Primitive Data Types Section */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Primitive Data Types</h3>
      <p className="text-gray-700 text-lg">
        Primitive data types are stored **directly in memory** and are **immutable**.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>String</strong> - Represents textual data.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let text = "Hello, World!";
console.log(typeof text); // Output: string`}</code>
        </pre>

        <li><strong>Number</strong> - Represents both integers and floating-point numbers.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let num = 42;
console.log(typeof num); // Output: number`}</code>
        </pre>

        <li><strong>Boolean</strong> - Represents `true` or `false` values.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let isTrue = true;
console.log(typeof isTrue); // Output: boolean`}</code>
        </pre>

        <li><strong>Undefined</strong> - A variable that has been declared but not assigned a value.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let x;
console.log(typeof x); // Output: undefined`}</code>
        </pre>

        <li><strong>Null</strong> - Represents an intentional absence of value.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let y = null;
console.log(typeof y); // Output: object (special case)`}</code>
        </pre>

        <li><strong>Symbol</strong> - Unique and immutable identifier (ES6).</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let sym = Symbol("unique");
console.log(typeof sym); // Output: symbol`}</code>
        </pre>

        <li><strong>BigInt</strong> - Handles large numbers beyond the safe integer limit (ES11).</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let bigNum = 123456789012345678901234567890n;
console.log(typeof bigNum); // Output: bigint`}</code>
        </pre>
      </ul>

      {/* Non-Primitive Data Types Section */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Non-Primitive (Reference) Data Types</h3>
      <p className="text-gray-700 text-lg">
        Non-primitive types are stored as **references** in memory and are **mutable**.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>Object</strong> - Collection of key-value pairs.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let obj = { name: "Alice", age: 25 };
console.log(typeof obj); // Output: object`}</code>
        </pre>

        <li><strong>Array</strong> - Ordered list of values.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Output: object`}</code>
        </pre>

        <li><strong>Function</strong> - Block of code designed to perform a task.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`function greet() {
  return "Hello!";
}
console.log(typeof greet); // Output: function`}</code>
        </pre>

        <li><strong>Date</strong> - Built-in object for handling dates and times.</li>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>{`let today = new Date();
console.log(typeof today); // Output: object`}</code>
        </pre>
      </ul>

      {/* Key Differences Table */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">🔍 Key Differences Between Data Types</h3>
      <table className="w-full mt-4 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 p-2">Data Type</th>
            <th className="border border-gray-400 p-2">Category</th>
            <th className="border border-gray-400 p-2">Mutable?</th>
            <th className="border border-gray-400 p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold">String</td>
            <td className="border border-gray-400 p-2">Primitive</td>
            <td className="border border-gray-400 p-2">❌ No</td>
            <td className="border border-gray-400 p-2">"Hello"</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 font-semibold">Object</td>
            <td className="border border-gray-400 p-2">Non-Primitive</td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">{`{ name: "John" }`}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold">Boolean</td>
            <td className="border border-gray-400 p-2">Primitive</td>
            <td className="border border-gray-400 p-2">❌ No</td>
            <td className="border border-gray-400 p-2">true</td>
          </tr>
        </tbody>
      </table>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Use **primitive types** for storing simple values.</li>
        <li>Use **const** for objects and arrays to prevent reassignment.</li>
        <li>Avoid using `null` unless explicitly needed.</li>
        <li>Use `typeof` operator to check the data type dynamically.</li>
      </ul>
    </div>
      
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="mt-6 text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCloudUploadAlt /> Variable Hoisting in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Hoisting is JavaScript's behavior of **moving variable and function declarations to the top** of their scope before execution. This means variables and functions can be referenced **before they are declared**.
      </p>

      {/* Example of Hoisting with var */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Hoisting with <code>var</code></h3>
      <p className="text-gray-700 text-lg">
        Variables declared with <code>var</code> are **hoisted but not initialized**. They are set to <code>undefined</code> before execution.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`console.log(a); // Output: undefined (due to hoisting)
var a = 5;
console.log(a); // Output: 5`}</code>
      </pre>

      {/* Example of Hoisting with let and const */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Hoisting with <code>let</code> and <code>const</code></h3>
      <p className="text-gray-700 text-lg">
        Variables declared with <code>let</code> and <code>const</code> are **hoisted but not initialized**, causing a **ReferenceError** if accessed before declaration.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // Output: 10`}</code>
      </pre>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
console.log(c); // Output: 15`}</code>
      </pre>

      {/* Hoisting with Functions */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Hoisting with Functions</h3>
      <p className="text-gray-700 text-lg">
        Function **declarations** are fully hoisted, meaning they can be called before being defined.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`hello(); // Output: Hello, World!

function hello() {
  console.log("Hello, World!");
}`}</code>
      </pre>

      <p className="text-gray-700 text-lg mt-4">
        However, function **expressions** (stored in variables) are **not hoisted** in the same way.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`greet(); // TypeError: greet is not a function

var greet = function() {
  console.log("Hi there!");
};`}</code>
      </pre>

      {/* Key Differences Table */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">🔍 Key Differences in Hoisting</h3>
      <table className="w-full mt-4 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 p-2">Declaration Type</th>
            <th className="border border-gray-400 p-2">Hoisted?</th>
            <th className="border border-gray-400 p-2">Initialized?</th>
            <th className="border border-gray-400 p-2">Can be used before declaration?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold"><code>var</code></td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">❌ No (undefined)</td>
            <td className="border border-gray-400 p-2">⚠️ Yes (but as undefined)</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 font-semibold"><code>let</code></td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">❌ No</td>
            <td className="border border-gray-400 p-2">🚫 No (ReferenceError)</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold"><code>const</code></td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">❌ No</td>
            <td className="border border-gray-400 p-2">🚫 No (ReferenceError)</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 font-semibold">Function Declaration</td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold">Function Expression</td>
            <td className="border border-gray-400 p-2">✅ Yes</td>
            <td className="border border-gray-400 p-2">❌ No</td>
            <td className="border border-gray-400 p-2">🚫 No (TypeError)</td>
          </tr>
        </tbody>
      </table>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">💡 Best Practices to Avoid Hoisting Issues</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Avoid using <code>var</code>. Use <code>let</code> or <code>const</code> for predictable behavior.</li>
        <li>Declare variables at the **beginning of their scope**.</li>
        <li>Always initialize variables when declaring them.</li>
        <li>Use function expressions instead of function declarations for better control over execution order.</li>
      </ul>
    </div>
      
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
