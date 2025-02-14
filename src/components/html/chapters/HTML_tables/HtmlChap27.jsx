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

        <div className="mt-4">
  <table className="border border-black w-full">
    <thead>
      <tr>
        <th className="border border-black">Name</th>
        <th className="border border-black">Age</th>
        <th className="border border-black">City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-black">Alice</td>
        <td className="border border-black">24</td>
        <td className="border border-black">New York</td>
      </tr>
      <tr>
        <td className="border border-black">Bob</td>
        <td className="border border-black">27</td>
        <td className="border border-black">Los Angeles</td>
      </tr>
    </tbody>
  </table>
</div>
      </section>
      
      {/* Advanced Table with Styling */}
      <section className="mt-6">
  <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
    <FaCogs /> Advanced Table with Rowspan & Colspan
  </h2>
  <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
    <code>{`
<table border="1">
  <tr>
    <th rowspan="2">Product</th>
    <th colspan="2">Details</th>
  </tr>
  <tr>
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$1200</td>
    <td>Available</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>$800</td>
    <td>Out of Stock</td>
  </tr>
  <tr>
    <td>Tablet</td>
    <td colspan="2">Coming Soon</td>
  </tr>
</table>
    `}</code>
  </pre>
  <p className="text-gray-700">
    This advanced table includes rowspan and colspan to group related data and improve structure.
  </p>

  {/* Output Table */}
  <div className="overflow-x-auto mt-4">
    <table className="border border-black w-full text-left">
      <thead>
        <tr>
          <th rowSpan="2" className="border border-black px-4 py-2">Product</th>
          <th colSpan="2" className="border border-black px-4 py-2">Details</th>
        </tr>
        <tr>
          <th className="border border-black px-4 py-2">Price</th>
          <th className="border border-black px-4 py-2">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black px-4 py-2">Laptop</td>
          <td className="border border-black px-4 py-2">$1200</td>
          <td className="border border-black px-4 py-2">Available</td>
        </tr>
        <tr>
          <td className="border border-black px-4 py-2">Phone</td>
          <td className="border border-black px-4 py-2">$800</td>
          <td className="border border-black px-4 py-2">Out of Stock</td>
        </tr>
        <tr>
          <td className="border border-black px-4 py-2">Tablet</td>
          <td colSpan="2" className="border border-black px-4 py-2 text-center">Coming Soon</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCogs className="text-red-500" /> HTML tables provide a structured way to present data effectively.
      </p>
    </div>
  );
};

export default HtmlChap27;
