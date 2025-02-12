import React from "react";
import { FaList, FaCheckSquare, FaCode, FaCogs } from "react-icons/fa";

const HtmlChap25 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaList /> Sample Code: HTML Lists
      </h1>
      
      {/* Sample Ordered List */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheckSquare /> Ordered List Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<ol>
  <li>Introduction</li>
  <li>Concepts</li>
  <li>Examples</li>
</ol>
          `}</code>
        </pre>
        <p className="text-gray-700">This list follows a numerical order.</p>
      </section>
      
      {/* Sample Unordered List */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Unordered List Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
          `}</code>
        </pre>
        <p className="text-gray-700">Unordered lists use bullet points for items.</p>
      </section>
      
      {/* Sample Description List */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Description List Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<dl>
  <dt>HTML</dt>
  <dd>Standard language for web pages</dd>
  <dt>CSS</dt>
  <dd>Used for styling web pages</dd>
</dl>
          `}</code>
        </pre>
        <p className="text-gray-700">Description lists pair terms with their definitions.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCogs className="text-red-500" /> These examples illustrate how lists help structure content in HTML.
      </p>
    </div>
  );
};

export default HtmlChap25;
