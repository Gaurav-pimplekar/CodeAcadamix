import React from "react";
import { FaJs, FaBookOpen, FaCogs, FaTools, FaDatabase, FaCode, FaLightbulb } from "react-icons/fa";

const JsChap14 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> JavaScript Objects
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          JavaScript objects are fundamental building blocks used to store data and organize functionality. Objects allow you to group related data and methods together.
        </p>
      </section>
      
      {/* Creating Objects */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCogs /> Creating Objects in JavaScript
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        Objects are a fundamental part of JavaScript and can be created in multiple ways.
      </p>

      {/* Object Literals */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Using Object Literals</h3>
      <p className="text-gray-700">
        The simplest and most common way to create an object is using **object literals**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Output: Hello, Alice`}</code>
      </pre>

      {/* Object Constructor */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Using the `new Object()` Syntax</h3>
      <p className="text-gray-700">
        Objects can also be created using the built-in **Object constructor**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const person = new Object();
person.name = "Bob";
person.age = 30;
person.greet = function() {
  console.log("Hello, " + this.name);
};
person.greet(); // Output: Hello, Bob`}</code>
      </pre>

      {/* Constructor Function */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Using Constructor Functions</h3>
      <p className="text-gray-700">
        Constructor functions allow creating **multiple objects** with the same structure.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, " + this.name);
  };
}
const user1 = new Person("Charlie", 35);
user1.greet(); // Output: Hello, Charlie`}</code>
      </pre>

      {/* ES6 Classes */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. Using ES6 Classes</h3>
      <p className="text-gray-700">
        ES6 introduced **classes**, which provide a cleaner syntax for creating objects.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, " + this.name);
  }
}
const user2 = new Person("David", 28);
user2.greet(); // Output: Hello, David`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **object literals** for simple structures.</li>
        <li>Use **constructor functions or classes** when creating multiple instances.</li>
        <li>Use **ES6 classes** for better readability and maintainability.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Classes and constructor functions provide **reusable** object templates.
      </p><div className="p-6 bg-gray-100 min-h-screen">
            {/* Section Title */}
            <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
              <FaTools /> Accessing and Modifying Objects
            </h2>
            <p className="mt-2 text-gray-700 text-lg">
              JavaScript provides different ways to access and modify object properties using **dot notation** and **bracket notation**.
            </p>
      
            {/* Dot Notation */}
            <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Using Dot Notation</h3>
            <p className="text-gray-700">
              The most common way to access properties is by using **dot notation**.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
              <code>{`const person = { name: "Alice", age: 25 };
      
      console.log(person.name); // Output: Alice
      console.log(person.age);  // Output: 25
      
      // Modifying a property
      person.age = 26;
      console.log(person.age);  // Output: 26`}</code>
            </pre>
      
            {/* Bracket Notation */}
            <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Using Bracket Notation</h3>
            <p className="text-gray-700">
              If a property name has **special characters** or is stored as a **variable**, use **bracket notation**.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
              <code>{`const person = { "first-name": "Alice", age: 25 };
      
      console.log(person["first-name"]); // Output: Alice
      console.log(person["age"]);       // Output: 25
      
      // Modifying a property
      person["age"] = 30;
      console.log(person["age"]);       // Output: 30`}</code>
            </pre>
      
            {/* Using Variables as Property Keys */}
            <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Using Variables as Property Keys</h3>
            <p className="text-gray-700">
              You can dynamically access properties using a **variable** with bracket notation.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
              <code>{`const key = "name";
      const person = { name: "Alice", age: 25 };
      
      console.log(person[key]); // Output: Alice`}</code>
            </pre>
      
            {/* Adding New Properties */}
            <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. Adding New Properties</h3>
            <p className="text-gray-700">
              Objects are **mutable**, so you can add new properties dynamically.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
              <code>{`const person = { name: "Alice" };
      
      person.age = 25;  // Adding new property
      person["city"] = "New York";
      
      console.log(person); // Output: { name: "Alice", age: 25, city: "New York" }`}</code>
            </pre>
      
            {/* Deleting Properties */}
            <h3 className="mt-6 text-2xl font-semibold text-blue-500">5. Deleting Properties</h3>
            <p className="text-gray-700">
              You can remove properties using the **delete** keyword.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
              <code>{`const person = { name: "Alice", age: 25 };
      
      delete person.age;
      console.log(person); // Output: { name: "Alice" }`}</code>
            </pre>
      
            {/* Best Practices */}
            <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Use **dot notation** for simple property names.</li>
              <li>Use **bracket notation** when dealing with **dynamic keys** or special characters.</li>
              <li>Be careful when deleting properties, as it **mutates the object**.</li>
            </ul>
      
            {/* Lightbulb Tip */}
            <p className="flex items-center mt-6 text-xl text-green-600">
              <FaLightbulb className="mr-2" /> Objects in JavaScript are **dynamic** and can be modified anytime!
            </p>
          </div>
    </div>
      
      {/* Accessing and Modifying Objects */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaTools /> Accessing and Modifying Objects
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        JavaScript provides different ways to access and modify object properties using **dot notation** and **bracket notation**.
      </p>

      {/* Dot Notation */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Using Dot Notation</h3>
      <p className="text-gray-700">
        The most common way to access properties is by using **dot notation**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const person = { name: "Alice", age: 25 };

console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25

// Modifying a property
person.age = 26;
console.log(person.age);  // Output: 26`}</code>
      </pre>

      {/* Bracket Notation */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Using Bracket Notation</h3>
      <p className="text-gray-700">
        If a property name has **special characters** or is stored as a **variable**, use **bracket notation**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const person = { "first-name": "Alice", age: 25 };

console.log(person["first-name"]); // Output: Alice
console.log(person["age"]);       // Output: 25

// Modifying a property
person["age"] = 30;
console.log(person["age"]);       // Output: 30`}</code>
      </pre>

      {/* Using Variables as Property Keys */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Using Variables as Property Keys</h3>
      <p className="text-gray-700">
        You can dynamically access properties using a **variable** with bracket notation.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const key = "name";
const person = { name: "Alice", age: 25 };

console.log(person[key]); // Output: Alice`}</code>
      </pre>

      {/* Adding New Properties */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. Adding New Properties</h3>
      <p className="text-gray-700">
        Objects are **mutable**, so you can add new properties dynamically.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const person = { name: "Alice" };

person.age = 25;  // Adding new property
person["city"] = "New York";

console.log(person); // Output: { name: "Alice", age: 25, city: "New York" }`}</code>
      </pre>

      {/* Deleting Properties */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">5. Deleting Properties</h3>
      <p className="text-gray-700">
        You can remove properties using the **delete** keyword.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const person = { name: "Alice", age: 25 };

delete person.age;
console.log(person); // Output: { name: "Alice" }`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **dot notation** for simple property names.</li>
        <li>Use **bracket notation** when dealing with **dynamic keys** or special characters.</li>
        <li>Be careful when deleting properties, as it **mutates the object**.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Objects in JavaScript are **dynamic** and can be modified anytime!
      </p>
    </div>
      
      {/* Object Methods */}
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaDatabase /> Object Methods
      </h2>
      <p className="mt-2 text-gray-700 text-lg">
        In JavaScript, objects can have **methods**, which are functions stored as properties. These methods allow objects to perform actions and interact with their own data.
      </p>

      {/* Example: Basic Object Method */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">1. Defining Methods</h3>
      <p className="text-gray-700">
        A method is a function stored as a **property** inside an object.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const car = {
  brand: "Toyota",
  model: "Corolla",
  getDetails: function() {
    return this.brand + " " + this.model;
  }
};

console.log(car.getDetails()); // Output: Toyota Corolla`}</code>
      </pre>

      {/* Example: Using 'this' */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">2. Using the <code>this</code> Keyword</h3>
      <p className="text-gray-700">
        The <code>this</code> keyword inside an object method refers to the object itself.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const user = {
  name: "Alice",
  age: 30,
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(user.greet()); // Output: Hello, my name is Alice`}</code>
      </pre>

      {/* Example: Shorter Method Syntax */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">3. Shorter Method Syntax (ES6)</h3>
      <p className="text-gray-700">
        JavaScript allows **shorthand syntax** for defining methods inside objects.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const user = {
  name: "Bob",
  sayHi() {
    return "Hi, I'm " + this.name;
  }
};

console.log(user.sayHi()); // Output: Hi, I'm Bob`}</code>
      </pre>

      {/* Example: Arrow Functions and Object Methods */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">4. Arrow Functions and Object Methods</h3>
      <p className="text-gray-700">
        **Arrow functions** do **not** have their own <code>this</code>, so they are not suitable as object methods.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const person = {
  name: "Charlie",
  greet: () => {
    return "Hello, " + this.name; // 'this' does not work here
  }
};

console.log(person.greet()); // Output: Hello, undefined`}</code>
      </pre>

      {/* Example: Adding Methods Dynamically */}
      <h3 className="mt-6 text-2xl font-semibold text-blue-500">5. Adding Methods Dynamically</h3>
      <p className="text-gray-700">
        You can add methods to an object **after it has been created**.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{`const bike = {
  brand: "Yamaha"
};

// Adding a method dynamically
bike.getBrand = function() {
  return this.brand;
};

console.log(bike.getBrand()); // Output: Yamaha`}</code>
      </pre>

      {/* Best Practices */}
      <h3 className="mt-6 text-2xl font-semibold text-green-600">💡 Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
        <li>Use **shorthand syntax** for cleaner and more readable code.</li>
        <li>Avoid using **arrow functions** as methods, as they don’t bind <code>this</code>.</li>
        <li>Use **meaningful method names** that clearly describe their purpose.</li>
      </ul>

      {/* Lightbulb Tip */}
      <p className="flex items-center mt-6 text-xl text-green-600">
        <FaLightbulb className="mr-2" /> Object methods help in writing **organized and reusable** code!
      </p>
    </div>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use object literals for simple objects.</li>
          <li>Use ES6 classes for complex objects with multiple methods.</li>
          <li>Use <code>Object.freeze()</code> to prevent modifications if immutability is required.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCode className="text-green-500" /> Understanding objects is key to writing efficient JavaScript code!
      </p>
    </div>
  );
};

export default JsChap14;
