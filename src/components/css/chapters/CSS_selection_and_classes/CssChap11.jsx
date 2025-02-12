import React from "react";
import { FaCss3Alt, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap11 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Selection and Classes
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides different ways to select and style elements using classes, IDs, and various selectors. Understanding these concepts is crucial for effective styling.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Class Selectors
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Classes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 class="main-title">Styled with CSS Classes</h1>
    <p class="highlight">This paragraph uses a CSS class.</p>
</body>
</html>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-blue-500" /> Example: CSS Classes
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.main-title {
    color: #007BFF;
    text-align: center;
    font-size: 24px;
}

.highlight {
    background-color: yellow;
    font-weight: bold;
    padding: 5px;
}`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use meaningful class names to improve readability and maintainability.</li>
          <li>Avoid overusing ID selectors; prefer class-based styling for flexibility.</li>
          <li>Group similar styles together for better organization.</li>
          <li>Ensure your styles are modular and reusable across different elements.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap11;
