import React from "react";
import { FaHtml5, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap2 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> What is an HTML Element?
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          An HTML element is the building block of a webpage. It consists of a start tag, content, and an end tag. Some elements are self-closing, meaning they don’t require an end tag.
        </p>
      </section>
      
      {/* Basic HTML Element Structure */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Structure of an HTML Element
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<tagname>Content goes here</tagname>`}</code>
        </pre>
      </section>
      
      {/* Types of Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Types of Elements
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Block-Level Elements</strong>: These take up the full width available. Example: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>.</li>
          <li><strong>Inline Elements</strong>: These only take up as much space as necessary. Example: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>.</li>
          <li><strong>Self-Closing Elements</strong>: These do not require a closing tag. Example: <code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code>.</li>
        </ul>
      </section>
      
      {/* Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of an HTML Element
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<p>This is a paragraph element.</p>`}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> Understanding HTML elements is fundamental for structuring a webpage effectively.
      </p>
    </div>
  );
};

export default HtmlChap2;
