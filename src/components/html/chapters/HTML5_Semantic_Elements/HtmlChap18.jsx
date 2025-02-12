import React from "react";
import { FaHtml5, FaCode, FaBookOpen, FaLayerGroup } from "react-icons/fa";

const HtmlChap18 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> HTML5 Semantic Elements
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML5 introduced semantic elements to improve the structure and readability of web pages. These elements give meaning to the content, making it easier for search engines and developers to understand the purpose of different sections.
        </p>
      </section>
      
      {/* Common Semantic Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLayerGroup /> Common Semantic Elements
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><code>&lt;header&gt;</code> - Defines introductory content or a navigation link.</li>
          <li><code>&lt;nav&gt;</code> - Contains navigation links.</li>
          <li><code>&lt;section&gt;</code> - Groups related content.</li>
          <li><code>&lt;article&gt;</code> - Represents self-contained content like blog posts.</li>
          <li><code>&lt;aside&gt;</code> - Defines supplementary content like sidebars.</li>
          <li><code>&lt;footer&gt;</code> - Represents the footer of a document or section.</li>
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
    <title>Semantic Elements</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <section>
        <article>
            <h2>Article Title</h2>
            <p>This is an example article section.</p>
        </article>
    </section>
    <aside>
        <p>Related Links</p>
    </aside>
    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> Using semantic elements improves accessibility and enhances the structure of web pages.
      </p>
    </div>
  );
};

export default HtmlChap18;
