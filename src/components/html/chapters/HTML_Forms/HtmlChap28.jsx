import React from "react";
import { FaWpforms, FaKeyboard, FaCheckSquare } from "react-icons/fa";

const HtmlChap28 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaWpforms /> HTML Forms
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaKeyboard /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML forms allow users to enter and submit data to a website. Forms contain input fields, checkboxes, radio buttons, and buttons to collect user information.
        </p>
      </section>
      
      {/* Basic Form Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaWpforms /> Basic Form Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form action="/submit-form" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <br />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />
  <br />
  <input type="submit" value="Submit" />
</form>
          `}</code>
        </pre>
        <p className="text-gray-700">This basic form collects user name and email and submits them to the server.</p>
      </section>
      
      {/* Advanced Form Elements */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheckSquare /> Advanced Form Elements
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label for="gender">Gender:</label>
  <select id="gender" name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <br />
  <label>
    <input type="checkbox" name="subscribe" /> Subscribe to newsletter
  </label>
  <br />
  <label>
    <input type="radio" name="contact" value="email" /> Email
  </label>
  <label>
    <input type="radio" name="contact" value="phone" /> Phone
  </label>
  <br />
  <textarea name="message" rows="4" cols="50">Enter your message here...</textarea>
  <br />
  <input type="submit" value="Submit" />
</form>
          `}</code>
        </pre>
        <p className="text-gray-700">Advanced forms include dropdowns, checkboxes, radio buttons, and text areas for more complex user input.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCheckSquare className="text-red-500" /> HTML forms are essential for user interaction, enabling data collection in an organized manner.
      </p>
    </div>
  );
};

export default HtmlChap28;
