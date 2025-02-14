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
        <p className="text-gray-700 mt-2">
          HTML5 introduces new elements and capabilities that enhance web development. Below are some key features:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
          <li>
            New semantic elements such as{" "}
            <code className="bg-gray-200 px-1 rounded">&lt;article&gt;</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">&lt;section&gt;</code>, and{" "}
            <code className="bg-gray-200 px-1 rounded">&lt;nav&gt;</code> for better document structure.
          </li>
          <li>Improved form elements with new input types like <code className="bg-gray-200 px-1 rounded">email</code>, <code className="bg-gray-200 px-1 rounded">date</code>, and attributes like <code className="bg-gray-200 px-1 rounded">required</code>.</li>
          <li>
            Native support for audio and video using{" "}
            <code className="bg-gray-200 px-1 rounded">&lt;audio&gt;</code> and{" "}
            <code className="bg-gray-200 px-1 rounded">&lt;video&gt;</code> without external plugins.
          </li>
          <li>
            Canvas API for drawing graphics and animations using{" "}
            <code className="bg-gray-200 px-1 rounded">&lt;canvas&gt;</code>.
          </li>
          <li>Local storage and session storage for client-side data persistence.</li>
        </ul>

        {/* Example Section */}
        <div className="mt-5 p-4 border rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">Example: HTML5 Video</h3>
          <p className="text-gray-600 text-sm">
            Below is an example of an HTML5 video element:
          </p>
          <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto mt-2">
            <code>{`
<video controls width="300">
  <source src="sample.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
      `}</code>
          </pre>
        </div>
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
