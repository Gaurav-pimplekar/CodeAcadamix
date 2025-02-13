import React from "react";
import { FaPalette } from "react-icons/fa";

const CssChap13 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaPalette className="text-purple-500 text-4xl" />
        <h1 className="text-3xl font-bold">CSS Colors</h1>
      </div>

      <p className="text-lg mb-4">CSS provides multiple ways to define colors for text, backgrounds, and other elements.</p>
      
      <h2 className="text-2xl font-semibold mt-6">1. Ways to Define Colors in CSS</h2>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong>Named Colors:</strong> CSS supports predefined color names like red, blue, green.
          <pre className="bg-gray-200 p-4 mt-2 rounded"><code>{`p { color: red; }`}</code></pre>
          <p className="text-red-500 p-2 border rounded">This is a red paragraph.</p>
        </li>

        <li>
          <strong>Hexadecimal (#RRGGBB):</strong> Hex values define colors using hex notation.
          <pre className="bg-gray-200 p-4 mt-2 rounded"><code>{`h1 { color: #ff5733; }`}</code></pre>
          <h1 className="text-[#ff5733] p-2 border rounded">Hex Color Example</h1>
        </li>

        <li>
          <strong>RGB (rgb(R, G, B)):</strong> Colors defined using RGB values (0-255).
          <pre className="bg-gray-200 p-4 mt-2 rounded"><code>{`div { background-color: rgb(0, 128, 255); }`}</code></pre>
          <div className="bg-[rgb(0,128,255)] text-white p-4 rounded">RGB Color Example</div>
        </li>

        <li>
          <strong>RGBA (rgba(R, G, B, A)):</strong> Adds transparency (Alpha: 0 to 1).
          <pre className="bg-gray-200 p-4 mt-2 rounded"><code>{`button { background-color: rgba(255, 0, 0, 0.5); }`}</code></pre>
          <button className="bg-[rgba(255,0,0,0.5)] text-white px-4 py-2 rounded">RGBA Button</button>
        </li>

        <li>
          <strong>HSL (hsl(H, S, L)):</strong> Hue, Saturation, and Lightness values.
          <pre className="bg-gray-200 p-4 mt-2 rounded"><code>{`h2 { color: hsl(200, 100%, 50%); }`}</code></pre>
          <h2 className="text-[hsl(200,100%,50%)] p-2 border rounded">HSL Color Example</h2>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6">2. Gradient Backgrounds</h2>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong>Linear Gradient:</strong>
          <pre className="bg-gray-200 p-4 mt-2 rounded"><code>{`background: linear-gradient(to right, red, yellow);`}</code></pre>
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-4 rounded">Linear Gradient Example</div>
        </li>

        <li>
          <strong>Radial Gradient:</strong>
          <pre className="bg-gray-200 p-4 mt-2 rounded"><code>{`background: radial-gradient(circle, blue, pink);`}</code></pre>
          <div className="bg-radial-gradient from-blue-500 to-pink-500 text-white p-4 rounded">Radial Gradient Example</div>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6">3. Best Practices for Using Colors</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>✅ Ensure good contrast for readability.</li>
        <li>✅ Use consistent color schemes for branding.</li>
        <li>✅ Avoid excessive bright or clashing colors.</li>
        <li>✅ Use transparency (rgba or hsla) for smooth blending.</li>
        <li>✅ Test colors on different screens for accessibility.</li>
      </ul>
    </div>
  );
};

export default CssChap13;
