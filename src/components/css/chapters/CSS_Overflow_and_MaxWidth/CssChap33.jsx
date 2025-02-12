import React from "react";
import { FaBorderStyle, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap33 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaBorderStyle className="mr-2" /> CSS Overflow & Max-Width
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>overflow</code> property in CSS determines how content is displayed when it overflows its container. The <code>max-width</code> property restricts the width of an element to a maximum limit, ensuring better responsiveness and layout control.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Examples
        </h2>
        <p className="text-gray-800 mt-2">
          Below are some practical examples demonstrating how to use <code>overflow</code> and <code>max-width</code> in CSS.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4 overflow-auto">
          <code>
            {`/* Example 1: Using Overflow */
.container {
  width: 300px;
  height: 100px;
  border: 1px solid black;
  overflow: scroll;
}

/* Example 2: Using Max-Width */
.responsive-box {
  max-width: 600px;
  padding: 10px;
  background-color: lightblue;
  border: 1px solid #000;
}

/* Example 3: Handling Overflow with Hidden */
.overflow-hidden {
  width: 250px;
  height: 100px;
  overflow: hidden;
  background-color: lightgray;
}

/* Example 4: Applying Overflow Auto */
.overflow-auto {
  width: 250px;
  height: 100px;
  overflow: auto;
  background-color: #f0f0f0;
}

/* Example 5: Using Max-Width for Responsiveness */
@media (max-width: 768px) {
  .responsive-box {
    max-width: 100%;
  }
}
            `}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default CssChap33;
