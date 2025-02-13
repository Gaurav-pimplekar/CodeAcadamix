import React from "react";
import { FaCss3Alt, FaPalette, FaCheckCircle } from "react-icons/fa";

const CssChap11 = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
        <FaCss3Alt className="mr-2" /> CSS Selection and Classes
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-yellow-500" /> Introduction
        </h2>
        <p className="text-gray-800 mt-2">
          CSS provides different ways to select and style elements using classes, IDs, and various selectors. Understanding these concepts is crucial for effective styling.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-red-500" /> Universal Selector in CSS
        </h2>

        <h3 className="text-lg font-medium text-gray-600 mt-4">1. Universal Selector (<code>*</code>)</h3>
        <p className="text-gray-600">
          The **Universal Selector** (<code>*</code>) is used to apply styles to **all elements** on a webpage.
          It is useful for resetting default styles or applying general properties.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">CSS Syntax for the Universal Selector</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">How It Works</h3>
        <p className="text-gray-600">
          The code above removes default **margin and padding** from all elements and sets
          <code>box-sizing: border-box</code> to ensure padding and border are included in the element's total width and height.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Example Usage in HTML</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<!-- index.html -->
<body>
    <h1>Universal Selector Example</h1>
    <p>This paragraph inherits styles from the universal selector.</p>
</body>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Key Characteristics of the Universal Selector</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Targets **all** elements on the page.</li>
          <li>Can be useful for **resetting default browser styles**.</li>
          <li>Has **low specificity**, so other selectors can override it.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Best Practices</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Use it **carefully**, as it can affect all elements.</li>
          <li>Commonly used for **CSS resets** to create consistency across browsers.</li>
          <li>Prefer using it in **combination with other selectors** rather than relying on it entirely.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Example: Limiting the Universal Selector Scope</h3>
        <p className="text-gray-600">
          Instead of affecting the entire page, you can use the universal selector **inside a specific container**:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
.container * {
    font-family: Arial, sans-serif;
    color: darkblue;
}`}
          </code>
        </pre>

        <p className="text-gray-600 mt-2">HTML Example:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<!-- index.html -->
<div class="container">
    <h2>Scoped Universal Selector</h2>
    <p>Only elements inside .container will be styled.</p>
</div>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">When to Use the Universal Selector?</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>For **CSS resets** (removing default margin and padding).</li>
          <li>When applying **general styles** to all elements.</li>
          <li>For **scoped styling** inside a container.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-green-500" /> Class Selectors in CSS
        </h2>
        <p className="mt-2 text-gray-600">
          CSS class selectors allow you to apply styles to multiple elements by assigning them a class name.
          Unlike ID selectors, which are unique to a single element, class selectors can be reused throughout
          the document to maintain a consistent design.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Example of Class Selectors</h3>

        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Classes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 class="main-title">Styled with CSS Classes</h1>
    <p class="highlight">This paragraph uses a CSS class.</p>
</body>
</html>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">CSS Styling for Class Selectors</h3>

        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
.main-title {
    color: #2c3e50;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

.highlight {
    background-color: #f1c40f;
    color: #333;
    padding: 10px;
    border-radius: 5px;
}`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Explanation:</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            <strong>`.main-title`</strong>: This class applies styles to the heading (`h1`), including color, font size, weight, and alignment.
          </li>
          <li>
            <strong>`.highlight`</strong>: This class gives the paragraph (`p`) a yellow background, padding, and rounded corners to make it stand out.
          </li>
          <li>
            Classes are reusable: You can apply the same class to multiple elements to maintain consistency.
          </li>
          <li>
            To use a class in CSS, prefix the class name with a <code>.</code> (dot), like <code>.classname</code>.
          </li>
        </ul>


      </section>


      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-blue-500" /> Understanding ID Selectors in CSS
        </h2>

        <p className="text-gray-600 mt-2">
          The <strong>ID Selector</strong> is used to style a specific element by assigning it a unique
          identifier. It is denoted using the <code>#</code> symbol followed by the ID name.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">CSS Syntax for ID Selectors</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
#my-id {
    background-color: lightblue;
    padding: 10px;
    font-weight: bold;
    text-align: center;
    border: 2px solid navy;
}`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Applying the ID in HTML</h3>
        <p className="text-gray-600">
          Once an ID is defined in CSS, you can apply it to an HTML element using the <code>id</code> attribute.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<!-- index.html -->
<div id="my-id">This is styled using an ID.</div>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Key Characteristics of ID Selectors</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>IDs must be **unique** on a page; no two elements should have the same ID.</li>
          <li>ID selectors have **higher specificity** than class selectors.</li>
          <li>The ID selector is defined with a **#** symbol before the ID name.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Best Practices</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Avoid using IDs for styling when you can use **class selectors** instead.</li>
          <li>Use IDs for **unique** elements like `#header`, `#footer`, or `#main-content`.</li>
          <li>For better maintainability, prefer **classes** for reusable styles.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">When to Use ID Selectors?</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>For **unique** elements that need a specific style.</li>
          <li>When working with **JavaScript**, as `document.getElementById()` uses IDs.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPalette className="mr-2 text-purple-500" /> Understanding Tag (Element) Selectors in CSS
        </h2>

        <p className="text-gray-600 mt-2">
          The <strong>Tag Selector</strong> (also known as the **Element Selector**) allows you to
          apply styles to all elements of a specific type. It selects elements based on their HTML tag names.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mt-4">CSS Syntax for Tag Selectors</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
h1 {
    color: green;
    font-family: Arial, sans-serif;
    text-align: center;
}`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Applying the Tag Selector in HTML</h3>
        <p className="text-gray-600">
          Once defined in CSS, the tag selector applies styles to all matching HTML elements automatically.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<!-- index.html -->
<h1>This is styled with a tag selector.</h1>
<h1>All h1 elements will have the same style.</h1>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Key Characteristics of Tag Selectors</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Targets all elements of the specified **HTML tag**.</li>
          <li>Uses the **element name** as the selector.</li>
          <li>Has **lower specificity** compared to class and ID selectors.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Best Practices</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Use tag selectors for **global styling** (e.g., setting a default font for all {`<p>`} elements).</li>
          <li>Avoid excessive use, as it can override styles unintentionally.</li>
          <li>Combine with **class selectors** for better control.</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-600 mt-4">Example: Combining Tag and Class Selectors</h3>
        <p className="text-gray-600">
          To apply a base style to all {`<p>`} elements and a specific style to selected paragraphs:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`/* styles.css */
p {
    font-size: 16px;
    color: black;
}

.highlight {
    color: red;
    font-weight: bold;
}`}
          </code>
        </pre>

        <p className="text-gray-600 mt-2">HTML Example:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`<!-- index.html -->
<p>This paragraph uses the default tag selector.</p>
<p class="highlight">This paragraph uses both a tag and class selector.</p>`}
          </code>
        </pre>

        <h3 className="text-lg font-medium text-gray-600 mt-4">When to Use Tag Selectors?</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>For **global styles** like font settings, colors, and spacing.</li>
          <li>When applying styles to multiple elements of the same type.</li>
          <li>When you don't need to **specifically target** an element.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use class selectors for reusable styles across multiple elements.</li>
          <li>Use ID selectors sparingly, as they should be unique in a document.</li>
          <li>Use tag selectors for global styling but avoid excessive use to prevent conflicts.</li>
          <li>Combine different selectors strategically for better styling efficiency.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaCheckCircle className="mr-2 text-purple-500" /> Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Use meaningful class names to improve readability and maintainability.</li>
          <li>Avoid overusing ID selectors; prefer class-based styling for flexibility.</li>
          <li>Group similar styles together for better organization.</li>
          <li>Ensure your styles are modular and reusable across different elements.</li>
        </ul>
      </section>
    </div>
  );
};

export default CssChap11;
