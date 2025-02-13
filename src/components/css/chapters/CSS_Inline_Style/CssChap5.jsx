import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssChap5 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">What is Inline CSS?</h1>
      </div>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Definition:</h2>
      <p className="mb-4">
        Inline CSS is a method of applying styles directly within an HTML element using the <code>style</code> attribute. It allows developers to define CSS rules for a specific element without using external or internal stylesheets.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Syntax:</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`<element style="property: value;">`}
      </pre>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Example:</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`<p style="color: blue; font-size: 18px;">This is a blue paragraph.</p>`}
      </pre>
      <p className="mb-4">This <code>&lt;p&gt;</code> tag will have blue text with a font size of 18px.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Advantages of Inline CSS:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>✔ Quick Application:</strong> Styles are applied directly to elements without needing an external file.</li>
        <li><strong>✔ Higher Specificity:</strong> Inline styles override internal and external styles.</li>
        <li><strong>✔ Useful for Small Adjustments:</strong> Ideal for quick fixes or testing.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Disadvantages of Inline CSS:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>❌ Difficult to Maintain:</strong> Styling multiple elements requires repeating code.</li>
        <li><strong>❌ Reduces Readability:</strong> Mixing CSS with HTML makes the code less organized.</li>
        <li><strong>❌ Not Reusable:</strong> Styles must be written for each element separately.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Example Comparison:</h2>
      <h3 className="text-xl font-semibold mt-4">Using Inline CSS:</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`<h1 style="color: red; text-align: center;">Hello, World!</h1>`}
      </pre>
      
      <h3 className="text-xl font-semibold mt-4">Using Internal CSS:</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`<head>
  <style>
    h1 {
      color: red;
      text-align: center;
    }
  </style>
</head>
<h1>Hello, World!</h1>`}
      </pre>
      
      <h3 className="text-xl font-semibold mt-4">Using External CSS:</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`/* style.css */
h1 {
  color: red;
  text-align: center;
}`}
      </pre>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        {`<link rel="stylesheet" href="style.css">
<h1>Hello, World!</h1>`}
      </pre>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">When to Use Inline CSS?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>✅ Quick styling for a single element.</strong></li>
        <li><strong>✅ When external stylesheets are unavailable.</strong></li>
        <li><strong>✅ Testing or debugging styles in a live environment.</strong></li>
      </ul>
      
      <p className="mb-4">
        However, for larger projects, it's best to use internal or external CSS for better maintainability and reusability. 🚀
      </p>
    </div>
  );
};

export default CssChap5;
