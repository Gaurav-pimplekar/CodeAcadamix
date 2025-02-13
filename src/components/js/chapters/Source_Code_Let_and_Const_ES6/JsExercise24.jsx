import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JsExercise24 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript <code>let</code> and <code>const</code> Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          The <code>let</code> and <code>const</code> keywords are used to declare variables in JavaScript. 
          Try these exercises to practice their differences and usage.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Practice Questions</h2>
        <div className="p-4 bg-white rounded-lg shadow">
          <ul className="list-decimal pl-6 space-y-2">
            <li>Declare a variable using <code>let</code> and change its value later in the code.</li>
            <li>Use <code>const</code> to declare a variable and try reassigning it. What happens?</li>
            <li>Declare a <code>let</code> variable inside a block (<code>{`{}`}</code>). Try accessing it outside the block. What do you observe?</li>
            <li>Use <code>const</code> to create an array, then modify one of its elements. Does it work? Why?</li>
            <li>Create a program where a variable is declared with <code>let</code> inside a function. Try accessing it outside the function. What happens?</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default JsExercise24;
