import React from "react";

const HtmlExercise16 = () => {
  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        📚 HTML Formatting Exercise
      </h1>
      <p className="text-center text-gray-600 mb-5">
        <b>Task:</b> Create the following HTML page using proper formatting tags. Practice headings, text styling, preformatted text, and special characters.
      </p>

      <div>
        <div>
          <h1 className="text-2xl font-bold">The Art of Web Development</h1>

          <p>
            Web development is a <b>creative</b> and <i>logical</i> process that involves designing, coding, and structuring content.
            The journey of a developer begins with mastering <merk>HTML</merk>, which is the foundation of every webpage.
          </p>

          <h2 className="font-bold text-xl">The Evolution of HTML</h2>

          <p>
            HTML was first introduced in the early 1990s by <b>Tim Berners-Lee</b>. It has evolved significantly since then, allowing developers to build
            <em> dynamic</em> and <strong> interactive</strong> websites. Today, we use HTML5, which supports multimedia, semantic elements, and better accessibility.
          </p>

          <h2 className="font-bold text-xl">Code Example</h2>

          <p>Below is an example of a simple HTML structure:</p>

          <pre>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a simple paragraph demonstrating text formatting.</p>
  </body>
</html>`}
          </pre>

          <h2 className="font-bold text-xl">The Importance of Formatting</h2>

          <p>
            Proper text formatting ensures readability and enhances the user experience. For example:
          </p>

          <p>
            <strong>Bold text</strong> is used for emphasis, while <i>italicized text</i> is used for highlighting important terms.
            To indicate deleted text, we use <s>strikethrough</s>, and for newly inserted content, we use <u>underlined</u> text.
          </p>

          <h2 className="font-bold text-xl">Special Characters & HTML Entities</h2>

          <p>HTML provides entities to represent special characters:</p>

          <p>&copy; 2024 Web Dev Co. | Rights Reserved</p>

          <p>
            Use &lt; and &gt; for angle brackets in code: &lt;html&gt; ... &lt;/html&gt;
          </p>

          <h2 className="font-bold text-xl">Final Thoughts</h2>

          <p>
            Mastering HTML formatting is essential for creating structured and well-presented content.
            Keep practicing by structuring blog posts, adding special characters, and maintaining readability through proper headings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HtmlExercise16;
