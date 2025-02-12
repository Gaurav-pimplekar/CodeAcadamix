import React from "react";
import { FaHtml5, FaComment, FaBookOpen, FaCode, FaLightbulb } from "react-icons/fa";

const HtmlChap10 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> HTML Comments
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML comments are used to insert notes within the code that are not displayed in the browser. They help developers understand the structure of the document and make future edits easier.
        </p>
      </section>
      
      {/* Syntax of HTML Comments */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Syntax of HTML Comments
        </h2>
        <p className="text-gray-700">
          HTML comments start with <code>&lt;!--</code> and end with <code>--&gt;</code>. Anything inside these symbols is ignored by the browser.
        </p>
      </section>
      
      {/* Example of HTML Comments */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Example of HTML Comments
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`<!-- This is a comment -->
<p>This is a paragraph.</p>

<!-- Comments can also be used to disable code -->
<!-- <p>This paragraph is hidden.</p> -->`}</code>
        </pre>
      </section>
      
      {/* Best Practices */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaLightbulb /> Best Practices for Using Comments
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use comments to describe the purpose of complex sections of code.</li>
          <li>Avoid excessive comments on obvious code.</li>
          <li>Keep comments concise and relevant.</li>
          <li>Use comments to temporarily disable sections of code for debugging.</li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> HTML comments improve code readability and maintainability. Use them wisely to document your code effectively.
      </p>
    </div>
  );
};

export default HtmlChap10;
