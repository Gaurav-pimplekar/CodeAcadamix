import React from "react";
import { FaCss3Alt, FaPaintBrush, FaCode, FaRegLightbulb, FaExclamationCircle } from "react-icons/fa";

const CssChap5 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Inline Style
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPaintBrush className="mr-2 text-yellow-500" /> Introduction to Inline Styles
        </h2>
        <p className="text-gray-800 mt-2">
          Inline styles allow you to apply CSS directly within an HTML element using the <code>style</code> attribute. This approach is useful for quick styling but should be used sparingly to maintain clean and reusable code.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Example of Inline Style
        </h2>
        <p className="text-gray-800 mt-2">
          Here’s an example of how inline styles are applied to HTML elements:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- Inline style example -->
<p style="color: red; font-size: 20px;">This is a styled paragraph.</p>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-blue-500" /> Inline Style in JavaScript (React)
        </h2>
        <p className="text-gray-800 mt-2">
          In React, inline styles are applied using a JavaScript object where property names are written in camelCase:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`const myStyle = {
  color: "blue",
  fontSize: "22px",
  backgroundColor: "lightgray"
};

function StyledComponent() {
  return <p style={myStyle}>This is a React inline styled paragraph.</p>;
}`}            
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRegLightbulb className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Avoid using inline styles for large-scale projects to ensure maintainability.</li>
          <li>Use CSS classes or external stylesheets for better separation of concerns.</li>
          <li>Inline styles should only be used for dynamic styling that requires JavaScript logic.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExclamationCircle className="mr-2 text-red-500" /> Example: Dynamically Changing Styles
        </h2>
        <p className="text-gray-800 mt-2">
          You can dynamically change styles in JavaScript using event listeners. Here’s an example:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`document.body.innerHTML += '<button id="changeStyle">Change Style</button>';
document.body.innerHTML += '<p id="styledText">Dynamic Styling</p>';

document.getElementById("changeStyle").addEventListener("click", () => {
  document.getElementById("styledText").style.color = "green";
  document.getElementById("styledText").style.fontSize = "24px";
  document.getElementById("styledText").style.fontWeight = "bold";
});`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default CssChap5;
