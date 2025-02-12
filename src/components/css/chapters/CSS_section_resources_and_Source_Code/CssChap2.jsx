import React from "react";
import { FaCss3Alt, FaBookOpen, FaCode, FaLink } from "react-icons/fa";

const CssChap2 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Resources & Source Code
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaBookOpen className="mr-2 text-yellow-500" /> Recommended Resources
        </h2>
        <p className="text-gray-800 mt-2">
          To master CSS, you should explore various resources, including documentation, tutorials, and interactive platforms. Here are some recommended ones:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-blue-500 underline">MDN Web Docs - CSS</a></li>
          <li><a href="https://www.w3schools.com/css/" className="text-blue-500 underline">W3Schools - CSS Tutorial</a></li>
          <li><a href="https://css-tricks.com/" className="text-blue-500 underline">CSS-Tricks</a></li>
          <li><a href="https://flexboxfroggy.com/" className="text-blue-500 underline">Flexbox Froggy (Interactive Game)</a></li>
          <li><a href="https://gridgarden.game/" className="text-blue-500 underline">Grid Garden (CSS Grid Game)</a></li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Example Source Code
        </h2>
        <p className="text-gray-800 mt-2">
          Below is a sample source code that demonstrates a simple CSS layout using Flexbox:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Flexbox Layout Example */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.box {
  width: 150px;
  height: 150px;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}`}            
          </code>
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLink className="mr-2 text-purple-500" /> Additional Learning Platforms
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><a href="https://www.freecodecamp.org/" className="text-blue-500 underline">FreeCodeCamp - CSS</a></li>
          <li><a href="https://www.codecademy.com/learn/learn-css" className="text-blue-500 underline">Codecademy - Learn CSS</a></li>
          <li><a href="https://cssbattle.dev/" className="text-blue-500 underline">CSS Battle - Coding Challenges</a></li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap2;
