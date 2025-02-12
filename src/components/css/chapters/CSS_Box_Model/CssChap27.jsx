import React from "react";
import { FaBox, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap27 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaBox className="mr-2" /> CSS Box Model
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS Box Model defines how elements are displayed and spaced on a webpage.
          It includes the <strong>content</strong>, <strong>padding</strong>, <strong>border</strong>, and <strong>margin</strong> of an element.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Understanding the Box Model
        </h2>
        <p className="text-gray-800 mt-2">
          Each element in CSS follows the box model structure:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>Content:</strong> The actual content of the element.</li>
          <li><strong>Padding:</strong> Space between the content and the border.</li>
          <li><strong>Border:</strong> Surrounds the padding and content.</li>
          <li><strong>Margin:</strong> Space between this element and surrounding elements.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-blue-500" /> Example: Box Model in Action
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Box Model</title>
    <style>
        .box {
            width: 300px;
            height: 150px;
            background-color: lightblue;
            border: 5px solid darkblue;
            padding: 20px;
            margin: 30px;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="box">This is a Box</div>
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
          <li>Use <code>box-sizing: border-box;</code> to include padding and border inside the width/height.</li>
          <li>Ensure proper spacing with <code>margin</code> and <code>padding</code>.</li>
          <li>Avoid fixed dimensions for better responsiveness.</li>
          <li>Use CSS tools to visualize the box model while designing layouts.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap27;