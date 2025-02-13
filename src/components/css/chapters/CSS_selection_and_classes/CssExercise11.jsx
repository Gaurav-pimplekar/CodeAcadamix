import { FaQuestionCircle } from "react-icons/fa";

const CssExercise11 = () => {
    return (
        <section className="mb-6">
            {/* Default HTML Structure for Testing */}
            <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <h1>Welcome to CSS Selectors Practice</h1>
                <p className="description">This paragraph needs a class-based style.</p>
                <div id="unique-box">This div needs an ID-based style.</div>
                <ul className="list mt-4">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                
            </div>

            <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-500" /> CSS Selectors Practice
            </h2>

            <p className="text-gray-600 mt-2">
                This exercise will help you practice different types of **CSS selectors**:
                <strong> Universal (*), Class (.), ID (#), and Tag (element)</strong>.
                Modify the given **CSS file** to apply the correct styles.
            </p>

            <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 1: Universal Selector</h3>
            <p className="text-gray-600">
                Apply a **universal selector** to remove the default margin and padding from all elements.
            </p>

            <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 2: Tag Selector</h3>
            <p className="text-gray-600">
                Style all {`<h1>`} elements by changing their **color** and **text alignment**.
            </p>

            <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 3: Class Selector</h3>
            <p className="text-gray-600">
                Style a paragraph with the **class name** `"description"` by changing its **text color** and **background**.
            </p>

            <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 4: ID Selector</h3>
            <p className="text-gray-600">
                Create an element with an **ID** `"unique-box"` and style it with a **background color** and **border**.
            </p>

            <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Task 5: List Styling</h3>
            <p className="text-gray-600">
                Style an unordered list {`<ul>`} with the class `"list"` and change the **background color**.
            </p>

            <h3 className="text-lg font-medium text-gray-600 mt-4">💡 Bonus Challenge 🚀</h3>
            <p className="text-gray-600">
                Try to create a **new section** with a **nested element** and use a **descendant selector** to style it differently.
            </p>


        </section>
    );
};

export default CssExercise11;
