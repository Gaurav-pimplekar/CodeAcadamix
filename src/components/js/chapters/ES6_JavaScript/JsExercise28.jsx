import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JsExercise28 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript ES6 & Higher-Order Function Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          ES6 (ECMAScript 2015) introduced many new features to JavaScript, including 
          arrow functions, template literals, destructuring, the spread operator, and 
          higher-order functions like <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>. 
          Try these exercises to practice key ES6 concepts.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Practice Questions</h2>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">ES6 Fundamentals</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Convert a regular function into an arrow function.</li>
            <li>Use template literals to create a string that includes variables dynamically.</li>
            <li>Destructure an object to extract specific properties.</li>
            <li>Use the spread operator to merge two arrays.</li>
            <li>Write a function that takes multiple arguments using the rest operator.</li>
            <li>Use the <code>find()</code> method to get the first even number from an array.</li>
            <li>Write a function with default parameters.</li>
            <li>Create a JavaScript class with a constructor and a method.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Higher-Order Functions</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Use the <code>map()</code> function to double the values in an array.</li>
            <li>Use the <code>filter()</code> method to return only numbers greater than 10 from an array.</li>
            <li>Use the <code>reduce()</code> method to find the sum of all elements in an array.</li>
            <li>Create a higher-order function that takes a function as an argument and calls it.</li>
            <li>Use <code>forEach()</code> to log each element of an array.</li>
            <li>Write a function that returns another function (closure).</li>
            <li>Use <code>sort()</code> to arrange an array of numbers in ascending order.</li>
            <li>Use <code>every()</code> to check if all elements in an array are positive.</li>
            <li>Use <code>some()</code> to check if at least one element in an array is negative.</li>
            <li>Write a function that takes a callback function and applies it to an array.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default JsExercise28;
