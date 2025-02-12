import React from "react";
import { FaKeyboard, FaListUl, FaCheck } from "react-icons/fa";

const HtmlChap34 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaKeyboard /> All Input Types in HTML
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaListUl /> Overview of Input Types
        </h2>
        <p className="text-gray-700">
          HTML provides various input types to enhance user interaction. These types define how data is entered and validated within a form.
        </p>
      </section>
      
      {/* List of Input Types */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Common Input Types
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<input type="text" placeholder="Enter text" />
<input type="password" placeholder="Enter password" />
<input type="email" placeholder="Enter email" />
<input type="number" placeholder="Enter number" />
<input type="tel" placeholder="Enter phone number" />
          `}</code>
        </pre>
      </section>
      
      {/* Advanced Input Types */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Advanced Input Types
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<input type="date" />
<input type="time" />
<input type="color" />
<input type="range" min="0" max="100" />
<input type="file" />
          `}</code>
        </pre>
      </section>
      
      {/* Special Input Types */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Special Input Types
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<input type="checkbox" />
<input type="radio" name="options" />
<input type="hidden" value="secretValue" />
<input type="submit" value="Submit" />
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default HtmlChap34;
