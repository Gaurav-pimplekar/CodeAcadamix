import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssExercise9 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">External CSS Exercises</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl">Create new css file for every 5 questions</h1>
      </div>
      
      <ol className="list-decimal pl-6 space-y-6">
        <li>Set the background color of the entire page using an external CSS file.</li>
        <li>Apply a global font style to the webpage using an external stylesheet.</li>
        <li>Ensure all buttons have a consistent padding and border using external CSS.</li>
        <li>Apply a hover effect on all links using an external CSS file.</li>
        <li>Set a default margin and padding for all elements using external CSS.</li>
        <li>Style all images to have a maximum width of 100%</li>
        <li>Create a consistent box-shadow effect for all card components using external CSS.</li>
        <li>Ensure all form input fields have a standard width, padding, and border.</li>
        <li>Set a global line-height for better readability across the website.</li>
        <li>Make sure all footer elements have a fixed height and background color.</li>
        <li>Define a default border-radius for all images using an external CSS file.</li>
      </ol>
    </div>
  );
};

export default CssExercise9;
