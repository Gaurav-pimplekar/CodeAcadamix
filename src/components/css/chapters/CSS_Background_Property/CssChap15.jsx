import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssChap15 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">CSS Background Properties</h1>
      </div>

      <div className="space-y-6">
      <section>
          <h2 className="text-xl font-semibold">🔹 Background-Color</h2>
          <p>
            The <code>background-color</code> property in CSS is used to define the
            background color of an element. It allows setting solid colors to
            improve readability, enhance aesthetics, and provide contrast.
          </p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-color: color;
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-color: lightblue;
}`}</pre>
          <div className="w-40 h-20 bg-yellow-300 border flex items-center justify-center">
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Named Colors: red, blue, green, etc.</li>
            <li>Hexadecimal: #ff5733</li>
            <li>RGB: rgb(255, 0, 0)</li>
            <li>RGBA: rgba(255, 0, 0, 0.5) (with transparency)</li>
            <li>HSL: hsl(200, 100%, 50%)</li>
          </ul>
        </section>


        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Image</h2>
          <p>
            The <code>background-image</code> property allows you to set an image
            as the background of an element. You can use various image formats
            such as PNG, JPG, GIF, or even gradients.
          </p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-image: url("image.jpg");
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-image: url("background.jpg");
}`}</pre>
          <div
            className="w-40 h-20 border flex items-center justify-center bg-cover"
            style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
          >
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>None: No background image is applied.</li>
            <li>URL: A direct link to an image file.</li>
            <li>Gradients: Linear or radial gradients.</li>
          </ul>
          <p>
            <strong>Notes:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>By default, images repeat to fill the element.</li>
            <li>Use <code>background-repeat</code> to control repetition.</li>
            <li>Use <code>background-size</code> for scaling.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Repeat</h2>
          <p>
            The <code>background-repeat</code> property defines how a background
            image repeats itself within an element. By default, background images
            repeat both horizontally and vertically to cover the entire element.
          </p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-repeat: value;
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-image: url("pattern.png");
  background-repeat: no-repeat;
}`}</pre>
          <div
            className="w-40 h-20 border flex items-center justify-center bg-no-repeat bg-center"
            style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
          >
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li><code>repeat</code> - Repeats the background image both horizontally and vertically (default).</li>
            <li><code>repeat-x</code> - Repeats the background image only horizontally.</li>
            <li><code>repeat-y</code> - Repeats the background image only vertically.</li>
            <li><code>no-repeat</code> - Displays the background image only once.</li>
            <li><code>space</code> - Distributes the images evenly without cropping.</li>
            <li><code>round</code> - Scales the image to fit the element without gaps.</li>
          </ul>
          <p>
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Use <code>no-repeat</code> when a single image is needed.</li>
            <li>Use <code>repeat-x</code> or <code>repeat-y</code> for patterns in one direction.</li>
            <li>Ensure images are optimized for web usage to prevent slow loading.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Position</h2>
          <p>
            The <code>background-position</code> property controls the starting position of a background image within an element.
            It allows precise placement using keywords, pixel values, or percentages.
          </p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-position: value;
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-image: url("image.jpg");
  background-position: center top;
}`}</pre>
          <div
            className="w-40 h-20 border flex items-center justify-center bg-no-repeat bg-center"
            style={{ backgroundImage: "url('https://via.placeholder.com/150')", backgroundPosition: "center top" }}
          >
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li><code>left top</code> - Aligns the image to the top-left corner.</li>
            <li><code>center center</code> - Centers the image in both directions.</li>
            <li><code>right bottom</code> - Aligns the image to the bottom-right corner.</li>
            <li><code>50% 50%</code> - Centers the image using percentages.</li>
            <li><code>100px 50px</code> - Positions the image 100px from the left and 50px from the top.</li>
          </ul>
          <p>
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Use <code>center</code> for images that need alignment in the middle.</li>
            <li>Combine with <code>background-size</code> for better image scaling.</li>
            <li>Use pixel values or percentages for precise positioning.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Size</h2>
          <p>
            The <code>background-size</code> property specifies the size of the background image.
            It allows controlling whether the image scales, stretches, or covers the element.
          </p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-size: value;
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-image: url("image.jpg");
  background-size: cover;
}`}</pre>
          <div
            className="w-40 h-20 border flex items-center justify-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('https://via.placeholder.com/150')", backgroundSize: "cover" }}
          >
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li><code>auto</code> - Default. Keeps the original image size.</li>
            <li><code>cover</code> - Scales the image to cover the entire element (cropping if necessary).</li>
            <li><code>contain</code> - Scales the image to fit inside the element without cropping.</li>
            <li><code>100px 50px</code> - Sets custom width and height values.</li>
          </ul>
          <p>
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Use <code>cover</code> for full-page backgrounds.</li>
            <li>Use <code>contain</code> when the full image must be visible.</li>
            <li>Ensure images are optimized to avoid performance issues.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Attachment</h2>
          <p>
            The <code>background-attachment</code> property determines whether the background image scrolls with the page or stays fixed.
          </p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-attachment: value;
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-image: url("image.jpg");
  background-attachment: fixed;
}`}</pre>
          <div
            className="w-40 h-20 border flex items-center justify-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('https://via.placeholder.com/150')", backgroundAttachment: "fixed" }}
          >
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li><code>scroll</code> - Default. The background image scrolls with the page.</li>
            <li><code>fixed</code> - The background image stays in place while scrolling.</li>
            <li><code>local</code> - The background moves along with the element's content.</li>
          </ul>
          <p>
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Use <code>fixed</code> for a parallax effect.</li>
            <li>Ensure background images are optimized for performance.</li>
            <li>Test across devices, as <code>fixed</code> may not work well on mobile browsers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Blend-Mode</h2>
          <p>Applies blending effects between background layers.</p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-blend-mode: value;
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-color: blue;
  background-image: url("image.jpg");
  background-blend-mode: overlay;
}`}</pre>
          <div
            className="w-40 h-20 border flex items-center justify-center bg-blue-500 bg-blend-overlay"
            style={{ backgroundImage: "url('https://via.placeholder.com/150')", backgroundBlendMode: "overlay" }}
          >
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li><code>normal</code> - Default. No blending.</li>
            <li><code>multiply</code> - Darkens overlapping areas.</li>
            <li><code>screen</code> - Lightens overlapping areas.</li>
            <li><code>overlay</code> - A mix of multiply and screen.</li>
          </ul>
          <p>
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Use for creative effects and overlays.</li>
            <li>Test contrast to ensure readability.</li>
            <li>Experiment with different blending modes for design consistency.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Clip</h2>
          <p>Defines how far the background extends.</p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-clip: value;
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-color: lightgreen;
  background-clip: padding-box;
}`}</pre>
          <div
            className="w-40 h-20 border bg-green-400"
            style={{ backgroundClip: "padding-box" }}
          >
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li><code>border-box</code> - Extends up to the border.</li>
            <li><code>padding-box</code> - Stops at the padding (doesn’t reach the border).</li>
            <li><code>content-box</code> - Only applies inside the content area.</li>
          </ul>
          <p>
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Use <code>padding-box</code> for better visual control.</li>
            <li>Combine with <code>background-color</code> for layered effects.</li>
            <li>Ensure proper contrast for readability.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Origin</h2>
          <p>Specifies where the background image starts.</p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-origin: content-box;
}`}</pre>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔹 Background-Origin</h2>
          <p>Specifies where the background image starts.</p>
          <p>
            <strong>Syntax:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`element {
  background-origin: value;
}`}</pre>
          <p>
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-200 p-4 rounded">{`div {
  background-image: url("image.jpg");
  background-origin: content-box;
}`}</pre>
          <div
            className="w-40 h-20 border bg-cover"
            style={{ backgroundImage: "url('https://via.placeholder.com/150')", backgroundOrigin: "content-box" }}
          >
            Example Output
          </div>
          <p>
            <strong>Common Values:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li><code>border-box</code> - Starts from the border.</li>
            <li><code>padding-box</code> - Starts from the padding.</li>
            <li><code>content-box</code> - Starts inside the content.</li>
          </ul>
          <p>
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Use <code>padding-box</code> for balanced positioning.</li>
            <li>Combine with <code>background-size</code> for better scaling.</li>
            <li>Ensure consistency across different screen sizes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🎯 Best Practices for Backgrounds</h2>
          <ul className="list-disc pl-6">
            <li>Use <code>background-size: cover;</code> for responsive full-screen images.</li>
            <li>Use <code>background-repeat: no-repeat;</code> to avoid unwanted patterns.</li>
            <li>Use <code>background-attachment: fixed;</code> for a parallax effect.</li>
            <li>Optimize images to reduce page load time.</li>
            <li>Use high contrast for better readability.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CssChap15;
