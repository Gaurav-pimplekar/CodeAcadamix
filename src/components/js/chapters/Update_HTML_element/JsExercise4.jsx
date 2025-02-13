import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const JsExercise4 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript DOM Manipulation Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          The Document Object Model (DOM) allows JavaScript to dynamically change 
          the content, structure, and style of HTML elements. Complete the exercises below 
          to practice modifying HTML elements using JavaScript.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="space-y-6">
          
          {/* 1: Change Text Content */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiEdit className="text-blue-500 text-2xl" />
              <h3 className="text-xl font-semibold">1. Change Text Content</h3>
            </div>
            <p className="text-gray-700">
              Write a JavaScript function to change the text content of a paragraph with the ID <code className="bg-gray-200 px-1 rounded">"message"</code>.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code and send the file in classroom`}</pre>
          </div>

          {/* 2: Change Background Color */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiEdit className="text-green-500 text-2xl" />
              <h3 className="text-xl font-semibold">2. Change Background Color</h3>
            </div>
            <p className="text-gray-700">
              Use JavaScript to change the background color of a <code className="bg-gray-200 px-1 rounded">div</code> with the ID <code>"box"</code>.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code and send the file in classroom`}</pre>
          </div>

            {/* 2: Change Background Color */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FiEdit className="text-green-500 text-2xl" />
              <h3 className="text-xl font-semibold">3. Change Color</h3>
            </div>
            <p className="text-gray-700">
              Use JavaScript to change the color of a <code className="bg-gray-200 px-1 rounded">p</code> with the ID <code>"blog"</code>.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">{`// Write your code in vs code and send the file in classroom`}</pre>
          </div>

        </div>
      </section>

      {/* Conclusion */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700">
          These exercises will help you understand how to manipulate HTML elements dynamically using JavaScript.
          Test your solutions in a live environment and experiment with different approaches!
        </p>
      </section>
      
    </div>
  );
};

export default JsExercise4;
