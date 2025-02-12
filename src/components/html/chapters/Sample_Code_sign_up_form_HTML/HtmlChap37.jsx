import React from "react";
import { FaUserPlus, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";

const HtmlChap37 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaUserPlus /> Sample Code: Signup Form in HTML
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Creating a Signup Form
        </h2>
        <p className="text-gray-700">
          A signup form typically includes fields for name, email, password, and a submit button. 
          HTML5 provides built-in validation features to enhance user experience.
        </p>
      </section>
      
      {/* Signup Form Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaEnvelope /> Signup Form Code Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form>
  <label>Full Name:
    <input type="text" name="fullname" required />
  </label>
  <br />
  <label>Email:
    <input type="email" name="email" required />
  </label>
  <br />
  <label>Password:
    <input type="password" name="password" required />
  </label>
  <br />
  <button type="submit">Sign Up</button>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Explanation */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaLock /> Understanding the Form Fields
        </h2>
        <p className="text-gray-700">
          - The <code>type="text"</code> input is for the user's full name.<br />
          - The <code>type="email"</code> input ensures a valid email format.<br />
          - The <code>type="password"</code> input masks the password characters.<br />
          - The <code>required</code> attribute ensures users fill out the fields before submission.
        </p>
      </section>
    </div>
  );
};

export default HtmlChap37;
