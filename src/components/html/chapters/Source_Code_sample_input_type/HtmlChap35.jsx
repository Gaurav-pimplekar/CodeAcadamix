import React from "react";
import { FaCode, FaKeyboard, FaCheck } from "react-icons/fa";

const HtmlChap35 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaKeyboard /> Sample Code for HTML Input Types
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Sample Input Type Implementations
        </h2>
        <p className="text-gray-700">
          Below are various input types commonly used in HTML forms with proper implementations.
        </p>
      </section>
      
      {/* Sample Code */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Basic Input Types Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label>Text: <input type="text" placeholder="Enter text" /></label>
  <label>Password: <input type="password" placeholder="Enter password" /></label>
  <label>Email: <input type="email" placeholder="Enter email" /></label>
  <label>Number: <input type="number" placeholder="Enter number" /></label>
  <label>Phone: <input type="tel" placeholder="Enter phone number" /></label>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Advanced Input Types Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Advanced Input Types Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label>Date: <input type="date" /></label>
  <label>Time: <input type="time" /></label>
  <label>Color: <input type="color" /></label>
  <label>Range: <input type="range" min="0" max="100" /></label>
  <label>File: <input type="file" /></label>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Special Input Types Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Special Input Types Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label><input type="checkbox" /> Checkbox</label>
  <label><input type="radio" name="options" /> Radio Option</label>
  <input type="hidden" value="secretValue" />
  <button type="submit">Submit</button>
</form>
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default HtmlChap35;
