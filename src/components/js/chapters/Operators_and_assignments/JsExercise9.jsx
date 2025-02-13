import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FiTerminal } from "react-icons/fi";

const JsExercise9 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript Operators & Assignments Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          JavaScript operators perform operations on values, and assignment operators store values. 
          Practice these concepts with the exercises below.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="space-y-6">

          {/* 1-15: Arithmetic Operators */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Arithmetic Operators</h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Create two variables and add them together. Log the result.</li>
              <li>Subtract one number from another and log the result.</li>
              <li>Multiply two numbers and log the product.</li>
              <li>Divide one number by another and log the quotient.</li>
              <li>Use the modulus operator to find the remainder of a division.</li>
              <li>Increment a variable’s value by 1 and log the result.</li>
              <li>Decrement a variable’s value by 1 and log the result.</li>
              <li>Use the exponentiation operator to calculate 6 raised to the power of 3.</li>
              <li>Declare a variable and add 10 to it using `+=`.</li>
              <li>Declare a variable and multiply it by 4 using `*=`.</li>
              <li>Declare a variable and subtract 5 from it using `-=`.</li>
              <li>Declare a variable and divide it by 2 using `/=`.</li>
              <li>Use `++` to increment a variable before logging it.</li>
              <li>Use `--` to decrement a variable after logging it.</li>
              <li>Combine multiple arithmetic operations in a single expression and log the result.</li>
            </ul>
          </div>

          {/* 16-30: Comparison Operators */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Comparison Operators</h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Compare two numbers using `&gt;` and log the result.</li>
              <li>Compare two numbers using `&lt;` and log the result.</li>
              <li>Check if two values are equal using `==` and log the result.</li>
              <li>Check if two values are strictly equal using `===` and log the result.</li>
              <li>Compare two numbers using `&gt;=` and log the result.</li>
              <li>Compare two numbers using `&lt;=` and log the result.</li>
              <li>Check if two values are not equal using `!=` and log the result.</li>
              <li>Check if two values are strictly not equal using `!==` and log the result.</li>
              <li>Compare a string and a number with `==`. Explain the result.</li>
              <li>Compare a string and a number with `===`. Explain the result.</li>
              <li>Declare two different variables and check if one is greater than or equal to the other.</li>
              <li>Declare two different variables and check if one is less than or equal to the other.</li>
              <li>Write a comparison where a number is checked against a boolean.</li>
              <li>Compare an empty string (`""`) with 0 and explain the output.</li>
              <li>Use a comparison operator inside an `if` statement and log a message based on the result.</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default JsExercise9;
