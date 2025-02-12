import React from "react";
import { FaTable, FaList, FaCogs } from "react-icons/fa";

const HtmlChap27 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaTable /> HTML Tables
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaList /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML tables are used to display data in a structured format using rows and columns. They are essential for organizing information effectively.
        </p>
      </section>
      
      {/* Basic Table Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaTable /> Basic Table Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>24</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>27</td>
    <td>Los Angeles</td>
  </tr>
</table>
          `}</code>
        </pre>
        <p className="text-gray-700">This basic table consists of a header row and multiple data rows.</p>
      </section>
      
      {/* Advanced Table with Styling */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCogs /> Advanced Table with CSS Styling
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<table style="width:100%; border-collapse: collapse;">
  <tr style="background-color: #f2f2f2;">
    <th style="border: 1px solid #ddd; padding: 8px;">Product</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Stock</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Laptop</td>
    <td style="border: 1px solid #ddd; padding: 8px;">$1200</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Available</td>
  </tr>
  <tr style="background-color: #f9f9f9;">
    <td style="border: 1px solid #ddd; padding: 8px;">Phone</td>
    <td style="border: 1px solid #ddd; padding: 8px;">$800</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Out of Stock</td>
  </tr>
</table>
          `}</code>
        </pre>
        <p className="text-gray-700">This table uses CSS styling to enhance readability and improve the visual structure.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCogs className="text-red-500" /> HTML tables provide a structured way to present data effectively.
      </p>
    </div>
  );
};

export default HtmlChap27;
