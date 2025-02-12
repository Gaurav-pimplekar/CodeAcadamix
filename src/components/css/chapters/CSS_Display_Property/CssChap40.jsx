import React from "react";
import { FaLayerGroup, FaThLarge, FaCheckCircle } from "react-icons/fa";

const CssChap40 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaLayerGroup className="mr-2" /> CSS Display Property: Flex & Grid
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaThLarge className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS <code>display</code> property determines how elements are laid out on a webpage.
          Two powerful layout techniques are <code>flexbox</code> and <code>grid</code>, which provide
          flexible and structured ways to design web interfaces.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaThLarge className="mr-2 text-green-500" /> Flexbox Layout
        </h2>
        <p className="text-gray-800 mt-2">
          Flexbox is a one-dimensional layout model used to distribute space efficiently among items.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Flexbox container */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background-color: lightgray;
}

/* Flex items */
.item {
  width: 100px;
  height: 100px;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaThLarge className="mr-2 text-blue-500" /> CSS Grid Layout
        </h2>
        <p className="text-gray-800 mt-2">
          Grid is a two-dimensional layout system allowing precise control over rows and columns.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  background-color: lightgray;
  padding: 10px;
}

/* Grid items */
.grid-item {
  background-color: green;
  color: white;
  padding: 20px;
  text-align: center;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use flexbox for aligning elements in a row or column.</li>
          <li>Grid is better suited for complex layouts with multiple dimensions.</li>
          <li>Combine flexbox and grid when needed for advanced designs.</li>
          <li>Keep layouts responsive by using relative units.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap40;
