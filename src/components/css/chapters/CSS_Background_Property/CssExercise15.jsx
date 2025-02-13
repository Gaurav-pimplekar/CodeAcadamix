import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssExercise15 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <h1 className="text-3xl font-bold">CSS Background Properties - Exercises</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl">User all the value of property</h1>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 1: Background Color</h2>
          <p>Set a background color for a div element.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 2: Background Image</h2>
          <p>Apply an image as a background for a div.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 3: Background Repeat</h2>
          <p>Control how a background image repeats.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 4: Background Position</h2>
          <p>Set the position of a background image.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 5: Background Size</h2>
          <p>Define how a background image is sized.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 6: Background Attachment</h2>
          <p>Set whether a background image is fixed or scrolls with content.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 7: Background Blend Mode</h2>
          <p>Apply blending effects between background layers.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 8: Background Clip</h2>
          <p>Define how far the background extends within the element.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 9: Background Origin</h2>
          <p>Specify where the background image starts within the element.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Exercise 10: Background Shorthand</h2>
          <p>Use the shorthand property to define multiple background properties in one declaration.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Bonus Exercise 1: Gradient Background</h2>
          <p>Create a linear gradient background using CSS.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Bonus Exercise 2: Parallax Effect</h2>
          <p>Implement a parallax scrolling effect using the background properties.</p>
        </section>
      </div>
    </div>
  );
};

export default CssExercise15;
