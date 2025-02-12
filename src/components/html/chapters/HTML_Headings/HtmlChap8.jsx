import React from "react";
import { FaHtml5, FaHeading, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap8 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> HTML Headings
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML headings are used to define titles and subtitles on a webpage. They range from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, with <code>&lt;h1&gt;</code> being the most important and <code>&lt;h6&gt;</code> being the least important.
        </p>
      </section>
      
      {/* Heading Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> HTML Heading Elements
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>&lt;h1&gt;</code> - Main Heading (Most Important)</li>
          <li><code>&lt;h2&gt;</code> - Subheading</li>
          <li><code>&lt;h3&gt;</code> - Smaller Subheading</li>
          <li><code>&lt;h4&gt;</code> - Used for Sections</li>
          <li><code>&lt;h5&gt;</code> - Less Important Heading</li>
          <li><code>&lt;h6&gt;</code> - Least Important Heading</li>
        </ul>
      </section>
      
      {/* Example of Headings */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of Headings
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Subheading</h3>
<h4>Section Heading</h4>
<h5>Less Important Heading</h5>
<h6>Least Important Heading</h6>`}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> HTML headings help structure the content of a webpage, improving readability and search engine optimization (SEO).
      </p>
    </div>
  );
};

export default HtmlChap8;
