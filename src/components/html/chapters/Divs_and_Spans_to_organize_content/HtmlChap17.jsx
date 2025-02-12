import React from "react";
import { FaHtml5, FaCode, FaBookOpen, FaLayerGroup } from "react-icons/fa";

const HtmlChap17 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> Div and Span to Organize Content
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          In HTML, the <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements are used to organize and style content. <code>&lt;div&gt;</code> is a block-level element used to group larger sections, while <code>&lt;span&gt;</code> is an inline element for styling small parts of text.
        </p>
      </section>
      
      {/* Usage Examples */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Usage Examples
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Div and Span Example</title>
    <style>
        .container {
            background-color: #f0f0f0;
            padding: 10px;
        }
        .highlight {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>This is a Div Container</h2>
        <p>This paragraph is inside a <span class="highlight">div element</span>.</p>
    </div>
</body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLayerGroup /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Use <code>&lt;div&gt;</code> to structure layout sections.</li>
          <li>Use <code>&lt;span&gt;</code> for styling inline text.</li>
          <li>Avoid excessive nesting of <code>&lt;div&gt;</code> elements.</li>
          <li>Use class names to style elements instead of inline styles.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> Understanding <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> helps in organizing and styling web pages efficiently.
      </p>
    </div>
  );
};

export default HtmlChap17;
