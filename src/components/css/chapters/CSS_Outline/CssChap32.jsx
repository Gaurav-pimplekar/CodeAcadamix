import React from "react";
import { FaPencilRuler, FaInfoCircle, FaLightbulb } from "react-icons/fa";

const CssChap32 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaPencilRuler className="mr-2" /> Understanding CSS Outline
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaInfoCircle className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>outline</code> property is used to create an outline around elements without affecting their size or layout. Unlike borders, outlines do not take up space and can be used to highlight elements dynamically.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-green-500" /> Key Properties of Outline
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>outline</code> property consists of several key attributes:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><strong>outline-style</strong>: Defines the style of the outline (solid, dashed, dotted, etc.).</li>
          <li><strong>outline-width</strong>: Specifies the thickness of the outline.</li>
          <li><strong>outline-color</strong>: Sets the color of the outline.</li>
          <li><strong>outline-offset</strong>: Defines the space between the element and its outline.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-blue-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>outline</code> to improve accessibility, especially for focusable elements.</li>
          <li>Avoid using outline styles that blend with the background, as they may become invisible.</li>
          <li>Consider using <code>outline-offset</code> to create a more visually appealing effect.</li>
          <li>Use <code>:focus</code> with outlines to ensure keyboard navigability.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap32;
