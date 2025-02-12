import React from "react";
import { FaPaperPlane, FaClipboardList, FaCheck } from "react-icons/fa";

const HtmlChap33 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaPaperPlane /> Form Submission
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaClipboardList /> Understanding Form Submission
        </h2>
        <p className="text-gray-700">
          Form submission is a crucial aspect of web development, allowing users to send data to a server. Forms can be submitted using different methods, such as <code>GET</code> and <code>POST</code>. Proper handling of form submission ensures a smooth user experience and secure data processing.
        </p>
      </section>
      
      {/* Basic Form Submission Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Basic Form Submission Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <button type="submit">Submit</button>
</form>
          `}</code>
        </pre>
      </section>
      
      {/* JavaScript Form Handling */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Handling Forms with JavaScript
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form Submitted Successfully!");
});
          `}</code>
        </pre>
      </section>
      
      {/* Fetch API for Form Submission */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheck /> Submitting Forms Using Fetch API
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
fetch("/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "John Doe" })
})
.then(response => response.json())
.then(data => console.log(data));
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default HtmlChap33;
