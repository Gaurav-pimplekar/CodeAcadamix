import React from "react";
import { FaUserCog, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap48 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaUserCog className="mr-2" /> CSS User Interface
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS User Interface (UI) properties allow developers to control the appearance and behavior of user interactions,
          enhancing usability and improving the user experience of web applications.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Common CSS UI Properties
        </h2>
        <p className="text-gray-800 mt-2">
          Some key UI-related properties in CSS include:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li><code>cursor</code> - Controls the appearance of the mouse pointer.</li>
          <li><code>resize</code> - Enables resizing of elements by the user.</li>
          <li><code>outline</code> - Defines visual outlines for focus indicators.</li>
          <li><code>user-select</code> - Determines whether text can be selected by the user.</li>
          <li><code>pointer-events</code> - Controls if an element can respond to mouse events.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>cursor</code> to indicate interactive elements like buttons and links.</li>
          <li>Apply <code>resize</code> only when user-adjustable sizing is necessary.</li>
          <li>Leverage <code>outline</code> for accessible focus indicators.</li>
          <li>Prevent unwanted text selection using <code>user-select: none</code> on UI elements.</li>
          <li>Disable interactions with <code>pointer-events: none</code> when needed.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap48;
