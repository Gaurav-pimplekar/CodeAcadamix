import React from "react";
import { FaArrowsAlt, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap29 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaArrowsAlt className="mr-2" /> CSS Float - Example & Source Code
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>float</code> property is used to position elements to the left or right of a container,
          allowing inline content to wrap around it. It is commonly used for layouts and positioning images within text.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Float Properties
        </h2>
        <p className="text-gray-800 mt-2">
          The key values for the float property include:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>left:</strong> Floats the element to the left.</li>
          <li><strong>right:</strong> Floats the element to the right.</li>
          <li><strong>none:</strong> The default value; the element does not float.</li>
          <li><strong>clear:</strong> Specifies whether an element should be moved below floating elements.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-blue-500" /> Example: Floating an Image
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Float Example</title>
    <style>
        .container {
            width: 80%;
            margin: auto;
        }
        .float-left {
            float: left;
            margin-right: 15px;
        }
        .float-right {
            float: right;
            margin-left: 15px;
        }
        .clearfix::after {
            content: "";
            display: table;
            clear: both;
        }
    </style>
</head>
<body>
    <div class="container clearfix">
        <img src="https://via.placeholder.com/150" class="float-left" alt="Floating Left" />
        <p>This text wraps around the floating image on the left. The float property is useful for layouts and positioning elements within a container.</p>
    </div>
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
          <li>Use floats primarily for text wrapping around images.</li>
          <li>For modern layouts, prefer flexbox or grid instead of float.</li>
          <li>Always clear floats using <code>clearfix</code> to avoid layout issues.</li>
          <li>Be cautious when using floats, as they can affect surrounding elements.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap29;
