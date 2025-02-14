import React from "react";
import { FaFont, FaPalette, FaCheckCircle } from "react-icons/fa";
import { FaBook, FaLaptopCode, FaFeatherAlt, FaUserEdit } from "react-icons/fa";

const CssChap22 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaFont className="mr-2" /> CSS Font Family
      </h1>

      
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          The <code>font-family</code> property in CSS defines the font of the text. You can specify multiple font families to ensure a fallback if the preferred font is not available.
        </p>
      </section>

      <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FaFont /> CSS Font Family
      </h1>

      <p className="text-gray-700">
        The <code>font-family</code> property in CSS specifies the typeface used for text. It allows you to choose between different categories of fonts.
      </p>

      {/* Serif Fonts */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaBook /> Serif Fonts
        </h2>
        <p className="text-gray-800">
          Serif fonts have small strokes (serifs) at the ends of letters, making them ideal for print media and formal documents.
        </p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`p { font-family: 'Times New Roman', serif; }`}
        </pre>
        <p className="mt-2 font-serif text-lg">Example text using a serif font.</p>
      </div>

      {/* Sans-Serif Fonts */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaLaptopCode /> Sans-Serif Fonts
        </h2>
        <p className="text-gray-800">
          Sans-serif fonts do not have small strokes at the ends of letters. They are clean and modern, commonly used on websites.
        </p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`p { font-family: 'Arial', sans-serif; }`}
        </pre>
        <p className="mt-2 font-sans text-lg">Example text using a sans-serif font.</p>
      </div>

      {/* Monospace Fonts */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaFeatherAlt /> Monospace Fonts
        </h2>
        <p className="text-gray-800">
          In monospace fonts, every character takes up the same width, making them useful for coding and terminal applications.
        </p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`p { font-family: 'Courier New', monospace; }`}
        </pre>
        <p className="mt-2 font-mono text-lg">Example text using a monospace font.</p>
      </div>

      {/* Cursive Fonts */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaUserEdit /> Cursive Fonts
        </h2>
        <p className="text-gray-800">
          Cursive fonts have flowing, handwritten styles. They are decorative but should be used sparingly for readability.
        </p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`p { font-family: 'Brush Script MT', cursive; }`}
        </pre>
        <p className="mt-2 font-cursive text-lg">Example text using a cursive font.</p>
      </div>

      {/* Fantasy Fonts */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaFeatherAlt /> Fantasy Fonts
        </h2>
        <p className="text-gray-800">
          Fantasy fonts are decorative and creative, often used in gaming and entertainment designs.
        </p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`p { font-family: 'Impact', fantasy; }`}
        </pre>
        <p className="mt-2 text-lg" style={{ fontFamily: "Impact, fantasy" }}>
          Example text using a fantasy font.
        </p>
      </div>
    </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Example Code
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <code>
            {`<!-- HTML Code -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Font Family Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="font-container">
        <h1 class="heading">CSS Font Families</h1>
        <p class="serif">This text uses a serif font.</p>
        <p class="sans-serif">This text uses a sans-serif font.</p>
        <p class="monospace">This text uses a monospace font.</p>
    </div>
</body>
</html>

/* CSS Code (styles.css) */
.font-container {
    width: 60%;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    text-align: center;
}

.heading {
    font-family: "Arial", sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #2c3e50;
}

.serif {
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
    color: #34495e;
}

.sans-serif {
    font-family: "Verdana", Geneva, sans-serif;
    font-size: 20px;
    color: #1abc9c;
}

.monospace {
    font-family: "Courier New", Courier, monospace;
    font-size: 20px;
    color: #e74c3c;
}`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use web-safe fonts to ensure compatibility across all devices.</li>
          <li>Specify multiple font families as fallbacks in case the preferred font is unavailable.</li>
          <li>Use <code>rem</code> or <code>em</code> units for font size for better scalability.</li>
          <li>Ensure proper contrast between text and background for readability.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap22;
