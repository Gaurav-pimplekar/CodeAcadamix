import React from "react";
import { FaJs, FaBookOpen, FaCalculator, FaEquals, FaPlus, FaCode, FaLightbulb } from "react-icons/fa";

const JsChap9 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Operators and Assignments
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Operators in JavaScript allow you to perform operations on variables and values. Assignment operators are used to assign values to variables. Understanding these concepts is fundamental to writing efficient JavaScript code.
        </p>
      </section>
      
      {/* Arithmetic Operators */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCalculator /> Arithmetic Operators in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        JavaScript provides several **arithmetic operators** for performing mathematical computations.
      </p>

      {/* List of Arithmetic Operators */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. List of Arithmetic Operators</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li><code>+</code> (Addition) - Adds two numbers.</li>
        <li><code>-</code> (Subtraction) - Subtracts the second number from the first.</li>
        <li><code>*</code> (Multiplication) - Multiplies two numbers.</li>
        <li><code>/</code> (Division) - Divides the first number by the second.</li>
        <li><code>%</code> (Modulus) - Returns the remainder of division.</li>
        <li><code>**</code> (Exponentiation) - Raises a number to a power.</li>
      </ul>

      {/* Examples */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Examples</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`let a = 10, b = 5;
console.log(a + b); // Output: 15  (Addition)
console.log(a - b); // Output: 5   (Subtraction)
console.log(a * b); // Output: 50  (Multiplication)
console.log(a / b); // Output: 2   (Division)
console.log(a % b); // Output: 0   (Modulus)
console.log(a ** 2); // Output: 100 (Exponentiation)`}</code>
      </pre>

      {/* Table for Better Understanding */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">🔍 Understanding Arithmetic Operators</h3>
      <table className="w-full mt-4 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 p-2">Operator</th>
            <th className="border border-gray-400 p-2">Description</th>
            <th className="border border-gray-400 p-2">Example</th>
            <th className="border border-gray-400 p-2">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 text-center"><code>+</code></td>
            <td className="border border-gray-400 p-2">Addition</td>
            <td className="border border-gray-400 p-2"><code>5 + 3</code></td>
            <td className="border border-gray-400 p-2 text-center">8</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 text-center"><code>-</code></td>
            <td className="border border-gray-400 p-2">Subtraction</td>
            <td className="border border-gray-400 p-2"><code>10 - 6</code></td>
            <td className="border border-gray-400 p-2 text-center">4</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center"><code>*</code></td>
            <td className="border border-gray-400 p-2">Multiplication</td>
            <td className="border border-gray-400 p-2"><code>4 * 2</code></td>
            <td className="border border-gray-400 p-2 text-center">8</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 text-center"><code>/</code></td>
            <td className="border border-gray-400 p-2">Division</td>
            <td className="border border-gray-400 p-2"><code>8 / 2</code></td>
            <td className="border border-gray-400 p-2 text-center">4</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center"><code>%</code></td>
            <td className="border border-gray-400 p-2">Modulus</td>
            <td className="border border-gray-400 p-2"><code>10 % 3</code></td>
            <td className="border border-gray-400 p-2 text-center">1</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 text-center"><code>**</code></td>
            <td className="border border-gray-400 p-2">Exponentiation</td>
            <td className="border border-gray-400 p-2"><code>3 ** 2</code></td>
            <td className="border border-gray-400 p-2 text-center">9</td>
          </tr>
        </tbody>
      </table>

      {/* Edge Cases */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Edge Cases</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Dividing by zero returns **Infinity** (<code>10 / 0</code> → <code>Infinity</code>).</li>
        <li>The modulus operator returns the remainder (<code>11 % 3</code> → <code>2</code>).</li>
        <li>Exponentiation can be used for square roots (<code>16 ** 0.5</code> → <code>4</code>).</li>
      </ul>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use parentheses to ensure the correct order of operations.</li>
        <li>Avoid dividing by zero as it returns **Infinity**.</li>
        <li>Use <code>Math.pow(x, y)</code> for better readability in older JavaScript versions instead of <code>**</code>.</li>
      </ul>
    </div>
      
      {/* Assignment Operators */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaEquals /> Assignment Operators in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Assignment operators are used to **assign values** to variables in JavaScript.
      </p>

      {/* List of Assignment Operators */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Types of Assignment Operators</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li><code>=</code> (Simple assignment) - Assigns a value to a variable.</li>
        <li><code>+=</code> (Addition assignment) - Adds a value to a variable.</li>
        <li><code>-=</code> (Subtraction assignment) - Subtracts a value from a variable.</li>
        <li><code>*=</code> (Multiplication assignment) - Multiplies a variable’s value.</li>
        <li><code>/=</code> (Division assignment) - Divides a variable’s value.</li>
        <li><code>%=</code> (Modulus assignment) - Assigns the remainder of division.</li>
        <li><code>**=</code> (Exponentiation assignment) - Raises a number to a power.</li>
      </ul>

      {/* Examples */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Examples</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`let x = 10;
x += 5; // x = x + 5
console.log(x); // Output: 15

let y = 20;
y -= 3; // y = y - 3
console.log(y); // Output: 17

let z = 4;
z *= 2; // z = z * 2
console.log(z); // Output: 8

let a = 25;
a /= 5; // a = a / 5
console.log(a); // Output: 5

let b = 10;
b %= 3; // b = b % 3
console.log(b); // Output: 1

let c = 3;
c **= 2; // c = c ** 2
console.log(c); // Output: 9`}</code>
      </pre>

      {/* Table for Better Understanding */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">🔍 Understanding Assignment Operators</h3>
      <table className="w-full mt-4 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 p-2">Operator</th>
            <th className="border border-gray-400 p-2">Description</th>
            <th className="border border-gray-400 p-2">Example</th>
            <th className="border border-gray-400 p-2">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 text-center"><code>=</code></td>
            <td className="border border-gray-400 p-2">Assigns a value</td>
            <td className="border border-gray-400 p-2"><code>let a = 5;</code></td>
            <td className="border border-gray-400 p-2 text-center">a = 5</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 text-center"><code>+=</code></td>
            <td className="border border-gray-400 p-2">Addition assignment</td>
            <td className="border border-gray-400 p-2"><code>a += 2;</code></td>
            <td className="border border-gray-400 p-2 text-center">a = 7</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center"><code>-=</code></td>
            <td className="border border-gray-400 p-2">Subtraction assignment</td>
            <td className="border border-gray-400 p-2"><code>a -= 1;</code></td>
            <td className="border border-gray-400 p-2 text-center">a = 6</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 text-center"><code>*=</code></td>
            <td className="border border-gray-400 p-2">Multiplication assignment</td>
            <td className="border border-gray-400 p-2"><code>a *= 3;</code></td>
            <td className="border border-gray-400 p-2 text-center">a = 18</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center"><code>/=</code></td>
            <td className="border border-gray-400 p-2">Division assignment</td>
            <td className="border border-gray-400 p-2"><code>a /= 2;</code></td>
            <td className="border border-gray-400 p-2 text-center">a = 9</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 p-2 text-center"><code>%=</code></td>
            <td className="border border-gray-400 p-2">Modulus assignment</td>
            <td className="border border-gray-400 p-2"><code>a %= 4;</code></td>
            <td className="border border-gray-400 p-2 text-center">a = 1</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center"><code>**=</code></td>
            <td className="border border-gray-400 p-2">Exponentiation assignment</td>
            <td className="border border-gray-400 p-2"><code>a **= 2;</code></td>
            <td className="border border-gray-400 p-2 text-center">a = 1</td>
          </tr>
        </tbody>
      </table>

      {/* Edge Cases */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Edge Cases</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Assignment operators work from **right to left**.</li>
        <li>Using <code>const</code> prevents assignment changes.</li>
        <li>Applying <code>+=</code> to strings performs **concatenation**, not addition.</li>
      </ul>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **const** when values shouldn’t change to avoid unintended assignments.</li>
        <li>Use **parentheses** for clarity when mixing assignment with other operations.</li>
        <li>Be cautious when using <code>+=</code> with numbers and strings together.</li>
      </ul>
    </div>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use shorthand assignment operators to simplify code.</li>
          <li>Be cautious with division and modulus to avoid unexpected results.</li>
          <li>Understand operator precedence when writing complex expressions.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Experiment with these operators to understand their functionality!
      </p>
    </div>
  );
};

export default JsChap9;
