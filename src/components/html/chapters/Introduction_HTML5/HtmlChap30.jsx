import React from "react";
import { FaHtml5, FaInfoCircle, FaCheck } from "react-icons/fa";

const HtmlChap30 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-orange-500">
        <FaHtml5 /> Introduction to HTML5
      </h1>
      
      {/* What is HTML5? */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaInfoCircle /> What is HTML5?
        </h2>
        <p className="text-gray-700">
          HTML5 is the latest version of HyperText Markup Language (HTML), which is used to structure content on the web. It introduces new elements, attributes, and behaviors to provide better support for multimedia, graphics, and interactive content.
        </p>
      </section>
      
      {/* Features of HTML5 */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCheck /> Features of HTML5
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>New semantic elements such as <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;nav&gt;</code></li>
          <li>Improved form elements with new input types and attributes</li>
          <li>Native support for audio and video using <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code></li>
          <li>Canvas API for drawing graphics on the web</li>
          <li>Local storage and session storage for client-side data persistence</li>
        </ul>
      </section>
      
      {/* Example: Basic HTML5 Structure */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCheck /> Example: Basic HTML5 Structure
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First HTML5 Page</title>
</head>
<body>
  <header>
    <h1>Welcome to HTML5</h1>
  </header>
  <section>
    <p>This is an example of an HTML5 page.</p>
  </section>
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
        <FaCheck className="text-green-500" /> HTML5 provides a more efficient, modern, and feature-rich way to create web pages.
      </p>
    </div>
  );
};

export default HtmlChap30;
