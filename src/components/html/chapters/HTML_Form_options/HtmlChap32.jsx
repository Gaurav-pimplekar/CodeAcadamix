import React from "react";
import { FaList, FaCheck, FaClipboardList } from "react-icons/fa";

const HtmlChap32 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaClipboardList /> HTML Form Options
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaList /> Understanding Form Options
        </h2>
        <p className="text-gray-700">
          HTML forms provide various options for collecting user input, including dropdowns, checkboxes, and radio buttons. These elements enhance user interaction and provide structured data collection.
        </p>
      </section>
      
      {/* Dropdown List Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Dropdown List Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="bmw">BMW</option>
    <option value="audi">Audi</option>
  </select>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Checkbox Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Checkbox Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <input type="checkbox" id="subscribe" name="subscribe" value="newsletter">
  <label for="subscribe">Subscribe to Newsletter</label>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Radio Buttons Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Radio Buttons Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
</form>
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default HtmlChap32;
