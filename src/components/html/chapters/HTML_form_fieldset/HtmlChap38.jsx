import React from "react";
import { FaClipboardList, FaLayerGroup, FaInfoCircle } from "react-icons/fa";

const HtmlChap38 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaClipboardList /> HTML Form Fieldset
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaInfoCircle /> Understanding the Fieldset Element
        </h2>
        <p className="text-gray-700">
          The <code>&lt;fieldset&gt;</code> element is used to group related form controls together, improving 
          structure and accessibility. It helps users understand which inputs are associated with each other.
        </p>
      </section>
      
      {/* Fieldset Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaLayerGroup /> Example: Grouping Form Fields
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label>Full Name:
      <input type="text" name="fullname" required />
    </label>
    <br />
    <label>Email:
      <input type="email" name="email" required />
    </label>
  </fieldset>
  
  <fieldset>
    <legend>Account Details</legend>
    <label>Password:
      <input type="password" name="password" required />
    </label>
    <br />
    <label>Confirm Password:
      <input type="password" name="confirm_password" required />
    </label>
  </fieldset>
  
  <button type="submit">Submit</button>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Explanation */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaInfoCircle /> Why Use Fieldset?
        </h2>
        <p className="text-gray-700">
          - The <code>&lt;fieldset&gt;</code> element groups related form controls, enhancing usability.<br />
          - The <code>&lt;legend&gt;</code> element provides a title for each group, improving clarity.<br />
          - Useful for complex forms with multiple sections.
        </p>
      </section>
    </div>
  );
};

export default HtmlChap38;
