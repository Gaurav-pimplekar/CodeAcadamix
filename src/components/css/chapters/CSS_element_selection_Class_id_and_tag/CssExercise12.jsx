import { FaQuestionCircle } from "react-icons/fa";

const CssExercise12 = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
        <FaQuestionCircle className="mr-2 text-indigo-500" /> Advanced CSS Selectors Practice
      </h2>

      <p className="text-gray-600 mt-2">
        This exercise will help you practice different types of **CSS selectors**, including:
        **Group Selector (,), Descendant Selector ( ), Child Selector (&gt;), Adjacent Sibling (+), General Sibling (~), and Attribute Selector ([attribute])**.
      </p>

      {/* Exercises */}
      <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 1: Group Selector</h3>
      <p className="text-gray-600">
        Use a **group selector** to style both {`<h2>`} and {`<p>`} elements with the same **color** and **font family**.
      </p>

      <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 2: Descendant Selector</h3>
      <p className="text-gray-600">
        Apply a **descendant selector** to change the text color of all {`<span>`} elements inside a {`<div class="container">`}.
      </p>

      <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 3: Child Selector</h3>
      <p className="text-gray-600">
        Use a **child selector** to style only the **direct** {`<p>`} elements inside {`<div class="wrapper">`}, but not deeper elements.
      </p>

      <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 4: Adjacent Sibling Selector</h3>
      <p className="text-gray-600">
        Use an **adjacent sibling selector** to style the first {`<p>`} that comes immediately after an {`<h2>`}.
      </p>

      <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 5: General Sibling Selector</h3>
      <p className="text-gray-600">
        Use a **general sibling selector** to change the text color of all {`<p>`} elements that come **after** an {`<h2>`} inside the same container.
      </p>

      <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 6: Attribute Selector</h3>
      <p className="text-gray-600">
        Use an **attribute selector** to add a **border** to all {`<input>`} elements with `type="text"`.
      </p>

      <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Bonus Challenge 🚀</h3>
      <p className="text-gray-600">
        Create a **navigation menu** and use **CSS selectors** to style only active or specific elements.
      </p>

      {/* Default HTML Structure for Testing */}
      <div className="bg-gray-100 p-6 rounded-lg mt-6">
        {/* Group Selector */}
        <h2>Group Selector Example</h2>
        <p>This is a paragraph.</p>

        {/* Descendant Selector */}
        <div className="container">
          <span>Descendant Selector Example</span>
        </div>

        {/* Child Selector */}
        <div className="wrapper">
          <p>Direct Child Paragraph</p>
          <div>
            <p>Nested Paragraph (Should not be affected)</p>
          </div>
        </div>

        {/* Adjacent and General Sibling Selector */}
        <h2>Heading for Sibling Selectors</h2>
        <p>Adjacent Sibling Paragraph (Style this only)</p>
        <p>General Sibling Paragraph</p>
        <p>Another General Sibling Paragraph</p>

        {/* Attribute Selector */}
        <input type="text" placeholder="Type something..." />
        <input type="password" placeholder="Password" />
      </div>
    </section>
  );
};

export default CssExercise12;
