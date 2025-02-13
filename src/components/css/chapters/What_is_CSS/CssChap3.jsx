import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssChap3 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">What is CSS?</h1>
      </div>
      <p className="mb-4">
        CSS (Cascading Style Sheets) is a stylesheet language used to describe the appearance and formatting of HTML documents. It allows developers to separate content (HTML) from presentation (CSS), making websites more visually appealing, accessible, and easier to maintain.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Use CSS?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Improves Design & Layout</strong> – CSS helps style text, images, backgrounds, borders, and more.</li>
        <li><strong>Enhances User Experience</strong> – With CSS, websites become more visually attractive and user-friendly.</li>
        <li><strong>Saves Time & Effort</strong> – A single CSS file can be applied to multiple pages, reducing duplication.</li>
        <li><strong>Enables Responsive Design</strong> – Websites can adapt to different screen sizes using media queries.</li>
        <li><strong>Faster Page Loading</strong> – CSS reduces inline styling, making HTML cleaner and improving load times.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How CSS Works</h2>
      <p>CSS works by selecting HTML elements and applying styles to them. The styles are defined using <strong>selectors</strong> and <strong>properties</strong>.</p>
      <h3 className="text-xl font-semibold mt-4">Basic CSS Syntax</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`selector {
  property: value;
}`}
      </pre>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Types of CSS</h2>
      <h3 className="text-xl font-semibold mt-4">1. Inline CSS</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`<p style="color: blue; font-size: 18px;">This is a blue paragraph.</p>`}
      </pre>
      <h3 className="text-xl font-semibold mt-4">2. Internal CSS</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`<head>
  <style>
    body {
      background-color: lightgray;
    }
  </style>
</head>`}
      </pre>
      <h3 className="text-xl font-semibold mt-4">3. External CSS</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`/* styles.css */
h1 {
  color: green;
}`}
      </pre>
      <h2 className="text-2xl font-semibold mt-6 mb-2">CSS Selectors</h2>
      <h2 className="text-2xl font-semibold mt-6 mb-2">CSS Box Model</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`div {
  width: 200px;
  padding: 10px;
  border: 2px solid black;
  margin: 15px;
}`}
      </pre>
      <h2 className="text-2xl font-semibold mt-6 mb-2">CSS Positioning</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`.box {
  position: absolute;
  top: 50px;
  left: 100px;
}`}
      </pre>
      <h2 className="text-2xl font-semibold mt-6 mb-2">CSS Flexbox & Grid</h2>
      <h3 className="text-xl font-semibold mt-4">Flexbox</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
      </pre>
      <h3 className="text-xl font-semibold mt-4">Grid</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`}
      </pre>
      <h2 className="text-2xl font-semibold mt-6 mb-2">CSS Media Queries</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
      </pre>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>
      <p>CSS is an essential tool for designing modern websites. It provides flexibility, improves user experience, and ensures websites look great on all devices. Mastering CSS will help you build professional and responsive web applications.</p>
    </div>
  );
};

export default CssChap3;
