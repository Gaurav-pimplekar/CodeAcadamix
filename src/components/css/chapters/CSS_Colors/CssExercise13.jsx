import React from "react";
import { FaPalette } from "react-icons/fa";

const CssExercise13 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaPalette className="text-purple-500 text-4xl" />
        <h1 className="text-3xl font-bold">CSS Color Exercises 🎨</h1>
      </div>

      <ol className="list-decimal pl-6 space-y-6">
        <li>Set the text color of all paragraphs to <strong>blue</strong>.</li>
        <div className="p-4 border rounded text-blue-500">This is a blue paragraph.</div>

        <li>Change the background color of the entire page to <strong>lightgray</strong>.</li>
        <div className="p-4 border rounded bg-gray-300">This is a lightgray background.</div>

        <li>Apply a <strong>red border</strong> to all div elements.</li>
        <div className="p-4 border-2 border-red-500 rounded">This div has a red border.</div>

        <li>Set the heading (<code>h1</code>) color to <strong>#ff5733</strong> (reddish-orange).</li>
        <h1 className="p-4 rounded text-[#ff5733]">Reddish-Orange Heading</h1>

        <li>Change the text color of all links (<code>&lt;a&gt;</code>) to <strong>green</strong>.</li>
        <a href="#" className="text-green-500 underline">This is a green link</a>

        <li>Apply an <strong>rgba(255, 0, 0, 0.5)</strong> color to a button background.</li>
        <button className="px-4 py-2 bg-red-500/50 text-white rounded">Semi-transparent Red Button</button>

        <li>Use <strong>HSL</strong> to make a heading text <strong>blue</strong>.</li>
        <h2 className="p-4 text-[hsl(240,100%,50%)]">HSL Blue Heading</h2>

        <li>Make all <code>h2</code> elements <strong>dark gray</strong> using a hex code.</li>
        <h2 className="p-4 text-[#333333]">Dark Gray Heading</h2>

        <li>Apply a <strong>linear gradient</strong> (blue to yellow) as a background for a div.</li>
        <div className="p-4 text-white bg-gradient-to-r from-blue-500 to-yellow-500 rounded">
          Linear Gradient Background
        </div>

        <li>Change the text color of a <code>&lt;span&gt;</code> element to <strong>gold</strong>.</li>
        <span className="text-yellow-500 font-bold">Golden Text</span>

        <li>Set a <strong>semi-transparent black</strong> background for a section.</li>
        <div className="p-4 bg-black/70 text-white rounded">Semi-Transparent Black Section</div>

        <li>Create a <strong>radial gradient</strong> background (pink to purple).</li>
        <div className="p-4 text-white bg-radial-gradient from-pink-500 to-purple-700 rounded">
          Radial Gradient Background
        </div>

        <li>Apply a <strong>shadow effect</strong> to a box.</li>
        <div className="p-4 border rounded shadow-lg">Box with Shadow</div>

        <li>Use <strong>rgb(50, 205, 50)</strong> to color a button <strong>lime green</strong>.</li>
        <button className="px-4 py-2 bg-[rgb(50,205,50)] text-white rounded">Lime Green Button</button>

        <li>Change the hover color of all links to <strong>orange</strong>.</li>
        <a href="#" className="text-blue-500 hover:text-orange-500">Hover to see orange color</a>

        <li>Set the text color of all <code>&lt;li&gt;</code> elements to <strong>navy</strong>.</li>
        <ul className="list-disc pl-6">
          <li className="text-navy-500">Navy Blue List Item</li>
        </ul>

        <li>Make the footer background <strong>black</strong> with white text.</li>
        <footer className="p-4 bg-black text-white rounded">Black Footer</footer>

        <li>Apply a <strong>3px solid cyan border</strong> to an image.</li>
        <img src="https://via.placeholder.com/100" alt="Example" className="border-4 border-cyan-500 rounded" />

        <li>Use <strong>hsla(120, 100%, 25%, 0.8)</strong> for a dark green button.</li>
        <button className="px-4 py-2 bg-[hsla(120,100%,25%,0.8)] text-white rounded">Dark Green Button</button>

        <li>Apply a background color of <strong>tomato</strong> to a div.</li>
        <div className="p-4 bg-[tomato] text-white rounded">Tomato Background</div>

        <li>Set a <strong>light pink</strong> background to a paragraph.</li>
        <p className="p-4 bg-pink-300 rounded">Light Pink Paragraph</p>

        <li>Make all headings have an <strong>underlined yellow</strong> text decoration.</li>
        <h2 className="underline decoration-yellow-500">Underlined Yellow Heading</h2>

        <li>Apply a <strong>black-to-transparent</strong> gradient to a section.</li>
        <div className="p-4 bg-gradient-to-b from-black to-transparent text-white rounded">
          Black to Transparent Gradient
        </div>

        <li>Give all `<code>&lt;input&gt;</code>` fields a light blue background.</li>
        <input type="text" placeholder="Type here..." className="p-2 bg-blue-100 border rounded" />

        <li>Set the background color of a div to <strong>teal</strong>.</li>
        <div className="p-4 bg-teal-500 text-white rounded">Teal Background</div>

        <li>Apply a <strong>semi-transparent white</strong> overlay effect.</li>
        <div className="p-4 bg-white/50 border rounded">Semi-Transparent White</div>

        <li>Change the background color of an alert box to <strong>red</strong> with white text.</li>
        <div className="p-4 bg-red-500 text-white rounded">Alert: Something went wrong!</div>

        <li>Use <strong>rgba(0, 128, 255, 0.7)</strong> for a blue transparent section.</li>
        <div className="p-4 bg-[rgba(0,128,255,0.7)] text-white rounded">Blue Transparent Section</div>
      </ol>
    </div>
  );
};

export default CssExercise13;
