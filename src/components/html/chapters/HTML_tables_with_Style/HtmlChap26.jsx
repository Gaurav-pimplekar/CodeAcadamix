import React from "react";
import { FaTable, FaPaintBrush, FaCogs } from "react-icons/fa";

const HtmlChap26 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaTable /> HTML Table with Style
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaPaintBrush /> Introduction
        </h2>
        <p className="text-gray-700">
          HTML tables allow the organization of data in rows and columns. Adding styles improves readability and aesthetics.
        </p>
      </section>
      
      {/* Sample Table with Style */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaTable /> Styled Table Example
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<table style="width:100%; border-collapse: collapse;">
  <tr style="background-color: #f2f2f2;">
    <th style="border: 1px solid #ddd; padding: 8px;">Name</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Age</th>
    <th style="border: 1px solid #ddd; padding: 8px;">City</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Alice</td>
    <td style="border: 1px solid #ddd; padding: 8px;">24</td>
    <td style="border: 1px solid #ddd; padding: 8px;">New York</td>
  </tr>
  <tr style="background-color: #f9f9f9;">
    <td style="border: 1px solid #ddd; padding: 8px;">Bob</td>
    <td style="border: 1px solid #ddd; padding: 8px;">27</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Los Angeles</td>
  </tr>
</table>
          `}</code>
        </pre>
        <p className="text-gray-700">This table is styled with background colors, borders, and padding for improved readability.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCogs className="text-red-500" /> Styling tables enhances user experience and visual appeal.
      </p>
    </div>
  );
};

export default HtmlChap26;
