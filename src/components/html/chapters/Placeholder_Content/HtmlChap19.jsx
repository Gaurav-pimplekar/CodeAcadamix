import React from "react";
import { FaClipboard, FaCode, FaBookOpen, FaLayerGroup } from "react-icons/fa";

const HtmlChap19 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaClipboard /> Placeholder Content in HTML
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Placeholder content is temporary text or images used in a webpage layout before the actual content is added. This is useful for prototyping and design mockups.
        </p>
      </section>
      
      {/* Common Placeholder Techniques */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLayerGroup /> Common Placeholder Techniques
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><code>&lt;input placeholder="Enter text"&gt;</code> - Adds placeholder text in form inputs.</li>
          <li>Using Lorem Ipsum for dummy text.</li>
          <li>Placeholder images from sources like <code>https://via.placeholder.com/</code>.</li>
          <li>CSS techniques such as background gradients.</li>
        </ul>
      </section>
      
      {/* Example Usage */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example Usage
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Placeholder Example</title>
</head>
<body>
    <input type="text" placeholder="Enter your name" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
</body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaClipboard className="text-green-500" /> Placeholder content is an essential tool for layout design and prototyping.
      </p>
    </div>
  );
};

export default HtmlChap19;
