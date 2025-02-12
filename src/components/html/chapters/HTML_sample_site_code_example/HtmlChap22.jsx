import React from "react";
import { FaCode, FaFileCode, FaGlobe, FaCogs } from "react-icons/fa";

const HtmlChap22 = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-blue-500">
        <FaGlobe /> HTML Sample Site Code Example
      </h1>
      
      {/* Introduction */}
      <section className="mt-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaFileCode /> Introduction
        </h2>
        <p className="text-gray-700">
          In this section, you will find an example of a simple HTML site structure. This example includes a homepage with navigation, content sections, and a footer.
        </p>
      </section>
      
      {/* Full Sample Code */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FaCode /> Sample HTML Site Code
        </h2>
        <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
          <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Sample Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home">
        <h2>Home Section</h2>
        <p>This is the home section of the sample website.</p>
    </section>
    
    <section id="about">
        <h2>About Us</h2>
        <p>We provide tutorials and resources for learning HTML.</p>
    </section>
    
    <footer>
        <p>&copy; 2025 My Sample Website. All rights reserved.</p>
    </footer>
</body>
</html>
          `}</code>
        </pre>
        <p className="text-gray-700">This code demonstrates a basic website structure including a header, navigation menu, sections, and a footer.</p>
      </section>
      
      {/* Conclusion */}
      <p className="mt-6 text-gray-700 flex items-center gap-2">
        <FaCogs className="text-red-500" /> Use this example to build and customize your own website structure.
      </p>
    </div>
  );
};

export default HtmlChap22;
