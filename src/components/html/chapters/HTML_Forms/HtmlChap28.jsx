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

      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FaWpforms /> HTML Form & Input Types
        </h2>
        <p className="text-gray-700">
          HTML forms allow users to input data, which can be sent to a server for processing. Various input types are available to capture different types of data.
        </p>

        {/* Code Example */}
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label for="text">Text:</label>
  <input type="text" id="text" name="text">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <label for="number">Number:</label>
  <input type="number" id="number" name="number">

  <label for="date">Date:</label>
  <input type="date" id="date" name="date">

  <label for="checkbox">Checkbox:</label>
  <input type="checkbox" id="checkbox" name="checkbox">

  <label for="radio">Radio:</label>
  <input type="radio" id="radio" name="radio">

  <label for="file">File Upload:</label>
  <input type="file" id="file" name="file">

  <label for="gender">Gender:</label>
  <select id="gender" name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>

  <label for="message">Message:</label>
  <textarea name="message" rows="4" cols="50">Enter your message here...</textarea>

  <input type="submit" value="Submit">
</form>
        `}</code>
        </pre>

        <p className="text-gray-700 mt-4">Below is an interactive example of different input fields in a form:</p>

        {/* Interactive Form */}
        <div className="border border-gray-300 p-4 rounded-md space-y-4 mt-4">
          <form className="space-y-3">
            <div>
              <label className="block text-gray-700">Text:</label>
              <input type="text" className="border border-gray-400 p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-gray-700">Email:</label>
              <input type="email" className="border border-gray-400 p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-gray-700">Password:</label>
              <input type="password" className="border border-gray-400 p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-gray-700">Number:</label>
              <input type="number" className="border border-gray-400 p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-gray-700">Date:</label>
              <input type="date" className="border border-gray-400 p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-gray-700">Checkbox:</label>
              <input type="checkbox" className="mr-2" /> I agree to terms
            </div>

            <div>
              <label className="block text-gray-700">Radio:</label>
              <input type="radio" name="gender" className="mr-2" /> Male
              <input type="radio" name="gender" className="ml-4 mr-2" /> Female
            </div>

            <div>
              <label className="block text-gray-700">File Upload:</label>
              <input type="file" className="border border-gray-400 p-2 rounded w-full" />
            </div>

            <div>
              <label for="gender">Gender:</label>
              <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
            <label for="message">Message:</label>
            <textarea name="message" rows="4" cols="50">Enter your message here...</textarea>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          </form>
        </div>
      </section>


      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCheckSquare className="text-red-500" /> HTML forms are essential for user interaction, enabling data collection in an organized manner.
      </p>
    </div>
  );
};

export default HtmlChap28;
