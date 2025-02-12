import React from "react";
import { FaHtml5, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap4 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> HTML Metadata
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Metadata in HTML provides information about the document, such as character encoding, viewport settings, and author details. Metadata elements are typically placed inside the <code>&lt;head&gt;</code> section of an HTML document.
        </p>
      </section>
      
      {/* Common Metadata Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Common Metadata Elements
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>&lt;meta charset="UTF-8"&gt;</code> - Specifies the character encoding.</li>
          <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> - Sets responsive design properties.</li>
          <li><code>&lt;meta name="description" content="Brief description of the page."&gt;</code> - Provides a summary for search engines.</li>
          <li><code>&lt;meta name="keywords" content="HTML, CSS, JavaScript"&gt;</code> - Defines relevant keywords for the page.</li>
          <li><code>&lt;meta name="author" content="Your Name"&gt;</code> - Specifies the author of the document.</li>
        </ul>
      </section>
      
      {/* Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of Metadata in HTML
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A brief description of this page">
  <meta name="keywords" content="HTML, Metadata, SEO">
  <meta name="author" content="John Doe">
  <title>Metadata Example</title>
</head>
<body>
  <h1>Understanding HTML Metadata</h1>
</body>
</html>`}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> HTML metadata helps define document properties, making webpages more accessible and SEO-friendly.
      </p>
    </div>
  );
};

export default HtmlChap4;
