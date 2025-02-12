import React from "react";
import { FaCss3Alt, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap19 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS div and span Elements
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          In CSS, the <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements are used for structuring and styling content. 
          <code>&lt;div&gt;</code> is a block-level element used for grouping content, while <code>&lt;span&gt;</code> is an inline element used for styling parts of text.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Example Usage of div and span
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- Using div to group elements -->
<div class="container">
    <h2>Welcome</h2>
    <p>This is a sample paragraph inside a div.</p>
</div>

<!-- Using span to style inline text -->
<p>CSS allows you to <span style="color: red; font-weight: bold;">highlight text</span> using the span element.</p>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>&lt;div&gt;</code> to structure layouts, not for styling alone.</li>
          <li>Apply CSS classes to <code>&lt;div&gt;</code> elements to manage styling efficiently.</li>
          <li>Use <code>&lt;span&gt;</code> only when you need to style inline content.</li>
          <li>Avoid unnecessary nesting of <code>&lt;div&gt;</code> elements to keep your HTML clean.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap19;
