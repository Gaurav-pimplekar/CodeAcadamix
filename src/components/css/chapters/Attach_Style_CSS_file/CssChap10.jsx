import React from "react";
import { FaCss3Alt, FaFileCode, FaLink, FaCheckCircle } from "react-icons/fa";

const CssChap10 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> Attaching a CSS File
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaFileCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          Attaching a CSS file to an HTML document allows for better code organization, reusability, and easier styling updates across multiple pages.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLink className="mr-2 text-green-500" /> Linking an External CSS File
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attaching CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Styled with External CSS</h1>
    <p>This paragraph is styled using an external CSS file.</p>
</body>
</html>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaFileCode className="mr-2 text-blue-500" /> Example: CSS File
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

h1 {
    color: #007BFF;
    text-align: center;
}

p {
    text-align: center;
    font-size: 18px;
}`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Place the <code>&lt;link&gt;</code> element inside the <code>&lt;head&gt;</code> tag for optimal performance.</li>
          <li>Use relative paths when referencing CSS files to ensure compatibility.</li>
          <li>Organize CSS styles logically, grouping similar properties together.</li>
          <li>Avoid excessive use of inline styles to maintain separation of concerns.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap10;
