import React from "react";
import { FaCloud, FaAdjust, FaCheckCircle } from "react-icons/fa";

const CssChap43 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCloud className="mr-2" /> CSS Shadows
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaAdjust className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>box-shadow</code> and <code>text-shadow</code> properties allow you to add shadow effects to elements,
          enhancing their visual appearance and creating depth.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaAdjust className="mr-2 text-green-500" /> Using Box Shadows
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>box-shadow</code> property applies a shadow effect to an element's box.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of box shadow usage */
.box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaAdjust className="mr-2 text-red-500" /> Using Text Shadows
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>text-shadow</code> property applies shadow effects to text content.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of text shadow usage */
.text {
  font-size: 24px;
  color: darkblue;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use subtle shadows to enhance depth without overwhelming the design.</li>
          <li>Experiment with different blur and spread values for unique effects.</li>
          <li>Combine shadows with other styling techniques to create engaging UI elements.</li>
          <li>Ensure shadows complement the overall color scheme and theme.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap43;
