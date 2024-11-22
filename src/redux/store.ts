import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from './collectionSlice';

// Create the store
const store = configureStore({
  reducer: {
    collection: collectionReducer,
  },
});

// Define RootState type (the state of the Redux store)
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type (the dispatch function type)
export type AppDispatch = typeof store.dispatch;

export default store;