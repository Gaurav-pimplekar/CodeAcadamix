import React from "react";
import { FaHtml5, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap3 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> HTML Page Structure
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML (HyperText Markup Language) is the standard language for creating web pages. 
          A well-structured HTML page consists of multiple elements that define the content and layout.
        </p>
      </section>
      
      {/* Basic Structure */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Basic HTML Page Structure
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<!DOCTYPE html>
<html>
<head>
  <title>My HTML Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is a basic HTML structure.</p>
</body>
</html>`}</code>
        </pre>
      </section>
      
      {/* Essential HTML Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Essential Elements
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>&lt;!DOCTYPE html&gt;</code> - Defines the document type.</li>
          <li><code>&lt;html&gt;</code> - The root element of an HTML page.</li>
          <li><code>&lt;head&gt;</code> - Contains metadata and links to styles or scripts.</li>
          <li><code>&lt;body&gt;</code> - Contains the content of the webpage.</li>
          <li><code>&lt;h1&gt; to &lt;h6&gt;</code> - Heading tags.</li>
          <li><code>&lt;p&gt;</code> - Paragraph tag for text content.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> Understanding the structure of an HTML page is the first step in web development.
      </p>
    </div>
  );
};

export default HtmlChap3;
