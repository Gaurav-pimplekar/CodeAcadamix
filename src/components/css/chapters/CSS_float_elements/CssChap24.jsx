import React from "react";
import { FaAlignJustify, FaColumns, FaCheckCircle } from "react-icons/fa";

const CssChap24 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaAlignJustify className="mr-2" /> CSS Float Elements
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaColumns className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>float</code> property in CSS allows elements to be positioned to the left or right within their container,
          allowing text or other elements to wrap around them. This is commonly used for image positioning and layouts.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaColumns className="mr-2 text-green-500" /> Example Code
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- HTML Code -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Float Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <img src="image.jpg" alt="Floating Image" class="float-left">
        <p class="text">This paragraph wraps around the floated image.</p>
    </div>
</body>
</html>

/* CSS Code (styles.css) */
.container {
    width: 80%;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
}

.float-left {
    float: left;
    width: 150px;
    height: auto;
    margin-right: 15px;
    border: 2px solid #333;
}

.text {
    font-size: 18px;
    color: #444;
    line-height: 1.6;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>clear: both;</code> to prevent layout issues when working with floats.</li>
          <li>Prefer <code>flexbox</code> or <code>grid</code> for modern layouts instead of floats.</li>
          <li>Always wrap floated elements in a parent container to maintain structure.</li>
          <li>Use <code>overflow: hidden;</code> to clear floated elements when necessary.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap24;
