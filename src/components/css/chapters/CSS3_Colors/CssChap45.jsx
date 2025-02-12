import React from "react";
import { FaPalette, FaFill, FaCheckCircle } from "react-icons/fa";

const CssChap45 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaPalette className="mr-2" /> CSS3 Colors
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaFill className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS3 introduced a wide range of color options, including RGB, HSL, and transparency, allowing more flexibility in designing vibrant and dynamic web pages.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaFill className="mr-2 text-green-500" /> RGB and RGBA Colors
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>rgb()</code> function defines colors using red, green, and blue values, while <code>rgba()</code> adds an alpha channel for transparency.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of RGB and RGBA colors */
.rgb-box {
  background-color: rgb(255, 0, 0); /* Red */
}
.rgba-box {
  background-color: rgba(255, 0, 0, 0.5); /* Transparent Red */
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaFill className="mr-2 text-blue-500" /> HSL and HSLA Colors
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>hsl()</code> function uses hue, saturation, and lightness, while <code>hsla()</code> includes an alpha value for transparency.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of HSL and HSLA colors */
.hsl-box {
  background-color: hsl(120, 100%, 50%); /* Bright Green */
}
.hsla-box {
  background-color: hsla(120, 100%, 50%, 0.5); /* Transparent Green */
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use RGBA or HSLA for transparent elements when layering UI components.</li>
          <li>Choose colors that ensure readability and accessibility for all users.</li>
          <li>Leverage CSS variables to manage color themes efficiently.</li>
          <li>Test color contrast to enhance user experience, especially for visually impaired users.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap45;