import React from "react";
import { FaCss3Alt, FaPaintBrush, FaCogs, FaPalette, FaLayerGroup, FaRegLightbulb } from "react-icons/fa";
import { AiOutlineBgColors, AiOutlineBorder, AiOutlineFontSize } from "react-icons/ai";
import { BiAlignMiddle } from "react-icons/bi";
import { MdOutlineFormatColorText } from "react-icons/md";


const CssChap4 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> Basics of CSS
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPaintBrush className="mr-2 text-yellow-500" /> Introduction to CSS
        </h2>
        <p className="text-gray-800 mt-2">
          CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning of HTML elements.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCogs className="mr-2 text-green-500" /> CSS Syntax
        </h2>
        <p className="text-gray-800 mt-2">
          CSS is composed of selectors and declarations. A declaration contains properties and values that define the appearance of an element.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example CSS */
body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
}

h1 {
  color: darkblue;
  text-align: center;
}`}            
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-red-500" /> CSS Selectors
        </h2>
        <p className="text-gray-800 mt-2">
          Selectors are used to target specific HTML elements and apply styles to them.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* CSS Selectors */
p {
  color: green;
}

.container {
  width: 80%;
  margin: auto;
}`}            
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLayerGroup className="mr-2 text-purple-500" /> Box Model
        </h2>
        <p className="text-gray-800 mt-2">
          The CSS Box Model represents the structure of HTML elements with margins, borders, padding, and content.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Box Model Example */
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}`}            
          </code>
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          CSS (Cascading Style Sheets) is used to style HTML elements. It controls the layout, colors, 
          fonts, and positioning of elements on a webpage. Below are some essential CSS properties you should know.
        </p>
      </section>

      {/* CSS Properties Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Common CSS Properties</h2>
        <div className="space-y-6">
          
          {/* Color Property */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <MdOutlineFormatColorText className="text-red-500 text-2xl" />
              <h3 className="text-xl font-semibold">1. Color</h3>
            </div>
            <p className="text-gray-700">
              The <code className="bg-gray-200 px-1 rounded">color</code> property sets the text color.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">
              {`p { color: blue; }`}
            </pre>
          </div>

          {/* Background Color */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <AiOutlineBgColors className="text-green-500 text-2xl" />
              <h3 className="text-xl font-semibold">2. Background-Color</h3>
            </div>
            <p className="text-gray-700">
              The <code className="bg-gray-200 px-1 rounded">background-color</code> property defines the background color of an element.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">
              {`div { background-color: lightgray; }`}
            </pre>
          </div>

          {/* Font Size */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <AiOutlineFontSize className="text-purple-500 text-2xl" />
              <h3 className="text-xl font-semibold">3. Font Size</h3>
            </div>
            <p className="text-gray-700">
              The <code className="bg-gray-200 px-1 rounded">font-size</code> property sets the text size.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">
              {`h1 { font-size: 24px; }`}
            </pre>
          </div>

          {/* Text Alignment */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <BiAlignMiddle className="text-yellow-500 text-2xl" />
              <h3 className="text-xl font-semibold">4. Text Alignment</h3>
            </div>
            <p className="text-gray-700">
              The <code className="bg-gray-200 px-1 rounded">text-align</code> property aligns text inside an element.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">
              {`p { text-align: center; }`}
            </pre>
          </div>

          {/* Border */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <AiOutlineBorder className="text-blue-500 text-2xl" />
              <h3 className="text-xl font-semibold">5. Border</h3>
            </div>
            <p className="text-gray-700">
              The <code className="bg-gray-200 px-1 rounded">border</code> property defines a border around an element.
            </p>
            <pre className="bg-gray-900 text-white p-3 rounded mt-2">
              {`div { border: 2px solid black; }`}
            </pre>
          </div>

        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaRegLightbulb className="mr-2 text-blue-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Keep styles organized and avoid inline styles when possible.</li>
          <li>Use external stylesheets for better maintainability.</li>
          <li>Leverage CSS variables for reusability.</li>
          <li>Test across different devices to ensure responsiveness.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap4;
