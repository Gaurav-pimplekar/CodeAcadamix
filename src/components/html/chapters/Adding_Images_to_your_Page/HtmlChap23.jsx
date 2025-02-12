import React from "react";
import { FaImage, FaFileImage, FaFileCode, FaCogs } from "react-icons/fa";

const HtmlChap23 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaImage /> Adding Images to Your Page
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileImage /> Introduction
        </h2>
        <p className="text-gray-700">
          Images enhance the visual appeal of a webpage and help convey information effectively. HTML provides the <code>&lt;img&gt;</code> tag to embed images in web pages.
        </p>
      </section>
      
      {/* Basic Image Tag Usage */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Basic Image Syntax
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<img src="image.jpg" alt="Description of the image" width="500" height="300">
          `}</code>
        </pre>
        <p className="text-gray-700">
          The <code>src</code> attribute specifies the image file path, while the <code>alt</code> attribute provides an alternative text description.
        </p>
      </section>
      
      {/* Responsive Images */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Responsive Images
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<img src="image.jpg" alt="Description" style="max-width:100%; height:auto;">
          `}</code>
        </pre>
        <p className="text-gray-700">
          Using <code>max-width: 100%</code> ensures the image scales properly within its container.
        </p>
      </section>
      
      {/* Using Picture Element */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> The <code>&lt;picture&gt;</code> Element
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<picture>
  <source srcSet="image-large.jpg" media="(min-width: 800px)">
  <source srcSet="image-medium.jpg" media="(min-width: 500px)">
  <img src="image-small.jpg" alt="Responsive Image">
</picture>
          `}</code>
        </pre>
        <p className="text-gray-700">
          The <code>&lt;picture&gt;</code> element allows different images to load based on screen size.
        </p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCogs className="text-red-500" /> Use these techniques to effectively add and optimize images on your webpage.
      </p>
    </div>
  );
};

export default HtmlChap23;
