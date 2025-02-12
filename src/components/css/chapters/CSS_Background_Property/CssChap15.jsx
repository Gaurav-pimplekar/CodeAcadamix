import React from "react";
import { FaCss3Alt, FaBrush, FaCheckCircle } from "react-icons/fa";

const CssChap15 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Background Property
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaBrush className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS background property allows you to set background colors, images, gradients, and other effects for elements. It enhances the visual appeal of web pages.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaBrush className="mr-2 text-green-500" /> Background Color Example
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.bg-color {
    background-color: lightblue;
    color: black;
    padding: 20px;
}`}          
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this class to an element:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div class="bg-color">This div has a background color.</div>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaBrush className="mr-2 text-blue-500" /> Background Image Example
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.bg-image {
    background-image: url('background.jpg');
    background-size: cover;
    background-position: center;
    height: 300px;
}`}          
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this class to an element:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div class="bg-image">This div has a background image.</div>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaBrush className="mr-2 text-purple-500" /> Background Gradient Example
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* styles.css */
.bg-gradient {
    background: linear-gradient(to right, red, yellow);
    padding: 20px;
}`}          
          </code>
        </pre>
        <p className="text-gray-800 mt-2">Apply this class to an element:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div class="bg-gradient">This div has a gradient background.</div>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use background images with appropriate size settings to avoid distortion.</li>
          <li>Choose contrasting text colors for readability.</li>
          <li>Optimize background images for faster loading.</li>
          <li>Use gradients for smooth transitions without extra image files.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap15;
