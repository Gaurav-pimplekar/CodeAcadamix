import React from 'react';

const CssExercise17 = () => {
    return (
        <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center">Exercises: CSS Divs and Spans</h1>
            <p className="text-gray-700 text-center">Practice exercises for CSS Divs and Spans.</p>

            <div className="mt-6 flex flex-col items-center">
                <img src="/websitestructure.jpg" alt="Website Structure" className="w-1/2 border rounded-lg shadow-md" />
                <p className="text-gray-800 mt-4 text-lg text-center">
                    Create the above HTML page using the <code>&lt;div&gt;</code> tag and CSS display properties.
                </p>
            </div>
        </section>
    );
};

export default CssExercise17;
