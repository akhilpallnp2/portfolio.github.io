// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import App from './App';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
