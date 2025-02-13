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

        {/* Explanation */}
        <p className="text-gray-800 mt-2">
          The background color of an element can be set using the <code>background-color</code> property in CSS.
          This property defines the background color for an element and can take color names, hex values, RGB, HSL,
          or transparent values.
        </p>

        {/* Example Code */}
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
}

.bg-gradient {
    background: linear-gradient(to right, red, yellow);
    color: black;
    padding: 20px;
}

.bg-image {
    background: url('background.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 20px;
}`}
          </code>
        </pre>

        {/* Example Usage */}
        <p className="text-gray-800 mt-2">Example usage:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div class="bg-blue">This is a blue background.</div>
<div class="bg-red">This is a red background.</div>
<div class="bg-gradient">This is a gradient background.</div>
<div class="bg-image">This is a background image.</div>`}
          </code>
        </pre>

        {/* Example Output */}
        <div className="mt-6 space-y-4">
          <div className="bg-blue-500 text-white p-4 rounded">This is a blue background.</div>
          <div className="bg-red-500 text-white p-4 rounded">This is a red background.</div>
          <div className="bg-gradient text-black p-4 rounded">This is a gradient background.</div>
          <div className="bg-cover bg-center text-white p-4 rounded" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=')" }}>
            This is a background image.
          </div>
        </div>
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
