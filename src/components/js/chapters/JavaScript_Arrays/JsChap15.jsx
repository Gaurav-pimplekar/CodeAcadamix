import React from "react";
import { FaJs, FaBookOpen, FaListUl, FaTools, FaDatabase, FaCode, FaLightbulb } from "react-icons/fa";

const JsChap15 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Arrays
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Arrays in JavaScript are used to store multiple values in a single variable. They provide various methods for easy manipulation of data.
        </p>
      </section>
      
      {/* Creating Arrays */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaListUl /> Creating Arrays in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        An array in JavaScript is a **special variable** that can hold multiple values. JavaScript arrays are dynamic and can store different data types.
      </p>

      {/* Example: Array Literals */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Using Array Literals</h3>
      <p className="text-gray-700">
        The **simplest** way to create an array is by using **square brackets** (<code>[]</code>).
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple`}</code>
      </pre>

      {/* Example: Using new Array() */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Using the <code>new Array()</code> Constructor</h3>
      <p className="text-gray-700">
        You can create an array using the **<code>new Array()</code>** constructor, but it is **not recommended** due to unexpected behavior.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = new Array(3); // Creates an empty array with 3 slots
console.log(numbers.length); // Output: 3`}</code>
      </pre>

      {/* Example: Mixed Data Types */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Storing Mixed Data Types</h3>
      <p className="text-gray-700">
        JavaScript arrays can contain different types of values.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const mixedArray = ["Hello", 42, true, { name: "John" }];
console.log(mixedArray[3]); // Output: { name: "John" }`}</code>
      </pre>

      {/* Example: Accessing Array Elements */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. Accessing Elements</h3>
      <p className="text-gray-700">
        Array elements are accessed using their **index**, starting from <code>0</code>.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const colors = ["Red", "Green", "Blue"];
console.log(colors[1]); // Output: Green`}</code>
      </pre>

      {/* Example: Modifying Array Elements */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">5. Modifying Elements</h3>
      <p className="text-gray-700">
        Arrays are **mutable**, meaning elements can be changed.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const cars = ["Toyota", "BMW", "Tesla"];
cars[1] = "Mercedes";
console.log(cars); // Output: ["Toyota", "Mercedes", "Tesla"]`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **array literals** (<code>[]</code>) instead of <code>new Array()</code> for creating arrays.</li>
        <li>Use <code>const</code> for arrays that shouldn’t be reassigned.</li>
        <li>Arrays can store multiple **data types**, but keeping them consistent is a good practice.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Arrays are **powerful** in JavaScript and support various methods for manipulation!
      </p>
    </div>
      
      {/* Array Methods */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaTools /> Array Methods in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        JavaScript provides numerous built-in methods to manipulate arrays efficiently.
      </p>

      {/* push() - Add to End */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. <code>push()</code> - Add to End</h3>
      <p className="text-gray-700">Adds one or more elements to the **end** of an array.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]`}</code>
      </pre>

      {/* pop() - Remove from End */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. <code>pop()</code> - Remove from End</h3>
      <p className="text-gray-700">Removes the **last** element from an array.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const fruits = ["Apple", "Banana", "Cherry"];
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana"]`}</code>
      </pre>

      {/* unshift() - Add to Start */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. <code>unshift()</code> - Add to Start</h3>
      <p className="text-gray-700">Adds one or more elements to the **beginning** of an array.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const colors = ["Red", "Green"];
colors.unshift("Blue");
console.log(colors); // Output: ["Blue", "Red", "Green"]`}</code>
      </pre>

      {/* shift() - Remove from Start */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. <code>shift()</code> - Remove from Start</h3>
      <p className="text-gray-700">Removes the **first** element from an array.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = [10, 20, 30];
numbers.shift();
console.log(numbers); // Output: [20, 30]`}</code>
      </pre>

      {/* map() - Transform Array */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">5. <code>map()</code> - Transform Array</h3>
      <p className="text-gray-700">Creates a **new** array by applying a function to each element.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9]`}</code>
      </pre>

      {/* filter() - Filtering Elements */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">6. <code>filter()</code> - Filtering Elements</h3>
      <p className="text-gray-700">Returns a **new** array with elements that pass a condition.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = [10, 25, 30, 45];
const aboveTwenty = numbers.filter(num => num > 20);
console.log(aboveTwenty); // Output: [25, 30, 45]`}</code>
      </pre>

      {/* reduce() - Accumulate Values */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">7. <code>reduce()</code> - Accumulate Values</h3>
      <p className="text-gray-700">Reduces an array to a **single** value.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10`}</code>
      </pre>

      {/* find() - Find an Element */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">8. <code>find()</code> - Find an Element</h3>
      <p className="text-gray-700">Returns the **first** element that matches a condition.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const users = [{name: "Alice"}, {name: "Bob"}];
const user = users.find(u => u.name === "Bob");
console.log(user); // Output: {name: "Bob"}`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **immutable** array methods like <code>map()</code> and <code>filter()</code> for better performance.</li>
        <li>Use **descriptive function names** when working with methods like <code>reduce()</code>.</li>
        <li>Avoid using <code>new Array()</code> unless necessary.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> **Understanding array methods is key to writing efficient JavaScript!**
      </p>
    </div>
      
      {/* Iterating Over Arrays */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaDatabase /> Iterating Over Arrays
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        JavaScript provides various ways to loop through arrays efficiently.
      </p>

      {/* forEach() - Iterating with Callback */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. <code>forEach()</code> - Iterating with Callback</h3>
      <p className="text-gray-700">Executes a function for each array element.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const colors = ["Red", "Green", "Blue"];
colors.forEach(color => console.log(color));`}</code>
      </pre>

      {/* for loop - Traditional Loop */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. <code>for</code> Loop - Traditional Approach</h3>
      <p className="text-gray-700">A standard way to iterate using an index.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}`}</code>
      </pre>

      {/* for...of - Simpler Iteration */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. <code>for...of</code> - Simpler Iteration</h3>
      <p className="text-gray-700">A cleaner way to loop through arrays.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}`}</code>
      </pre>

      {/* map() - Transforming Array */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. <code>map()</code> - Transforming Array</h3>
      <p className="text-gray-700">Creates a new array with modified elements.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]`}</code>
      </pre>

      {/* filter() - Conditional Iteration */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">5. <code>filter()</code> - Conditional Iteration</h3>
      <p className="text-gray-700">Filters elements based on a condition.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const numbers = [5, 10, 15, 20];
const aboveTen = numbers.filter(num => num > 10);
console.log(aboveTen); // Output: [15, 20]`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use <code>forEach()</code> for side effects like logging.</li>
        <li>Use <code>map()</code> to create a new transformed array.</li>
        <li>Use <code>filter()</code> when you need a subset of the original array.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> **Choosing the right loop method improves performance & readability!**
      </p>
    </div>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use array methods like <code>map()</code>, <code>filter()</code>, and <code>reduce()</code> for cleaner code.</li>
          <li>Prefer <code>const</code> for arrays unless reassigning is needed.</li>
          <li>Avoid modifying arrays directly; use methods that return new arrays instead.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Mastering arrays will help you handle data efficiently in JavaScript!
      </p>
    </div>
  );
};

export default JsChap15;
