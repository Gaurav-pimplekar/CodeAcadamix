import React from "react";
import { FaCss3Alt, FaCode, FaList, FaPalette, FaRegLightbulb } from "react-icons/fa";

const CssChap8 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Selection Examples
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaList className="mr-2 text-yellow-500" /> Overview
        </h2>
        <p className="text-gray-800 mt-2">
          CSS selectors allow you to target and style specific elements within an HTML document. Different types of selectors provide flexible ways to apply styles efficiently.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Basic CSS Selectors
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Universal Selector */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Type Selector */
h1 {
    color: blue;
    text-align: center;
}

/* Class Selector */
.highlight {
    background-color: yellow;
    font-weight: bold;
}

/* ID Selector */
#uniqueElement {
    font-size: 20px;
    color: red;
}
`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-blue-500" /> Advanced CSS Selectors
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Descendant Selector */
div p {
    font-size: 16px;
    color: green;
}

/* Child Selector */
div > p {
    font-weight: bold;
}

/* Adjacent Sibling Selector */
h1 + p {
    font-style: italic;
}

/* Attribute Selector */
input[type="text"] {
    border: 2px solid blue;
    padding: 5px;
}

/* Pseudo-Class Selector */
a:hover {
    color: orange;
    text-decoration: underline;
}

/* Pseudo-Element Selector */
p::first-letter {
    font-size: 2em;
    color: purple;
}
`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRegLightbulb className="mr-2 text-yellow-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use class selectors instead of ID selectors for better reusability.</li>
          <li>Group selectors to apply shared styles efficiently.</li>
          <li>Use pseudo-classes and pseudo-elements to enhance user experience.</li>
          <li>Avoid excessive use of universal selectors as they can impact performance.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap8;