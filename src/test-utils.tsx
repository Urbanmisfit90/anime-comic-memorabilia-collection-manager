import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from './redux/collectionSlice'; // Adjust path to your slice

// Create a custom store for testing
const store = configureStore({
  reducer: {
    collection: collectionReducer,
  },
});

// Custom render function to wrap components with Redux Provider
const customRender = (ui: ReactNode, options = {}) =>
  render(<Provider store={store}>{ui}</Provider>, options);

export * from '@testing-library/react';
export { customRender as render };

