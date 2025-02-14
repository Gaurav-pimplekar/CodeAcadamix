import React from "react";
import { FaList, FaCheckSquare, FaCode, FaCogs } from "react-icons/fa";

const HtmlChap24 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaList /> HTML Lists
      </h1>

      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheckSquare /> Introduction
        </h2>
        <p className="text-gray-700">
          Lists are used in HTML to organize content in a structured manner. HTML provides three types of lists:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Ordered List (<code>&lt;ol&gt;</code>)</li>
          <li>Unordered List (<code>&lt;ul&gt;</code>)</li>
          <li>Description List (<code>&lt;dl&gt;</code>)</li>
        </ul>
      </section>

      {/* Ordered Lists */}
      <section className="mt-6">
        {/* Section Heading */}
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Ordered List in HTML
        </h2>

        {/* Explanation */}
        <p className="text-gray-700 mt-2">
          An <strong>ordered list (`&lt;ol&gt;`)</strong> is used when the order of items matters. The list items (`&lt;li&gt;`)
          are displayed with numbers by default, but we can customize them using the `type` attribute.
        </p>

        {/* Example 1: Default Ordered List */}
        <h3 className="text-lg font-semibold text-blue-600 mt-4">Default Ordered List</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
        `}</code>
        </pre>

        {/* Output 1 */}
        <div className="bg-gray-100 p-4 mt-3 rounded-md">
          <ol type="1" className="list-decimal pl-5">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>
        </div>

        {/* Example 2: Ordered List with Custom Types */}
        <h3 className="text-lg font-semibold text-blue-600 mt-6">Ordered List with Custom Types</h3>
        <p className="text-gray-700">You can change the numbering style using the <code>type</code> attribute:</p>

        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<ol type="A">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ol>

<ol type="I">
  <li>Introduction</li>
  <li>Body</li>
  <li>Conclusion</li>
</ol>
        `}</code>
        </pre>

        {/* Output 2 */}
        <div className="bg-gray-100 p-4 mt-3 rounded-md space-y-4">
          <ol type="A" className="list-upper-alpha pl-5">
            <li>A. Apple</li>
            <li>B. Banana</li>
            <li>C. Cherry</li>
          </ol>
          <ol type="I" className="list-upper-roman pl-5">
            <li>I. Introduction</li>
            <li>II. Body</li>
            <li>III. Conclusion</li>
          </ol>
        </div>

        {/* Additional Notes */}
        <h3 className="text-lg font-semibold text-blue-600 mt-6">Key Points</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>The default numbering is numeric (1, 2, 3...)</li>
          <li>You can change numbering using <code>type="A"</code>, <code>type="a"</code>, <code>type="I"</code>, etc.</li>
          <li>Use <code>start</code> to begin from a specific number (e.g., <code>&lt;ol start="5"&gt;</code>)</li>
        </ul>
      </section>

      {/* Unordered Lists */}
      <section className="mt-6">
        {/* Section Heading */}
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Unordered List in HTML
        </h2>

        {/* Explanation */}
        <p className="text-gray-700 mt-2">
          An <strong>unordered list (`&lt;ul&gt;`)</strong> is used when the order of items **does not matter**.
          Each list item (`&lt;li&gt;`) is displayed with a bullet point by default, but you can customize it using CSS.
        </p>

        {/* Example 1: Default Unordered List */}
        <h3 className="text-lg font-semibold text-blue-600 mt-4">Default Unordered List</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</ul>
        `}</code>
        </pre>

        {/* Output 1 */}
        <div className="bg-gray-100 p-4 mt-3 rounded-md">
          <ul className="list-disc pl-5">
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
          </ul>
        </div>

        {/* Example 2: Custom Bullet Styles */}
        <h3 className="text-lg font-semibold text-blue-600 mt-6">Custom Bullet Styles</h3>
        <p className="text-gray-700">You can change the bullet style using the <code>list-style-type</code> property:</p>

        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<ul style="list-style-type: circle;">
  <li>Circle bullet</li>
  <li>Circle bullet</li>
</ul>

<ul style="list-style-type: square;">
  <li>Square bullet</li>
  <li>Square bullet</li>
</ul>

<ul style="list-style-type: none;">
  <li>No bullet</li>
  <li>No bullet</li>
</ul>
        `}</code>
        </pre>

        {/* Output 2 */}
        <div className="bg-gray-100 p-4 mt-3 rounded-md space-y-4">
          {/* Circle Bullets */}
          <ul className="pl-5" style={{ listStyleType: "circle" }}>
            <li>Circle bullet</li>
            <li>Circle bullet</li>
          </ul>

          {/* Square Bullets */}
          <ul className="pl-5" style={{ listStyleType: "square" }}>
            <li>Square bullet</li>
            <li>Square bullet</li>
          </ul>

          {/* No Bullets */}
          <ul className="pl-5 list-none">
            <li>No bullet</li>
            <li>No bullet</li>
          </ul>
        </div>

        {/* Additional Notes */}
        <h3 className="text-lg font-semibold text-blue-600 mt-6">Key Points</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>The default bullet style is **disc**.</li>
          <li>Other styles include **circle**, **square**, and **none**.</li>
          <li>Use `list-style-type: none;` to remove bullets.</li>
        </ul>
      </section>

      {/* Description Lists */}
      <section className="mt-6">
        {/* Section Heading */}
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Description List in HTML
        </h2>

        {/* Explanation */}
        <p className="text-gray-700 mt-2">
          A <strong>description list (`&lt;dl&gt;`)</strong> is used to define terms and their corresponding descriptions.
          It consists of:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li><code>&lt;dl&gt;</code> – Defines the description list.</li>
          <li><code>&lt;dt&gt;</code> – Specifies the term (definition term).</li>
          <li><code>&lt;dd&gt;</code> – Provides the definition (description data).</li>
        </ul>

        {/* Example 1: Basic Description List */}
        <h3 className="text-lg font-semibold text-blue-600 mt-4">Basic Description List</h3>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
        `}</code>
        </pre>

        {/* Output 1 */}
        <div className="bg-gray-100 p-4 mt-3 rounded-md">
          <dl className="border-l-4 border-green-500 pl-4">
            <dt className="font-semibold text-gray-900">HTML</dt>
            <dd className="text-gray-700 mb-2">HyperText Markup Language</dd>
            <dt className="font-semibold text-gray-900">CSS</dt>
            <dd className="text-gray-700">Cascading Style Sheets</dd>
          </dl>
        </div>

        {/* Example 2: Styled Description List */}
        <h3 className="text-lg font-semibold text-blue-600 mt-6">Styled Description List</h3>
        <p className="text-gray-700">You can customize the layout with CSS to enhance readability:</p>

        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<dl style="background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
  <dt style="font-weight: bold;">JavaScript</dt>
  <dd>Programming language for the web.</dd>
  <dt style="font-weight: bold;">React</dt>
  <dd>A JavaScript library for building user interfaces.</dd>
</dl>
        `}</code>
        </pre>

        {/* Output 2 */}
        <div className="bg-gray-100 p-4 mt-3 rounded-md">
          <dl className="bg-white p-3 shadow-md rounded-md">
            <dt className="font-semibold text-gray-900">JavaScript</dt>
            <dd className="text-gray-700 mb-2">Programming language for the web.</dd>
            <dt className="font-semibold text-gray-900">React</dt>
            <dd className="text-gray-700">A JavaScript library for building user interfaces.</dd>
          </dl>
        </div>

        {/* Additional Notes */}
        <h3 className="text-lg font-semibold text-blue-600 mt-6">Key Points</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li><strong>&lt;dt&gt;</strong> should always be followed by <strong>&lt;dd&gt;</strong>.</li>
          <li>You can use CSS to style the list for better readability.</li>
          <li>Description lists are useful for **glossaries, FAQs, and definitions**.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCogs className="text-red-500" /> Understanding lists in HTML helps in organizing content effectively.
      </p>
    </div>
  );
};

export default HtmlChap24;