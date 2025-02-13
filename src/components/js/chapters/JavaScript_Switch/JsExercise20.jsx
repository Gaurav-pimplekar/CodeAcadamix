import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JsExercise20 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaJsSquare className="text-yellow-500 text-4xl" />
        <h1 className="text-3xl font-bold">JavaScript Switch Statement Exercises</h1>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          The <code>switch</code> statement is used to perform different actions based on different conditions. 
          Below are some exercises to practice writing <code>switch</code> cases.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Practice Questions</h3>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Write a switch statement that prints the name of a day based on a number (1-7).</li>
            <li>Create a switch statement that checks the value of a traffic light color ("red", "yellow", "green") and prints an appropriate message.</li>
            <li>Write a switch statement that takes a month number (1-12) and prints the corresponding season.</li>
            <li>Use a switch statement to assign grades based on a student's score (A, B, C, D, F).</li>
            <li>Write a switch case to determine the type of an animal based on input ("dog", "cat", "cow", "bird").</li>
            <li>Use a switch statement to return different messages based on the user role ("admin", "editor", "guest").</li>
            <li>Create a switch statement that converts a number (1-4) into a corresponding direction ("North", "South", "East", "West").</li>
            <li>Write a switch statement that takes a food item and returns whether it's a fruit, vegetable, or unknown.</li>
            <li>Use a switch statement to categorize a given year into a century (e.g., 1900s, 2000s, 2100s).</li>
            <li>Write a switch statement that returns a response based on user input in a chatbot ("hello", "bye", "help").</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default JsExercise20;
