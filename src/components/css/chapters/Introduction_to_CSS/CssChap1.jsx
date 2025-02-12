import React from "react";
import { FaCss3Alt, FaLightbulb, FaTools, FaCheckCircle, FaCogs } from "react-icons/fa";

const CssChap1 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> Introduction to CSS
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCss3Alt className="mr-2 text-yellow-500" /> What is CSS?
        </h2>
        <p className="text-gray-800 mt-2">
          Cascading Style Sheets (CSS) is a stylesheet language used to control the presentation of web pages. It allows developers to style HTML elements, providing better control over layout, colors, fonts, and animations.
        </p>
        <p className="text-gray-800 mt-2">
          CSS enhances web design by enabling the separation of content from design, making websites more accessible and manageable. It allows for:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Defining styles for various HTML elements consistently across multiple pages.</li>
          <li>Improving page load speed by reducing the amount of HTML code.</li>
          <li>Enhancing user experience with visually appealing layouts.</li>
          <li>Enabling responsive design that adapts to different screen sizes.</li>
        </ul>
        <p className="text-gray-800 mt-2">
          CSS is a fundamental part of modern web development, working alongside HTML and JavaScript to create interactive and visually rich web applications.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCogs className="mr-2 text-green-500" /> How CSS Works?
        </h2>
        <p className="text-gray-800 mt-2">
          CSS works by applying styles to HTML elements based on selectors. A CSS rule consists of a selector and a declaration block, which contains properties and values that define how the selected elements should be displayed.
        </p>
        <p className="text-gray-800 mt-2">
          There are three main ways to apply CSS to a webpage:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>Inline CSS:</strong> Directly applied to an HTML element using the <code>style</code> attribute.</li>
          <li><strong>Internal CSS:</strong> Defined within a <code>&lt;style&gt;</code> tag inside the HTML document's <code>&lt;head&gt;</code>.</li>
          <li><strong>External CSS:</strong> Stored in a separate file (<code>.css</code>) and linked to the HTML document using a <code>&lt;link&gt;</code> tag.</li>
        </ul>
        <p className="text-gray-800 mt-2">
          The browser interprets CSS rules and applies them to elements based on specificity and the cascade mechanism, ensuring the most relevant styles take precedence.
        </p>
        <div className="mt-4 flex justify-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" 
            alt="CSS Workflow" 
            className="w-64 h-auto"
          />
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" /> Example: Applying CSS
        </h2>
        <p className="text-gray-800 mt-2">
          Below is an example of CSS applied to an HTML element:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* External CSS Example */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
  text-align: center;
}`}            
          </code>
        </pre>
        <div className="mt-4 border p-4 bg-white shadow-md">
          <h1 className="text-blue-600 text-center text-xl">This is a Styled Heading</h1>
        </div>
      </section>
    </div>
  );
};

export default CssChap1;