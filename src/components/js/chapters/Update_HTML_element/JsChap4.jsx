import React from "react";
import { FaJs, FaHtml5, FaEdit, FaCheckCircle, FaLaptopCode, FaPlay, FaExclamationTriangle } from "react-icons/fa";

const JsChap4 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
        <FaJs /> Updating HTML Elements with JavaScript
      </h1>
      <p className="mt-4 text-gray-700">
        JavaScript provides multiple methods to update HTML elements dynamically. These methods can modify content, attributes, styles, and structure.
      </p>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaEdit /> Selecting HTML Elements
      </h2>
      <p className="mt-2 text-gray-700">
        Before updating elements, we need to select them using JavaScript. There are several methods to achieve this:
      </p>
      
      <h3 className="mt-4 text-xl font-semibold">1. getElementById()</h3>
      <p className="text-gray-700">Selects an element by its unique ID.</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.getElementById("demo").innerHTML = "Updated content!";`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">2. getElementsByClassName()</h3>
      <p className="text-gray-700">Selects elements by class name (returns a collection).</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.getElementsByClassName("example")[0].textContent = "Updated!";`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">3. getElementsByTagName()</h3>
      <p className="text-gray-700">Selects elements by tag name (returns a collection).</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.getElementsByTagName("p")[0].style.color = "red";`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">4. querySelector()</h3>
      <p className="text-gray-700">Selects the first matching element using CSS selectors.</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.querySelector(".example").innerHTML = "New content!";`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">5. querySelectorAll()</h3>
      <p className="text-gray-700">Selects all matching elements using CSS selectors (returns a NodeList).</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.querySelectorAll("p")[1].textContent = "Changed!";`}</code>
      </pre>
      
      <h2 className="mt-6 text-2xl font-semibold flex items-center gap-2 text-blue-600">
        <FaEdit /> Updating HTML Elements
      </h2>
      
      <h3 className="mt-4 text-xl font-semibold">1. Changing Content</h3>
      <p className="text-gray-700">Using <code>innerHTML</code> and <code>textContent</code>:</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.getElementById("demo").innerHTML = "Hello, JavaScript!";`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">2. Modifying Attributes</h3>
      <p className="text-gray-700">Using <code>setAttribute()</code>:</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.getElementById("myImage").setAttribute("src", "new-image.jpg");`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">3. Changing Styles</h3>
      <p className="text-gray-700">Using <code>style</code> property:</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.getElementById("box").style.backgroundColor = "blue";`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">4. Manipulating Classes</h3>
      <p className="text-gray-700">Using <code>classList</code> methods:</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`document.getElementById("myElement").classList.add("newClass");`}</code>
      </pre>
      
      <h3 className="mt-4 text-xl font-semibold">5. Replacing Elements</h3>
      <p className="text-gray-700">Using <code>replaceChild()</code>:</p>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        <code>{`let newElement = document.createElement("p");
newElement.textContent = "New Content";
document.getElementById("parent").replaceChild(newElement, oldElement);`}</code>
      </pre>
      
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaPlay className="text-red-500" /> Try these examples in your browser!
      </p>
    </div>
  );
};

export default JsChap4;
