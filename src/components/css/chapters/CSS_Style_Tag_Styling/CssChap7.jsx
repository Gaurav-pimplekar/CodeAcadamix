import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssChap7 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">What is Internal CSS Style Tag?</h1>
      </div>

      <p className="text-lg mb-4">
        <strong>Definition:</strong> Internal CSS is a method of styling web pages by placing CSS rules inside a
        <code className="bg-gray-200 px-1 rounded"> &lt;style&gt; </code> tag within the
        <code className="bg-gray-200 px-1 rounded"> &lt;head&gt; </code> section of an HTML document.
        It allows developers to apply styles to a single page without requiring an external stylesheet.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Syntax:</h2>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>This is a styled paragraph.</p>
</body>`}
      </pre>

      <p className="text-lg mb-4">
        In this example, all <code className="bg-gray-200 px-1 rounded">&lt;p&gt;</code> elements on the page will be blue with a font size of 18px.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Advantages of Internal CSS:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>✔ Organized in One File –</strong> Styles are kept within the HTML document, making it easier to manage small projects.</li>
        <li><strong>✔ Higher Specificity –</strong> Internal CSS has a higher specificity than external stylesheets but lower than inline CSS.</li>
        <li><strong>✔ No Additional Requests –</strong> Since styles are within the document, there’s no need for extra file requests, reducing HTTP requests.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Disadvantages of Internal CSS:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>❌ Not Reusable –</strong> Styles are limited to a single HTML document, making it inefficient for larger projects.</li>
        <li><strong>❌ Increases Page Load Time –</strong> Too much CSS in the HTML file can slow down page rendering.</li>
        <li><strong>❌ Harder to Maintain –</strong> Managing large amounts of CSS within an HTML document can become messy.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example: Internal CSS vs. Other Methods</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">Using Internal CSS:</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`<head>
  <style>
    h1 {
      color: red;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
</body>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">Using External CSS:</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`/* styles.css */
h1 {
  color: red;
  text-align: center;
}`}
      </pre>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
</body>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2">Using Inline CSS:</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`<h1 style="color: red; text-align: center;">Hello, World!</h1>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-4">When to Use Internal CSS?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>✅ For single-page web designs.</li>
        <li>✅ When external stylesheets are not required.</li>
        <li>✅ For quick prototyping and small-scale styling.</li>
      </ul>

      <p className="text-lg mt-4">
        However, for larger projects, <strong>external CSS</strong> is recommended for better maintainability and performance. 🚀
      </p>
    </div>
  );
};

export default CssChap7;