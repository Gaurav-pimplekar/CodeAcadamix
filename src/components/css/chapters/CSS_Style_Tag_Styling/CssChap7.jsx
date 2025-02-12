import React from "react";
import { FaCss3Alt, FaCode, FaClipboardList, FaFileCode, FaRegLightbulb } from "react-icons/fa";

const CssChap7 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Style Tag Styling
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaClipboardList className="mr-2 text-yellow-500" /> Overview
        </h2>
        <p className="text-gray-800 mt-2">
          Using the <code>&lt;style&gt;</code> tag in HTML allows us to apply CSS styles directly within a document. This approach provides better separation of concerns compared to inline styles while still being included in the same file.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaFileCode className="mr-2 text-green-500" /> Style Tag in HTML
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- HTML Example with Style Tag -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Style Tag Example</title>
    <style>
        body {
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
        }
        h1 {
            color: blue;
            text-align: center;
        }
        p {
            font-size: 18px;
            background-color: lightgray;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Styled with a Style Tag</h1>
    <p>This paragraph is styled using a &lt;style&gt; tag.</p>
</body>
</html>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-blue-500" /> Adding Styles Dynamically in JavaScript
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// JavaScript Example - Adding Style Tag Dynamically
const style = document.createElement("style");
style.innerHTML = \`
    .dynamicText {
        color: red;
        font-size: 20px;
        font-weight: bold;
    }
\`;
document.head.appendChild(style);

document.body.innerHTML += '<p class="dynamicText">Styled dynamically via JavaScript</p>';
            `}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-purple-500" /> Using Style Tag in React
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// React Example
function StyledComponent() {
  return (
    <div>
      <style>
        {\`
          .reactStyled {
            color: green;
            font-size: 24px;
            border: 2px solid black;
            padding: 10px;
          }
        \`}
      </style>
      <p className="reactStyled">This paragraph is styled using a style tag inside React.</p>
    </div>
  );
}`}            
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRegLightbulb className="mr-2 text-yellow-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use the <code>&lt;style&gt;</code> tag for small projects or quick styling.</li>
          <li>For maintainability, external stylesheets are recommended for large-scale applications.</li>
          <li>Avoid excessive use of style tags in multiple places, as they can make debugging difficult.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap7;