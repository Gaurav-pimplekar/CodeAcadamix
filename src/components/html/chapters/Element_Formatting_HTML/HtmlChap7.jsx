import React from "react";
import { FaHtml5, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap7 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> Element Formatting in HTML
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Element formatting in HTML allows you to control how text and content appear on a webpage. HTML provides various elements to format text, such as bold, italic, underline, and more.
        </p>
      </section>
      
      {/* Common Formatting Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Common Formatting Elements
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>&lt;b&gt;</code> - Bold text</li>
          <li><code>&lt;strong&gt;</code> - Important text</li>
          <li><code>&lt;i&gt;</code> - Italic text</li>
          <li><code>&lt;em&gt;</code> - Emphasized text</li>
          <li><code>&lt;u&gt;</code> - Underlined text</li>
          <li><code>&lt;mark&gt;</code> - Highlighted text</li>
          <li><code>&lt;small&gt;</code> - Smaller text</li>
          <li><code>&lt;del&gt;</code> - Deleted text (strikethrough)</li>
          <li><code>&lt;ins&gt;</code> - Inserted text (underlined)</li>
          <li><code>&lt;sub&gt;</code> - Subscript text</li>
          <li><code>&lt;sup&gt;</code> - Superscript text</li>
        </ul>
      </section>
      
      {/* Example of Formatting Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of Formatting Elements
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<p>This is <b>bold</b> text.</p>
<p>This is <strong>important</strong> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <em>emphasized</em> text.</p>
<p>This is <u>underlined</u> text.</p>
<p>This is <mark>highlighted</mark> text.</p>
<p>This is <small>small</small> text.</p>
<p>This is <del>deleted</del> text.</p>
<p>This is <ins>inserted</ins> text.</p>
<p>This is H<sub>2</sub>O (subscript).</p>
<p>This is X<sup>2</sup> (superscript).</p>`}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> HTML provides various text formatting elements to improve readability and design. Understanding these elements allows for better content presentation on web pages.
      </p>
    </div>
  );
};

export default HtmlChap7;
