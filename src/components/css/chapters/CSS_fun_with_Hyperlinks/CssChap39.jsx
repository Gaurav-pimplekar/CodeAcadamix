import React from "react";
import { FaLink, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap39 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaLink className="mr-2" /> CSS Fun with Hyperlinks
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          Hyperlinks are an essential part of web design, allowing users to navigate between pages. CSS provides various ways to style hyperlinks and enhance user experience.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Styling Hyperlinks with CSS
        </h2>
        <p className="text-gray-800 mt-2">
          CSS allows you to modify link colors, remove underlines, and apply hover effects. Below are some examples of how you can style hyperlinks:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`/* Default link style */
a {
  color: blue;
  text-decoration: none;
  font-weight: bold;
}

/* Change color when hovered */
a:hover {
  color: red;
  text-decoration: underline;
}

/* Visited link styling */
a:visited {
  color: purple;
}

/* Active link styling */
a:active {
  color: orange;
}`}          
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Ensure links have good contrast for readability.</li>
          <li>Use hover effects to indicate interactivity.</li>
          <li>Differentiate visited links for better navigation.</li>
          <li>Use <code>:focus</code> to make links accessible for keyboard users.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap39;
