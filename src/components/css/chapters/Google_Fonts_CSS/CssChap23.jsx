import React from "react";
import { FaGoogle, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap23 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaGoogle className="mr-2" /> Google Fonts in CSS
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          Google Fonts is a free library of web fonts that allows you to use beautiful typography on your website.
          You can easily integrate Google Fonts into your CSS to enhance the appearance of your text.
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
    <title>Google Fonts Example</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@300;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="font-container">
        <h1 class="heading">Using Google Fonts</h1>
        <p class="roboto">This text is using the Roboto font.</p>
        <p class="open-sans">This text is using the Open Sans font.</p>
    </div>
</body>
</html>

/* CSS Code (styles.css) */
.font-container {
    width: 60%;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    text-align: center;
}

.heading {
    font-family: "Roboto", sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #2c3e50;
}

.roboto {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #34495e;
}

.open-sans {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    color: #1abc9c;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Only include necessary font weights to reduce page load time.</li>
          <li>Use <code>font-display: swap;</code> to improve rendering performance.</li>
          <li>Specify fallback fonts to ensure compatibility if the Google Font fails to load.</li>
          <li>Use web-friendly fonts that enhance readability and aesthetics.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap23;