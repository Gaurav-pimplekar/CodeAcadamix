import React from "react";
import { FaHtml5, FaTextHeight, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap11 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> Preformatted Text in HTML
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          The <code>&lt;pre&gt;</code> tag in HTML is used to display preformatted text. It preserves both spaces and line breaks, making it ideal for displaying code snippets, ASCII art, and structured text exactly as written.
        </p>
      </section>
      
      {/* Syntax and Usage */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Syntax and Usage
        </h2>
        <p className="text-gray-700">
          The <code>&lt;pre&gt;</code> tag is a block-level element that maintains formatting:
        </p>
      </section>
      
      {/* Example of Preformatted Text */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of Preformatted Text
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<pre>
  This text is       displayed exactly
  as written, preserving spaces,
  line breaks, and formatting.
</pre>`}</code>
        </pre>
      </section>
      
      {/* When to Use Preformatted Text */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> When to Use Preformatted Text
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Displaying code snippets on a webpage.</li>
          <li>Rendering ASCII art.</li>
          <li>Maintaining text indentation and spacing.</li>
          <li>Showing structured text data.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> The <code>&lt;pre&gt;</code> tag is useful for preserving text formatting, making it essential for coding and documentation.
      </p>
    </div>
  );
};

export default HtmlChap11;