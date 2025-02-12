import React from "react";
import { FaHtml5, FaCode, FaBookOpen } from "react-icons/fa";

const HtmlChap15 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> Text Formatting Sample Code
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Below are sample code snippets demonstrating various HTML text formatting elements.
        </p>
      </section>
      
      {/* Sample Code Examples */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Sample Code Examples
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Formatting Example</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p><b>Bold Text</b> and <i>Italic Text</i></p>
    <p><u>Underlined Text</u> and <s>Strikethrough Text</s></p>
    <p>Superscript: x<sup>2</sup>, Subscript: H<sub>2</sub>O</p>
    <p><code>console.log("Hello, World!");</code></p>
    <blockquote>"The journey of a thousand miles begins with one step." - Lao Tzu</blockquote>
    <abbr title="HyperText Markup Language">HTML</abbr> is a markup language.
</body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> These examples demonstrate how to apply various text formatting styles in HTML.
      </p>
    </div>
  );
};

export default HtmlChap15;
