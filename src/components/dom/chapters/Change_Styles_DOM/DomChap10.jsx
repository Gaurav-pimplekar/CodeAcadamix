import React from "react";
import { FaJsSquare, FaPaintBrush, FaMagic } from "react-icons/fa";

const DomChap10 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-purple-600">
        <FaJsSquare /> JavaScript Change Styles in DOM
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <p className="text-gray-700">
          The Document Object Model (DOM) allows JavaScript to change the styles of HTML elements dynamically. 
          You can modify styles using properties like <code>style</code> or by adding/removing CSS classes.
        </p>
      </section>
      
      {/* Example 1: Changing Inline Styles */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaPaintBrush /> Changing Inline Styles
        </h2>
        <p className="text-gray-700">Modify the styles of an element using the <code>style</code> property.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("box").style.backgroundColor = "lightblue";
document.getElementById("box").style.color = "white";
document.getElementById("box").style.padding = "20px";
          `}</code>
        </pre>
      </section>
      
      {/* Example 2: Adding and Removing Classes */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaMagic /> Adding and Removing Classes
        </h2>
        <p className="text-gray-700">Use <code>classList</code> to add or remove CSS classes dynamically.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
document.getElementById("box").classList.add("highlight");
document.getElementById("box").classList.remove("dimmed");
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default DomChap10;
