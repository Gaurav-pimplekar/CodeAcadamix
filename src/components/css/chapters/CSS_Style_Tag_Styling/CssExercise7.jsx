import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssExercise7 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">Style Tag CSS Exercises</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <p className="text-2xl">Note : create new file for every 5 exercise</p>
      </div>
      
      <ol className="list-decimal pl-6 space-y-6">
        <li>Set the text color of all paragraphs to blue using the style tag.</li>
        <li>Change the background color of the body to lightgray using the style tag.</li>
        <li>Apply a 3px solid black border to all div elements.</li>
        <li>Set a global font size of 18px for all text elements.</li>
        <li>Apply a padding of 15px to all sections.</li>
        <li>Set a margin of 25px for all images.</li>
        <li>Make all buttons have a background color of green.</li>
        <li>Underline all h1 headings using the style tag.</li>
        <li>Center-align all text inside div elements.</li>
        <li>Apply a box-shadow effect to all card components.</li>
        <li>Set the width of all images to 60% of the parent container.</li>
        <li>Change the hover color of links to red.</li>
        <li>Apply a fixed height of 100px to all header elements.</li>
        <li>Make all paragraphs italic using the style tag.</li>
        <li>Give all list items a background color of lightblue.</li>
        <li>Set the letter spacing of h2 elements to 3px.</li>
        <li>Round the corners of all buttons using border-radius.</li>
        <li>Ensure all divs have a minimum height of 200px.</li>
        <li>Set the z-index of a fixed navigation bar to 1000.</li>
        <li>Make an element disappear when hovered.</li>
        <li>Apply a linear gradient background to a specific section.</li>
        <li>Style all table headers with a bold font weight.</li>
        <li>Make all input fields have a light border and padding.</li>
        <li>Set the transition effect for button hover states.</li>
        <li>Apply a thick left border to all blockquotes.</li>
        <li>Change the font family of the entire document.</li>
        <li>Ensure all span elements have a text color of dark gray.</li>
        <li>Make all icons have a fixed size of 24px.</li>
        <li>Give all footer elements a solid background color.</li>
      </ol>
    </div>
  );
};

export default CssExercise7;
