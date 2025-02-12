import React from "react";
import { FaEnvelope, FaCheck, FaRegAddressBook } from "react-icons/fa";

const HtmlChap31 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaEnvelope /> Create a Contact Form
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaRegAddressBook /> Why Use a Contact Form?
        </h2>
        <p className="text-gray-700">
          A contact form allows users to send messages without exposing your email address. It improves security, enhances user experience, and enables structured message collection.
        </p>
      </section>
      
      {/* Basic Contact Form Structure */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Basic Contact Form Structure
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form action="submit_form.php" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" required></textarea>
  
  <button type="submit">Send Message</button>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* Enhancing the Form with HTML5 Features */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Enhancing the Form with HTML5 Features
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Use <code>required</code> attributes to ensure all fields are filled</li>
          <li>Utilize <code>pattern</code> attributes for input validation</li>
          <li>Add the <code>placeholder</code> attribute for better UX</li>
          <li>Improve accessibility with <code>aria-label</code> attributes</li>
        </ul>
      </section>
      
      {/* Styled Contact Form Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Styled Contact Form Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form style="max-width: 400px; margin: auto;">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter your name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" placeholder="Type your message" required></textarea>
  
  <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer;">Send</button>
</form>
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default HtmlChap31;
