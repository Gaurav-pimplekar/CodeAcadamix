import React from "react";
import { FaCss3Alt, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap21 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> Styling Text in CSS
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides powerful properties to style text, allowing developers to enhance typography for better readability and aesthetics.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Example Code
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- HTML Code -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Text Styling Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="text-container">
        <h1 class="title">CSS Text Styling</h1>
        <p class="paragraph">This is an example of styled text using various CSS properties.</p>
        <p class="highlight">Highlighted text with background color.</p>
    </div>
</body>
</html>

/* CSS Code (styles.css) */
.text-container {
    width: 60%;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    text-align: center;
}

.title {
    font-family: Arial, sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #2c3e50;
}

.paragraph {
    font-size: 18px;
    line-height: 1.6;
    color: #34495e;
    text-align: justify;
}

.highlight {
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    background-color: yellow;
    padding: 5px;
    display: inline-block;
}`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use appropriate font sizes for readability and accessibility.</li>
          <li>Apply <code>line-height</code> for better spacing between text lines.</li>
          <li>Utilize <code>font-family</code> to maintain a consistent design style.</li>
          <li>Ensure sufficient contrast between text and background for accessibility.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap21;
