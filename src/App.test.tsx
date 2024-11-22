import React from 'react';
import { render, screen } from './test-utils'; // Use custom test-utils for Redux setup
import App from './App';

test('renders app content correctly', () => {
  // Render the App component
  render(<App />);

  // Debug the DOM to verify what is being rendered (optional)
  //screen.debug();

  // Check if the expected content is in the document
  const heading = screen.getByText(/welcome to my collection manager/i);
  expect(heading).toBeInTheDocument();

  const paragraph = screen.getByText(/learn react by managing your collections/i);
  expect(paragraph).toBeInTheDocument();
});