import React from "react";
import { FaCss3Alt, FaCode, FaClipboardList, FaFileCode, FaRegLightbulb } from "react-icons/fa";

const CssChap6 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Inline Style - Source Code
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaClipboardList className="mr-2 text-yellow-500" /> Overview
        </h2>
        <p className="text-gray-800 mt-2">
          Below is the source code demonstrating the use of inline styles in HTML, JavaScript, and React. Inline styles allow for quick styling of elements but should be used sparingly for maintainability.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaFileCode className="mr-2 text-green-500" /> Inline Style in HTML
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- HTML Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Inline CSS Example</title>
</head>
<body>
    <h1 style="color: blue; text-align: center;">Hello, World!</h1>
    <p style="font-size: 18px; background-color: lightgray; padding: 10px;">This is an inline styled paragraph.</p>
</body>
</html>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-blue-500" /> Inline Style in JavaScript
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// JavaScript Example
document.body.innerHTML += '<button id="styleButton">Change Style</button>';
document.body.innerHTML += '<p id="styledPara">Styled by JavaScript</p>';

document.getElementById("styleButton").addEventListener("click", () => {
  document.getElementById("styledPara").style.color = "red";
  document.getElementById("styledPara").style.fontSize = "20px";
  document.getElementById("styledPara").style.backgroundColor = "yellow";
});`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-purple-500" /> Inline Style in React
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`// React Example
const myStyle = {
  color: "green",
  fontSize: "24px",
  border: "2px solid black",
  padding: "10px",
};

function StyledComponent() {
  return <p style={myStyle}>This paragraph is styled using inline styles in React.</p>;
}`}            
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRegLightbulb className="mr-2 text-yellow-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use inline styles for quick styling and dynamic changes in JavaScript or React.</li>
          <li>Avoid using inline styles for large projects; prefer external CSS for maintainability.</li>
          <li>Inline styles should only be used when class-based styling is not an option.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap6;
