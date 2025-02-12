import React from "react";
import { FaPaintBrush, FaImage, FaVectorSquare } from "react-icons/fa";

const HtmlChap39 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-600">
        <FaPaintBrush /> HTML5 Graphics
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaImage /> Understanding HTML5 Graphics
        </h2>
        <p className="text-gray-700">
          HTML5 introduced powerful tools for drawing graphics on the web, primarily through 
          the <code>&lt;canvas&gt;</code> and <code>&lt;svg&gt;</code> elements. These allow developers to 
          create images, animations, and dynamic visual content without relying on external software.
        </p>
      </section>
      
      {/* Canvas Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaVectorSquare /> Example: Drawing with Canvas
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<canvas id="myCanvas" width="400" height="200" style="border:1px solid #000;"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(50, 50, 100, 100);
</script>
          `}</code>
        </pre>
      </section>
      
      {/* SVG Example */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaImage /> Example: Using SVG
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
          `}</code>
        </pre>
      </section>
      
      {/* Comparison */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaPaintBrush /> Canvas vs SVG
        </h2>
        <p className="text-gray-700">
          - <b>Canvas</b>: Pixel-based, ideal for complex drawings and game graphics.<br />
          - <b>SVG</b>: Vector-based, great for scalable icons and diagrams.<br />
          - Use <code>&lt;canvas&gt;</code> for dynamic, frequent updates; <code>&lt;svg&gt;</code> for static graphics.
        </p>
      </section>
    </div>
  );
};

export default HtmlChap39;
