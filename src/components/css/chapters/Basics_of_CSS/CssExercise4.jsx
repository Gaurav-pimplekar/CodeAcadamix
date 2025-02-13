import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssExercise4 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">More Basic CSS Exercises</h1>
      </div>
      
      <ol className="list-decimal pl-6 space-y-6">
        <li>Set the background color of a div to light pink.</li>
        <li>Apply a 4px dotted green border to a section.</li>
        <li>Create a square div with 240px width and height.</li>
        <li>Center-align text inside a paragraph.</li>
        <li>Convert text to uppercase and increase letter spacing.</li>
        <li>Make a div fully circular.</li>
        <li>Strike through text inside a paragraph.</li>
        <li>Underline text with a red decoration.</li>
        <li>Change background to yellow on hover.</li>
        <li>Stack multiple divs vertically with spacing.</li>
        <li>Make an element bounce using CSS animation.</li>
        <li>Hide an element without removing it from layout.</li>
        <li>Make text italic and slightly larger.</li>
        <li>Create a div taking 5/6 of the page width and center it.</li>
        <li>Add a large shadow effect to a box.</li>
        <li>Reduce the opacity of an element to 75%.</li>
        <li>Enable scrolling inside a box with a height of 128px.</li>
        <li>Add a thick right-side border.</li>
        <li>Create horizontal spacing between inline elements.</li>
        <li>Increase the size of an element on hover.</li>
        <li>Make an element fill the entire viewport height.</li>
        <li>Apply a thick bottom border with yellow color.</li>
        <li>Make text small and gray.</li>
        <li>Rotate an element slightly on hover.</li>
        <li>Set a background image.</li>
        <li>Make a header stick to the top when scrolling.</li>
        <li>Position a button at the bottom-right corner.</li>
        <li>Ensure an element appears above other elements.</li>
      </ol>
    </div>
  );
};

export default CssExercise4;
