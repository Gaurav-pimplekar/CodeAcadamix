import React from "react";
import { FaMapMarkerAlt, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap31 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaMapMarkerAlt className="mr-2" /> CSS Position - Examples & Source Code
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS positioning allows developers to control the placement of elements with properties like static, relative, absolute, fixed, and sticky.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Example: CSS Positioning
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Position Example</title>
    <style>
        .container {
            width: 80%;
            margin: auto;
            position: relative;
        }
        .box {
            width: 150px;
            height: 150px;
            color: white;
            text-align: center;
            line-height: 150px;
        }
        .static-box {
            background-color: gray;
            position: static;
        }
        .relative-box {
            background-color: blue;
            position: relative;
            top: 20px;
            left: 20px;
        }
        .absolute-box {
            background-color: red;
            position: absolute;
            top: 50px;
            left: 50px;
        }
        .fixed-box {
            background-color: green;
            position: fixed;
            bottom: 10px;
            right: 10px;
        }
        .sticky-box {
            background-color: purple;
            position: sticky;
            top: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box static-box">Static</div>
        <div class="box relative-box">Relative</div>
        <div class="box absolute-box">Absolute</div>
        <div class="box fixed-box">Fixed</div>
        <div class="box sticky-box">Sticky</div>
    </div>
</body>
</html>`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>relative</code> for minor adjustments within the normal flow.</li>
          <li>Prefer <code>absolute</code> positioning within a parent container to avoid layout disruptions.</li>
          <li>Avoid excessive <code>fixed</code> elements as they can obstruct content.</li>
          <li>Use <code>sticky</code> for navigation bars to improve user experience.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap31;
