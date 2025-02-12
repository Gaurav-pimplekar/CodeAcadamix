import React from "react";
import { FaHtml5, FaBook, FaCode } from "react-icons/fa";

const HtmlChap1 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaHtml5 /> Introduction to HTML
      </h1>
      
      {/* What is HTML? */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBook /> What is HTML?
        </h2>
        <p className="text-gray-700">
          HTML (HyperText Markup Language) is the standard language for creating webpages. It provides the structure of a webpage using elements such as headings, paragraphs, links, and images.
        </p>
      </section>
      
      {/* Basic Structure of an HTML Page */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Basic Structure of an HTML Page
        </h2>
        <p className="text-gray-700">
          A basic HTML document includes essential elements like <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is a simple HTML page.</p>
</body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* Importance of HTML */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaHtml5 /> Importance of HTML
        </h2>
        <p className="text-gray-700">
          HTML is essential for structuring web content. It works alongside CSS for styling and JavaScript for interactivity, forming the foundation of modern web development.
        </p>
      </section>
    </div>
  );
};

export default HtmlChap1;
