import React from "react";
import { FaHtml5, FaSuperscript, FaSubscript, FaCode, FaLightbulb, FaBookOpen } from "react-icons/fa";

const HtmlChap14 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> More HTML Text Formatting
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          In addition to basic text formatting, HTML provides additional elements for more specialized formatting, such as superscript, subscript, and code snippets.
        </p>
      </section>
      
      {/* Additional Text Formatting Tags */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Additional Text Formatting Tags
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>&lt;sup&gt;</code> - <FaSuperscript className="inline" /> Displays superscript text (e.g., exponents).</li>
          <li><code>&lt;sub&gt;</code> - <FaSubscript className="inline" /> Displays subscript text (e.g., chemical formulas).</li>
          <li><code>&lt;code&gt;</code> - Highlights programming code.</li>
          <li><code>&lt;pre&gt;</code> - Preserves whitespace and formatting.</li>
          <li><code>&lt;q&gt;</code> - Displays short inline quotations.</li>
          <li><code>&lt;blockquote&gt;</code> - Displays block-level quotations.</li>
          <li><code>&lt;abbr&gt;</code> - Indicates an abbreviation or acronym.</li>
        </ul>
      </section>
      
      {/* Example of More Text Formatting */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of More Text Formatting
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<p>H<sup>2</sup>O is water.</p>
<p>CO<sub>2</sub> is carbon dioxide.</p>
<p><code>console.log('Hello, World!');</code></p>
<p><pre>
function greet() {
  console.log("Hello!");
}
</pre></p>
<p><q>Stay curious, keep learning.</q></p>
<p><blockquote>"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt</blockquote></p>
<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>
          `}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> Mastering additional HTML text formatting elements allows for more precise and meaningful text presentation on web pages.
      </p>
    </div>
  );
};

export default HtmlChap14;
