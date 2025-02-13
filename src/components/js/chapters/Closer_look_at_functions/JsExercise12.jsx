import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FiTerminal } from "react-icons/fi";

const JsExercise12 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript Functions Practice Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Functions in JavaScript allow us to write reusable blocks of code. 
          They help organize programs and avoid repetition. Try these exercises to master JavaScript functions.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="space-y-6">

          {/* 1-10: Basic Function Creation */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Basic Function Creation</h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Write a function that prints "Hello, World!" to the console.</li>
              <li>Create a function that takes a name as a parameter and logs "Hello, [name]!".</li>
              <li>Write a function that returns the sum of two numbers.</li>
              <li>Create a function that calculates the product of two numbers and logs the result.</li>
              <li>Define a function that takes a number and returns its square.</li>
              <li>Write a function that takes a number and returns true if it is even, false otherwise.</li>
              <li>Create a function that returns the larger of two numbers.</li>
              <li>Define a function that returns the absolute difference between two numbers.</li>
              <li>Write a function that takes a string and returns its length.</li>
              <li>Create a function that checks if a number is positive, negative, or zero.</li>
            </ul>
          </div>

          {/* 11-20: Function Expressions & Arrow Functions */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Function Expressions & Arrow Functions</h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Rewrite a function as a function expression.</li>
              <li>Convert a function to an arrow function.</li>
              <li>Write an arrow function that returns the square of a number.</li>
              <li>Create an arrow function that checks if a number is odd.</li>
              <li>Write an arrow function that takes two numbers and returns their difference.</li>
              <li>Create a function that returns the first character of a string.</li>
              <li>Define an arrow function that checks if a string contains the letter "a".</li>
              <li>Write a function expression that multiplies three numbers.</li>
              <li>Create an arrow function that concatenates two strings.</li>
              <li>Define an arrow function that returns the last element of an array.</li>
            </ul>
          </div>

          {/* 21-30: Advanced Functions */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Advanced Functions</h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Write a function with a default parameter.</li>
              <li>Create a function that takes any number of arguments and returns their sum.</li>
              <li>Define a function inside another function and call it.</li>
              <li>Write a function that returns a function.</li>
              <li>Create a function that checks if all elements in an array are positive.</li>
              <li>Write a function that sorts an array of numbers in ascending order.</li>
              <li>Define a function that returns the factorial of a number.</li>
              <li>Create a function that reverses a given string.</li>
              <li>Write a function that removes all spaces from a string.</li>
              <li>Define a function that finds the maximum value in an array.</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default JsExercise12;
