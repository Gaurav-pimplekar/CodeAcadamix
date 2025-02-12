import React from "react";
import { FaPencilRuler, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap28 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaPencilRuler className="mr-2" /> CSS Outline - Source Code & Examples
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>outline</code> property is used to draw a line around elements, outside the border. Unlike borders,
          outlines do not take up space and do not affect the element's size.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Outline Properties
        </h2>
        <p className="text-gray-800 mt-2">
          The main properties related to outlines are:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>outline-style:</strong> Defines the style (solid, dotted, dashed, etc.).</li>
          <li><strong>outline-width:</strong> Specifies the thickness of the outline.</li>
          <li><strong>outline-color:</strong> Defines the color of the outline.</li>
          <li><strong>outline-offset:</strong> Sets space between the outline and the element’s border.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-blue-500" /> Example: Using Outline in CSS
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Outline Example</title>
    <style>
        .outlined-box {
            width: 250px;
            height: 100px;
            background-color: lightgray;
            border: 2px solid black;
            outline: 4px dashed red;
            outline-offset: 5px;
            text-align: center;
            line-height: 100px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="outlined-box">Outlined Box</div>
</body>
</html>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use outlines for accessibility (e.g., highlighting focused elements).</li>
          <li>Prefer <code>outline</code> over <code>border</code> for elements that require temporary emphasis.</li>
          <li>Use <code>outline-offset</code> to control spacing around elements without affecting layout.</li>
          <li>Avoid overuse, as outlines can make UI cluttered if applied excessively.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap28;
