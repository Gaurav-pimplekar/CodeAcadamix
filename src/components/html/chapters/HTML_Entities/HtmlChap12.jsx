import React from "react";
import { FaHtml5, FaTextHeight, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap12 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> HTML Entities
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML entities are special codes used to display reserved characters, symbols, and special characters in HTML that might otherwise be interpreted as code.
        </p>
      </section>
      
      {/* Common HTML Entities */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Common HTML Entities
        </h2>
        <p className="text-gray-700">Here are some commonly used HTML entities:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>&amp;amp;</code> - Displays &amp;</li>
          <li><code>&amp;lt;</code> - Displays &lt;</li>
          <li><code>&amp;gt;</code> - Displays &gt;</li>
          <li><code>&amp;quot;</code> - Displays "</li>
          <li><code>&amp;apos;</code> - Displays '</li>
          <li><code>&amp;copy;</code> - Displays ©</li>
          <li><code>&amp;reg;</code> - Displays ®</li>
          <li><code>&amp;nbsp;</code> - Displays a non-breaking space</li>
        </ul>
      </section>
      
      {/* Example of Using HTML Entities */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of Using HTML Entities
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<p>Use &amp;lt;p&amp;gt; to display &lt;p&gt; on a webpage.</p>`}</code>
        </pre>
      </section>
      
      {/* Importance of HTML Entities */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Importance of HTML Entities
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Prevents HTML code from breaking due to reserved characters.</li>
          <li>Ensures that special symbols are displayed correctly.</li>
          <li>Makes content accessible across different browsers.</li>
          <li>Useful for including symbols like copyright and trademark.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> HTML entities are essential for displaying reserved and special characters correctly in web pages.
      </p>
    </div>
  );
};

export default HtmlChap12;
