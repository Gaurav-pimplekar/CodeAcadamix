import React from "react";
import { FaJsSquare, FaBook, FaCode } from "react-icons/fa";

const DomChap3 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaJsSquare /> Source Code and Resources
      </h1>
      
      {/* Introduction to Resources */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBook /> Introduction
        </h2>
        <p className="text-gray-700">
          In this section, we provide key resources and sample source code to help you understand and manipulate the Document Object Model (DOM) in JavaScript.
        </p>
      </section>
      
      {/* Basic DOM Manipulation Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Basic DOM Manipulation
        </h2>
        <p className="text-gray-700">
          The following example demonstrates how to select an element and modify its content dynamically using JavaScript.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
</head>
<body>
    <h1 id="title">Original Title</h1>
    <button onclick="changeTitle()">Change Title</button>
    <script>
        function changeTitle() {
            document.getElementById("title").innerText = "Title Updated!";
        }
    </script>
</body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* Useful Resources */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBook /> Useful Resources
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" className="text-blue-500 underline">MDN Web Docs - DOM</a>
          </li>
          <li>
            <a href="https://javascript.info/dom-nodes" className="text-blue-500 underline">JavaScript.info - DOM Nodes</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DomChap3;
