import React from "react";
import { FaCss3Alt, FaPalette, FaCheckCircle } from "react-icons/fa";
import { FaFont, FaAlignLeft, FaTextHeight } from "react-icons/fa";


const CssChap21 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> Styling Text in CSS
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides powerful properties to style text, allowing developers to enhance typography for better readability and aesthetics.
        </p>
      </section>

      <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FaFont /> CSS Text Styling
      </h1>

      {/* Font Properties */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaFont /> Font Properties
        </h2>
        <p className="text-gray-700">
          CSS provides various font properties to style text.
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>font-family:</strong> Specifies the font type.
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ font-family: Arial, sans-serif; }`}</pre>
          </li>
          <li><strong>font-size:</strong> Defines the text size.
            <pre className="bg-gray-200 p-2 rounded mt-1">h1 {`{ font-size: 24px; }`}</pre>
          </li>
          <li><strong>font-weight:</strong> Adjusts the text thickness (e.g., bold).
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ font-weight: bold; }`}</pre>
          </li>
          <li><strong>font-style:</strong> Sets normal, italic, or oblique styles.
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ font-style: italic; }`}</pre>
          </li>
        </ul>
      </div>

      {/* Text Alignment */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaAlignLeft /> Text Alignment
        </h2>
        <p className="text-gray-700">
          Align text using the <code>text-align</code> property.
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>left:</strong> Aligns text to the left.
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ text-align: left; }`}</pre>
          </li>
          <li><strong>center:</strong> Centers the text.
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ text-align: center; }`}</pre>
          </li>
          <li><strong>right:</strong> Aligns text to the right.</li>
          <li><strong>justify:</strong> Spreads text evenly.</li>
        </ul>
      </div>

      {/* Text Color & Decoration */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaPalette /> Text Color & Decoration
        </h2>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>color:</strong> Sets text color.
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ color: red; }`}</pre>
          </li>
          <li><strong>text-decoration:</strong> Adds effects like underline or line-through.
            <pre className="bg-gray-200 p-2 rounded mt-1">a {`{ text-decoration: underline; }`}</pre>
          </li>
          <li><strong>text-transform:</strong> Converts text to uppercase, lowercase, or capitalize.
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ text-transform: uppercase; }`}</pre>
          </li>
        </ul>
      </div>

      {/* Line Spacing */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaTextHeight /> Line Spacing
        </h2>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>line-height:</strong> Sets the space between lines.
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ line-height: 1.5; }`}</pre>
          </li>
          <li><strong>letter-spacing:</strong> Adjusts space between letters.</li>
          <li><strong>word-spacing:</strong> Adjusts space between words.</li>
        </ul>
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
    <title>CSS Text Styling Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="text-container">
        <h1 class="title">CSS Text Styling</h1>
        <p class="paragraph">This is an example of styled text using various CSS properties.</p>
        <p class="highlight">Highlighted text with background color.</p>
    </div>
</body>
</html>

/* CSS Code (styles.css) */
.text-container {
    width: 60%;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    text-align: center;
}

.title {
    font-family: Arial, sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #2c3e50;
}

.paragraph {
    font-size: 18px;
    line-height: 1.6;
    color: #34495e;
    text-align: justify;
}

.highlight {
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    background-color: yellow;
    padding: 5px;
    display: inline-block;
}`}
          </code>
        </pre>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use appropriate font sizes for readability and accessibility.</li>
          <li>Apply <code>line-height</code> for better spacing between text lines.</li>
          <li>Utilize <code>font-family</code> to maintain a consistent design style.</li>
          <li>Ensure sufficient contrast between text and background for accessibility.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap21;
