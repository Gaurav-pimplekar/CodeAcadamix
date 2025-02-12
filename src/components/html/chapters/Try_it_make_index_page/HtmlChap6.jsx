import React from "react";
import { FaHtml5, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap6 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> Try It - Make Index Page
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          In this section, you will learn how to create a basic index page using HTML. The index page serves as the homepage of a website and typically contains links to other pages.
        </p>
      </section>
      
      {/* Steps to Create an Index Page */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Steps to Create an Index Page
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Create a new file and name it <code>index.html</code>.</li>
          <li>Start with the <code>&lt;!DOCTYPE html&gt;</code> declaration.</li>
          <li>Use the <code>&lt;html&gt;</code> tag to define the document.</li>
          <li>Include a <code>&lt;head&gt;</code> section with metadata and a title.</li>
          <li>Define the main content inside the <code>&lt;body&gt;</code> section.</li>
        </ul>
      </section>
      
      {/* Example of an Index Page */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of an Index Page
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is the homepage.</p>
  <nav>
    <ul>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</body>
</html>`}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> Creating an index page is the first step in building a structured website. Make sure to include proper navigation links to enhance user experience.
      </p>
    </div>
  );
};

export default HtmlChap6;
