import React from "react";
import { FaCss3Alt, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap20 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> Source Code Example: CSS div and span Styling
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements are commonly used in HTML for layout and inline styling. 
          Below is a practical example demonstrating how to use CSS to style these elements.
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
    <title>CSS div and span Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Welcome to CSS Styling</h2>
        <p class="content">This is an example of a styled <span class="highlight">span</span> inside a div.</p>
    </div>
</body>
</html>

/* CSS Code (styles.css) */
.container {
    width: 50%;
    margin: auto;
    padding: 20px;
    background-color: #f4f4f4;
    border: 2px solid #ddd;
    text-align: center;
}

.content {
    font-size: 18px;
    color: #333;
}

.highlight {
    color: red;
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
          <li>Use <code>&lt;div&gt;</code> for structural layout, applying CSS classes for styling.</li>
          <li>Use <code>&lt;span&gt;</code> for inline text styling without breaking the flow.</li>
          <li>Maintain semantic structure and avoid excessive <code>&lt;div&gt;</code> usage.</li>
          <li>Apply external CSS files to keep HTML clean and maintainable.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap20;
