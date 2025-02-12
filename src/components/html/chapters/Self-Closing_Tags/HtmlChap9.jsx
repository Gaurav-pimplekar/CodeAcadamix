import React from "react";
import { FaHtml5, FaTag, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap9 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> Self-Closing Tags in HTML
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          In HTML, self-closing tags are elements that do not require a closing tag. They are also known as void elements and are commonly used for embedding resources, adding line breaks, and structuring content efficiently.
        </p>
      </section>
      
      {/* Common Self-Closing Tags */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Common Self-Closing Tags
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>&lt;br&gt;</code> - Line Break</li>
          <li><code>&lt;hr&gt;</code> - Horizontal Rule</li>
          <li><code>&lt;img&gt;</code> - Image Element</li>
          <li><code>&lt;input&gt;</code> - Input Field</li>
          <li><code>&lt;meta&gt;</code> - Metadata Information</li>
          <li><code>&lt;link&gt;</code> - Stylesheet Linking</li>
        </ul>
      </section>
      
      {/* Example of Self-Closing Tags */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of Self-Closing Tags
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<p>This is a paragraph.<br>This is a new line.</p>
<hr>
<img src="image.jpg" alt="Sample Image">
<input type="text" placeholder="Enter your name">
<meta charset="UTF-8">
<link rel="stylesheet" href="styles.css">`}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> Self-closing tags help streamline HTML code, making it cleaner and more efficient. Understanding them is essential for modern web development.
      </p>
    </div>
  );
};

export default HtmlChap9;