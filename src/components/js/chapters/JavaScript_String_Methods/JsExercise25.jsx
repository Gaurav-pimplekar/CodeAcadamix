import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JsExercise25 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript String Methods Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          JavaScript provides various string methods to manipulate and analyze text. 
          Try these exercises to practice commonly used string methods.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Practice Questions</h2>
        <div className="p-4 bg-white rounded-lg shadow">
          <ul className="list-decimal pl-6 space-y-2">
            <li>Declare a string variable and convert all its characters to uppercase.</li>
            <li>Write a function that returns the length of a given string.</li>
            <li>Create a string and extract the first five characters using <code>slice()</code>.</li>
            <li>Use <code>replace()</code> to change the word "bad" to "good" in a given sentence.</li>
            <li>Write a function that checks if a string contains the word "JavaScript".</li>
            <li>Take a full name as input and return only the first name using <code>split()</code>.</li>
            <li>Use <code>trim()</code> to remove extra spaces from a given string.</li>
            <li>Concatenate two strings using both the <code>+</code> operator and <code>concat()</code> method.</li>
            <li>Find the position (index) of the word "code" in the sentence: "Learn to code with JavaScript".</li>
            <li>Write a function that repeats a given string three times using <code>repeat()</code>.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default JsExercise25;
