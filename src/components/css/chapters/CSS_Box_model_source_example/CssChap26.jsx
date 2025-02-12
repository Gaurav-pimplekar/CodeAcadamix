import React from "react";
import { FaBox, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap26 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaBox className="mr-2" /> CSS Box Model - Source Code & Examples
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS Box Model is fundamental in understanding how elements are structured on a webpage.
          It consists of margins, borders, padding, and the actual content area.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Example Code
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- HTML Code -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Box Model Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="box">Box Model Example</div>
</body>
</html>

/* CSS Code (styles.css) */
.box {
    width: 200px;
    height: 100px;
    background-color: lightblue;
    border: 5px solid blue;
    padding: 20px;
    margin: 30px;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>box-sizing: border-box;</code> to include padding and border in the total width and height.</li>
          <li>Ensure proper spacing using <code>margin</code> and <code>padding</code> for layout consistency.</li>
          <li>Avoid fixed dimensions for responsiveness.</li>
          <li>Use border properties wisely to define clear visual boundaries.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap26;
