import React from "react";
import { FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap44 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaPalette className="mr-2" /> CSS Gradients
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS gradients allow you to create smooth transitions between multiple colors, enhancing visual aesthetics without needing images.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Linear Gradients
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>linear-gradient</code> function is used to create a transition between colors along a straight line.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of linear gradient */
.gradient-box {
  width: 300px;
  height: 150px;
  background: linear-gradient(to right, red, yellow);
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-blue-500" /> Radial Gradients
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>radial-gradient</code> function creates a gradient that radiates outward from a central point.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of radial gradient */
.gradient-circle {
  width: 300px;
  height: 150px;
  background: radial-gradient(circle, red, yellow, green);
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use gradients subtly to enhance design without overwhelming the user.</li>
          <li>Combine gradients with transparency for more dynamic effects.</li>
          <li>Experiment with color stops to control the transition points.</li>
          <li>Ensure gradient contrast for readability and accessibility.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap44;
