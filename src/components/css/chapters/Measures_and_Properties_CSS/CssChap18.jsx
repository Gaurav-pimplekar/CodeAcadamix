import React from "react";
import { FaCss3Alt, FaRuler, FaCheckCircle, FaPercentage, FaExpand } from "react-icons/fa";

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
      
      <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FaRuler /> Measurement Units in CSS
      </h1>
      
      {/* Absolute Units */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Absolute Units (Fixed Size)</h2>
        <p className="text-gray-700">These units are not affected by the parent element or viewport size.</p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>px (Pixels):</strong> Most commonly used unit. Example:
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ font-size: 16px; }`}</pre>
          </li>
          <li><strong>cm (Centimeters):</strong> Used for print designs.</li>
          <li><strong>mm (Millimeters):</strong> Rarely used, mainly for print.</li>
          <li><strong>in (Inches):</strong> 1in = 2.54cm. Example:
            <pre className="bg-gray-200 p-2 rounded mt-1">div {`{ width: 2in; }`}</pre>
          </li>
          <li><strong>pt (Points):</strong> 1pt = 1/72 inch, often used in typography.</li>
          <li><strong>pc (Picas):</strong> 1pc = 12pt.</li>
        </ul>
      </div>

      {/* Relative Units */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaPercentage /> Relative Units (Adapt to Parent or Viewport)
        </h2>
        <p className="text-gray-700">Relative units change depending on the parent element or viewport.</p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>% (Percentage):</strong> Relative to the parent element.
            <pre className="bg-gray-200 p-2 rounded mt-1">div {`{ width: 50%; }`}</pre>
          </li>
          <li><strong>em:</strong> Relative to the font size of the parent.
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ font-size: 1.5em; }`}</pre>
          </li>
          <li><strong>rem:</strong> Relative to the root ({`<html>`}) font size.
            <pre className="bg-gray-200 p-2 rounded mt-1">h1 {`{ font-size: 2rem; }`}</pre>
          </li>
          <li><strong>vw:</strong> Viewport width percentage.
            <pre className="bg-gray-200 p-2 rounded mt-1">div {`{ width: 80vw; }`}</pre>
          </li>
          <li><strong>vh:</strong> Viewport height percentage.</li>
          <li><strong>vmin:</strong> Smaller of `vw` or `vh`.</li>
          <li><strong>vmax:</strong> Larger of `vw` or `vh`.</li>
          <li><strong>ch:</strong> Relative to the width of the "0" character.</li>
          <li><strong>ex:</strong> Relative to the height of lowercase "x".</li>
        </ul>
      </div>

      {/* CSS Properties Using Measurements */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaExpand /> CSS Properties That Use Measurements
        </h2>
        <p className="text-gray-700">These properties utilize different measurement units.</p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Box Model Properties:</strong> width, height, margin, padding, border.</li>
          <li><strong>Positioning:</strong> top, right, bottom, left, z-index.</li>
          <li><strong>Typography:</strong> font-size, letter-spacing, line-height.</li>
        </ul>
      </div>
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