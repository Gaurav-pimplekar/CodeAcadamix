import React from "react";
import { FaTable, FaList, FaCheckSquare } from "react-icons/fa";

const HtmlChap29 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaTable /> Sample Table in HTML
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaList /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML tables are used to display data in a structured format using rows and columns. They are built using the <code>&lt;table&gt;</code> tag along with <code>&lt;tr&gt;</code> (table rows), <code>&lt;th&gt;</code> (table headers), and <code>&lt;td&gt;</code> (table data).
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
    <th>Country</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>USA</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>30</td>
    <td>Canada</td>
  </tr>
</table>
          `}</code>
        </pre>
        <p className="text-gray-700">This basic table consists of a header row and two data rows.</p>
      </section>
      
      {/* Table with Styling */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCheckSquare /> Styled Table Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid black;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
</style>
<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$1000</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>$500</td>
    <td>5</td>
  </tr>
</table>
          `}</code>
        </pre>
        <p className="text-gray-700">This table is styled with CSS to improve readability and design.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCheckSquare className="text-red-500" /> HTML tables provide an organized way to display structured data in a web page.
      </p>
    </div>
  );
};

export default HtmlChap29;
