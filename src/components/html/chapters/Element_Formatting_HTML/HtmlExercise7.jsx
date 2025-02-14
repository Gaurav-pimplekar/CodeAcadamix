import React from "react";

const HtmlExercise7 = () => {
  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Exercises: HTML Text Formatting</h1>
      <p className="text-gray-700">
        Practice using various text formatting elements like bold, italic, underline, strikethrough, and more.
      </p>

      {/* Exercise 1: Bold, Italic, and Strong */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Exercise 1: Bold, Italic, and Strong</h2>
        <p className="text-gray-800">
          Format the following sentence correctly using appropriate HTML tags.
        </p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`HTML is a <important>markup</important> language used for <web>development</web>.`}
        </pre>
      </div>

      {/* Exercise 2: Underline & Strikethrough */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Exercise 2: Underline & Strikethrough</h2>
        <p className="text-gray-800">Apply underline and strikethrough formatting to the following text:</p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`The <underline>old price</underline> of the product was <strikethrough>$100</strikethrough> but now it is $80.`}
        </pre>
      </div>

      {/* Exercise 3: Subscript & Superscript */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Exercise 3: Subscript & Superscript</h2>
        <p className="text-gray-800">Format the mathematical and chemical expressions correctly.</p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`E = mc`}<sup>2</sup>
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`H`}<sub>2</sub>{`O`}
        </pre>
      </div>

      {/* Exercise 4: Quotations & Code Formatting */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Exercise 4: Quotations & Code Formatting</h2>
        <p className="text-gray-800">Use the correct HTML tags for quotations and inline code.</p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`The famous scientist once said, <quote>"Imagination is more important than knowledge."</quote>`}
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`Write an HTML paragraph using <htmltag>p</htmltag>`}
        </pre>
      </div>
    </section>
  );
};

export default HtmlExercise7;
