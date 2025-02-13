import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JsExercise19 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript Functions with Condition Statements - Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Functions in JavaScript allow you to group reusable code, and combining them with condition 
          statements makes them more powerful. Below are some exercises to practice writing functions 
          with <code>if</code>, <code>else</code>, <code>switch</code>, and ternary operators.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>

        {/* Basic Function Exercises */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Basic Function and Condition Exercises</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Create a function that checks if a number is positive, negative, or zero.</li>
            <li>Write a function that takes a number and returns whether it's even or odd.</li>
            <li>Define a function that checks if a given string is empty.</li>
            <li>Create a function that accepts two numbers and returns the larger one.</li>
            <li>Write a function that checks if a user is eligible to vote (age 18+).</li>
          </ul>
        </div>

        {/* Intermediate Function Exercises */}
        <div className="p-4 bg-white rounded-lg shadow mt-6">
          <h3 className="text-xl font-semibold mb-2">Intermediate Function and Condition Exercises</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Create a function that takes a year and checks if it is a leap year.</li>
            <li>Write a function that takes three numbers and returns the largest.</li>
            <li>Define a function that returns the grade of a student based on their score.</li>
            <li>Create a function that checks if a password meets security criteria (at least 8 characters).</li>
            <li>Write a function that determines the shipping cost based on order total.</li>
          </ul>
        </div>

        {/* Advanced Function Exercises */}
        <div className="p-4 bg-white rounded-lg shadow mt-6">
          <h3 className="text-xl font-semibold mb-2">Advanced Function and Condition Exercises</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Create a function that returns whether a store is open based on current time.</li>
            <li>Write a function that determines if a person is eligible for a discount (age & purchase history).</li>
            <li>Define a function that calculates the tax based on income and tax brackets.</li>
            <li>Create a function that determines whether a given character is a vowel or consonant.</li>
            <li>Write a function that takes an object with user details and returns a welcome message based on role.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default JsExercise19;
