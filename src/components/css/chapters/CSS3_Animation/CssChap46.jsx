import React from "react";
import { FaPlayCircle, FaCode, FaCheckCircle } from "react-icons/fa";

const CssChap46 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaPlayCircle className="mr-2" /> CSS Animation
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS animations allow elements to transition smoothly between different styles over time. 
          They enhance user experience by making web interfaces more interactive and engaging.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-green-500" /> Keyframe Animations
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>@keyframes</code> rule defines animation states at different points in time.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of Keyframe Animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animated-box {
  width: 100px;
  height: 100px;
  background-color: red;
  animation: fadeIn 2s ease-in-out;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-2 text-blue-500" /> Transition Animations
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>transition</code> property allows smooth changes between CSS property values.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Example of Transition Animation */
.transition-box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: background-color 0.5s ease-in-out;
}

.transition-box:hover {
  background-color: green;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use <code>transform</code> instead of animating layout properties for better performance.</li>
          <li>Limit animations to avoid overwhelming the user experience.</li>
          <li>Combine animations and transitions for smooth effects.</li>
          <li>Optimize performance by reducing unnecessary animations.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap46;
