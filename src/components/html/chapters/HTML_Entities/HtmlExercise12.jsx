import React from 'react';

const HtmlExercise12 = () => {
    return (
        <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Exercises: HTML Entities</h1>
      <p className="text-gray-700">
        Practice using various HTML entities for special characters, symbols, and spaces.
      </p>

      {/* Exercise 1: Basic Entities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Exercise 1: Basic Entities</h2>
        <p className="text-gray-800">Replace placeholders with correct HTML entities.</p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`1. Use an entity for the "less than" symbol: 10 <x 20`}
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`2. Use an entity for the "greater than" symbol: 50 >x 30`}
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`3. Replace (c) with the correct copyright entity: (c) 2024`}
        </pre>
      </div>

      {/* Exercise 2: Special Characters */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Exercise 2: Special Characters</h2>
        <p className="text-gray-800">Convert the following special characters into HTML entities.</p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`1. Replace " and ' with the correct entities: He said, "It's a sunny day!"`}
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`2. Use an entity for the ampersand: Rock & Roll`}
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`3. Convert the registered trademark symbol: OpenAI (R)`}
        </pre>
      </div>

      {/* Exercise 3: Space and Non-Breaking Space */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Exercise 3: Space and Non-Breaking Space</h2>
        <p className="text-gray-800">Fix the spacing issues using proper HTML entities.</p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`1. Add extra spaces between words: Hello    World!`}
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`2. Prevent line break between "Mr." and "Smith": Mr. Smith`}
        </pre>
      </div>

      {/* Exercise 4: Mathematical Symbols */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Exercise 4: Mathematical Symbols</h2>
        <p className="text-gray-800">Replace mathematical symbols with correct HTML entities.</p>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`1. Write a fraction: 1/2`}
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`2. Display the summation symbol: Σ`}
        </pre>
        <pre className="bg-gray-200 p-2 rounded mt-2">
          {`3. Show the not equal sign: 10 != 5`}
        </pre>
      </div>
    </section>
    );
};

export default HtmlExercise12;
