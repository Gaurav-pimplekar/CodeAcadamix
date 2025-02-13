import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JsExercise17 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">Basic JavaScript Array Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Arrays in JavaScript are used to store multiple values in a single variable. 
          Below are some basic exercises to help you understand array operations.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Basic Array Operations</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Create an array with the names of three fruits.</li>
            <li>Access and log the second element of an array.</li>
            <li>Change the last element of an array to a new value.</li>
            <li>Add a new element to the end of an array using <code>push()</code>.</li>
            <li>Remove the last element of an array using <code>pop()</code>.</li>
            <li>Add a new element to the beginning of an array using <code>unshift()</code>.</li>
            <li>Remove the first element from an array using <code>shift()</code>.</li>
            <li>Find the length of an array using <code>.length</code>.</li>
            <li>Check if a specific value exists in an array using <code>.includes()</code>.</li>
            <li>Convert an array to a string using <code>.join()</code>.</li>
            <li>Use a loop to print all elements of an array.</li>
            <li>Reverse the order of an array using <code>.reverse()</code>.</li>
            <li>Concatenate two arrays together using <code>.concat()</code>.</li>
            <li>Find the index of a specific element using <code>.indexOf()</code>.</li>
            <li>Extract a portion of an array using <code>.slice()</code>.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default JsExercise17;
