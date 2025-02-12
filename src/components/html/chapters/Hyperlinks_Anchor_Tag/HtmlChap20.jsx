import React from "react";
import { FaLink, FaCode, FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";

const HtmlChap20 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaLink /> Hyperlinks & Anchor Tag in HTML
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Hyperlinks allow users to navigate between web pages. In HTML, the <code>&lt;a&gt;</code> (anchor) tag is used to create links to other documents, web pages, or sections within a page.
        </p>
      </section>
      
      {/* Basic Anchor Tag Usage */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaExternalLinkAlt /> Basic Anchor Tag Usage
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<a href="https://www.example.com">Visit Example</a>
          `}</code>
        </pre>
        <p className="text-gray-700">The <code>href</code> attribute defines the destination of the link.</p>
      </section>
      
      {/* Open Link in New Tab */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Opening Links in a New Tab
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Open in New Tab</a>
          `}</code>
        </pre>
        <p className="text-gray-700">Using <code>target="_blank"</code> makes the link open in a new tab.</p>
      </section>
      
      {/* Internal Links */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaLink /> Internal Links
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<a href="/about.html">Go to About Page</a>
          `}</code>
        </pre>
        <p className="text-gray-700">Internal links navigate within the same website.</p>
      </section>
      
      {/* Jump Links */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaLink /> Jump Links (Same Page Navigation)
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<a href="#section2">Jump to Section 2</a>

<h2 id="section2">Section 2</h2>
          `}</code>
        </pre>
        <p className="text-gray-700">Jump links navigate to different sections within the same page using <code>id</code>.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaLink className="text-red-500" /> Hyperlinks are essential for web navigation, improving user experience and site accessibility.
      </p>
    </div>
  );
};

export default HtmlChap20;
