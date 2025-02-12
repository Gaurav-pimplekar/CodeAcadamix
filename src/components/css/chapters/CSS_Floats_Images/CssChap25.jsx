import React from "react";
import { FaImage, FaColumns, FaCheckCircle } from "react-icons/fa";

const CssChap25 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaImage className="mr-2" /> CSS Float Image
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaColumns className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>float</code> property in CSS is often used to position images alongside text,
          allowing content to wrap around the image. This technique is useful for layouts
          where images should align naturally with text elements.
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
    <title>CSS Float Image Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <img src="image.jpg" alt="Floating Image" class="float-left">
        <p class="text">This is an example of how an image can be floated to the left, allowing text to wrap around it.
        This technique is commonly used in articles and blog posts to create visually appealing layouts.</p>
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
    width: 200px;
    height: auto;
    margin-right: 15px;
    border: 3px solid #555;
    border-radius: 8px;
}

.text {
    font-size: 18px;
    color: #333;
    line-height: 1.6;
    text-align: justify;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>clear: both;</code> to prevent content misalignment.</li>
          <li>Ensure images have proper <code>alt</code> attributes for accessibility.</li>
          <li>Use <code>max-width</code> instead of fixed widths for responsive layouts.</li>
          <li>For modern designs, consider using <code>flexbox</code> or <code>grid</code> instead of <code>float</code>.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap25;