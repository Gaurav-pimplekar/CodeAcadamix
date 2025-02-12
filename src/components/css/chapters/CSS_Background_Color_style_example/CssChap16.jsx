import React from "react";
import { FaCss3Alt, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap16 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Background Color Style Examples
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>background-color</code> property allows you to set the background color of elements. It helps enhance the design and readability of web pages.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Setting Background Colors
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.bg-blue {
    background-color: blue;
    color: white;
    padding: 20px;
}

.bg-red {
    background-color: red;
    color: white;
    padding: 20px;
}`}          
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Example usage:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div class="bg-blue">This is a blue background.</div>
<div class="bg-red">This is a red background.</div>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-blue-500" /> Using RGBA and Opacity
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.bg-transparent {
    background-color: rgba(0, 0, 255, 0.5);
    padding: 20px;
}`}          
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Example usage:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div class="bg-transparent">This is a semi-transparent blue background.</div>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-purple-500" /> Applying Background to Body
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
body {
    background-color: lightgray;
}`}          
          </code>
        </pre>
        <p className="text-gray-800 mt-2">This sets the entire webpage background color.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use contrasting text colors for readability.</li>
          <li>Apply RGBA for transparency effects.</li>
          <li>Avoid using overly bright colors that strain the eyes.</li>
          <li>Ensure consistency in design by maintaining a color scheme.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap16;
