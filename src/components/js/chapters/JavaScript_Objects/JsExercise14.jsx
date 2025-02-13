import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JsExercise14 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript Objects Practice Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Objects in JavaScript allow us to store multiple key-value pairs in a structured way. 
          Practice working with objects using the exercises below.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="space-y-6">

          {/* 1-10: Basic Object Creation & Properties */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Basic Object Creation & Properties</h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Create an object representing a person with properties `name`, `age`, and `city`.</li>
              <li>Access and log the `name` property of an object.</li>
              <li>Update the `age` property of an object.</li>
              <li>Add a new property `hobby` to an existing object.</li>
              <li>Delete the `city` property from an object.</li>
              <li>Check if an object has a property called `email`.</li>
              <li>List all keys of an object using `Object.keys()`.</li>
              <li>List all values of an object using `Object.values()`.</li>
              <li>Get both keys and values of an object using `Object.entries()`.</li>
              <li>Use the `in` operator to check if a key exists in an object.</li>
            </ul>
          </div>

          {/* 11-20: Nested Objects & Methods */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Nested Objects & Methods</h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Create an object with a nested object inside it.</li>
              <li>Access a property from a nested object.</li>
              <li>Modify a value inside a nested object.</li>
              <li>Create an object with a method that logs a message.</li>
              <li>Call a method from an object.</li>
              
            </ul>
          </div>


        </div>
      </section>
    </div>
  );
};

export default JsExercise14;
