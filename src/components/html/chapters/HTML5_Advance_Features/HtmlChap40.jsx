import React from "react";
import { FaCogs, FaRocket, FaCode } from "react-icons/fa";

const HtmlChap40 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaCogs /> HTML Advanced Features
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaRocket /> Exploring Advanced HTML
        </h2>
        <p className="text-gray-700">
          HTML has evolved significantly, introducing advanced features to enhance web development. These features include Web Components, custom data attributes, and the latest semantic elements.
        </p>
      </section>
      
      {/* Web Components */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Web Components
        </h2>
        <p className="text-gray-700">
          Web Components allow developers to create reusable custom elements with encapsulated functionality. They include:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li><b>Custom Elements:</b> Define new HTML tags.</li>
          <li><b>Shadow DOM:</b> Encapsulated styles and scripts.</li>
          <li><b>HTML Templates:</b> Predefined reusable content.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<template id="myTemplate">
  <p>Custom HTML Component</p>
</template>
          `}</code>
        </pre>
      </section>
      
      {/* Custom Data Attributes */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaRocket /> Custom Data Attributes
        </h2>
        <p className="text-gray-700">
          Custom attributes (using <code>data-*</code>) store extra information within HTML elements for JavaScript processing.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<div data-user="JohnDoe">User Info</div>
<script>
  const user = document.querySelector("div").dataset.user;
  console.log(user); // Output: JohnDoe
</script>
          `}</code>
        </pre>
      </section>
      
      {/* Semantic Enhancements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCogs /> Enhanced Semantic Elements
        </h2>
        <p className="text-gray-700">
          HTML5 introduced new semantic elements like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;aside&gt;</code> to improve accessibility and SEO.
        </p>
      </section>
    </div>
  );
};

export default HtmlChap40;
