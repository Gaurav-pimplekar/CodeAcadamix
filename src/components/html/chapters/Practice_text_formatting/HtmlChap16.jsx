import React from "react";
import { FaHtml5, FaCode, FaBookOpen, FaCheckCircle } from "react-icons/fa";

const HtmlChap16 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-red-500">
        <FaHtml5 /> Practice Text Formatting
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaBookOpen /> Introduction
        </h2>
        <p className="text-gray-700">
          Practicing text formatting is essential for mastering HTML. Below are exercises to help you apply different text formatting elements in HTML.
        </p>
      </section>
      
      {/* Practice Exercise */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCode /> Practice Exercise
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Text Formatting</title>
</head>
<body>
    <h1>Practice Text Formatting</h1>
    <p><b>Bold</b>, <i>Italic</i>, and <u>Underlined</u> text.</p>
    <p><mark>Highlighted text</mark> and <small>small text</small>.</p>
    <p>Super: x<sup>2</sup>, Sub: H<sub>2</sub>O</p>
    <p><code>console.log("Test your skills!");</code></p>
    <blockquote>"Learning by doing is the best way!"</blockquote>
    <p><abbr title="World Wide Web">WWW</abbr> is important for web development.</p>
</body>
</html>
          `}</code>
        </pre>
      </section>
      
      {/* Challenge */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaCheckCircle /> Challenge
        </h2>
        <p className="text-gray-700">
          Try modifying the above code to include additional formatting elements like <code>&lt;del&gt;</code>, <code>&lt;ins&gt;</code>, and <code>&lt;q&gt;</code>.
        </p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaHtml5 className="text-green-500" /> Practicing these formatting elements will enhance your HTML skills.
      </p>
    </div>
  );
};

export default HtmlChap16;
