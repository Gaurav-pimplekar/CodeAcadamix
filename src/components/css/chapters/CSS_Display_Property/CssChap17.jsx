import React from "react";
import { FaCss3Alt, FaExpand, FaCheckCircle } from "react-icons/fa";

const CssChap17 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Display Property
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>display</code> property defines how an element is displayed in the document flow.
          It is fundamental for structuring layouts and controlling element visibility.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-green-500" /> Common Display Values
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><code>block</code>: Element takes full width and starts on a new line.</li>
          <li><code>inline</code>: Element takes only necessary width and stays in the same line.</li>
          <li><code>inline-block</code>: Like inline but allows setting width and height.</li>
          <li><code>none</code>: Hides the element completely.</li>
          <li><code>flex</code>: Enables a flexible layout container.</li>
          <li><code>grid</code>: Enables a grid-based layout system.</li>
        </ul>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
div {
    display: block;
}

span {
    display: inline;
}

.inline-box {
    display: inline-block;
    width: 100px;
    height: 50px;
    background: lightblue;
}

.hidden {
    display: none;
}
`}
          </code>
        </pre>
      </section>


      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-red-500" /> CSS <code>display: inline</code> Property
        </h2>

        <p className="text-gray-800 mt-2">
          The <code>display: inline</code> property makes an element behave like an inline element.
          This means it does not start on a new line and takes up only as much width as necessary.
          Inline elements flow with surrounding text and do not allow width or height adjustments.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Characteristics of <code>display: inline</code>:</h3>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>The element does not break onto a new line.</li>
          <li>It only takes up as much width as needed by its content.</li>
          <li>Width and height cannot be set explicitly.</li>
          <li>Paddings and margins affect horizontal spacing but not vertical spacing.</li>
          <li>Commonly used for text elements like <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, and <code>&lt;em&gt;</code>.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Example Usage:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<p>
    This is a <span class="inline-text">highlighted</span> word inside a paragraph.
</p>

<a href="#">Click here</a> to visit a link.`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">CSS Example:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
.inline-text {
    display: inline;
    color: red;
    font-weight: bold;
    background-color: yellow;
    padding: 5px; /* Affects only horizontal space */
}

a {
    display: inline;
    color: blue;
    text-decoration: underline;
    padding: 10px; /* Affects only left and right, not top/bottom */
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-blue-500" /> CSS <code>display: block</code> Property
        </h2>

        <p className="text-gray-800 mt-2">
          The <code>display: block</code> property makes an element behave like a block-level element.
          Block elements take up the full width available and start on a new line.
          Common block elements include <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, and <code>&lt;section&gt;</code>.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Characteristics of <code>display: block</code>:</h3>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Starts on a new line by default.</li>
          <li>Takes up the full width of its parent container.</li>
          <li>Allows setting width, height, margin, and padding.</li>
          <li>Can contain both inline and block elements.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Example Usage:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<div class="block-element">This is a block element</div>

<p>This paragraph is also a block element.</p>

<section class="content-section">
    <h2>Section Title</h2>
    <p>Block elements allow organizing content into logical sections.</p>
</section>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">CSS Example:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
.block-element {
    display: block;
    background-color: lightgray;
    padding: 10px;
    margin: 10px 0;
}

.content-section {
    display: block;
    border: 2px solid blue;
    padding: 15px;
    background-color: #f5f5f5;
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-blue-500" /> CSS <code>display: inline-block</code> Property
        </h2>

        <p className="text-gray-800 mt-2">
          The <code>display: inline-block</code> property combines characteristics of both <code>inline</code> and <code>block</code> elements.
          Like <code>inline</code>, it does not start on a new line, but like <code>block</code>, it allows setting width and height.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Characteristics of <code>display: inline-block</code>:</h3>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Does <strong>not</strong> start on a new line (like inline elements).</li>
          <li>Allows setting <strong>width</strong> and <strong>height</strong> (unlike inline elements).</li>
          <li>Can be used to create button-like elements or layouts where inline behavior is needed with block features.</li>
          <li>Respects top and bottom margins and paddings.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Example Usage:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<div class="inline-block-box">Box 1</div>
<div class="inline-block-box">Box 2</div>
<div class="inline-block-box">Box 3</div>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">CSS Example:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
.inline-block-box {
    display: inline-block;
    width: 120px;
    height: 60px;
    background-color: lightblue;
    text-align: center;
    line-height: 60px;
    margin: 5px;
    border: 2px solid blue;
    border-radius: 5px;
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-red-500" /> CSS <code>display: none</code> Property
        </h2>

        <p className="text-gray-800 mt-2">
          The <code>display: none</code> property is used to hide elements completely from the page.
          Unlike <code>visibility: hidden</code>, which only makes an element invisible, <code>display: none</code> removes the element from the document flow.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Characteristics of <code>display: none</code>:</h3>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Completely removes the element from the layout.</li>
          <li>The space occupied by the element is also removed.</li>
          <li>Can be used for conditional rendering in JavaScript or CSS.</li>
          <li>Differs from <code>visibility: hidden</code>, which hides the element but keeps its space.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Example Usage:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<div class="visible-box">I am visible</div>
<div class="hidden-box">You can't see me</div>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">CSS Example:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
.visible-box {
    display: block;
    background-color: lightgreen;
    padding: 10px;
    text-align: center;
}

.hidden-box {
    display: none; /* This element will not be displayed */
}`}
          </code>
        </pre>


        <h3 className="text-lg font-medium text-gray-600 mt-4">Comparison with Other Display Values:</h3>
        <table className="table-auto border-collapse border border-gray-400 mt-4 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Display Type</th>
              <th className="border border-gray-400 px-4 py-2">Starts on a New Line?</th>
              <th className="border border-gray-400 px-4 py-2">Width & Height Adjustable?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2"><code>inline</code></td>
              <td className="border border-gray-400 px-4 py-2">No</td>
              <td className="border border-gray-400 px-4 py-2">No</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 px-4 py-2"><code>block</code></td>
              <td className="border border-gray-400 px-4 py-2">Yes</td>
              <td className="border border-gray-400 px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2"><code>inline-block</code></td>
              <td className="border border-gray-400 px-4 py-2">No</td>
              <td className="border border-gray-400 px-4 py-2">Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaExpand className="mr-2 text-blue-500" /> Example Usage
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div class="block-element">Block Element</div>

<span class="inline-element">Inline Element</span>

<div class="inline-box">Inline-Block</div>
`}
          </code>
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>block</code> elements for structural components like divs and sections.</li>
          <li>Use <code>inline</code> for small elements like links and spans.</li>
          <li>Use <code>inline-block</code> for inline elements that require height and width.</li>
          <li>Use <code>none</code> for elements that should be hidden but remain in the DOM.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap17;
