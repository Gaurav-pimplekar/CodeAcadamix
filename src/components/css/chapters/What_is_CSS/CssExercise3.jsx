import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssExercise3 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">Basic CSS Exercises</h1>
      </div>
      
      <ol className="list-disc pl-6 space-y-6">
        <li className="text-red-500">Change the text color of a paragraph to red.</li>
        <li className="bg-blue-200 p-2">Set the background color of a div to lightblue.</li>
        <li className="bg-gradient-to-r from-green-400 to-blue-500 p-4">Apply a gradient background to a section.</li>
        <li className="border-2 border-red-500 p-2">Add a solid 2px red border to a div.</li>
        <li className="w-1/2">Make an image 50% of the page width.</li>
        <li className="max-w-lg">Set a paragraph to have a max-width of 600px.</li>
        <li className="min-h-[100px] bg-gray-300 p-2">Ensure a div has a min-height of 100px.</li>
        <li className="mx-auto w-1/2">Apply margin: auto; to center a section.</li>
        <li className="p-10 bg-yellow-200">Add 10px padding inside a div.</li>
        <li className="pl-5">Use padding-left: 20px; to indent a paragraph.</li>
        <li className="hover:p-6 transition-all border bg-gray-100">Increase padding on hover for a button.</li>
        <li className="p-0">Remove padding from a ul list.</li>
        <li className="shadow-lg p-4 bg-white">Add box-shadow to a card element.</li>
        <li className="block">Apply display: block; to a span.</li>
        <li className="inline-block bg-purple-200 p-2">Make a div inline-block.</li>
        <li className="opacity-50">Use opacity: 0.5; to make an element semi-transparent.</li>
        <li className="box-border p-4 w-40 bg-gray-300">Apply box-sizing: border-box; to ensure width includes padding.</li>
        <li className="hover:text-orange-500">Make the text inside a span orange when hovered over.</li>
        <li className="mt-12">Set a top margin of 50px for a div.</li>
        <li className="m-0">Remove default margin from h1 and h2.</li>
        <li className="text-green-700">Change the color of all headings (h1, h2, h3) to darkgreen.</li>
        <li className="border-dashed border-4 border-blue-500 p-2">Make an input border dashed 3px blue.</li>
        <li className="border-double border-4 border-black p-2">Apply a double 5px black border to a button.</li>
        <li className="rounded-lg border border-gray-400 p-2">Create a rounded border with border-radius: 10px for a div.</li>
        <li className="w-72 bg-green-100 p-2">Set the width of a div to 300px.</li>
        <li className="h-36 bg-blue-300">Change the height of a header to 150px.</li>
        <li className="hover:bg-red-400 p-2 transition-all">Set a background-color only when a user hovers over a button.</li>
        <li className="flex justify-center items-center h-96 bg-gray-200">Center an element both vertically and horizontally using Flexbox.</li>
      </ol>
    </div>
  );
};

export default CssExercise3;
