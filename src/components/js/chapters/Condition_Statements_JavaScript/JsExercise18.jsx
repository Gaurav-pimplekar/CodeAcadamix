import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JsExercise18 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript Condition Statement Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Conditional statements in JavaScript allow you to execute different code 
          based on conditions. Try these exercises to practice <code>if</code>, <code>else</code>, 
          <code>else if</code>, and <code>switch</code> statements.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Basic Conditional Statements</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Write an <code>if</code> statement that checks if a number is positive.</li>
            <li>Use an <code>if-else</code> statement to check if a number is even or odd.</li>
            <li>Write an <code>if-else if-else</code> statement to categorize a person's age.</li>
            <li>Check if a given string is empty or not using an <code>if</code> statement.</li>
            <li>Compare two numbers and print which one is greater.</li>
          </ul>
        </div>

        <div className="p-4 bg-white rounded-lg shadow mt-6">
          <h3 className="text-xl font-semibold mb-2">Advanced Conditional Statements</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Write a program that checks if a year is a leap year.</li>
            <li>Use a <code>switch</code> statement to print the name of a day based on a number (1-7).</li>
            <li>Write a program that checks if a user is logged in and has admin privileges.</li>
            <li>Check if a number is within a specific range (e.g., between 10 and 50).</li>
            <li>Use a ternary operator to check if a number is greater than 100.</li>
          </ul>
        </div>

        <div className="p-4 bg-white rounded-lg shadow mt-6">
          <h3 className="text-xl font-semibold mb-2">Real-World Applications</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Check if a user is eligible for a discount based on their age.</li>
            <li>Determine the grade of a student based on their score.</li>
            <li>Validate a password length and check if it's strong (at least 8 characters).</li>
            <li>Check if a store is open or closed based on the current time.</li>
            <li>Determine the shipping cost based on the order total.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default JsExercise18;
