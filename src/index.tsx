import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import App from './App';

// Ensure the 'root' element is found
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a root element for React 18
  const root = ReactDOM.createRoot(rootElement);

  // Render the app with the new API
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found.');
}



