import React from 'react';
import { FaSyncAlt, FaLightbulb } from "react-icons/fa";
import { FiTerminal } from "react-icons/fi";


const JsExercise22 = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <FaSyncAlt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript Loop Practice Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Loops in JavaScript allow us to execute a block of code multiple times.
          Try these exercises to improve your looping skills.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="space-y-6">

          {/* 1-10: Basic Looping */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaSyncAlt className="text-blue-500" /> Basic Loops (With Sample Outputs)
            </h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>
                Write a <code>for</code> loop to print numbers from <strong>1 to 5</strong>.
                <pre className="bg-gray-900 text-white p-2 rounded-md overflow-x-auto mt-2">
                  <code>{`// Output:
1
2
3
4
5`}</code>
                </pre>
              </li>
              <li>
                Use a <code>while</code> loop to print numbers from <strong>5 to 1</strong>.
                <pre className="bg-gray-900 text-white p-2 rounded-md overflow-x-auto mt-2">
                  <code>{`// Output:
5
4
3
2
1`}</code>
                </pre>
              </li>
              <li>
                Write a <code>for</code> loop to print the first <strong>5 even numbers</strong>.
                <pre className="bg-gray-900 text-white p-2 rounded-md overflow-x-auto mt-2">
                  <code>{`// Output:
2
4
6
8
10`}</code>
                </pre>
              </li>
            </ul>
          </div>

          {/* 11-20: Iterating Over Arrays */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FiTerminal className="text-green-500" /> Iterating Over Arrays (With Hints)
            </h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>
                Write a loop that finds the <strong>maximum number in an array</strong>.
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> Hint: Use a <code>for</code> loop and track the largest number.
                </p>
              </li>
              <li>
                Use a loop to count the number of <strong>vowels</strong> in a string.
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> Hint: Loop through each character and check if it’s "a, e, i, o, u".
                </p>
              </li>
              <li>
                Write a loop that reverses an array.
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> Hint: Swap the first and last elements until the middle is reached.
                </p>
              </li>
              <li>
                Use the <code>reduce()</code> method to calculate the sum of an array.
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> Hint: <code>reduce()</code> iterates over elements and accumulates a result.
                </p>
              </li>
            </ul>
          </div>

          {/* 21-25: Advanced Looping */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaSyncAlt className="text-red-500" /> Advanced Loops (With Hints)
            </h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>
                Write a <strong>nested loop</strong> to print a pattern of stars.
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> Hint: Use an outer loop for rows and an inner loop for columns.
                </p>
                <pre className="bg-gray-900 text-white p-2 rounded-md overflow-x-auto mt-2">
                  <code>{`// Output:
*
**
***
****
*****`}</code>
                </pre>
              </li>
              <li>
                Use a loop to generate the <strong>Fibonacci series</strong> up to 10 terms.
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> Hint: The next number is the sum of the previous two numbers.
                </p>
                <pre className="bg-gray-900 text-white p-2 rounded-md overflow-x-auto mt-2">
                  <code>{`// Output:
0 1 1 2 3 5 8 13 21 34`}</code>
                </pre>
              </li>
              <li>
                Write a loop that checks if a string is a <strong>palindrome</strong>.
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> Hint: Compare the string to its reverse.
                </p>
                <pre className="bg-gray-900 text-white p-2 rounded-md overflow-x-auto mt-2">
                  <code>{`// Example Input: "racecar"
// Output: true (It’s a palindrome)`}</code>
                </pre>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
    );
};

export default JsExercise22;
