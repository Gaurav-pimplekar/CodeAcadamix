import React from "react";
import { FaLayerGroup, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap42 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaLayerGroup className="mr-2" /> CSS Multi Background
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>background</code> property allows you to apply multiple background images or colors to a single element.
          This technique is useful for creating layered visual effects.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Using Multi Backgrounds
        </h2>
        <p className="text-gray-800 mt-2">
          You can specify multiple background images by separating them with commas in the <code>background</code> property.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of multi-background usage */
.box {
  width: 400px;
  height: 200px;
  background: 
    url('bg-top.png') no-repeat top center,
    url('bg-bottom.png') no-repeat bottom center,
    linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.1));
  background-size: cover;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>background-size</code> to control the scaling of each background image.</li>
          <li>Ensure background images do not overlap important content.</li>
          <li>Test background layering on different screen sizes for responsive design.</li>
          <li>Use a combination of solid colors and images for better contrast and readability.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap42;
