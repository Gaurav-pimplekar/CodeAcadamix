import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

function HtmlEditor() {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World</h1>');
  const [cssCode, setCssCode] = useState('h1 { color: red; }');
  const [jsCode, setJsCode] = useState('console.log("Hello, World from JS!");');
  
  const [htmlError, setHtmlError] = useState(null);
  const [cssError, setCssError] = useState(null);
  const [jsError, setJsError] = useState(null);

  const handleHtmlEditor = (value) => {
    setHtmlCode(value);
    validateHtml(value); // Validate HTML on change
  };

  const handleCssEditor = (value) => {
    setCssCode(value);
    validateCss(value); // Validate CSS on change
  };

  const handleJsEditor = (value) => {
    setJsCode(value);
    validateJs(value); // Validate JS on change
  };

  // HTML Validation
  const validateHtml = (html) => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      if (doc.querySelector('parsererror')) {
        setHtmlError('Invalid HTML structure');
      } else {
        setHtmlError(null); // No errors
      }
    } catch (e) {
      setHtmlError('Error parsing HTML');
    }
  };

  // CSS Validation (basic check)
  const validateCss = (css) => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    try {
      const computedStyle = window.getComputedStyle(document.body);
      if (computedStyle.cssText.includes('undefined')) {
        setCssError('Invalid CSS properties');
      } else {
        setCssError(null); // No errors
      }
    } catch (e) {
      setCssError('Error parsing CSS');
    }
    document.head.removeChild(style);
  };

  // JavaScript Validation
  const validateJs = (js) => {
    try {
      new Function(js); // Try to create a function from JS code to validate it
      setJsError(null); // No errors
    } catch (e) {
      setJsError('JavaScript Error: ' + e.message);
    }
  };

  // Execute the JS code in the preview
  const executeJavaScript = (jsCode) => {
    try {
      eval(jsCode); // Be cautious with eval in production code
      setJsError(null);
    } catch (error) {
      setJsError(error.message);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <p>HTML Editor</p>
        <MonacoEditor
          value={htmlCode}
          language="html"
          theme="vs-dark"
          height="300px"
          options={{
            lineNumbers: 'on',
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            tabSize: 2,
            showFoldingControls: 'mouseover',
            renderLineHighlight: 'all',
          }}
          onChange={handleHtmlEditor}
        />
        {htmlError && <p style={{ color: 'red' }}>HTML Error: {htmlError}</p>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>CSS Editor</p>
        <MonacoEditor
          value={cssCode}
          language="css"
          theme="vs-dark"
          height="300px"
          options={{
            lineNumbers: 'on',
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            tabSize: 2,
            showFoldingControls: 'mouseover',
            renderLineHighlight: 'all',
          }}
          onChange={handleCssEditor}
        />
        {cssError && <p style={{ color: 'red' }}>CSS Error: {cssError}</p>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>JavaScript Editor</p>
        <MonacoEditor
          value={jsCode}
          language="javascript"
          theme="vs-dark"
          height="300px"
          options={{
            lineNumbers: 'on',
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            tabSize: 2,
            showFoldingControls: 'mouseover',
            renderLineHighlight: 'all',
          }}
          onChange={handleJsEditor}
        />
        {jsError && <p style={{ color: 'red' }}>JS Error: {jsError}</p>}
      </div>

      <div>
        <p>Preview</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>${cssCode}</style>
              ${htmlCode}
              <script>
                try {
                  ${jsCode}
                } catch (error) {
                  document.body.innerHTML = '<p style="color: red;">JavaScript Error: ' + error.message + '</p>';
                }
              </script>
            `,
          }}
        />
      </div>
    </div>
  );
}

export default HtmlEditor;
