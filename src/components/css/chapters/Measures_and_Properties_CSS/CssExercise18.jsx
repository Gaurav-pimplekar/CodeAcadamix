import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const CssExercise18 = () => {
    return (
        <div className="mt-6">

        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaQuestionCircle /> Exercises
        </h2>
        <p className='text-2xl'>Create below example run it on browser and try to observe the changes</p>
        <ul className="list-decimal pl-6 mt-2">
          <li><strong>Convert Absolute Units:</strong> What will be the output size of the following `div` in pixels?
            <pre className="bg-gray-200 p-2 rounded mt-1">div {`{ width: 2in; height: 5cm; }`}</pre>
          </li>
          <li><strong>Compute Font Sizes:</strong> If {`<html>`} has `font-size: 20px;`, what will be the computed size of the following?
            <pre className="bg-gray-200 p-2 rounded mt-1">p {`{ font-size: 1.5rem; }`} span {`{ font-size: 2em; }`}</pre>
          </li>
          <li><strong>Percentage-based Layout:</strong> What happens when a child `div` is set to `50%` width inside a 400px parent?
            <pre className="bg-gray-200 p-2 rounded mt-1">.parent {`{ width: 400px; }`} .child {`{ width: 50%; }`}</pre>
          </li>
          <li><strong>Viewport Units:</strong> What will be the width of `div` if viewport width is **1200px**?
            <pre className="bg-gray-200 p-2 rounded mt-1">div {`{ width: 50vw; }`}</pre>
          </li>
          <li><strong>Box Model Calculation:</strong> Given the following CSS, what is the total width of `.box`?
            <pre className="bg-gray-200 p-2 rounded mt-1">.box {`{ width: 200px; padding: 20px; border: 5px solid black; }`}</pre>
          </li>
        </ul>
      </div>
    );
};

export default CssExercise18;
