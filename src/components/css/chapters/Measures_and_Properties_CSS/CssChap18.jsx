import React from "react";
import { FaCss3Alt, FaRuler, FaCheckCircle } from "react-icons/fa";

const CssChap18 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Measures and Properties
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRuler className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides various measurement units and properties that define the size, spacing, and positioning of elements. Understanding these units and properties is crucial for designing responsive layouts.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRuler className="mr-2 text-green-500" /> Common CSS Measurement Units
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Absolute units */
p {
    font-size: 16px; /* Pixels */
    width: 5cm; /* Centimeters */
}

/* Relative units */
div {
    font-size: 1em; /* Relative to parent */
    width: 50%; /* Relative to container */
    max-width: 80vw; /* Viewport width */
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRuler className="mr-2 text-blue-500" /> Example Usage
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<div style="width: 50%; height: 100px; background-color: lightblue;">
    Responsive Box
</div>

<p style="font-size: 1.2em;">This text scales with the parent font size.</p>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use relative units (<code>em</code>, <code>rem</code>, <code>%</code>) for better responsiveness.</li>
          <li>Set max-width instead of fixed width to prevent layout breakage.</li>
          <li>Combine different units to achieve flexible designs.</li>
          <li>Use viewport units (<code>vw</code>, <code>vh</code>) for full-page elements.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap18;