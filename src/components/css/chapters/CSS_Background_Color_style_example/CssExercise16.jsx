import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssExercise16 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">CSS Background Color Exercises</h1>
      </div>
      
      <ol className="list-decimal pl-6 space-y-6">
        <li>Set the background color of a div to light blue.</li>
        <li>Apply a different background color to even and odd list items.</li>
        <li>Use an external CSS to set a background color.</li>
        
        <li>Apply a linear gradient background from blue to green.</li>
        <li>Use an RGBA color value to set a background.</li>
        
        
        <li>Apply a background color to the entire webpage.</li>
        
        <li>Apply a radial gradient for div as a background.</li>
        <li>Use HSL color values to set a background.</li>
      </ol>
    </div>
  );
};

export default CssExercise16;
