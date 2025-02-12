import React from "react";
import { FaCode, FaKeyboard, FaCheck, FaList } from "react-icons/fa";

const HtmlChap36 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaKeyboard /> More with HTML5 Forms
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Understanding Advanced Form Features
        </h2>
        <p className="text-gray-700">
          HTML5 introduced several new form features, making forms more interactive and user-friendly. 
          These include validation, datalist, autocomplete, required fields, and more.
        </p>
      </section>
      
      {/* Form Validation Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Form Validation Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label>Email: <input type="email" required /></label>
  <label>Age: <input type="number" min="18" max="60" required /></label>
  <button type="submit">Submit</button>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Datalist Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaList /> Using Datalist for Suggestions
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label>Choose a browser:
    <input list="browsers" />
  </label>
  <datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Edge" />
    <option value="Safari" />
  </datalist>
  <button type="submit">Submit</button>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Autocomplete Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Autocomplete in Forms
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label>Full Name: <input type="text" autocomplete="name" /></label>
  <label>Email: <input type="email" autocomplete="email" /></label>
  <button type="submit">Submit</button>
</form>
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default HtmlChap36;