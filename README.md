# React
1. What is Emmet?
Emmet is a plugin for text editors that helps developers write HTML and CSS faster using shorthand syntax. It expands abbreviations into full-fledged HTML/CSS code, improving productivity.

2. Difference between a Library and a Framework?
Library: A collection of prewritten code that developers can call when needed. It provides specific functionality but does not control the application’s flow.
Example: React, Lodash
Framework: A structured platform that dictates the architecture of an application. Developers need to follow its conventions, and the framework controls the flow of execution.
Example: Angular, Spring Boot

3. What is CDN? Why do we use it?
CDN (Content Delivery Network) is a network of distributed servers that deliver content (JS, CSS, images) to users based on their geographic location.
Why use CDN?

Faster load times
Reduces server load
Increases availability
Caching for better performance

4. Why is React known as React?
React is named so because it efficiently "reacts" to changes in data and updates the UI accordingly. It uses a virtual DOM to update only the necessary parts of the real DOM, making rendering faster.

5. What is crossorigin in a script tag?
The crossorigin attribute is used in <script> tags to handle CORS (Cross-Origin Resource Sharing). It allows scripts to be loaded from external sources while defining how credentials (cookies, HTTP authentication) are handled.

crossorigin="anonymous" → Requests without credentials (default).
crossorigin="use-credentials" → Requests with credentials.

6. Difference between React and ReactDOM?
React: The core library that defines components, state, hooks, etc. (UI-related logic).
ReactDOM: Manages how React components render in the browser (connects React to the actual DOM).
Example:

import React from 'react';  // Core library
import ReactDOM from 'react-dom';  // Handles rendering
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

7. Difference between react.development.js and react.production.js via CDN?
react.development.js
Includes helpful warnings and error messages.
Larger file size.
Used during development.

react.production.js
Optimized for performance (minified and stripped of warnings).
Smaller file size.
Used in production for better speed.
