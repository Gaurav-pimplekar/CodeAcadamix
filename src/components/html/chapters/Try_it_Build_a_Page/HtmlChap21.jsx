import React from "react";
import { FaLaptopCode, FaCode, FaFileAlt, FaRocket } from "react-icons/fa";

const HtmlChap21 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaLaptopCode /> Try It: Build a Web Page
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileAlt /> Introduction
        </h2>
        <p className="text-gray-700">
          In this section, we will create a simple web page using HTML. You will learn how to structure a page with headings, paragraphs, images, and links.
        </p>
      </section>
      
      {/* Basic HTML Structure */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Basic HTML Structure
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a simple web page created using HTML.</p>
</body>
</html>
          `}</code>
        </pre>
        <p className="text-gray-700">This code creates a basic HTML page with a title and a heading.</p>
      </section>
      
      {/* Adding an Image */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaRocket /> Adding an Image
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<img src="image.jpg" alt="A beautiful scenery" width="500" />
          `}</code>
        </pre>
        <p className="text-gray-700">The <code>&lt;img&gt;</code> tag adds an image to the page.</p>
      </section>
      
      {/* Adding a Link */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Adding a Link
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<a href="https://www.example.com">Visit Example Website</a>
          `}</code>
        </pre>
        <p className="text-gray-700">This link takes users to another website.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaLaptopCode className="text-red-500" /> Practice writing HTML code to build and enhance your own web pages.
      </p>
    </div>
  );
};

export default HtmlChap21;
