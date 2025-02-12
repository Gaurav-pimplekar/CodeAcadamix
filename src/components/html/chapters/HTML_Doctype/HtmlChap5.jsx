import React from "react";
import { FaHtml5, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap5 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> HTML Doctype
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          The <code>&lt;!DOCTYPE&gt;</code> declaration is used to specify the HTML version that the browser should use to render the document. It must be placed at the very top of an HTML document, before the <code>&lt;html&gt;</code> tag.
        </p>
      </section>
      
      {/* Purpose of Doctype */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Purpose of Doctype
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Ensures the browser renders the document in standards mode.</li>
          <li>Prevents the browser from using quirks mode, which may cause unexpected rendering issues.</li>
          <li>Helps maintain consistency in webpage display across different browsers.</li>
        </ul>
      </section>
      
      {/* Example of Doctype */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of HTML5 Doctype
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<!DOCTYPE html>
<html>
<head>
  <title>HTML5 Doctype Example</title>
</head>
<body>
  <h1>Welcome to HTML5</h1>
</body>
</html>`}</code>
        </pre>
      </section>
      
      {/* Different Doctype Declarations */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Doctype Declarations for Older Versions
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<!-- HTML 4.01 Strict -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML 1.0 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`}</code>
        </pre>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> The <code>&lt;!DOCTYPE&gt;</code> declaration is essential for ensuring consistent and standard rendering of web pages across browsers.
      </p>
    </div>
  );
};

export default HtmlChap5;
