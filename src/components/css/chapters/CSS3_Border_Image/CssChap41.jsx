import React from "react";
import { FaBorderStyle, FaImage, FaCheckCircle } from "react-icons/fa";

const CssChap41 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaBorderStyle className="mr-2" /> CSS Border Image
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaImage className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>border-image</code> property allows you to use an image as the border of an element.
          This property provides a flexible way to enhance the visual design of elements.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaImage className="mr-2 text-green-500" /> Using Border Image Property
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>border-image</code> property is a shorthand that combines several border-related properties.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of border-image usage */
.box {
  width: 300px;
  height: 150px;
  border: 10px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 10px;
  border-image-outset: 5px;
  border-image-repeat: round;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use high-resolution images for better visual quality.</li>
          <li>Test different <code>border-image-repeat</code> values for the best fit.</li>
          <li>Ensure fallback border styles for browsers that do not support <code>border-image</code>.</li>
          <li>Use transparent borders to avoid conflicts with the border image.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap41;
