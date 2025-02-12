import React from "react";
import { FaHtml5, FaBold, FaItalic, FaUnderline, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap13 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> HTML Text Formatting
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML provides various tags for formatting text. These tags help in emphasizing, styling, and structuring text content on a web page.
        </p>
      </section>
      
      {/* Common Text Formatting Tags */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Common Text Formatting Tags
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>&lt;b&gt;</code> - <FaBold className="inline" /> Makes text bold.</li>
          <li><code>&lt;strong&gt;</code> - Adds strong emphasis (bold, semantic).</li>
          <li><code>&lt;i&gt;</code> - <FaItalic className="inline" /> Makes text italic.</li>
          <li><code>&lt;em&gt;</code> - Adds emphasized text (italic, semantic).</li>
          <li><code>&lt;u&gt;</code> - <FaUnderline className="inline" /> Underlines text.</li>
          <li><code>&lt;mark&gt;</code> - Highlights text.</li>
          <li><code>&lt;small&gt;</code> - Displays smaller text.</li>
          <li><code>&lt;del&gt;</code> - Shows deleted (strikethrough) text.</li>
          <li><code>&lt;ins&gt;</code> - Indicates inserted text (underlined).</li>
        </ul>
      </section>
      
      {/* Example of Text Formatting */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of Text Formatting
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<p><b>Bold Text</b></p>
<p><i>Italic Text</i></p>
<p><u>Underlined Text</u></p>
<p><mark>Highlighted Text</mark></p>
<p><del>Deleted Text</del></p>
<p><ins>Inserted Text</ins></p>
          `}</code>
        </pre>
      </section>
      
      {/* Importance of Text Formatting */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Importance of Text Formatting
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Enhances readability and user experience.</li>
          <li>Helps emphasize important content.</li>
          <li>Makes documents more structured and accessible.</li>
          <li>Improves the overall presentation of text.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> HTML text formatting is essential for creating well-structured and visually appealing web pages.
      </p>
    </div>
  );
};

export default HtmlChap13;
