import React from "react";
import { FaCss3Alt, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap14 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Color Selection & Options Examples
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides multiple ways to apply colors to elements, including named colors, HEX codes, RGB, HSL, and more. Selecting the right color format is important for styling consistency.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Named Colors Example
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.named-color {
    color: blue;
    background-color: lightgray;
}`}
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this class to an element:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<p class="named-color">This text uses named colors.</p>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-blue-500" /> HEX Color Example
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.hex-color {
    color: #4CAF50;
    background-color: #F0F0F0;
}`}
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this class to an element:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<p class="hex-color">This text uses HEX colors.</p>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-purple-500" /> RGB & RGBA Color Example
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.rgb-color {
    color: rgb(255, 99, 71);
    background-color: rgba(0, 0, 0, 0.2);
}`}
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this class to an element:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<p class="rgb-color">This text uses RGB and RGBA colors.</p>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use HEX or RGB for precise color control.</li>
          <li>Ensure sufficient contrast for readability and accessibility.</li>
          <li>Use RGBA or HSLA for transparent effects.</li>
          <li>Stick to a consistent color scheme for a professional look.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap14;
