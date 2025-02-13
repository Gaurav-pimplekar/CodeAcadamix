import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FiTerminal } from "react-icons/fi";

const JsExercise7 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript Variables & Console Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Variables store data in JavaScript, and the console helps us debug and display output. 
          Practice using variables and the console with the exercises below.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="space-y-6">
          
          {/* 1: Declare and Log a Variable */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-blue-500 text-2xl" />
              <h3 className="text-xl font-semibold">1. Declare and Log a Variable</h3>
            </div>
            <p className="text-gray-700">
              Declare a variable named <code className="bg-gray-200 px-1 rounded">greeting</code> and store the text <strong>"Hello, World!"</strong> inside it. Log it to the console.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

          {/* 2: Declare and Log Different Data Types */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-green-500 text-2xl" />
              <h3 className="text-xl font-semibold">2. Log Different Data Types</h3>
            </div>
            <p className="text-gray-700">
              Declare and log a number, a boolean, and an object to the console.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

          {/* 3: Variable Reassignment */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-red-500 text-2xl" />
              <h3 className="text-xl font-semibold">3. Variable Reassignment</h3>
            </div>
            <p className="text-gray-700">
              Declare a variable with a number value. Then, reassign it with a string and log the new value.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

          {/* 4: Logging Multiple Variables */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-yellow-500 text-2xl" />
              <h3 className="text-xl font-semibold">4. Log Multiple Variables</h3>
            </div>
            <p className="text-gray-700">
              Declare three different variables and log them in a single console statement.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

          {/* 5: String Concatenation */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-purple-500 text-2xl" />
              <h3 className="text-xl font-semibold">5. String Concatenation</h3>
            </div>
            <p className="text-gray-700">
              Declare two string variables and combine them into a single message. Log the result.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

          

          {/* 7: Undefined vs Null */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-gray-500 text-2xl" />
              <h3 className="text-xl font-semibold">7. Undefined vs Null</h3>
            </div>
            <p className="text-gray-700">
              Declare one variable without assigning it a value. Then, declare another variable and set it to <code>null</code>. Log both.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

          {/* 8: Logging Errors & Warnings */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-orange-500 text-2xl" />
              <h3 className="text-xl font-semibold">8. Logging Errors & Warnings</h3>
            </div>
            <p className="text-gray-700">
              Display an error message and a warning message in the console.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

          {/* 9: Console Table */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-indigo-500 text-2xl" />
              <h3 className="text-xl font-semibold">9. Log an Object as a Table</h3>
            </div>
            <p className="text-gray-700">
              Create an object with at least three properties and display it as a table in the console.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

          {/* 10: Clearing Console */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiTerminal className="text-gray-700 text-2xl" />
              <h3 className="text-xl font-semibold">10. Clear the Console</h3>
            </div>
            <p className="text-gray-700">
              Write a command to clear the console output.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code`}</pre>
          </div>

        </div>
      </section>
    </div>
  );
};

export default JsExercise7;
