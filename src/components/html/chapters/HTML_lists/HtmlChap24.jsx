import React from "react";
import { FaList, FaCheckSquare, FaCode, FaCogs } from "react-icons/fa";

const HtmlChap24 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaList /> HTML Lists
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheckSquare /> Introduction
        </h2>
        <p className="text-gray-700">
          Lists are used in HTML to organize content in a structured manner. HTML provides three types of lists:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Ordered List (<code>&lt;ol&gt;</code>)</li>
          <li>Unordered List (<code>&lt;ul&gt;</code>)</li>
          <li>Description List (<code>&lt;dl&gt;</code>)</li>
        </ul>
      </section>
      
      {/* Ordered Lists */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Ordered List
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
          `}</code>
        </pre>
        <p className="text-gray-700">Ordered lists use numbers to indicate sequence.</p>
      </section>
      
      {/* Unordered Lists */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Unordered List
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</ul>
          `}</code>
        </pre>
        <p className="text-gray-700">Unordered lists use bullet points instead of numbers.</p>
      </section>
      
      {/* Description Lists */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Description List
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
          `}</code>
        </pre>
        <p className="text-gray-700">Description lists consist of terms and their descriptions.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCogs className="text-red-500" /> Understanding lists in HTML helps in organizing content effectively.
      </p>
    </div>
  );
};

export default HtmlChap24;