import React from "react";
import { FaAlignJustify, FaInfoCircle, FaLightbulb } from "react-icons/fa";

const CssChap36 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaAlignJustify className="mr-2" /> CSS Element Alignment
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaInfoCircle className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides various ways to align elements within a webpage. Proper alignment improves the visual hierarchy and enhances user experience. This chapter explores different alignment techniques, including text alignment, block alignment, and flexbox/grid alignment.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-green-500" /> Key Alignment Properties
        </h2>
        <p className="text-gray-800 mt-2">
          Below are some essential CSS properties used for alignment:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>text-align</strong>: Aligns text horizontally within an element.</li>
          <li><strong>vertical-align</strong>: Aligns inline elements or table cells vertically.</li>
          <li><strong>margin</strong>: Can be used to center block elements using <code>margin: auto;</code>.</li>
          <li><strong>display: flex</strong>: Enables flexible alignment of child elements.</li>
          <li><strong>justify-content</strong>: Aligns items horizontally within a flex container.</li>
          <li><strong>align-items</strong>: Aligns items vertically within a flex container.</li>
          <li><strong>grid-template-columns</strong>: Defines column alignment in CSS Grid.</li>
          <li><strong>place-items</strong>: A shorthand for <code>align-items</code> and <code>justify-items</code> in Grid.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-blue-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>text-align: center;</code> for centering inline elements.</li>
          <li>Apply <code>display: flex;</code> for flexible and responsive alignment.</li>
          <li>Utilize <code>grid</code> for complex layouts requiring precise alignment.</li>
          <li>Avoid using absolute positioning for alignment unless necessary.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap36;